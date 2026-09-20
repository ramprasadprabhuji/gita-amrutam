// ===================== Shared header / footer =====================
// Rendering the header and footer from ONE function guarantees every page
// looks identical -- this is what fixes the "header mismatch" problem.

function renderHeader(activePage){
  const menu = [
    {href:"index.html", label:"హోమ్", key:"home"},
    {href:"parichayam.html", label:"గీతా పరిచయం", key:"intro"},
    {href:"chapters.html", label:"18 అధ్యాయాలు", key:"chapters"},
    {href:"about.html", label:"మా గురించి", key:"about"},
    {href:"seva.html", label:"సేవ", key:"seva"},
    {href:"contact.html", label:"సంప్రదించండి", key:"contact"}
  ];
  const menuHtml = menu.map(m =>
    `<li><a href="${m.href}" class="${m.key===activePage?'active':''}">${m.label}</a></li>`
  ).join("");

  return `
  <div class="topbar">
    <div class="container">
      <div class="topbar-left">
        <img src="assets/profile.jpg" alt="రామప్రసాద్ ప్రభుజీ">
        <span>రామప్రసాద్ ప్రభుజీ డిజిటల్ ఆశ్రమం</span>
      </div>
      <a href="admin.html" class="admin-btn">🔒 ADMIN LOGIN</a>
    </div>
  </div>
  <header class="navbar">
    <div class="container navbar-top">
      <a href="index.html" class="brand">
        <img src="assets/logo.png" alt="గీతా అమృతం లోగో">
        <div>
          <div class="brand-title">గీతా అమృతం</div>
          <div class="brand-sub">Bhagavad Gita for a Meaningful Life</div>
        </div>
      </a>
      <ul class="menu">${menuHtml}</ul>
      <div class="search-box">
        <span>🔍</span>
        <input type="text" placeholder="శోధించండి">
      </div>
      <button class="mobile-search-btn" aria-label="శోధించండి">🔍</button>
      <button class="mobile-menu-btn" onclick="toggleMobileMenu()" aria-label="మెనూ">☰</button>
    </div>
    <div class="mobile-menu" id="mobile-menu">
      <ul class="menu">${menuHtml}</ul>
    </div>
  </header>`;
}

function toggleMobileMenu(){
  document.getElementById("mobile-menu").classList.toggle("open");
}

function renderFooter(){
  const shatkaCols = [
    {title:"కర్మ షట్కం (1-6)", range:[1,6]},
    {title:"భక్తి షట్కం (7-12)", range:[7,12]},
    {title:"జ్ఞాన షట్కం (13-18)", range:[13,18]}
  ];
  const colsHtml = shatkaCols.map(col => {
    const items = CHAPTERS.filter(c => c.n >= col.range[0] && c.n <= col.range[1])
      .map(c => `<li><a href="chapter.html?ch=${c.n}">${c.n}. ${c.te}</a></li>`).join("");
    return `<div><h5>${col.title}</h5><ul>${items}</ul></div>`;
  }).join("");

  return `
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-brand">
            <img src="assets/logo.png" alt="గీతా అమృతం లోగో">
            <div>
              <h4>గీతా అమృతం</h4>
              <div style="font-size:.8rem;color:#c9b98f;">GITA AMRUTAM</div>
            </div>
          </div>
          <div class="footer-box">
            <strong>రామప్రసాద్ ప్రభుజీ డిజిటల్ ఆశ్రమం</strong>
            <em>Bhagavad Gita for a Meaningful Life</em>
          </div>
          <p class="desc">భగవద్గీత నిత్య జీవన సత్యాలను, దివ్య జ్ఞానాన్ని తెలుగు ప్రజలందరికీ సులభశైలిలో, ప్రామాణికంగా అందించడానికి అంకితమైన పవిత్ర డిజిటల్ వేదిక.</p>
          <div class="footer-mail">📧 ram.chitvel@gmail.com</div>
        </div>
        ${colsHtml}
      </div>
      <div class="footer-bottom">
        <span>© 2026 GITA AMRUTAM. రామప్రసాద్ ప్రభుజీ డిజిటల్ ఆశ్రమం. సర్వ హక్కులు ప్రత్యేకించబడినవి.</span>
        <span>
          <a href="parichayam.html">గీతా పరిచయం</a>
          <a href="about.html">మా గురించి</a>
          <a href="seva.html">సేవ</a>
          <a href="contact.html">సంప్రదించండి</a>
        </span>
      </div>
    </div>
  </footer>`;
}

