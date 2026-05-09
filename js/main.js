const body=document.body;
const languageDictionary={
  "Language":"语言",
  "English":"英文",
  "Chinese":"中文",
  "About":"关于我们",
  "Products":"产品",
  "Solutions":"解决方案",
  "Quality":"质量保障",
  "Quality Assurance":"质量保障",
  "Manufacture":"制造能力",
  "Resources":"资源",
  "Contact":"联系我们",
  "FAQs":"常见问题",
  "Recruitment":"招聘",
  "📁 Home":"📁 首页",
  "📁 About":"📁 关于我们",
  "📁 Products":"📁 产品",
  "📁 Quality Assurance":"📁 质量保障",
  "📁 Manufacture":"📁 制造能力",
  "📁 FAQs":"📁 常见问题",
  "📁 Contact":"📁 联系我们",
  "📁 Recruitment":"📁 招聘",
  "📁 Brand Story":"📁 品牌故事",
  "📁 Factory & Capacity":"📁 工厂产能",
  "📁 Our Team":"📁 团队介绍",
  "📁 RTD Tea Bases":"📁 即饮茶基底",
  "📁 Tea Extracts & Powders":"📁 茶萃取液与粉末",
  "📁 Tea Ingredients":"📁 茶叶原料",
  "📁 OEM/ODM Service":"📁 代工服务",
  "📁 For Beverage Manufacturers":"📁 饮料制造商",
  "📁 For Brands / OEM Partner":"📁 品牌与OEM伙伴",
  "📁 For F&B Chains":"📁 餐饮连锁",
  "📁 Certifications":"📁 认证",
  "📁 QA System":"📁 质量管控体系",
  "📁 R&D Capability":"📁 研发能力",
  "📁 Blog / Tea Knowledge":"📁 博客/茶知识",
  "📁 Recipe & SOP Library":"📁 配方与SOP库",
  "📁 FAQ":"📁 常见问题",
  "📁 Inquiry Form":"📁 询价表单",
  "📁 Sample Request Form":"📁 样品申请",
  "Home":"首页",
  "B2B Tea Supply":"B2B 茶饮供应",
  "Tea bases, extracts and OEM solutions.":"茶基底、茶萃取与OEM解决方案。",
  "Reliable ingredients for beverage manufacturers, brands and F&B chains.":"为饮料制造商、品牌和餐饮连锁提供稳定茶饮原料。",
  "Explore Products":"查看产品",
  "Send Inquiry":"发送询价",
  "Company":"公司",
  "Built for commercial tea supply":"为商业茶饮供应而建",
  "Factory-backed tea ingredients with stable quality and flexible customization.":"依托工厂生产，提供稳定品质与灵活定制。",
  "Founded Year":"创立年份",
  "Tons / Month Capacity":"吨/月产能",
  "Export Markets":"出口市场",
  "Factories":"工厂",
  "B2B Clients":"B2B客户",
  "Who We Serve":"服务对象",
  "Made for beverage businesses":"面向饮料业务",
  "Manufacturers":"制造商",
  "Scale-ready ingredients.":"适合规模化生产的原料。",
  "Brands & OEM":"品牌与OEM",
  "Custom formulas.":"定制配方。",
  "F&B Chains":"餐饮连锁",
  "Store-ready SOPs.":"门店可用SOP。",
  "Products & Services":"产品与服务",
  "Tea ingredients and services":"茶饮原料与服务",
  "Core categories for beverage development and production.":"覆盖饮品研发与量产的核心品类。",
  "RTD Tea Bases":"即饮茶基底",
  "Tea Extracts & Powders":"茶萃取液与粉末",
  "Tea Ingredients":"茶叶原料",
  "OEM/ODM Service":"OEM/ODM服务",
  "About TeaSourcex":"关于 TeaSourcex",
  "Tea sourcing, production and product development for B2B buyers.":"为B2B客户提供茶叶 sourcing、生产与产品开发。",
  "Brand Story":"品牌故事",
  "Key milestones":"关键里程碑",
  "Click a year to view details.":"点击年份查看详情。",
  "How We Built It":"我们如何构建",
  "Real company development timeline":"真实公司发展时间轴",
  "Click a year to view the Yuanjin Group and TeaSourcex development story.":"点击年份查看远津集团与 TeaSourcex 的发展故事。",
  "Tap each year to view the Yuanjin Group and TeaSourcex development story.":"点击年份查看远津集团与 TeaSourcex 的发展故事。",
  "Yuanjin Group established in Guangzhou.":"远津集团于广州成立。",
  "Operations began with tea ingredient sourcing and processing for the domestic Chinese beverage market.":"初期业务聚焦于为中国国内饮料市场提供茶叶原料采购与加工服务。",
  "Factory Expansion":"工厂扩建",
  "Yuanjin Guangzhou factory developed.":"远津广州工厂建成投产。",
  "The factory specialized in imported black tea processing and global tea ingredient supply, establishing the foundation for international export capability.":"工厂专注于进口红茶加工以及全球茶叶原料供应，正式奠定国际出口能力基础。",
  "Chaozhou Factory":"潮州工厂",
  "Yuanjin Chaozhou factory commissioned.":"远津潮州工厂正式启用。",
  "Located near Fenghuang Mountain within the Phoenix Dancong GI protection zone, the facility became a leading Phoenix Dancong production base in Chaozhou.":"工厂毗邻凤凰山，位于凤凰单丛茶地理标志保护区内，成为潮州地区领先的凤凰单丛生产基地。",
  "Srimark R&D Centre":"Srimark 研发中心",
  "Beverage R&D centre established.":"饮料研发中心正式成立。",
  "Dedicated to formulation innovation, aroma-locking technology and modern tea beverage applications for international markets.":"专注于配方创新、锁香技术研发以及面向国际市场的现代茶饮应用开发。",
  "Xiaocha Fresh Technology":"小茶鲜饮科技",
  "Fresh-extraction RTD tea technology launched.":"鲜萃即饮茶技术发布。",
  "The brand applied 20 years of R&D expertise to zero-additive fresh-extraction RTD tea bases and concentrates, including a 3-second serve standard for F&B channels.":"品牌将集团20年的研发专长应用于零添加、鲜萃工艺的即饮茶基底及浓缩液，并为餐饮渠道推出3秒出杯标准。",
  "International export brand established.":"国际出口品牌正式成立。",
  "TeaSourcex brings the group’s product range, manufacturing capability and R&D expertise to beverage brands, manufacturers and F&B operators worldwide.":"TeaSourcex 将集团产品体系、制造能力与研发专长直接输送给全球饮料品牌、制造商及餐饮运营企业。",
  "Foundation":"创立",
  "Tea supply begins.":"茶叶供应业务开始。",
  "Export":"出口",
  "Overseas business starts.":"海外业务启动。",
  "Growth":"增长",
  "B2B service expands.":"B2B服务扩展。",
  "Award":"荣誉",
  "Quality recognized.":"品质获得认可。",
  "Upgrade":"升级",
  "Factory capacity grows.":"工厂产能提升。",
  "Factory & Capacity":"工厂产能",
  "Stable production":"稳定生产",
  "Blending, extraction, drying, packing and warehousing in one supply chain.":"集拼配、萃取、干燥、包装与仓储于一体。",
  "Monthly capacity":"月度产能",
  "Traceable batches":"批次可追溯",
  "Flexible scheduling":"灵活排产",
  "Our Team":"团队介绍",
  "R&D, QA and sales support":"研发、品控与销售支持",
  "R&D":"研发",
  "Formula support.":"配方支持。",
  "QA":"品控",
  "Batch control.":"批次控制。",
  "Sales":"销售",
  "Project follow-up.":"项目跟进。",
  "Filter by category.":"按品类筛选。",
  "All":"全部",
  "RTD Tea":"即饮茶",
  "Extract / Powder":"萃取/粉末",
  "Ingredient":"原料",
  "Ready-to-use tea bases.":"即用型茶基底。",
  "Concentrated tea ingredients.":"浓缩型茶原料。",
  "Loose tea and blends.":"原叶茶与拼配茶。",
  "Custom product development.":"定制产品开发。",
  "Details":"详情",
  "Core categories":"核心品类",
  "RTD Bases":"即饮基底",
  "Extracts":"萃取液",
  "Ingredients":"茶原料",
  "OEM/ODM":"OEM/ODM",
  "Tea solutions by business type":"按业务类型匹配茶饮方案",
  "Choose the right supply model.":"选择合适的供应模式。",
  "For Brands":"品牌方",
  "For Manufacturers":"制造商",
  "For F&B":"餐饮",
  "For Brands / OEM Partner":"品牌与OEM伙伴",
  "Formula, sampling and packaging support.":"配方、打样与包装支持。",
  "For Beverage Manufacturers":"饮料制造商",
  "Stable ingredients for scaled production.":"适合规模化生产的稳定原料。",
  "For F&B Chains":"餐饮连锁",
  "Standard tea bases and store SOPs.":"标准茶基底与门店SOP。",
  "View Details":"查看详情",
  "Customization":"定制",
  "Flavor and format.":"风味与形态。",
  "Cases":"案例",
  "Market examples.":"市场示例。",
  "Quality from leaf to ingredient":"从茶叶到原料的质量保障",
  "Certification, QA and R&D support.":"认证、品控与研发支持。",
  "Certificate Lightbox":"证书放大查看",
  "Certification wall":"认证墙",
  "Food safety.":"食品安全。",
  "Process control.":"流程控制。",
  "Market support.":"市场支持。",
  "Buyer-ready.":"满足采购需求。",
  "QA System":"质量管控体系",
  "Inspection, process control and retained samples.":"来料检验、过程控制与留样管理。",
  "R&D Capability":"研发能力",
  "Flavor development and application testing.":"风味开发与应用测试。",
  "Tea knowledge and SOPs":"茶知识与SOP",
  "Articles, downloads and operating guides.":"文章、下载资料与操作指南。",
  "Blog Search and Tags":"博客搜索与标签",
  "Blog / Tea Knowledge":"博客/茶知识",
  "CMS-ready article area for tea knowledge and technical updates.":"用于茶知识与技术更新的文章区域，可接入 CMS。",
  "Choosing RTD Tea Bases":"如何选择即饮茶基底",
  "Key buying points.":"关键采购要点。",
  "Tea Extract QA":"茶萃取质量检查",
  "Quality checklist.":"质量检查清单。",
  "Tea Flavor Trends":"茶饮风味趋势",
  "Market insights.":"市场洞察。",
  "Read Article":"阅读文章",
  "SOP Accordion":"SOP 手风琴",
  "Recipe & SOP Library":"配方与SOP库",
  "Cold Brew Tea SOP":"冷泡茶SOP",
  "Standard cold brew workflow.":"标准冷泡流程。",
  "Milk Tea Base":"奶茶基底",
  "Preparation reference.":"制备参考。",
  "RTD Dilution Guide":"即饮稀释指南",
  "Ratio and process guide.":"比例与流程指南。",
  "Download PDF":"下载PDF",
  "MOQ, lead time, samples, certifications and shipping.":"最小起订量、交期、样品、认证与运输。",
  "Start your tea project":"开始你的茶饮项目",
  "Your request is saved to the TeaSourcex backend for follow-up.":"你的需求会保存到 TeaSourcex 后台，便于后续跟进。",
  "Inquiry Form":"询价表单",
  "Company Name":"公司名称",
  "Contact Person":"联系人",
  "Email":"邮箱",
  "Phone":"电话",
  "Product Interest":"感兴趣产品",
  "Inquiry Quantity":"询价数量",
  "Message":"留言",
  "Submit Inquiry":"提交询价",
  "Contact Info":"联系方式",
  "Business address":"公司地址",
  "WhatsApp":"WhatsApp",
  "Sample Request Form":"样品申请表",
  "Product Type":"产品类型",
  "Sample Quantity":"样品数量",
  "Monthly Demand":"月需求量",
  "Submit Sample Request":"提交样品申请",
  "Thank You":"谢谢",
  "Inquiry submitted":"询价已提交",
  "Thank you. Our sales team will contact you soon.":"谢谢，我们的销售团队会尽快联系你。",
  "Sample request submitted":"样品申请已提交",
  "Thank you. Our team will review your sample request soon.":"谢谢，我们会尽快审核你的样品申请。",
  "Back to Home":"返回首页"
};
Object.assign(languageDictionary,{
  "Advantages":"优势",
  "Application fit.":"应用匹配。",
  "Article Title":"文章标题",
  "Article body content.":"文章正文内容。",
  "Back to About":"返回关于我们",
  "Back to Products":"返回产品页",
  "Back to Quality":"返回质量页",
  "Back to Resources":"返回资源页",
  "Back to Solutions":"返回解决方案",
  "B2B Focus":"B2B 专注",
  "Brand Intro":"品牌简介",
  "Brand Introduction":"品牌介绍",
  "Brand and OEM solution detail page.":"品牌与 OEM 解决方案详情页。",
  "Brand development timeline":"品牌发展时间轴",
  "Browse FAQ":"浏览常见问题",
  "Business contact channels":"商务联系渠道",
  "Capacity Upgrade":"产能升级",
  "Certification detail page.":"认证详情页。",
  "Common export and QA questions":"常见出口与质量问题",
  "Consistent base materials for large-scale drink production.":"适合大规模饮品生产的稳定基底原料。",
  "Coordination across planning, sampling and delivery for project continuity.":"从规划、打样到交付的连续项目协同。",
  "Core numbers that reflect TeaSourcex service capability.":"体现 TeaSourcex 服务能力的核心数字。",
  "Data Highlights":"数据亮点",
  "Data highlights for B2B supply":"B2B 供应数据亮点",
  "Dedicated support for manufacturers, brands and chain stores became the main strategy.":"制造商、品牌和连锁门店支持成为核心方向。",
  "Detailed brand story page.":"品牌故事详情页。",
  "Detailed factory and production capacity page.":"工厂与产能详情页。",
  "Detailed team introduction page.":"团队介绍详情页。",
  "Export Expansion":"出口拓展",
  "Factory system optimized.":"工厂系统优化。",
  "F&B chain solution detail page.":"餐饮连锁解决方案详情页。",
  "Flexible OEM/ODM support":"灵活的 OEM/ODM 支持",
  "Flexible formats for flavor intensity and process compatibility.":"适配风味强度与生产工艺的灵活规格。",
  "Formula, packaging and process support for private-label and custom projects.":"为自有品牌和定制项目提供配方、包装与流程支持。",
  "Frequently asked questions detail page.":"常见问题详情页。",
  "From sourcing to delivery, teams collaborate to support formula, quality and lead-time goals.":"从采购到交付，团队协同支持配方、质量与交期目标。",
  "Home Visual":"首页视觉",
  "How to evaluate tea ingredients before scaling an order.":"如何在扩大订单前评估茶饮原料。",
  "Independent article URL: /resources/blog/article-slug.":"独立文章 URL：/resources/blog/article-slug。",
  "Industrial solution detail page.":"工业化解决方案详情页。",
  "Initial cooperation with regional tea growers built the first stable sourcing network.":"与区域茶农的早期合作建立了稳定采购网络。",
  "Inquiry form for pricing and project details, sample request form for product verification.":"询价表单用于价格与项目详情，样品表单用于产品验证。",
  "Insights":"洞察",
  "Keep your existing product workflow while gaining stable tea supply, practical support and long-term manufacturing coordination.":"在保留现有产品流程的同时，获得稳定茶源、实用支持和长期生产协同。",
  "Latest tea knowledge and practical resources":"最新茶知识与实用资源",
  "Milestones":"里程碑",
  "Natural profile with practical output":"自然风味与实用产出",
  "News-style content, process notes and operation references for your team.":"为团队准备的资讯、流程笔记与操作参考。",
  "Open Form":"打开表单",
  "Overseas channels launched.":"海外渠道启动。",
  "Preparation reference.":"制备参考。",
  "Process control, documentation and quality communication were strengthened for international buyers.":"面向国际买家强化过程控制、文档与质量沟通。",
  "Product Catalog":"产品目录",
  "Product detail page for RTD tea bases.":"即饮茶基底详情页。",
  "Product detail page for tea extracts and powders.":"茶萃取液与粉末详情页。",
  "Product detail page for tea ingredients.":"茶叶原料详情页。",
  "Production and warehousing coordination improved lead-time reliability for larger programs.":"生产与仓储协同提升大型项目交期稳定性。",
  "QA system detail page.":"质量管控体系详情页。",
  "Quality Assurance":"质量保障",
  "Quality capability improved.":"质量能力提升。",
  "Quality Recognition":"质量认可",
  "Quick links":"快速链接",
  "Quick references for lead time, documentation and compliance communication.":"交期、文件和合规沟通的快速参考。",
  "R&D capability detail page.":"研发能力详情页。",
  "Read in Blog":"阅读博客",
  "Request Samples":"申请样品",
  "Responsive B2B service":"响应式 B2B 服务",
  "Routine checkpoints and batch records support predictable production output.":"常规检查点与批次记录支持可预测的生产结果。",
  "SOP library detail page.":"SOP 库详情页。",
  "Service detail page for OEM and ODM projects.":"OEM/ODM 项目服务详情页。",
  "Service model upgraded.":"服务模式升级。",
  "Stable quality system":"稳定质量体系",
  "Start your inquiry or sample request":"提交询价或样品申请",
  "Static blog listing page. CMS integration can be added later.":"静态博客列表页，后续可接入 CMS。",
  "Supply advantages for long-term cooperation":"长期合作的供应优势",
  "Supporting components for menu extension and seasonal development.":"支持菜单扩展与季节性开发的配套组件。",
  "Tap each year to view key progress in sourcing, production and B2B service.":"点击年份查看采购、生产与 B2B 服务进展。",
  "Tea quality checklist for procurement":"采购用茶叶质量检查清单",
  "Tea ingredients partner for beverage and food businesses":"饮料与食品业务的茶饮原料伙伴",
  "TeaSourcex aligns natural tea character with repeatable industrial production requirements.":"TeaSourcex 将自然茶感与可重复工业化生产需求结合。",
  "TeaSourcex started serving cross-border beverage projects and diversified shipment standards.":"TeaSourcex 开始服务跨境饮品项目与多样化出货标准。",
  "Tell us your application needs and target market, and we will respond with matching options.":"告诉我们应用需求和目标市场，我们会回复匹配方案。",
  "Timeline":"时间轴",
  "Traditional mindset, modern coordination":"传统理念，现代协同",
  "Use the main contact page inquiry form.":"请使用主联系页的询价表单。",
  "Use the main contact page sample request form.":"请使用主联系页的样品申请表单。",
  "View SOP Library":"查看 SOP 库",
  "Why TeaSourcex":"为什么选择 TeaSourcex",
  "sales@example.com":"sales@example.com",
  "RTD":"即饮茶",
  "Tea":"茶",
  "A practical sequence from sample validation to production handoff.":"从样品验证到量产交付的实用流程。",
  "Certifications":"认证",
  "FAQ":"常见问题",
  "FDA":"FDA",
  "HACCP":"HACCP",
  "Halal":"Halal",
  "ISO":"ISO",
  "RTD project prep and launch rhythm":"即饮茶项目准备与上线节奏",
  "Tea Partner":"茶饮伙伴",
  "Tea supply business established.":"茶叶供应业务建立。",
  "Thank You | Inquiry Submitted":"谢谢 | 询价已提交",
  "Thank You | Sample Request Submitted":"谢谢 | 样品申请已提交"
});
const placeholderDictionary={
  "Company Ltd.":"公司名称",
  "Name":"联系人姓名",
  "+1 000 000 0000":"+86 000 0000 0000",
  "e.g. 500 kg":"例如 500 kg",
  "Tell us your application.":"请说明应用场景。",
  "e.g. 3 packs":"例如 3 包",
  "e.g. 1 ton":"例如 1 吨",
  "Sample requirements.":"请填写样品需求。",
  "Search articles...":"搜索文章..."
};
let currentSiteData=null;
function escapeHtml(value){
  return String(value ?? "")
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;");
}
function currentLang(){
  return localStorage.getItem("siteLanguage")||"en";
}
function ensureWhatsAppFloat(){
  if(document.querySelector(".whatsapp-float")||document.querySelector(".admin-page"))return;
  const link=document.createElement("a");
  link.className="whatsapp-float";
  link.href="https://wa.me/8600000000000";
  link.target="_blank";
  link.rel="noopener";
  link.setAttribute("aria-label","Contact on WhatsApp");
  link.innerHTML="<span>WA</span>";
  document.body.appendChild(link);
}
const primaryNavItems=[
  ["Home","index.html"],
  ["About","about.html"],
  ["Products","products.html"],
  ["Quality Assurance","quality.html"],
  ["Manufacture","solutions.html"],
  ["FAQs","resources.html#faq"],
  ["Contact","contact.html"],
  ["Recruitment","about.html#team"]
];
function createMainNavigation(){
  if(document.querySelector(".admin-page")||document.querySelector(".site-top-nav"))return;
  const nav=document.createElement("nav");
  nav.className="site-top-nav";
  nav.setAttribute("aria-label","Primary navigation");
  nav.innerHTML=primaryNavItems.map(([label,href])=>`<a href="${href}">${label}</a>`).join("");
  document.body.prepend(nav);
}
function simplifyDrawerNavigation(){
  const sideNav=document.querySelector(".side-nav");
  if(!sideNav||sideNav.dataset.primaryOnly)return;
  sideNav.dataset.primaryOnly="true";
  sideNav.innerHTML=primaryNavItems.map(([label,href])=>`<a class="drawer-primary-link" href="${href}">📁 ${label}</a>`).join("");
}
function ensureBackTopButton(){
  if(document.querySelector(".back-top-button")||document.querySelector(".admin-page"))return;
  const button=document.createElement("button");
  button.className="back-top-button";
  button.type="button";
  button.setAttribute("aria-label","Back to top");
  button.innerHTML='↑';
  button.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
  document.body.appendChild(button);
}
function localizedProduct(product, field){
  return currentLang()==="zh" && product[`${field}Zh`] ? product[`${field}Zh`] : product[field];
}
function applyContactData(contact){
  if(!contact)return;
  document.querySelectorAll("[data-contact-address]").forEach(node=>node.textContent=contact.address||"");
  document.querySelectorAll("[data-contact-email]").forEach(node=>node.textContent=contact.email||"");
  document.querySelectorAll("[data-contact-phone]").forEach(node=>node.textContent=contact.phone||"");
  const whatsappHref=contact.whatsapp?`https://wa.me/${String(contact.whatsapp).replace(/\D/g,"")}`:"https://wa.me/8600000000000";
  document.querySelectorAll("[data-whatsapp-link], .whatsapp-float").forEach(link=>link.href=whatsappHref);
}
function applyProductSelects(products){
  document.querySelectorAll("[data-product-select]").forEach(select=>{
    const selected=select.value;
    select.innerHTML=products.map(product=>`<option value="${escapeHtml(product.title)}">${escapeHtml(localizedProduct(product,"title"))}</option>`).join("");
    if(selected)select.value=selected;
  });
}
function renderProducts(products){
  const grid=document.querySelector("[data-product-grid]");
  if(!grid)return;
  grid.innerHTML=products.map(product=>`
    <article class="product-card" id="${escapeHtml(product.id)}" data-filter="${escapeHtml(product.filter)}">
      <img src="${escapeHtml(product.image)}" alt="${escapeHtml(localizedProduct(product,"title"))}" />
      <div>
        <h3>${escapeHtml(localizedProduct(product,"title"))}</h3>
        <p>${escapeHtml(localizedProduct(product,"summary"))}</p>
        <a href="products/${escapeHtml(product.slug)}.html">Details</a>
      </div>
    </article>
  `).join("");
  if(typeof filterCards==="function")filterCards(".product-grid",".filter-bar [data-filter]",".product-card");
}
function localizedArticle(article, field){
  return currentLang()==="zh" && article[`${field}Zh`] ? article[`${field}Zh`] : article[field];
}
function formatArticleText(text){
  const linkify=value=>value.replace(/(https?:\/\/[^\s<]+)/g,'<a href="$1" target="_blank" rel="noopener">$1</a>');
  return escapeHtml(text || "")
    .split(/\n{2,}/)
    .filter(Boolean)
    .map(block=>{
      const trimmed=block.trim();
      if(trimmed.startsWith("- ")){
        const items=trimmed.split("\n").map(line=>line.replace(/^- /,"").trim()).filter(Boolean);
        return `<ul class="article-list">${items.map(item=>`<li>${linkify(item)}</li>`).join("")}</ul>`;
      }
      return `<p>${linkify(trimmed.replaceAll("\n","<br>"))}</p>`;
    })
    .join("");
}
function renderArticles(articles){
  const list=document.querySelector("[data-article-list]");
  if(!list)return;
  list.innerHTML=articles.map(article=>`
    <article class="resource-card blog-card" data-filter="${escapeHtml(article.tag)}">
      <h3>${escapeHtml(localizedArticle(article,"title"))}</h3>
      <p>${escapeHtml(localizedArticle(article,"summary"))}</p>
      <a href="resources/blog/${escapeHtml(article.slug)}.html">Read Article</a>
    </article>
  `).join("");
  if(typeof filterCards==="function")filterCards(".blog-list",".tag-filter [data-filter]",".blog-card");
}
function renderArticleDetail(articles){
  const detail=document.querySelector("[data-article-detail]");
  if(!detail)return;
  const slug=location.pathname.split("/").pop()?.replace(".html","");
  const article=articles.find(item=>item.slug===slug)||articles[0];
  if(!article)return;
  detail.querySelector("h1").textContent=localizedArticle(article,"title");
  detail.querySelector("[data-article-summary]").textContent=localizedArticle(article,"summary");
  detail.querySelector("[data-article-body]").innerHTML=formatArticleText(localizedArticle(article,"body"));
  const sourceNode=detail.querySelector("[data-article-sources]");
  if(sourceNode)sourceNode.innerHTML=formatArticleText(article.sources || "");
  document.title=`${localizedArticle(article,"title")} | TeaSourcex Blog`;
}
function applyProductDetail(products){
  const slug=location.pathname.split("/").pop()?.replace(".html","");
  const product=products.find(item=>item.slug===slug);
  if(!product)return;
  const panel=document.querySelector(".panel");
  const title=panel?.querySelector("h1");
  const text=panel?.querySelector("p:not(.eyebrow)");
  if(title)title.textContent=localizedProduct(product,"title");
  if(text)text.textContent=localizedProduct(product,"detail");
  document.title=`${localizedProduct(product,"title")} | TeaSourcex`;
}
function applyMediaData(media){
  if(!media)return;
  const video=document.querySelector(".hero-video");
  if(video){
    const source=video.querySelector("source");
    if(media.heroPoster){
      video.poster=media.heroPoster;
      video.closest(".hero")?.style.setProperty("background-image", `url("${media.heroPoster}")`);
    }
    if(source && media.heroVideo && source.src!==media.heroVideo){
      source.src=media.heroVideo;
      video.load();
    }
  }
}
function applySiteData(){
  if(!currentSiteData)return;
  applyContactData(currentSiteData.contact);
  applyMediaData(currentSiteData.media);
  applyProductSelects(currentSiteData.products||[]);
  renderProducts(currentSiteData.products||[]);
  applyProductDetail(currentSiteData.products||[]);
  renderArticles(currentSiteData.articles||[]);
  renderArticleDetail(currentSiteData.articles||[]);
}
async function loadSiteData(){
  if(location.protocol==="file:")return;
  try{
    const response=await fetch("/api/site-data");
    if(!response.ok)return;
    currentSiteData=await response.json();
    applySiteData();
    applyLanguage(currentLang());
  }catch(error){
    console.warn("Site data unavailable",error);
  }
}
function createLanguageSwitch(){
  const switcher=document.createElement("label");
  switcher.className="language-switch standalone-language-switch";
  switcher.innerHTML='<span data-lang-label>Language</span><select aria-label="Language"><option value="en">English</option><option value="zh">Chinese</option></select>';
  document.body.prepend(switcher);
  return switcher;
}
const originalTextNodes=new WeakMap();
function translateTextNodes(lang){
  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode(node){if(!node.nodeValue.trim())return NodeFilter.FILTER_REJECT;if(node.parentElement?.closest("script,style"))return NodeFilter.FILTER_REJECT;return NodeFilter.FILTER_ACCEPT}});
  const nodes=[];
  while(walker.nextNode())nodes.push(walker.currentNode);
  nodes.forEach(node=>{
    if(!originalTextNodes.has(node))originalTextNodes.set(node,node.nodeValue);
    const original=originalTextNodes.get(node);
    if(lang==="en"){node.nodeValue=original;return}
    const trimmed=original.trim();
    const translated=languageDictionary[trimmed];
    node.nodeValue=translated?original.replace(trimmed,translated):original;
  });
}
function translateAttributes(lang){
  document.querySelectorAll("[placeholder]").forEach(el=>{
    if(!el.dataset.originalPlaceholder)el.dataset.originalPlaceholder=el.getAttribute("placeholder");
    const original=el.dataset.originalPlaceholder;
    el.setAttribute("placeholder",lang==="zh"?(placeholderDictionary[original]||original):original);
  });
}
function applyLanguage(lang){
  document.documentElement.lang=lang==="zh"?"zh-CN":"en";
  if(!document.documentElement.dataset.originalTitle)document.documentElement.dataset.originalTitle=document.title;
  document.title=lang==="zh"?(languageDictionary[document.documentElement.dataset.originalTitle]||document.documentElement.dataset.originalTitle):document.documentElement.dataset.originalTitle;
  localStorage.setItem("siteLanguage",lang);
  applySiteData();
  translateTextNodes(lang);
  translateAttributes(lang);
}
createMainNavigation();
simplifyDrawerNavigation();
const languageSwitch=createLanguageSwitch();
const languageSelect=languageSwitch.querySelector("select");
languageSelect.value=localStorage.getItem("siteLanguage")||"en";
languageSelect.addEventListener("change",()=>applyLanguage(languageSelect.value));
ensureWhatsAppFloat();
ensureBackTopButton();
applyLanguage(languageSelect.value);
document.querySelector(".mobile-menu-btn")?.addEventListener("click",()=>body.classList.toggle("menu-open"));
document.querySelector(".menu-backdrop")?.addEventListener("click",()=>body.classList.remove("menu-open"));
document.querySelectorAll(".side-nav a").forEach(a=>a.addEventListener("click",()=>body.classList.remove("menu-open")));

