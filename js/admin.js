const tokenKey = "teasourcexAdminToken";
const adminLangKey = "teasourcexAdminLanguage";
let siteData = null;
let submissionStore = { inquiries: [], sampleRequests: [] };

const loginSection = document.querySelector("#admin-login");
const workspace = document.querySelector("#admin-workspace");
const loginForm = document.querySelector("#admin-login-form");
const adminLanguage = document.querySelector("#admin-language");
const statusNode = document.querySelector("[data-admin-status]");
const saveStatus = document.querySelector("[data-save-status]");
const articleSaveStatus = document.querySelector("[data-article-save-status]");
const siteForm = document.querySelector("#site-data-form");
const articleForm = document.querySelector("#article-data-form");
const productRoot = document.querySelector("[data-admin-products]");
const articleRoot = document.querySelector("[data-admin-articles]");

const zh = {
  "Admin Language": "后台语言",
  "Admin": "后台管理",
  "TeaSourcex Content Admin": "TeaSourcex 内容后台",
  "Client entry: /admin.html. Use Content to edit site data, Articles to add posts, and Submissions to view visitor contact messages.": "甲方后台入口：/admin.html。可在内容中编辑网站资料，在文章中新增博客，在提交记录中查看访客联系信息。",
  "Login": "登录",
  "Admin Password": "后台密码",
  "Content": "内容",
  "Articles": "文章",
  "Submissions": "提交记录",
  "Contact Info": "联系方式",
  "Address": "地址",
  "Email": "邮箱",
  "Phone": "电话",
  "WhatsApp Number": "WhatsApp 号码",
  "Homepage Media": "首页媒体",
  "Hero Video URL": "首页视频 URL",
  "Hero Image URL": "首页封面图 URL",
  "Products": "产品",
  "Save Content": "保存内容",
  "Blog Articles": "博客文章",
  "Add or edit article list items and article detail content. URL format: /resources/blog/article-slug.html": "新增或编辑文章列表与详情内容。URL 格式：/resources/blog/article-slug.html",
  "Add Article": "新增文章",
  "Save Articles": "保存文章",
  "Inquiry Submissions": "询价表单提交",
  "Sample Requests": "样品申请提交",
  "No submissions yet.": "暂无提交记录。",
  "Logging in...": "正在登录...",
  "Saving...": "正在保存...",
  "Saved.": "已保存。",
  "Request failed": "请求失败",
  "Product": "产品",
  "New Article": "新文章",
  "ID": "产品 ID",
  "Slug": "URL Slug",
  "Title EN": "英文标题",
  "Title ZH": "中文标题",
  "Filter": "筛选标签",
  "Image URL": "图片 URL",
  "Summary EN": "英文摘要",
  "Summary ZH": "中文摘要",
  "Detail EN": "英文详情",
  "Detail ZH": "中文详情",
  "Tags": "标签",
  "Body EN": "英文正文",
  "Body ZH": "中文正文",
  "Article summary.": "文章摘要。",
  "Article body.": "文章正文。",
  "article-slug": "article-slug",
  "tea rtd qa": "tea rtd qa"
};

const textNodeCache = new Map();

function currentAdminLang() {
  return localStorage.getItem(adminLangKey) || "en";
}

function t(text) {
  return currentAdminLang() === "zh" ? (zh[text] || text) : text;
}

function translateStaticAdmin() {
  document.documentElement.lang = currentAdminLang() === "zh" ? "zh-CN" : "en";
  document.title = currentAdminLang() === "zh" ? "TeaSourcex 后台管理" : "TeaSourcex Admin";
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ["SCRIPT", "STYLE", "TEXTAREA", "OPTION"].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
      return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (!textNodeCache.has(node)) textNodeCache.set(node, node.nodeValue);
    const original = textNodeCache.get(node);
    const trimmed = original.trim();
    const translated = currentAdminLang() === "zh" ? (zh[trimmed] || trimmed) : trimmed;
    node.nodeValue = original.replace(trimmed, translated);
  }
}