function mountLayout(activePage){
  document.getElementById("site-header").innerHTML = renderHeader(activePage);
  document.getElementById("site-footer").innerHTML = renderFooter();
}

// ===================== Chapter carousel (home page) =====================
function renderChapterCarousel(targetId){
  const el = document.getElementById(targetId);
  el.innerHTML = CHAPTERS.map(c => `
    <a class="chapter-card" href="chapter.html?ch=${c.n}">
      <span class="om">🕉</span>
      <span class="num">${String(c.n).padStart(2,'0')}</span>
      <h3>${c.te}</h3>
      <span class="sk-title">${c.sa}</span>
      <p class="summary">${c.summary}</p>
      <span class="vcount">${c.verses} శ్లోకాలు</span>
    </a>`).join("");
}

function scrollCarousel(id, dir){
  const el = document.getElementById(id);
  el.scrollBy({left: dir * 260, behavior:'smooth'});
}

// ===================== Chapters grid (chapters.html) =====================
function renderChaptersGrid(targetId){
  const el = document.getElementById(targetId);
  el.innerHTML = CHAPTERS.map(c => `
    <a class="chapter-card" href="chapter.html?ch=${c.n}">
      <span class="om">🕉</span>
      <span class="num">${String(c.n).padStart(2,'0')}</span>
      <h3>${c.te}</h3>
      <span class="sk-title">${c.sa}</span>
      <p class="summary">${c.summary}</p>
      <span class="vcount">${c.verses} శ్లోకాలు</span>
    </a>`).join("");
}

// ===================== Chapter detail (chapter.html) =====================
function renderChapterDetail(){
  const params = new URLSearchParams(window.location.search);
  const chNum = Number(params.get("ch")) || 1;
  const chapter = getChapter(chNum);
  if(!chapter){ document.getElementById("chapter-root").innerHTML = "<p class='empty-note'>అధ్యాయం కనబడలేదు.</p>"; return; }

  document.getElementById("ph-title").textContent = chapter.n + ". " + chapter.te;
  document.getElementById("ph-sub").textContent = chapter.sa;

  document.getElementById("chapter-intro-text").innerHTML = `
    <div class="drop">
      <div class="letter">${chapter.te.charAt(0)}</div>
      <p>${chapter.summary} ఈ అధ్యాయంలో మొత్తం <strong>${chapter.verses} శ్లోకాలు</strong> ఉన్నాయి.</p>
    </div>`;

  const existing = versesForChapter(chNum);
  document.getElementById("verse-progress").textContent =
    `${existing.length} / ${chapter.verses} శ్లోకాలు అందుబాటులో`;

  const grid = document.getElementById("verse-grid");
  let html = "";
  for(let i=1;i<=chapter.verses;i++){
    const has = existing.find(v => v.verse === i);
    if(has){
      html += `<a class="verse-pill" href="verse.html?ch=${chNum}&v=${i}">శ్లోకం ${i}</a>`;
    } else {
      html += `<span class="verse-pill disabled">శ్లోకం ${i}</span>`;
    }
  }
  grid.innerHTML = html;

  // prev/next chapter links
  const prev = getChapter(chNum-1), next = getChapter(chNum+1);
  document.getElementById("chapter-prev").href = prev ? `chapter.html?ch=${prev.n}` : "#";
  document.getElementById("chapter-prev").style.visibility = prev ? "visible":"hidden";
  document.getElementById("chapter-next").href = next ? `chapter.html?ch=${next.n}` : "#";
  document.getElementById("chapter-next").style.visibility = next ? "visible":"hidden";
}