const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");revealObserver.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>revealObserver.observe(el));

if(typeof CountUpLite!=="undefined"){
const countObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)return;entry.target.querySelectorAll("[data-countup]").forEach(el=>new CountUpLite(el,el.dataset.target).start());countObserver.unobserve(entry.target)}),{threshold:.35});
document.querySelectorAll(".countup-zone").forEach(zone=>countObserver.observe(zone));
}

document.querySelectorAll(".timeline-card").forEach(card=>card.addEventListener("click",()=>card.classList.toggle("open")));
if(typeof filterCards==="function"){
filterCards(".product-grid",".filter-bar [data-filter]",".product-card");
filterCards(".blog-list",".tag-filter [data-filter]",".blog-card");
}
if(typeof initLightbox==="function")initLightbox();

document.querySelectorAll("[data-tabs]").forEach(tabset=>{const buttons=tabset.querySelectorAll("[data-tab]");const panels=tabset.querySelectorAll("[data-tab-panel]");buttons.forEach(btn=>btn.addEventListener("click",()=>{buttons.forEach(b=>b.classList.remove("active"));panels.forEach(p=>p.classList.remove("active"));btn.classList.add("active");tabset.querySelector(`[data-tab-panel="${btn.dataset.tab}"]`)?.classList.add("active")}))});
document.querySelectorAll(".accordion-trigger").forEach(btn=>btn.addEventListener("click",()=>btn.closest(".accordion-item").classList.toggle("open")));

const searchInput=document.querySelector("[data-blog-search]");
if(searchInput){searchInput.addEventListener("input",()=>{const q=searchInput.value.toLowerCase();document.querySelectorAll(".blog-card").forEach(card=>{card.classList.toggle("hide",!card.textContent.toLowerCase().includes(q))})})}

document.querySelectorAll("form[data-redirect]").forEach(form=>{form.addEventListener("submit",async event=>{event.preventDefault();const redirect=form.dataset.redirect;const formData=new FormData(form);const payload=Object.fromEntries(formData.entries());if(form.dataset.api){const button=form.querySelector("button[type='submit']");const oldText=button?.textContent;if(button){button.disabled=true;button.textContent=currentLang()==="zh"?"提交中...":"Submitting..."}try{const response=await fetch(form.dataset.api,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});const data=await response.json().catch(()=>({}));if(!response.ok)throw new Error(data.error||"Submission failed");window.location.href=data.redirect||redirect}catch(error){alert(currentLang()==="zh"?`提交失败：${error.message}`:`Submission failed: ${error.message}`);if(button){button.disabled=false;button.textContent=oldText}}return}window.location.href=redirect})});
loadSiteData();
