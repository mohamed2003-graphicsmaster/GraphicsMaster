/* ============ GRAPHICS MASTER — main.js ============ */
(function(){
const G = window.GM, C = G.CONFIG;
let lang = (function(){try{return localStorage.getItem("gm_lang")||"ar"}catch(e){return "ar"}})();
const T = () => G.I18N[lang];
const page = document.body.dataset.page;
const $ = (s,r=document)=>r.querySelector(s);
const $$ = (s,r=document)=>[...r.querySelectorAll(s)];
const catName = id => (G.CATS.find(c=>c.id===id)||{})[lang]||id;

/* ---------- placeholder art (SVG مؤقت) ---------- */
function art(cat, seed){
  const s = seed||0, id = cat+s+Math.random().toString(36).slice(2,6);
  const P=[["#7C3AED","#2DE2E6"],["#FF3D8B","#FFFFFF"],["#0EA5E9","#FDE047"],["#1E1B4B","#FF3D8B"]];
  const pick=P[(s+cat.length)%4]; const gold=pick[1], gold2="#ffffff", dark=pick[0], dark2=pick[0];
  const rot = [0,-8,10][s%3];
  const bg = `<defs><linearGradient id="g${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${s%2?dark2:dark}"/><stop offset="1" stop-color="${s%2?dark:"#2b2417"}"/></linearGradient>
  <linearGradient id="y${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${gold2}"/><stop offset="1" stop-color="${gold}"/></linearGradient></defs>
  <rect width="400" height="300" fill="${dark}"/><circle cx="${40+s*150}" cy="${260-s*40}" r="90" fill="#ffffff" opacity=".12"/>`;
  const Y=`url(#y${id})`;
  let b="";
  switch(cat){
    case "banners": b=`<rect x="20" y="90" width="360" height="120" rx="10" fill="none" stroke="${gold}" stroke-width="2"/><rect x="40" y="112" width="150" height="14" rx="7" fill="${Y}"/><rect x="40" y="136" width="230" height="8" rx="4" fill="#6f6bb5"/><rect x="40" y="154" width="190" height="8" rx="4" fill="#6f6bb5"/><rect x="40" y="178" width="80" height="20" rx="10" fill="${Y}"/><circle cx="320" cy="150" r="${34+s*6}" fill="${Y}" opacity=".9"/>`;break;
    case "posters": b=`<rect x="110" y="25" width="180" height="250" rx="10" fill="#14123A" stroke="${gold}" transform="rotate(${rot} 200 150)"/><circle cx="200" cy="120" r="${40+s*5}" fill="${Y}" transform="rotate(${rot} 200 150)"/><rect x="135" y="195" width="130" height="10" rx="5" fill="#a9a6d9" transform="rotate(${rot} 200 150)"/><rect x="150" y="215" width="100" height="8" rx="4" fill="#6f6bb5" transform="rotate(${rot} 200 150)"/>`;break;
    case "logos": b=`<circle cx="200" cy="130" r="62" fill="none" stroke="${Y}" stroke-width="6"/><path d="M${170-s*6} 150 L200 98 L${230+s*6} 150 Z" fill="${Y}"/><rect x="130" y="222" width="140" height="12" rx="6" fill="#a9a6d9"/><rect x="160" y="244" width="80" height="7" rx="3" fill="#6f6bb5"/>`;break;
    case "cards": b=`<rect x="60" y="70" width="240" height="140" rx="10" fill="#14123A" stroke="${gold}" transform="rotate(${-6+s*4} 180 140)"/><rect x="110" y="100" width="240" height="140" rx="10" fill="${Y}" transform="rotate(${6-s*3} 230 170)"/><rect x="132" y="128" width="90" height="10" rx="5" fill="#14123A" transform="rotate(${6-s*3} 230 170)"/><rect x="132" y="150" width="130" height="6" rx="3" fill="#6f6bb5" transform="rotate(${6-s*3} 230 170)"/>`;break;
    case "wedding": b=`<rect x="90" y="30" width="220" height="240" rx="6" fill="#14123A" stroke="${gold}"/><rect x="100" y="40" width="200" height="220" rx="4" fill="none" stroke="${gold}" opacity=".5"/><path d="M200 120 c-30 -40 -70 0 -30 34 l30 28 l30 -28 c40 -34 0 -74 -30 -34z" fill="${Y}"/><rect x="140" y="205" width="120" height="8" rx="4" fill="#a9a6d9"/><rect x="165" y="224" width="70" height="6" rx="3" fill="#6f6bb5"/>`;break;
    case "covers": b=`<rect x="115" y="25" width="170" height="250" rx="6" fill="#14123A" stroke="${gold}"/><rect x="115" y="25" width="18" height="250" fill="${Y}"/><rect x="150" y="60" width="115" height="12" rx="6" fill="${Y}"/><rect x="150" y="84" width="85" height="8" rx="4" fill="#a9a6d9"/><circle cx="208" cy="170" r="${30+s*5}" fill="none" stroke="${Y}" stroke-width="4"/><rect x="150" y="245" width="70" height="6" rx="3" fill="#6f6bb5"/>`;break;
    case "certificates": b=`<rect x="40" y="45" width="320" height="210" fill="#14123A" stroke="${gold}" stroke-width="2"/><rect x="52" y="57" width="296" height="186" fill="none" stroke="${gold}" opacity=".5"/><rect x="130" y="85" width="140" height="12" rx="6" fill="${Y}"/><rect x="100" y="120" width="200" height="8" rx="4" fill="#a9a6d9"/><rect x="120" y="140" width="160" height="8" rx="4" fill="#6f6bb5"/><circle cx="200" cy="205" r="22" fill="${Y}"/>`;break;
    case "greetings": b=`<circle cx="200" cy="150" r="${80+s*6}" fill="none" stroke="${gold}" stroke-width="1.5" opacity=".5"/><circle cx="200" cy="150" r="${50+s*4}" fill="${Y}" opacity=".9"/>`+[0,1,2,3,4,5].map(i=>`<circle cx="${200+Math.cos(i*1.05)*105}" cy="${150+Math.sin(i*1.05)*105}" r="5" fill="${gold2}"/>`).join("");break;
    default: b=`<rect x="70" y="50" width="120" height="200" rx="8" fill="#14123A" stroke="${gold}"/><rect x="210" y="80" width="120" height="170" rx="8" fill="${Y}"/><rect x="85" y="70" width="70" height="9" rx="4" fill="${Y}"/><rect x="225" y="100" width="80" height="8" rx="4" fill="#14123A"/>`;
  }
  return `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${cat}">${bg}${b}</svg>`;
}
const workImg = (w,th) => w.img ? (th&&w.thumb&&w.fit==="contain" ? `<span class="bgblur" style="background-image:url('${w.thumb}')"></span><img class="contain" src="${w.thumb}" alt="${w[lang].t}" loading="lazy">` : `<img src="${th&&w.thumb?w.thumb:w.img}" alt="${w[lang].t}" loading="lazy">`) : art(w.cat,w.seed);
const svcVis = (s,seed) => { const w=G.WORKS.find(x=>x.cat===s.cat); return w ? workImg(w,true) : art(s.cat,seed); };
const sampleNotice = () => G.WORKS.some(w=>w.sample) ? `<div class="notice">${T().sampleNote}</div>` : "";
const skillsSection = () => `<section style="background:var(--bg2)"><div class="container"><div class="sec-head center rv"><span class="eyebrow">SKILLS</span><h2 class="sec-title">${lang==="ar"?"مهاراتي في التصميم":"Design Skills"}</h2></div><div class="skills">${[["Canva",90],["Picsart",80],["Photoshop",60]].map(([n,v])=>`<div class="skill rv"><div class="sk-top"><b>${n}</b><span>${v}%</span></div><div class="bar"><i style="--w:${v}%"></i></div></div>`).join("")}</div></div></section>`;
const badge = w => w.sample ? `<span class="sample-badge">${T().sample}</span>` : "";
const svcById = id => G.SERVICES.find(s=>s.id===id);

/* ---------- header / footer ---------- */
const NAV = [["home","index.html"],["services","services.html"],["portfolio","portfolio.html"],["pricing","pricing.html"],["order","order.html"],["about","about.html"],["contact","contact.html"]];
function header(){
  return `<header class="nav" id="nav"><div class="container">
    <a class="logo" href="index.html"><img src="assets/gm-mark.png" alt="GM"><b>GRAPHICS <span>MASTER</span></b></a>
    <ul id="menu">${NAV.map(([k,h])=>`<li><a href="${h}" class="${page===k?"active":""}">${T().nav[k]}</a></li>`).join("")}
      <li><button class="lang-btn" id="langBtn" aria-label="Language">${T().other}</button></li></ul>
    <button class="burger" id="burger" aria-label="Menu">☰</button></div></header>`;
}
function contactItems(){
  const t=T(), rows=[];
  if(C.whatsapp) rows.push(`<li>${t.c.wa}: <a href="https://wa.me/${C.whatsapp}" target="_blank" rel="noopener" dir="ltr">${C.whatsappShow||C.whatsapp}</a></li>`);
  if(C.email) rows.push(`<li>${t.c.mail}: <a href="mailto:${C.email}">${C.email}</a></li>`);
  if(C.phone) rows.push(`<li>${t.c.phone}: <a href="tel:${C.phone}" dir="ltr">${C.phone}</a></li>`);
  return rows.join("");
}
function footer(){
  const t=T();
  const nm={facebook:"Facebook",instagram:"Instagram",behance:"Behance",tiktok:"TikTok"};
  const soc = Object.entries(C.socials).filter(([k,u])=>u).map(([k,u])=>`<a href="${u}" target="_blank" rel="noopener">${nm[k]||k}</a>`).join("");
  return `<footer><div class="container"><div class="f-grid">
    <div><a class="logo" href="index.html"><img src="assets/gm-mark.png" alt="GM"><b>GRAPHICS <span>MASTER</span></b></a><p style="margin-top:12px">${t.footAbout}</p></div>
    <div><h4>${t.links}</h4><ul>${NAV.map(([k,h])=>`<li><a href="${h}">${t.nav[k]}</a></li>`).join("")}</ul></div>
    <div><h4>${t.svcs}</h4><ul>${G.SERVICES.map(s=>`<li><a href="order.html?service=${s.id}">${s[lang].name}</a></li>`).join("")}</ul></div>
    <div><h4>${t.contactInfo}</h4><ul>${contactItems()}</ul><h4 style="margin-top:16px">${t.follow}</h4><div class="socials">${soc}</div></div>
  </div><div class="copy">© <span id="yr"></span> GRAPHICS MASTER — ${t.copy}</div></div></footer>`;
}

/* ---------- reusable blocks ---------- */
function svcCard(s){
  return `<article class="card rv"><div class="thumb">${svcVis(s,1)}</div><div class="body"><div class="ico">${s.icon}</div><h3>${s[lang].name}</h3><p>${s[lang].short}</p><a class="btn btn-line btn-sm" href="order.html?service=${s.id}">${T().orderSvc}</a></div></article>`;
}
function filters(){
  return `<div class="filters" id="filters"><button class="chip on" data-f="all">${T().all}</button>${G.CATS.filter(c=>G.WORKS.some(w=>w.cat===c.id)).map(c=>`<button class="chip" data-f="${c.id}">${c[lang]}</button>`).join("")}</div>`;
}
function workCard(w,i){
  return `<article class="card work rv" data-cat="${w.cat}" data-i="${i}"><div class="thumb">${workImg(w,true)}${badge(w)}</div><div class="cap"><b>${w[lang].t}</b><small>${catName(w.cat)}</small></div></article>`;
}
function ctaBlock(){
  const t=T(); return `<section><div class="container"><div class="cta rv"><h2>${t.ctaTitle}</h2><p>${t.ctaText}</p><a class="btn btn-gold" href="order.html">${t.ctaBtn}</a></div></div></section>`;
}
function head(title,sub){return `<div class="page-head"><div class="container"><h1>${title}</h1><p>${sub}</p></div></div>`;}

/* ---------- pages ---------- */
const PAGES = {
home(){
  const t=T(), feat=G.WORKS.filter(w=>w.feat).slice(0,8);
  const mqTxt=G.SERVICES.map(s=>s[lang].name).join("  ✦  ")+"  ✦  ";
  return `
  <section class="hero"><div class="container"><div>
    <span class="eyebrow">${t.hero.eyebrow}</span><h1>${t.hero.title}</h1><p>${t.hero.text}</p>
    <div class="btns"><a class="btn btn-gold" href="portfolio.html">${t.hero.b1}</a><a class="btn btn-line" href="order.html">${t.hero.b2}</a></div>
    <div class="tagline">${t.tagline}</div></div>
    <div class="portrait"><div class="arch"><img src="assets/mohamed2.jpg" alt="Mohamed Essam"></div><div class="chip-f c1"><img src="assets/chip1.jpg" alt=""></div><div class="chip-f c2"><img src="assets/chip2.jpg" alt=""></div><div class="chip-f c3"><img src="assets/chip3.jpg" alt=""></div><div class="name-tag"><b>MOHAMED ESSAM</b><small>GRAPHIC DESIGNER</small></div></div>
  </div></section>
  <div class="marquee" aria-hidden="true"><div class="mq"><span>${mqTxt}</span><span>${mqTxt}</span><span>${mqTxt}</span><span>${mqTxt}</span></div></div>
  <section id="services"><div class="container"><div class="sec-head center rv"><span class="eyebrow">SERVICES</span><h2 class="sec-title">${t.svcTitle}</h2><p class="sec-sub">${t.svcSub}</p></div>
    <div class="grid g3">${G.SERVICES.map(svcCard).join("")}</div>
    <div class="center-btn"><a class="btn btn-gold" href="services.html">${t.allSvc}</a></div></div></section>
  <section style="background:var(--bg2)"><div class="container"><div class="sec-head rv"><span class="eyebrow">PORTFOLIO</span><h2 class="sec-title">${t.worksTitle}</h2><p class="sec-sub">${t.worksSub}</p></div>
    ${sampleNotice()}${filters()}
    <div class="grid g4" id="gallery">${feat.map(w=>workCard(w,G.WORKS.indexOf(w))).join("")}</div>
    <div class="center-btn"><a class="btn btn-line" href="portfolio.html">${t.viewAll}</a></div></div></section>
  <section><div class="container"><div class="sec-head center rv"><span class="eyebrow">WHY US</span><h2 class="sec-title">${t.whyTitle}</h2></div>
    <div class="grid g3">${t.why.map((w,i)=>`<div class="why-item rv"><span class="num">0${i+1}</span><b style="align-self:center">${w}</b></div>`).join("")}</div></div></section>
  <section style="background:var(--bg2)"><div class="container"><div class="sec-head center rv"><span class="eyebrow">PROCESS</span><h2 class="sec-title">${t.stepsTitle}</h2><p class="sec-sub">${t.stepsSub}</p></div>
    <div class="steps">${t.steps.map(s=>`<div class="step rv"><h3>${s[0]}</h3><p>${s[1]}</p></div>`).join("")}</div></div></section>
  <section><div class="container"><div class="sec-head center rv"><span class="eyebrow">REVIEWS</span><h2 class="sec-title">${t.testTitle}</h2></div>${testimonials()}</div></section>
  ${ctaBlock()}`;
},
services(){
  const t=T();
  return head(t.svcPageTitle,t.svcPageSub)+`<section style="padding-top:30px"><div class="container">${G.SERVICES.map(s=>{
    const d=s[lang], price = s.price!=null ? `${s.price} ${C.currency[lang]}` : t.priceNone;
    return `<div class="svc rv" id="${s.id}"><div class="svc-img">${svcVis(s,2)}</div><div>
      <span class="eyebrow">${s.icon}</span><h2>${d.name}</h2><p class="desc">${d.desc}</p>
      <div class="meta"><div><b>${t.uses}</b><ul>${d.uses.map(x=>`<li>${x}</li>`).join("")}</ul></div><div><b>${t.gets}</b><ul>${d.gets.map(x=>`<li>${x}</li>`).join("")}</ul></div>
      <div class="full"><b>${t.files}</b>${d.files.join(" · ")}</div><div><b>${t.time}</b>${s.time[lang]}</div><div><b>${t.price}</b>${price}</div></div>
      <a class="btn btn-gold" href="order.html?service=${s.id}">${t.orderSvc}</a></div></div>`}).join("")}</div></section>`+ctaBlock();
},
portfolio(){
  const t=T();
  return head(t.portTitle,t.portSub)+`<section style="padding-top:40px"><div class="container">${sampleNotice()}${filters()}
    <div class="grid g4" id="gallery">${G.WORKS.map(workCard).join("")}</div></div></section>`+ctaBlock();
},
pricing(){
  const t=T();
  return head(t.priceTitle,t.priceSub)+`<section style="padding-top:40px"><div class="container">${G.SERVICES.every(s=>s.price==null)?`<div class="notice">${t.priceNote}</div>`:""}
    <div class="grid g3">${G.SERVICES.map(s=>`<div class="card price-card rv"><div class="ico" style="margin-inline:auto">${s.icon}</div><h3>${s[lang].name}</h3>
      <div class="p" style="margin:10px 0">${s.price!=null?s.price+" <small>"+C.currency[lang]+"</small>":"—"}</div><p>${s.price!=null?t.price:t.priceNone}</p>
      <p><small>${t.time}: ${s.time[lang]}</small></p><a class="btn btn-line btn-sm" href="order.html?service=${s.id}">${t.orderSvc}</a></div>`).join("")}</div></div></section>`+ctaBlock();
},
order(){
  const t=T(), f=t.f;
  return head(t.orderTitle,t.orderSub)+`<section style="padding-top:40px"><div class="container"><div class="form-wrap"><form id="orderForm" novalidate>
    <div class="row"><div class="field"><label>${f.name} *</label><input name="name" required></div><div class="field"><label>${f.phone} *</label><input name="phone" required></div></div>
    <div class="row"><div class="field"><label>${f.email}</label><input name="email" type="email"></div><div class="field"><label>${f.deadline}</label><input name="deadline" type="date"></div></div>
    <div class="field"><label>${f.service} *</label><select name="service" id="svcSel" required><option value="">${f.choose}</option>${G.SERVICES.map(s=>`<option value="${s.id}">${s[lang].name}</option>`).join("")}</select></div>
    <div class="field"><label>${f.details} *</label><textarea name="details" required placeholder="${f.detailsPh}"></textarea></div>
    <div class="field"><label>${f.refs}</label><input name="refs"></div>
    <button class="btn btn-gold" type="submit">${f.send}</button><div class="form-msg" id="formMsg"></div></form></div></div></section>`;
},
about(){
  const t=T();
  return head(t.aboutTitle,t.aboutSub)+`<section style="padding-top:40px"><div class="container"><div class="grid g2" style="align-items:center">
    <div class="rv">${t.aboutText.map(p=>`<p class="sec-sub" style="margin-bottom:16px;max-width:none">${p}</p>`).join("")}</div>
    <div class="about-card rv"><div class="arch"><img src="assets/mohamed2.jpg" alt="Mohamed Essam"></div><div class="name-tag"><b>MOHAMED ESSAM</b><small>GRAPHIC DESIGNER</small></div></div></div></div></section>
    ${skillsSection()}
    <section><div class="container center"><img class="big-logo rv" src="assets/gm-logo.png" alt="GRAPHICS MASTER — Mohamed Essam"></div></section>
    <section style="background:var(--bg2)"><div class="container"><div class="sec-head center"><h2 class="sec-title">${t.whyTitle}</h2></div><div class="grid g3">${t.why.map((w,i)=>`<div class="why-item rv"><span class="num">0${i+1}</span><b style="align-self:center">${w}</b></div>`).join("")}</div></div></section>`+ctaBlock();
},
contact(){
  const t=T(), c=t.c;
  return head(t.contactTitle,t.contactSub)+`<section style="padding-top:40px"><div class="container"><div class="grid g2">
    <div class="contact-list">${[[c.wa,C.whatsappShow||C.whatsapp,"https://wa.me/"+C.whatsapp,C.whatsapp],[c.mail,C.email,"mailto:"+C.email,C.email],[c.phone,C.phone,"tel:"+C.phone,C.phone],["Facebook",C.socials.facebook?"Facebook":"",C.socials.facebook,C.socials.facebook]].filter(r=>r[3]).map(([l,v,h])=>`<div class="contact-item"><b>${l}</b><a href="${h}" target="_blank" rel="noopener" dir="ltr">${v}</a></div>`).join("")}</div>
    <div class="form-wrap" style="margin:0"><form id="contactForm" novalidate><div class="field"><label>${t.f.name} *</label><input name="name" required></div><div class="field"><label>${t.f.phone} / ${t.f.email} *</label><input name="contact" required></div><div class="field"><label>${c.msg} *</label><textarea name="msg" required></textarea></div>
    <button class="btn btn-gold" type="submit">${c.send}</button><div class="form-msg" id="formMsg"></div></form></div></div></div></section>`;
}};
function testimonials(){
  if(!G.TESTIMONIALS.length) return `<div class="empty-box">${T().testEmpty}</div>`;
  return `<div class="grid g3">${G.TESTIMONIALS.map(x=>`<div class="card"><div class="body"><p>“${x.text}”</p><b>${x.name}</b><br><small class="gold">${x.role||""}</small></div></div>`).join("")}</div>`;
}

/* ---------- interactions ---------- */
let visible=[];
function bindGallery(){
  const gal=$("#gallery"); if(!gal) return;
  $$(".chip").forEach(ch=>ch.onclick=()=>{
    $$(".chip").forEach(x=>x.classList.remove("on")); ch.classList.add("on");
    const f=ch.dataset.f;
    if(page==="home"){ // الرئيسية: أعِد بناء القائمة من كل الأعمال حسب التصنيف
      const list=(f==="all"?G.WORKS.filter(w=>w.feat).slice(0,8):G.WORKS.filter(w=>w.cat===f));
      gal.innerHTML=list.map(w=>workCard(w,G.WORKS.indexOf(w))).join(""); reveal();
    } else $$(".work",gal).forEach(c=>c.classList.toggle("hide",f!=="all"&&c.dataset.cat!==f));
  });
  gal.onclick=e=>{const c=e.target.closest(".work"); if(!c) return;
    visible=$$(".work",gal).filter(x=>!x.classList.contains("hide")).map(x=>+x.dataset.i);
    openLB(visible.indexOf(+c.dataset.i));};
}
let cur=0;
function openLB(i){
  cur=i; const w=G.WORKS[visible[cur]]; const lb=$("#lb");
  $("#lbImg").innerHTML=workImg(w);
  $("#lbInfo").innerHTML=`<span class="eyebrow">${catName(w.cat)}</span><h3>${w[lang].t}</h3><p>${w[lang].d}</p><a class="btn btn-gold btn-sm" href="order.html?service=${(G.SERVICES.find(s=>s.cat===w.cat)||{}).id||""}">${T().orderSvc}</a>`;
  lb.classList.add("open");
}
function stepLB(d){cur=(cur+d+visible.length)%visible.length; openLB(cur);}
function lightbox(){
  const d=document.createElement("div");
  d.className="lb";d.id="lb";
  d.innerHTML=`<button class="lb-close" aria-label="close">×</button><button class="lb-btn lb-prev" aria-label="prev">‹</button><button class="lb-btn lb-next" aria-label="next">›</button><div class="lb-box"><div class="lb-img" id="lbImg"></div><div class="lb-info" id="lbInfo"></div></div>`;
  document.body.appendChild(d);
  d.onclick=e=>{ if(e.target===d||e.target.classList.contains("lb-close")) d.classList.remove("open"); };
  $(".lb-prev",d).onclick=()=>stepLB(-1); $(".lb-next",d).onclick=()=>stepLB(1);
  document.addEventListener("keydown",e=>{ if(!d.classList.contains("open")) return;
    if(e.key==="Escape") d.classList.remove("open"); if(e.key==="ArrowRight") stepLB(1); if(e.key==="ArrowLeft") stepLB(-1);});
}
function sendOrder(text, subject, form, msgEl){
  const t=T(), ok=(m)=>{msgEl.style.display="block";msgEl.textContent=m};
  if(C.whatsapp){ ok(t.f.ok); form.reset(); window.open("https://wa.me/"+C.whatsapp+"?text="+encodeURIComponent(text),"_blank"); }
  else if(C.email){ location.href="mailto:"+C.email+"?subject="+encodeURIComponent(subject)+"&body="+encodeURIComponent(text); ok(t.f.ok); }
  else { try{navigator.clipboard.writeText(text)}catch(e){} ok(t.f.okNoWa); }
}
function forms(){
  const t=T(), of=$("#orderForm");
  if(of){
    const q=new URLSearchParams(location.search).get("service"); if(q) $("#svcSel").value=q;
    of.onsubmit=e=>{e.preventDefault(); const d=Object.fromEntries(new FormData(of));
      if(!d.name||!d.phone||!d.service||!d.details){$("#formMsg").style.display="block";$("#formMsg").textContent=t.f.req;return;}
      const sv=svcById(d.service)[lang].name;
      const txt=`GRAPHICS MASTER — ${t.orderTitle}\n${t.f.name}: ${d.name}\n${t.f.phone}: ${d.phone}\n${t.f.email}: ${d.email||"-"}\n${t.f.service}: ${sv}\n${t.f.deadline}: ${d.deadline||"-"}\n${t.f.details}: ${d.details}\n${t.f.refs}: ${d.refs||"-"}`;
      sendOrder(txt,t.orderTitle+" - "+sv,of,$("#formMsg"));};
  }
  const cf=$("#contactForm");
  if(cf) cf.onsubmit=e=>{e.preventDefault(); const d=Object.fromEntries(new FormData(cf));
    if(!d.name||!d.contact||!d.msg){$("#formMsg").style.display="block";$("#formMsg").textContent=t.f.req;return;}
    sendOrder(`${t.f.name}: ${d.name}\n${d.contact}\n\n${d.msg}`,t.contactTitle,cf,$("#formMsg"));};
}
function reveal(){
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
  $$(".rv:not(.in)").forEach(el=>io.observe(el));
}

/* ---------- render ---------- */
function render(){
  const t=T(); document.documentElement.lang=lang; document.documentElement.dir=t.dir;
  document.title = (page==="home"?"GRAPHICS MASTER — "+t.tagline : t.nav[page]+" | GRAPHICS MASTER");
  $("#app").innerHTML = header()+"<main>"+PAGES[page]()+"</main>"+footer();
  $("#yr").textContent = new Date().getFullYear();
  const nav=$("#nav"); const sc=()=>nav.classList.toggle("scrolled",scrollY>30); sc(); addEventListener("scroll",sc,{passive:true});
  $("#burger").onclick=()=>$("#menu").classList.toggle("open");
  $("#langBtn").onclick=()=>{lang=lang==="ar"?"en":"ar"; try{localStorage.setItem("gm_lang",lang)}catch(e){} render();};
  if(!$("#lb")) lightbox();
  bindGallery(); forms(); reveal();
}
render();
})();
