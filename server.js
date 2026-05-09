const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const root = __dirname;
const dataDir = path.join(root, "data");
const siteDataPath = path.join(dataDir, "site-data.json");
const submissionsPath = path.join(dataDir, "submissions.json");
const port = Number(process.env.PORT || 3000);
const adminPassword = process.env.ADMIN_PASSWORD || "change-this-password";
const adminSecret = process.env.ADMIN_SECRET || "teasourcex-local-secret";

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".mov": "video/quicktime",
  ".pdf": "application/pdf"
};

function readJson(filePath, fallback) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch {
    return fallback;
  }
}

function writeJson(filePath, data) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`);
}

function sendJson(res, status, payload) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(payload));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", chunk => {
      body += chunk;
      if (body.length > 1_000_000) {
        req.destroy();
        reject(new Error("Request body too large"));
      }
    });
    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch {
        reject(new Error("Invalid JSON"));
      }
    });
  });
}

function tokenForPassword(password) {
  return crypto.createHash("sha256").update(`${password}:${adminSecret}`).digest("hex");
}

function isAuthorized(req) {
  const header = req.headers.authorization || "";
  return header === `Bearer ${tokenForPassword(adminPassword)}`;
}

function cleanSubmission(payload, type) {
  const allowed = type === "sample"
    ? ["product_type", "product_category", "sample_quantity", "monthly_demand", "monthly_volume", "email", "phone", "full_name", "company", "job_title", "country", "shipping_address", "current_supplier", "message"]
    : ["company", "contact", "full_name", "job_title", "country", "email", "phone", "interest", "quantity", "source", "message"];
  const cleaned = {};
  allowed.forEach(key => {
    cleaned[key] = String(payload[key] || "").trim();
  });
  if (type === "sample" && !cleaned.product_type) cleaned.product_type = cleaned.product_category;
  if (type === "sample" && !cleaned.monthly_demand) cleaned.monthly_demand = cleaned.monthly_volume;
  if (type === "inquiry" && !cleaned.contact) cleaned.contact = cleaned.full_name;
  cleaned.id = crypto.randomUUID();
  cleaned.createdAt = new Date().toISOString();
  cleaned.type = type;
  return cleaned;
}

function validateSubmission(submission, type) {
  if (type === "sample") {
    return submission.product_type && submission.sample_quantity && submission.email.includes("@");
  }
  return submission.company && submission.contact && submission.email.includes("@");
}

function serveStatic(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  let pathname = decodeURIComponent(url.pathname);
  if (pathname === "/") pathname = "/index.html";
  let filePath = path.normalize(path.join(root, pathname));
  if (!fs.existsSync(filePath) && pathname.startsWith("/resources/blog/")) {
    filePath = path.join(root, "resources/blog/article-slug.html");
  }
  if (!filePath.startsWith(root) || filePath.includes(`${path.sep}.git${path.sep}`) || filePath.includes(`${path.sep}data${path.sep}`)) {
    res.writeHead(404);
    res.end("Not found");
    return;
  }
  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || "application/octet-stream";
  const isVideo = [".mp4", ".webm", ".mov"].includes(ext);

  if (isVideo && req.headers.range) {
    fs.stat(filePath, (statErr, stats) => {
      if (statErr) {
        res.writeHead(404);
        res.end("Not found");
        return;
      }
      const range = req.headers.range.replace(/bytes=/, "").split("-");
      const start = Number.parseInt(range[0], 10);
      const end = range[1] ? Number.parseInt(range[1], 10) : stats.size - 1;
      if (Number.isNaN(start) || Number.isNaN(end) || start >= stats.size || end >= stats.size) {
        res.writeHead(416, { "Content-Range": `bytes */${stats.size}` });
        res.end();
        return;
      }
      res.writeHead(206, {
        "Content-Range": `bytes ${start}-${end}/${stats.size}`,
        "Accept-Ranges": "bytes",
        "Content-Length": end - start + 1,
        "Content-Type": contentType
      });
      fs.createReadStream(filePath, { start, end }).pipe(res);
    });
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    res.writeHead(200, {
      "Content-Type": contentType,
      "Accept-Ranges": isVideo ? "bytes" : "none"
    });
    res.end(data);
  });
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  try {
    if (req.method === "GET" && url.pathname === "/api/site-data") {
      return sendJson(res, 200, readJson(siteDataPath, { contact: {}, products: [] }));
    }

    if (req.method === "POST" && url.pathname === "/api/inquiries") {
      const submission = cleanSubmission(await readBody(req), "inquiry");
      if (!validateSubmission(submission, "inquiry")) return sendJson(res, 400, { error: "Missing required inquiry fields" });
      const store = readJson(submissionsPath, { inquiries: [], sampleRequests: [] });
      store.inquiries.unshift(submission);
      writeJson(submissionsPath, store);
      return sendJson(res, 200, { ok: true, redirect: "/thank-you-inquiry.html" });
    }

    if (req.method === "POST" && url.pathname === "/api/sample-requests") {
      const submission = cleanSubmission(await readBody(req), "sample");
      if (!validateSubmission(submission, "sample")) return sendJson(res, 400, { error: "Missing required sample request fields" });
      const store = readJson(submissionsPath, { inquiries: [], sampleRequests: [] });
      store.sampleRequests.unshift(submission);
      writeJson(submissionsPath, store);
      return sendJson(res, 200, { ok: true, redirect: "/thank-you-sample.html" });
    }

    if (req.method === "POST" && url.pathname === "/api/admin/login") {
      const payload = await readBody(req);
      if (payload.password !== adminPassword) return sendJson(res, 401, { error: "Invalid password" });
      return sendJson(res, 200, { token: tokenForPassword(adminPassword) });
    }

    if (url.pathname === "/api/admin/data") {
      if (!isAuthorized(req)) return sendJson(res, 401, { error: "Unauthorized" });
      if (req.method === "GET") {
        return sendJson(res, 200, {
          siteData: readJson(siteDataPath, { contact: {}, products: [] }),
          submissions: readJson(submissionsPath, { inquiries: [], sampleRequests: [] })
        });
      }
      if (req.method === "PUT") {
        const payload = await readBody(req);
        if (!payload.siteData || !Array.isArray(payload.siteData.products)) return sendJson(res, 400, { error: "Invalid site data" });
        writeJson(siteDataPath, payload.siteData);
        return sendJson(res, 200, { ok: true });
      }
    }

    serveStatic(req, res);
  } catch (error) {
    sendJson(res, 500, { error: error.message || "Server error" });
  }
});

server.listen(port, () => {
  console.log(`TeaSourcex website running at http://localhost:${port}`);
  console.log("Set ADMIN_PASSWORD in production before deployment.");
});
