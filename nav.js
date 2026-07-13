(function(){
  const navHTML = `
<nav class="nav-bar">
  <a href="/" class="acw-logo">
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    AgeCalculatorWeb
  </a>

  <div class="acw-header-actions">
    <button id="allCalculatorsBtn" class="acw-all-btn" aria-label="Open All Calculators Menu" aria-haspopup="true" aria-expanded="false">
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>
      <span>All Calculators</span>
    </button>
    <button id="searchIconBtn" class="acw-search-icon-btn" aria-label="Open Calculator Search">
      <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
    </button>
  </div>
</nav>

<div class="acw-mobile-scrollnav" id="mobileScrollNav">
  <div class="acw-scrollnav-track" id="scrollNavTrack"></div>
</div>

<div class="acw-megamenu" id="acwMegaMenu" role="dialog" aria-modal="true" aria-label="All Calculators Menu">
  <div class="acw-mega-inner">
    <div class="acw-mega-top">
      <div class="acw-search-wrap">
        <svg class="acw-search-svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input type="text" id="acwSearchInput" class="acw-search-input" placeholder="Search calculators... (e.g. loan, bmi, sleep)" autocomplete="off">
        <kbd class="acw-esc-hint">ESC</kbd>
      </div>
      <button class="acw-close-btn" id="acwCloseBtn" aria-label="Close menu">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
    <div class="acw-mega-body" id="acwMegaBody"></div>
    <div class="acw-no-results" id="acwNoResults" hidden><p>😕 No Calculator Found</p><span>Try a different keyword like "loan", "bmi", or "date"</span></div>
  </div>
</div>
`;

  document.write(navHTML);

  /* ================= MEGA MENU CSS (auto-injected) ================= */
  const acwCSS = `
  .nav-bar{display:flex;align-items:center;justify-content:space-between;padding:14px 24px;flex-wrap:wrap;gap:12px;}
  .acw-logo{display:flex;align-items:center;gap:8px;color:var(--acw-gold,#d4af37);font-family:'Playfair Display',serif;font-size:19px;font-weight:600;text-decoration:none;}
  .acw-logo svg{color:var(--acw-gold,#d4af37);flex-shrink:0;}

  :root{--acw-gold:#d4af37;--acw-gold-light:#c9a84c;--acw-bg-card:#131313;--acw-border:rgba(212,175,55,0.18);--acw-text:#eae6da;--acw-text-dim:#9a9488;}
  .acw-header-actions{display:flex;align-items:center;gap:8px;}
  .acw-all-btn{display:flex;align-items:center;gap:8px;background:linear-gradient(135deg,var(--acw-gold),var(--acw-gold-light));color:#0a0a0a;font-family:'DM Sans',sans-serif;font-weight:600;font-size:14px;padding:9px 18px;border:none;border-radius:30px;cursor:pointer;transition:transform .25s ease,box-shadow .25s ease;}
  .acw-all-btn:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(212,175,55,.35);}
  .acw-search-icon-btn{background:transparent;border:1px solid var(--acw-border);color:var(--acw-gold);width:38px;height:38px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .25s ease;}
  .acw-search-icon-btn:hover{background:rgba(212,175,55,.1);border-color:var(--acw-gold);transform:scale(1.06);}
  .acw-mobile-scrollnav{display:none;background:#0a0a0a;border-bottom:1px solid var(--acw-border);overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch;scrollbar-width:none;}
  .acw-mobile-scrollnav::-webkit-scrollbar{display:none;}
  .acw-scrollnav-track{display:flex;gap:10px;padding:10px 14px;width:max-content;}
  .acw-scrollnav-item{flex:0 0 auto;background:var(--acw-bg-card);border:1px solid var(--acw-border);color:var(--acw-text-dim);font-size:13px;font-family:'DM Sans',sans-serif;padding:7px 14px;border-radius:20px;white-space:nowrap;text-decoration:none;transition:all .2s ease;}
  .acw-scrollnav-item:hover,.acw-scrollnav-item:active{border-color:var(--acw-gold);color:var(--acw-gold);}
  @media (max-width:820px){.acw-mobile-scrollnav{display:block;}}
  .acw-megamenu{position:fixed;inset:0;z-index:9999;background:rgba(6,6,6,.97);backdrop-filter:blur(6px);opacity:0;visibility:hidden;transform:scale(1.02);transition:opacity .35s cubic-bezier(.16,1,.3,1),transform .35s cubic-bezier(.16,1,.3,1),visibility 0s linear .35s;overflow:hidden;}
  .acw-megamenu.active{opacity:1;visibility:visible;transform:scale(1);transition:opacity .35s cubic-bezier(.16,1,.3,1),transform .35s cubic-bezier(.16,1,.3,1);}
  .acw-mega-inner{max-width:1180px;margin:0 auto;height:100%;display:flex;flex-direction:column;padding:26px 24px 10px;}
  .acw-mega-top{display:flex;align-items:center;gap:16px;margin-bottom:22px;flex:0 0 auto;}
  .acw-search-wrap{flex:1;position:relative;display:flex;align-items:center;background:var(--acw-bg-card);border:1px solid var(--acw-border);border-radius:14px;padding:0 16px;transition:border-color .25s ease;}
  .acw-search-wrap:focus-within{border-color:var(--acw-gold);box-shadow:0 0 0 3px rgba(212,175,55,.12);}
  .acw-search-svg{color:var(--acw-gold);flex:0 0 auto;}
  .acw-search-input{flex:1;background:transparent;border:none;outline:none;color:var(--acw-text);font-family:'DM Sans',sans-serif;font-size:16px;padding:15px 12px;}
  .acw-search-input::placeholder{color:var(--acw-text-dim);}
  .acw-esc-hint{font-size:11px;color:var(--acw-text-dim);border:1px solid var(--acw-border);padding:2px 7px;border-radius:5px;font-family:monospace;}
  .acw-close-btn{background:transparent;border:1px solid var(--acw-border);color:var(--acw-text);width:46px;height:46px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .25s ease;flex:0 0 auto;}
  .acw-close-btn:hover{border-color:var(--acw-gold);color:var(--acw-gold);transform:rotate(90deg);}
  .acw-mega-body{flex:1;overflow-y:auto;padding-bottom:30px;scroll-behavior:smooth;}
  .acw-mega-body::-webkit-scrollbar{width:6px;}
  .acw-mega-body::-webkit-scrollbar-thumb{background:var(--acw-border);border-radius:3px;}
  .acw-category{margin-bottom:34px;}
  .acw-category-title{font-family:'Playfair Display',serif;color:var(--acw-gold);font-size:19px;margin-bottom:14px;display:flex;align-items:center;gap:8px;letter-spacing:.3px;}
  .acw-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:14px;}
  .acw-card{position:relative;background:var(--acw-bg-card);border:1px solid var(--acw-border);border-radius:14px;padding:16px;text-decoration:none;display:block;transition:transform .25s ease,border-color .25s ease,box-shadow .25s ease;overflow:hidden;}
  .acw-card::before,.acw-card::after{content:'';position:absolute;width:10px;height:10px;border-color:var(--acw-gold);opacity:0;transition:opacity .25s ease;}
  .acw-card::before{top:6px;left:6px;border-top:2px solid;border-left:2px solid;}
  .acw-card::after{bottom:6px;right:6px;border-bottom:2px solid;border-right:2px solid;}
  .acw-card:hover{transform:translateY(-4px);border-color:var(--acw-gold);box-shadow:0 10px 26px rgba(0,0,0,.4);}
  .acw-card:hover::before,.acw-card:hover::after{opacity:1;}
  .acw-card-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;}
  .acw-card-icon{font-size:22px;}
  .acw-fav-btn{background:transparent;border:none;color:var(--acw-text-dim);cursor:pointer;font-size:17px;padding:2px;line-height:1;transition:color .2s ease,transform .2s ease;}
  .acw-fav-btn:hover{transform:scale(1.15);}
  .acw-fav-btn.active{color:var(--acw-gold);}
  .acw-card-name{font-family:'DM Sans',sans-serif;font-weight:600;color:var(--acw-text);font-size:15px;margin-bottom:4px;}
  .acw-card-desc{color:var(--acw-text-dim);font-size:12.5px;line-height:1.4;}
  .acw-card mark{background:rgba(212,175,55,.35);color:var(--acw-gold-light);border-radius:2px;padding:0 1px;}
  .acw-no-results{display:none;text-align:center;padding:60px 20px;color:var(--acw-text-dim);}
  .acw-no-results p{font-size:20px;color:var(--acw-text);margin-bottom:8px;}
  .acw-no-results.show{display:block;}
  body.acw-menu-open{overflow:hidden;}
  @media (max-width:600px){
    .acw-mega-inner{padding:18px 14px 6px;}
    .acw-grid{grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px;}
    .acw-category-title{font-size:17px;}
    .acw-all-btn span{display:none;}
    .acw-all-btn{padding:9px 12px;}
    .nav-bar{padding:12px 16px;}
    .acw-logo{font-size:16px;}
  }
  `;
  const styleTag = document.createElement("style");
  styleTag.textContent = acwCSS;
  document.head.appendChild(styleTag);

  /* ================= CALCULATOR DATABASE =================
     نیا کیلکولیٹر شامل کرنے کے لیے یہاں ایک نئی لائن شامل کریں۔
     یہی ایک جگہ ہے جسے آپ کو مستقبل میں edit کرنا ہوگا — کہیں اور کچھ نہیں۔
  ========================================================= */
  const CALCULATORS = [
   { id:"age", name:"Age Calculator", url:"/", icon:"🎂", desc:"Find your exact age in years, months, and days.", category:"Time & Date", keywords:["birthday","how old","dob"], popular:true },
 { id:"tip", name:"Tip Calculator", url:"/tip-calculator.html", icon:"💵", desc:"Calculate tip and split the bill between friends.", category:"Finance", keywords:["gratuity","bill split","how much to tip"], popular:true, recentlyAdded:true },
    { id:"daysbetween", name:"Days Between Dates", url:"/days-between-dates-calculator.html", icon:"📅", desc:"Find exact days, weeks and business days between two dates.", category:"Time & Date", keywords:["date duration","business days","working days"], popular:true, recentlyAdded:true },
  { id:"percentage", name:"Percentage Calculator", url:"/percentage-calculator.html", icon:"📊", desc:"Find percentages, increase, decrease and change instantly.", category:"Utility", keywords:["percent","increase","decrease","percent off"], popular:true, recentlyAdded:true },
    { id:"zakat", name:"Zakat Calculator", url:"/zakat-calculator.html", icon:"🌙", desc:"Calculate Zakat on gold, silver, cash and investments.", category:"Finance", keywords:["nisab","islamic","gold zakat"], popular:true, recentlyAdded:true },
    { id:"loan", name:"Loan Calculator", url:"/loan-calculator.html", icon:"💵", desc:"Calculate loan payments and interest.", category:"Finance", keywords:["emi","interest calculator","payment"], popular:true },
    { id:"bmi", name:"BMI Calculator", url:"/bmi-calculator.html", icon:"⚖️", desc:"Check your Body Mass Index instantly.", category:"Health", keywords:["body mass index","weight"], popular:true },
    { id:"sleep", name:"Sleep Calculator", url:"/sleep-calculator.html", icon:"😴", desc:"Find the best time to sleep or wake up.", category:"Health", keywords:["sleep cycle","wake up time"] },
    { id:"mortgage", name:"Mortgage Calculator", url:"/mortgage-calculator.html", icon:"🏦", desc:"Estimate your monthly mortgage payments.", category:"Mortgage", keywords:["home loan","house payment"], popular:true },
    { id:"paycheck", name:"Paycheck Calculator", url:"/paycheck-calculator.html", icon:"💼", desc:"Estimate your take-home pay after taxes.", category:"Salary", keywords:["salary","net pay","tax"], popular:true, recentlyAdded:true },
    { id:"incometax", name:"Income Tax Calculator", url:"/income-tax-calculator.html", icon:"🧾", desc:"Estimate your federal income tax for USA, UK and Canada.", category:"Finance", keywords:["tax calculator","federal tax","tax brackets","irs","hmrc","cra"], popular:true, recentlyAdded:true },
    { id:"retirement", name:"Retirement Calculator", url:"/retirement-calculator.html", icon:"🏖️", desc:"Plan your savings for retirement.", category:"Investment", keywords:["401k","pension"] },
    { id:"blog", name:"Blog", url:"/blog.html", icon:"📰", desc:"Guides and articles on personal finance and calculators.", category:"Other", keywords:["articles","guides"] }
  ];

  /* CATEGORY_ORDER کی entries اب icons کے ساتھ ہیں تاکہ وہ نیچے بننے والی
     "sections" آبجیکٹ کی keys سے بالکل میچ ہوں (ورنہ وہ سیکشن رینڈر نہیں ہوتا) */
  const CATEGORY_ORDER = ["⭐ Popular Calculators","🕒 Recently Added","❤️ Favorites","🕘 Recently Visited",
    "⏰ Time & Date","💰 Finance","🏦 Mortgage","📈 Investment","👨‍💼 Salary","🏥 Health","🏋 Fitness","🏠 Home","🏗 Construction",
    "🎓 Education","🚗 Auto","🌍 Travel","⚙ Utility","🧮 Other"];
  const CATEGORY_ICONS = { "Time & Date":"⏰","Finance":"💰","Mortgage":"🏦","Investment":"📈","Salary":"👨‍💼",
    "Health":"🏥","Fitness":"🏋","Home":"🏠","Construction":"🏗","Education":"🎓","Auto":"🚗","Travel":"🌍","Utility":"⚙","Other":"🧮" };

  const LS_FAV="acw_favorites", LS_RECENT="acw_recent";
  const getFavs=()=>JSON.parse(localStorage.getItem(LS_FAV)||"[]");
  const setFavs=a=>localStorage.setItem(LS_FAV,JSON.stringify(a));
  const getRecent=()=>JSON.parse(localStorage.getItem(LS_RECENT)||"[]");
  const setRecent=a=>localStorage.setItem(LS_RECENT,JSON.stringify(a));
  function toggleFavorite(id){let f=getFavs();f=f.includes(id)?f.filter(x=>x!==id):[...f,id];setFavs(f);return f;}
  function trackVisit(id){let r=getRecent().filter(x=>x!==id);r.unshift(id);setRecent(r.slice(0,8));}

  function cardHTML(c, highlight){
    const favs=getFavs(), isFav=favs.includes(c.id);
    let name=c.name, desc=c.desc;
    if(highlight){
      const re=new RegExp("("+highlight.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+")","ig");
      name=name.replace(re,"<mark>$1</mark>");
      desc=desc.replace(re,"<mark>$1</mark>");
    }
    return `<a href="${c.url}" class="acw-card" data-id="${c.id}">
      <div class="acw-card-top">
        <span class="acw-card-icon">${c.icon}</span>
        <button class="acw-fav-btn ${isFav?'active':''}" data-fav-id="${c.id}" onclick="event.preventDefault();window.ACW_toggleFav(this,'${c.id}')">★</button>
      </div>
      <div class="acw-card-name">${name}</div>
      <div class="acw-card-desc">${desc}</div>
    </a>`;
  }

  window.ACW_toggleFav = function(btn,id){
    const favs = toggleFavorite(id);
    btn.classList.toggle("active", favs.includes(id));
    renderMenu();
  };

  function groupByCategory(list){
    const g={};
    list.forEach(c=>{ (g[c.category||"Other"]=g[c.category||"Other"]||[]).push(c); });
    return g;
  }

  function renderMenu(filterTerm){
    const bodyEl = document.getElementById("acwMegaBody");
    const noRes = document.getElementById("acwNoResults");
    if(!bodyEl) return;
    if(filterTerm){
      const term = filterTerm.toLowerCase();
      const matches = CALCULATORS.filter(c=>[c.name,c.category,...(c.keywords||[])].join(" ").toLowerCase().includes(term));
      bodyEl.innerHTML = matches.length ? `<div class="acw-grid">${matches.map(c=>cardHTML(c,filterTerm)).join("")}</div>` : "";
      noRes.hidden = matches.length!==0;
      noRes.classList.toggle("show", matches.length===0);
      return;
    }
    /* کیٹاگری سیکشنز ختم کر دیے گئے ہیں — اب تمام کیلکولیٹرز ایک ہی flat grid میں نظر آتے ہیں */
    noRes.hidden = true; noRes.classList.remove("show");
    bodyEl.innerHTML = `<div class="acw-grid">${CALCULATORS.map(c=>cardHTML(c)).join("")}</div>`;
  }

  function renderScrollNav(){
    const track = document.getElementById("scrollNavTrack");
    if(track) track.innerHTML = CALCULATORS.map(c=>`<a class="acw-scrollnav-item" href="${c.url}">${c.name.replace(" Calculator","")}</a>`).join("");
  }

  document.addEventListener('DOMContentLoaded', function(){
    // ---- خودکار recently visited ٹریکنگ ----
    const currentUrl = window.location.pathname;
    const matchCalc = CALCULATORS.find(c => c.url === currentUrl || (currentUrl==="/" && c.url==="/"));
    if(matchCalc) trackVisit(matchCalc.id);

    // ---- Mega menu setup ----
    renderScrollNav();
    const menu = document.getElementById("acwMegaMenu");
    const input = document.getElementById("acwSearchInput");
    const openBtn = document.getElementById("allCalculatorsBtn");
    const searchIconBtn = document.getElementById("searchIconBtn");
    const closeBtn = document.getElementById("acwCloseBtn");
    if(!menu || !openBtn) return;

    function openMenu(focusSearch){
      menu.classList.add("active");
      document.body.classList.add("acw-menu-open");
      openBtn.setAttribute("aria-expanded","true");
      renderMenu();
      if(focusSearch) setTimeout(()=>input.focus(),200);
    }
    function closeMenu(){
      menu.classList.remove("active");
      document.body.classList.remove("acw-menu-open");
      openBtn.setAttribute("aria-expanded","false");
      input.value="";
    }
    openBtn.addEventListener("click", ()=>openMenu(false));
    searchIconBtn.addEventListener("click", ()=>openMenu(true));
    closeBtn.addEventListener("click", closeMenu);
    menu.addEventListener("click", e=>{ if(e.target===menu) closeMenu(); });
    input.addEventListener("input", e=>renderMenu(e.target.value.trim()));
    document.addEventListener("keydown", e=>{
      if(e.key==="/" && document.activeElement.tagName!=="INPUT" && !menu.classList.contains("active")){
        e.preventDefault(); openMenu(true);
      } else if(e.key==="Escape" && menu.classList.contains("active")){
        closeMenu();
      }
    });
  });
})();
