const tokenKey = "teasourcexAdminToken";
let siteData = null;

const loginSection = document.querySelector("#admin-login");
const workspace = document.querySelector("#admin-workspace");
const loginForm = document.querySelector("#admin-login-form");
const statusNode = document.querySelector("[data-admin-status]");
const saveStatus = document.querySelector("[data-save-status]");
const siteForm = document.querySelector("#site-data-form");
const productRoot = document.querySelector("[data-admin-products]");

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
  if (!response.ok) throw new Error(data.error || "Request failed");
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
      <h3>${escapeHtml(product.title || "Product")}</h3>
      <div class="form-row">
        <label>ID<input name="id" value="${escapeHtml(product.id)}" readonly /></label>
        <label>Slug<input name="slug" value="${escapeHtml(product.slug)}" /></label>
      </div>
      <div class="form-row">
        <label>Title EN<input name="title" value="${escapeHtml(product.title)}" /></label>
        <label>Title ZH<input name="titleZh" value="${escapeHtml(product.titleZh)}" /></label>
      </div>
      <div class="form-row">
        <label>Filter<input name="filter" value="${escapeHtml(product.filter)}" /></label>
        <label>Image URL<input name="image" value="${escapeHtml(product.image)}" /></label>
      </div>
      <label>Summary EN<textarea name="summary" rows="2">${escapeHtml(product.summary)}</textarea></label>
      <label>Summary ZH<textarea name="summaryZh" rows="2">${escapeHtml(product.summaryZh)}</textarea></label>
      <label>Detail EN<textarea name="detail" rows="3">${escapeHtml(product.detail)}</textarea></label>
      <label>Detail ZH<textarea name="detailZh" rows="3">${escapeHtml(product.detailZh)}</textarea></label>
    </article>
  `;
}

function fillForm(data) {
  siteData = data.siteData;
  siteForm.address.value = siteData.contact.address || "";
  siteForm.email.value = siteData.contact.email || "";
  siteForm.phone.value = siteData.contact.phone || "";
  siteForm.whatsapp.value = siteData.contact.whatsapp || "";
  productRoot.innerHTML = siteData.products.map(productEditor).join("");
  renderSubmissions(data.submissions);
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
    products
  };
}

function renderSubmissions(store) {
  const render = items => {
    if (!items.length) return "<p>No submissions yet.</p>";
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
  statusNode.textContent = "Logging in...";
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
  saveStatus.textContent = "Saving...";
  try {
    siteData = readForm();
    await api("/api/admin/data", {
      method: "PUT",
      body: JSON.stringify({ siteData })
    });
    saveStatus.textContent = "Saved.";
  } catch (error) {
    saveStatus.textContent = error.message;
  }
});

document.querySelectorAll("[data-admin-tab]").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-admin-tab]").forEach(item => item.classList.remove("active"));
    document.querySelectorAll("[data-admin-panel]").forEach(panel => panel.hidden = true);
    button.classList.add("active");
    document.querySelector(`[data-admin-panel="${button.dataset.adminTab}"]`).hidden = false;
  });
});

if (localStorage.getItem(tokenKey)) {
  loadAdminData().catch(() => localStorage.removeItem(tokenKey));
}
