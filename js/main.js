const body=document.body;
const languageDictionary={
  "Language":"语言",
  "English":"英文",
  "Chinese":"中文",
  "About":"关于我们",
  "Products":"产品",
  "Solutions":"解决方案",
  "Quality":"质量保障",
  "Resources":"资源",
  "Contact":"联系我们",
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
  "Static blog demo. Future CMS: WordPress, Webflow CMS or headless CMS.":"静态博客演示，后续可接入 WordPress、Webflow CMS 或 Headless CMS。",
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
  "Demo form: replace with Formspree, CRM or backend API before launch.":"演示表单：上线前请替换为 Formspree、CRM 或后端接口。",
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
function createLanguageSwitch(){
  const switcher=document.createElement("label");
  switcher.className="language-switch";
  switcher.innerHTML='<span data-lang-label>Language</span><select aria-label="Language"><option value="en">English</option><option value="zh">Chinese</option></select>';
  const brand=document.querySelector(".brand");
  if(brand){brand.insertAdjacentElement("beforebegin",switcher)}else{switcher.classList.add("standalone-language-switch");document.body.prepend(switcher)}
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
  translateTextNodes(lang);
  translateAttributes(lang);
  localStorage.setItem("siteLanguage",lang);
}
const languageSwitch=createLanguageSwitch();
const languageSelect=languageSwitch.querySelector("select");
languageSelect.value=localStorage.getItem("siteLanguage")||"en";
languageSelect.addEventListener("change",()=>applyLanguage(languageSelect.value));
applyLanguage(languageSelect.value);
document.querySelector(".mobile-menu-btn")?.addEventListener("click",()=>body.classList.toggle("menu-open"));
document.querySelector(".menu-backdrop")?.addEventListener("click",()=>body.classList.remove("menu-open"));
document.querySelectorAll(".side-nav a").forEach(a=>a.addEventListener("click",()=>body.classList.remove("menu-open")));

const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");revealObserver.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>revealObserver.observe(el));

const countObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)return;entry.target.querySelectorAll("[data-countup]").forEach(el=>new CountUpLite(el,el.dataset.target).start());countObserver.unobserve(entry.target)}),{threshold:.35});
document.querySelectorAll(".countup-zone").forEach(zone=>countObserver.observe(zone));

document.querySelectorAll(".timeline-card").forEach(card=>card.addEventListener("click",()=>card.classList.toggle("open")));
filterCards(".product-grid",".filter-bar [data-filter]",".product-card");
filterCards(".blog-list",".tag-filter [data-filter]",".blog-card");
initLightbox();

document.querySelectorAll("[data-tabs]").forEach(tabset=>{const buttons=tabset.querySelectorAll("[data-tab]");const panels=tabset.querySelectorAll("[data-tab-panel]");buttons.forEach(btn=>btn.addEventListener("click",()=>{buttons.forEach(b=>b.classList.remove("active"));panels.forEach(p=>p.classList.remove("active"));btn.classList.add("active");tabset.querySelector(`[data-tab-panel="${btn.dataset.tab}"]`)?.classList.add("active")}))});
document.querySelectorAll(".accordion-trigger").forEach(btn=>btn.addEventListener("click",()=>btn.closest(".accordion-item").classList.toggle("open")));

const searchInput=document.querySelector("[data-blog-search]");
if(searchInput){searchInput.addEventListener("input",()=>{const q=searchInput.value.toLowerCase();document.querySelectorAll(".blog-card").forEach(card=>{card.classList.toggle("hide",!card.textContent.toLowerCase().includes(q))})})}

document.querySelectorAll("form[data-redirect]").forEach(form=>{form.addEventListener("submit",event=>{event.preventDefault();const redirect=form.dataset.redirect;const formData=new FormData(form);const mailto=form.dataset.mailto;if(mailto){const subject=encodeURIComponent(form.dataset.subject||"Website Form Submission");const bodyText=encodeURIComponent([...formData.entries()].map(([k,v])=>`${k}: ${v}`).join("\n"));window.location.href=`mailto:${mailto}?subject=${subject}&body=${bodyText}`;setTimeout(()=>{window.location.href=redirect},600)}else{window.location.href=redirect}})});
