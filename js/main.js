const body=document.body;
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