// ===================== Verse detail (verse.html) =====================
const SIDEBAR_QUOTES = [
  "ప్రశ్నలు బలహీనతకు గుర్తు కాదు; అవి జ్ఞానానికి ద్వారం.",
  "సందేహం నుండే స్పష్టత మొదలవుతుంది, కృష్ణుని వైపు తిరిగినప్పుడు.",
  "కర్మ చేయడంలోనే మన అధికారం, ఫలితంలో కాదు."
];

function renderChapterBanner(targetId, chapter){
  const el = document.getElementById(targetId);
  if(!el) return;
  const quote = "సందేహం నుండే స్పష్టత మొదలవుతుంది, కృష్ణుని వైపు తిరిగినప్పుడు.";
  el.innerHTML = `
    <div class="chbanner-crumb container">
      <a href="index.html">హోమ్</a> / <a href="chapters.html">18 అధ్యాయాలు</a> / <a href="chapter.html?ch=${chapter.n}">అధ్యాయం ${chapter.n}</a>
    </div>
    <div class="chbanner-inner container">
      <div class="chbanner-left">
        <span class="chbanner-badge">అధ్యాయం ${chapter.n}</span>
        <h1>${chapter.te}</h1>
        <div class="chbanner-sub">${chapter.sa}</div>
      </div>
      <div class="chbanner-quote">“${quote}”</div>
    </div>`;
}

function renderVerseDetail(){
  const params = new URLSearchParams(window.location.search);
  const chNum = Number(params.get("ch")) || 1;
  const vNum = Number(params.get("v")) || 1;
  const chapter = getChapter(chNum);
  const verse = getVerse(chNum, vNum);
  const root = document.getElementById("verse-root");

  if(!chapter){ root.innerHTML = "<p class='empty-note'>అధ్యాయం కనబడలేదు.</p>"; return; }

  renderChapterBanner("chapter-banner", chapter);

  if(!verse){
    root.innerHTML = `<div class="empty-note">
      <h3>ఈ శ్లోకం ఇంకా నమోదు కాలేదు</h3>
      <p>అడ్మిన్ పానెల్ ద్వారా త్వరలో ఈ శ్లోకం జోడించబడుతుంది.</p>
      <a class="btn btn-outline" href="chapter.html?ch=${chNum}">← అధ్యాయానికి తిరిగి వెళ్ళండి</a>
    </div>`;
    renderSidebar(chapter, vNum);
    return;
  }

  document.title = `భగవద్గీత ${chNum}.${vNum} — గీతా అమృతం`;

  const prevExists = vNum > 1;
  const pratipadaRows = (verse.pratipadartham || []).map(r => `
    <tr><td class="pp-word">${r.word}</td><td class="pp-break">${r.breakdown}</td><td class="pp-mean">${r.meaning}</td></tr>
  `).join("");

  root.innerHTML = `
    <div class="verse-nav-row">
      <a href="chapter.html?ch=${chNum}">← అధ్యాయం ${chNum}</a>
      <span class="verse-nav-title">శ్లోకం ${vNum}</span>
      ${vNum < chapter.verses ? `<a href="verse.html?ch=${chNum}&v=${vNum+1}">తదుపరి »</a>` : `<span></span>`}
    </div>

    <div class="mula-sloka-card">
      <div class="mula-sloka-tag">మూల శ్లోకం<br><span>(Original Sloka)</span></div>
      <div class="mula-sloka-body">
        ${verse.speaker ? `<div class="speaker-line">${verse.speaker} ।</div>` : ""}
        <div class="sanskrit-lines">
          ${verse.sanskrit.map(line => `<div class="line">${line}</div>`).join("")}
        </div>
        ${verse.transliteration ? `<div class="translit-lines">${verse.transliteration.map(l=>`<div>${l}</div>`).join("")}</div>` : ""}
      </div>
    </div>

    <div class="verse-section">
      <h4>📖 పదచ్ఛేదం <span class="h4-en">(Pada Chedanam)</span></h4>
      <p class="padachedanam-text">${verse.padachedanam}</p>
    </div>

    <div class="verse-section">
      <h4>📝 ప్రతిపదార్థం <span class="h4-en">(Word-by-Word Meaning)</span></h4>
      <table class="pratipadartham-table">
        <thead><tr><th>పదము</th><th>పదార్థము</th><th>తెలుగులో అర్థం</th></tr></thead>
        <tbody>${pratipadaRows}</tbody>
      </table>
    </div>

    <div class="verse-section">
      <h4>📄 సరళ భావం <span class="h4-en">(Simple Meaning)</span></h4>
      <div class="translation-box">${verse.translation}</div>
    </div>

    <div class="verse-section commentary">
      <h4>📘 వివరణాత్మక భావం <span class="h4-en">(Detailed Explanation)</span></h4>
      ${verse.commentary.map(p => `<p>${p}</p>`).join("")}
    </div>

    <div class="verse-bottom-nav">
      <a class="btn btn-outline" href="${prevExists ? `verse.html?ch=${chNum}&v=${vNum-1}` : `chapter.html?ch=${chNum}`}">← Previous Sloka</a>
      <a class="btn btn-gold" href="chapter.html?ch=${chNum}">Back to Chapter</a>
      <a class="btn btn-maroon" href="${vNum < chapter.verses ? `verse.html?ch=${chNum}&v=${vNum+1}` : `chapter.html?ch=${chNum}`}">Next Sloka →</a>
    </div>
  `;

  renderSidebar(chapter, vNum);
}