async function api(path, options = {}) {
  const token = localStorage.getItem(tokenKey);
  const response = await fetch(path, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {})
    }
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || t("Request failed"));
  return data;
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function productEditor(product, index) {
  return `
    <article class="plain-card admin-product" data-index="${index}">
      <h3>${escapeHtml(product.title || t("Product"))}</h3>
      <div class="form-row">
        <label>${t("ID")}<input name="id" value="${escapeHtml(product.id)}" readonly /></label>
        <label>${t("Slug")}<input name="slug" value="${escapeHtml(product.slug)}" /></label>
      </div>
      <div class="form-row">
        <label>${t("Title EN")}<input name="title" value="${escapeHtml(product.title)}" /></label>
        <label>${t("Title ZH")}<input name="titleZh" value="${escapeHtml(product.titleZh)}" /></label>
      </div>
      <div class="form-row">
        <label>${t("Filter")}<input name="filter" value="${escapeHtml(product.filter)}" /></label>
        <label>${t("Image URL")}<input name="image" value="${escapeHtml(product.image)}" /></label>
      </div>
      <label>${t("Summary EN")}<textarea name="summary" rows="2">${escapeHtml(product.summary)}</textarea></label>
      <label>${t("Summary ZH")}<textarea name="summaryZh" rows="2">${escapeHtml(product.summaryZh)}</textarea></label>
      <label>${t("Detail EN")}<textarea name="detail" rows="3">${escapeHtml(product.detail)}</textarea></label>
      <label>${t("Detail ZH")}<textarea name="detailZh" rows="3">${escapeHtml(product.detailZh)}</textarea></label>
    </article>
  `;
}

function articleEditor(article = {}, index = 0) {
  return `
    <article class="plain-card admin-article" data-index="${index}">
      <h3>${escapeHtml(article.title || t("New Article"))}</h3>
      <div class="form-row">
        <label>${t("Slug")}<input name="slug" value="${escapeHtml(article.slug)}" placeholder="${t("article-slug")}" /></label>
        <label>${t("Tags")}<input name="tag" value="${escapeHtml(article.tag)}" placeholder="${t("tea rtd qa")}" /></label>
      </div>
      <div class="form-row">
        <label>${t("Title EN")}<input name="title" value="${escapeHtml(article.title)}" /></label>
        <label>${t("Title ZH")}<input name="titleZh" value="${escapeHtml(article.titleZh)}" /></label>
      </div>
      <label>${t("Summary EN")}<textarea name="summary" rows="2">${escapeHtml(article.summary)}</textarea></label>
      <label>${t("Summary ZH")}<textarea name="summaryZh" rows="2">${escapeHtml(article.summaryZh)}</textarea></label>
      <label>${t("Body EN")}<textarea name="body" rows="4">${escapeHtml(article.body)}</textarea></label>
      <label>${t("Body ZH")}<textarea name="bodyZh" rows="4">${escapeHtml(article.bodyZh)}</textarea></label>
    </article>
  `;
}

function fillForm(data) {
  siteData = data.siteData;
  submissionStore = data.submissions || submissionStore;
  siteForm.address.value = siteData.contact.address || "";
  siteForm.email.value = siteData.contact.email || "";
  siteForm.phone.value = siteData.contact.phone || "";
  siteForm.whatsapp.value = siteData.contact.whatsapp || "";
  siteForm.heroVideo.value = siteData.media?.heroVideo || "";
  siteForm.heroPoster.value = siteData.media?.heroPoster || "";
  productRoot.innerHTML = siteData.products.map(productEditor).join("");
  articleRoot.innerHTML = (siteData.articles || []).map(articleEditor).join("");
  renderSubmissions(submissionStore);
  translateStaticAdmin();
}

function readForm() {
  const products = [...document.querySelectorAll(".admin-product")].map(card => {
    const product = {};
    card.querySelectorAll("input, textarea").forEach(field => {
      product[field.name] = field.value.trim();
    });
    return product;
  });
  return {
    contact: {
      address: siteForm.address.value.trim(),
      email: siteForm.email.value.trim(),
      phone: siteForm.phone.value.trim(),
      whatsapp: siteForm.whatsapp.value.trim()
    },
    media: {
      heroVideo: siteForm.heroVideo.value.trim(),
      heroPoster: siteForm.heroPoster.value.trim()
    },
    products
  };
}

function readArticles() {
  return [...document.querySelectorAll(".admin-article")].map(card => {
    const article = {};
    card.querySelectorAll("input, textarea").forEach(field => {
      article[field.name] = field.value.trim();
    });
    return article;
  }).filter(article => article.slug && article.title);
}

async function saveSiteData(statusElement) {
  await api("/api/admin/data", {
    method: "PUT",
    body: JSON.stringify({ siteData })
  });
  statusElement.textContent = t("Saved.");
}

function renderSubmissions(store) {
  submissionStore = store || submissionStore;
  const count = (store.inquiries || []).length + (store.sampleRequests || []).length;
  const submissionsTab = document.querySelector('[data-admin-tab="submissions"]');
  if (submissionsTab) submissionsTab.textContent = `${t("Submissions")} (${count})`;
  const render = items => {
    if (!items.length) return `<p>${t("No submissions yet.")}</p>`;
    return items.map(item => `
      <article class="plain-card">
        <h3>${escapeHtml(item.createdAt)}</h3>
        <pre>${escapeHtml(JSON.stringify(item, null, 2))}</pre>
      </article>
    `).join("");
  };
  document.querySelector("[data-inquiries]").innerHTML = render(store.inquiries || []);
  document.querySelector("[data-samples]").innerHTML = render(store.sampleRequests || []);
}

async function loadAdminData() {
  const data = await api("/api/admin/data");
  loginSection.hidden = true;
  workspace.hidden = false;
  fillForm(data);
}

loginForm.addEventListener("submit", async event => {
  event.preventDefault();
  statusNode.textContent = t("Logging in...");
  try {
    const data = await api("/api/admin/login", {
      method: "POST",
      body: JSON.stringify({ password: loginForm.password.value })
    });
    localStorage.setItem(tokenKey, data.token);
    statusNode.textContent = "";
    await loadAdminData();
  } catch (error) {
    statusNode.textContent = error.message;
  }
});

siteForm.addEventListener("submit", async event => {
  event.preventDefault();
  saveStatus.textContent = t("Saving...");
  try {
    siteData = readForm();
    siteData.articles = readArticles();
    await saveSiteData(saveStatus);
  } catch (error) {
    saveStatus.textContent = error.message;
  }
});

articleForm.addEventListener("submit", async event => {
  event.preventDefault();
  articleSaveStatus.textContent = t("Saving...");
  try {
    siteData = readForm();
    siteData.articles = readArticles();
    await saveSiteData(articleSaveStatus);
  } catch (error) {
    articleSaveStatus.textContent = error.message;
  }
});

document.querySelector("[data-add-article]").addEventListener("click", () => {
  articleRoot.insertAdjacentHTML("beforeend", articleEditor({
    slug: "new-article",
    tag: "tea",
    title: t("New Article"),
    titleZh: "新文章",
    summary: t("Article summary."),
    summaryZh: "文章摘要。",
    body: t("Article body."),
    bodyZh: "文章正文。"
  }, document.querySelectorAll(".admin-article").length));
  translateStaticAdmin();
});

document.querySelectorAll("[data-admin-tab]").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-admin-tab]").forEach(item => item.classList.remove("active"));
    document.querySelectorAll("[data-admin-panel]").forEach(panel => panel.hidden = true);
    button.classList.add("active");
    document.querySelector(`[data-admin-panel="${button.dataset.adminTab}"]`).hidden = false;
  });
});

if (adminLanguage) {
  adminLanguage.value = currentAdminLang();
  adminLanguage.addEventListener("change", () => {
    localStorage.setItem(adminLangKey, adminLanguage.value);
    if (siteData) fillForm({ siteData, submissions: submissionStore });
    translateStaticAdmin();
  });
}

translateStaticAdmin();

if (localStorage.getItem(tokenKey)) {
  loadAdminData().catch(() => localStorage.removeItem(tokenKey));
}