function renderSidebar(chapter, currentVerse){
  const existingCount = versesForChapter(chapter.n).length;
  const pct = Math.round((existingCount / chapter.verses) * 100);

  document.getElementById("side-chapter").innerHTML = `
    <a class="side-chapter-card" href="chapter.html?ch=${chapter.n}">
      <span class="num">${String(chapter.n).padStart(2,'0')}</span>
      <div><h4>${chapter.te}</h4><div style="font-size:.78rem;color:var(--ink-soft);">${chapter.sa}</div></div>
    </a>`;

  document.getElementById("progress-body").innerHTML = `
    <div class="progress-count">అధ్యాయం ${chapter.n} : ${existingCount} / ${chapter.verses}</div>
    <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>`;

  document.getElementById("verses-panel-title").textContent = `🗂 All Verses (1 – ${chapter.verses})`;

  let grid = "";
  for(let i=1;i<=chapter.verses;i++){
    const has = getVerse(chapter.n, i);
    const cls = i === currentVerse ? "current" : (has ? "" : "disabled");
    grid += has || i===currentVerse
      ? `<a class="jump-num ${cls}" href="verse.html?ch=${chapter.n}&v=${i}">${i}</a>`
      : `<span class="jump-num disabled">${i}</span>`;
  }
  document.getElementById("jump-grid").innerHTML = grid;

  const select = document.getElementById("chapter-select");
  select.innerHTML = CHAPTERS.map(c =>
    `<option value="${c.n}" ${c.n===chapter.n?"selected":""}>${c.n}. ${c.te}</option>`).join("");
  select.onchange = (e) => { window.location.href = `chapter.html?ch=${e.target.value}`; };

  const quote = SIDEBAR_QUOTES[(chapter.n + currentVerse) % SIDEBAR_QUOTES.length];
  document.getElementById("side-quote").textContent = "“" + quote + "”";
}

function sidebarPrint(){ window.print(); }
function sidebarShare(){
  const url = window.location.href;
  if(navigator.share){ navigator.share({title:document.title, url}); }
  else { navigator.clipboard.writeText(url); alert("లింక్ కాపీ అయ్యింది!"); }
}
function sidebarComingSoon(){ alert("ఈ ఫీచర్ త్వరలో అందుబాటులోకి వస్తుంది 🙏"); }
