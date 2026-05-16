// ═══════════════════════════════════════════════════════
//  lang.js — Bilingual KO/EN for KSPAI Jekyll site
//
//  Two parallel systems work together:
//  1. data-lang="ko" / data-lang="en"  spans — toggled via CSS
//     (used in Jekyll includes for Liquid-rendered content)
//  2. data-i18n="key" — JS text replacement
//     (used for UI chrome: nav, buttons, labels, etc.)
// ═══════════════════════════════════════════════════════

const translations = {

  // ── NAV ──
  "nav.about":    { ko: "소개",    en: "About" },
  "nav.research": { ko: "연구분야", en: "Research" },
  "nav.news":     { ko: "소식",    en: "News" },
  "nav.join":     { ko: "회원가입", en: "Join" },
  "nav.contact":  { ko: "문의",    en: "Contact" },

  // ── HERO ──
  "hero.badge":     { ko: "창립 2025", en: "Founding 2025" },
  "hero.title.1":   { ko: "물리 세계를 이해하는", en: "A New Horizon of" },
  "hero.title.2":   { ko: "지능의 새로운 지평", en: "Intelligence for the Physical World" },
  "hero.subtitle":  { ko: "Korean Society of Physical AI & Research Institute",
                      en: "Korean Society of Physical AI & Research Institute" },
  "hero.desc":      { ko: "한국피지컬인공지능학회는 물리적 세계와 인공지능의 융합을 선도하는 학술 공동체입니다. 로보틱스, 체화지능, 자율시스템, 디지털 트윈 등 피지컬 AI의 핵심 분야를 연구하고 차세대 융합 인재를 양성합니다.",
                      en: "The Korean Society of Physical AI is an academic community leading the convergence of the physical world and artificial intelligence. We advance core areas of Physical AI including robotics, embodied intelligence, autonomous systems, and digital twins, while cultivating the next generation of interdisciplinary talent." },
  "hero.btn.join":  { ko: "회원가입 →",   en: "Join Us →" },
  "hero.btn.about": { ko: "학회소개 보기", en: "Learn More" },

  // ── STATS ──
  "stat.research":  { ko: "핵심 연구 분야", en: "Core Research Areas" },
  "stat.orgs":      { ko: "산하 기관",     en: "Affiliated Organizations" },
  "stat.founded":   { ko: "창립 연도",     en: "Year Founded" },
  "stat.potential": { ko: "가능성",        en: "Possibilities" },

  // ── ABOUT ──
  "about.label":    { ko: "About Us", en: "About Us" },
  "about.title":    { ko: "두 기관, 하나의 비전", en: "Two Organizations, One Vision" },
  "about.subtitle": { ko: "피지컬 AI의 학술 연구와 교육을 통합적으로 추진하는 자매 기관입니다.",
                      en: "Sister organizations driving academic research and education in Physical AI." },

  "society.name":    { ko: "한국피지컬인공지능학회", en: "Korean Society of Physical AI" },
  "society.name.en": { ko: "Korean Society of Physical AI (KSPAI)", en: "한국피지컬인공지능학회 (KSPAI)" },
  "society.desc":    { ko: "피지컬 AI 분야의 학술 연구, 국내외 학술대회 개최, 논문 심사 및 출판, 산학연 협력을 통한 기술 발전을 선도하는 학술 단체입니다.",
                       en: "An academic society leading technological advancement in Physical AI through scholarly research, domestic and international conferences, paper review and publication, and industry–academia–research collaboration." },
  "society.f1": { ko: "학술 논문지 발간 및 논문 투고 시스템",      en: "Academic journal publication and paper submission system" },
  "society.f2": { ko: "연차 학술대회 및 워크숍 개최",              en: "Annual conferences and workshops" },
  "society.f3": { ko: "국제 학술 교류 및 협력",                   en: "International academic exchange and cooperation" },
  "society.f4": { ko: "산학연 공동 연구 프로젝트",                 en: "Joint industry–academia–research projects" },
  "society.f5": { ko: "학회지 및 뉴스레터 발행",                  en: "Society journal and newsletter publication" },

  "institute.name":    { ko: "한국피지컬AI교육연구소", en: "Korean Institute of Physical AI Education & Research" },
  "institute.name.en": { ko: "Korean Institute of Physical AI Education & Research", en: "한국피지컬AI교육연구소" },
  "institute.desc":    { ko: "피지컬 AI 분야의 교육 과정 개발, 인력 양성, 실습 프로그램 운영 및 교육 연구를 전문적으로 수행하는 연구소입니다.",
                         en: "A research institute specializing in curriculum development, workforce training, hands-on program delivery, and educational research in the field of Physical AI." },
  "institute.f1": { ko: "피지컬 AI 교육 커리큘럼 개발",    en: "Physical AI curriculum development" },
  "institute.f2": { ko: "교원 연수 및 전문 인력 양성",     en: "Teacher training and professional development" },
  "institute.f3": { ko: "교육용 실습 콘텐츠 제작",        en: "Educational hands-on content creation" },
  "institute.f4": { ko: "교육 효과성 연구 및 평가",       en: "Educational effectiveness research and assessment" },
  "institute.f5": { ko: "산업체 맞춤형 교육 프로그램",    en: "Industry-tailored training programs" },

  // ── RESEARCH ──
  "research.label":    { ko: "Research Areas", en: "Research Areas" },
  "research.title":    { ko: "연구 분야",       en: "Research Areas" },
  "research.subtitle": { ko: "피지컬 AI의 핵심 기술과 응용 분야를 탐구합니다.",
                         en: "Exploring the core technologies and applications of Physical AI." },

  // ── NEWS ──
  "news.label":    { ko: "News & Announcements", en: "News & Announcements" },
  "news.title":    { ko: "소식",                 en: "News" },
  "news.subtitle": { ko: "학회와 연구소의 최신 소식을 전합니다.",
                     en: "The latest news from the Society and Research Institute." },
  "news.viewall":  { ko: "모든 소식 보기", en: "View All News" },

  // ── CTA ──
  "cta.label":       { ko: "Membership", en: "Membership" },
  "cta.title":       { ko: "함께 만들어가는<br>피지컬 AI의 미래",
                       en: "Shaping the Future of<br>Physical AI — Together" },
  "cta.desc":        { ko: "연구자, 교육자, 대학원생, 산업체 관계자 등 피지컬 AI에 관심 있는 모든 분의 참여를 환영합니다.",
                       en: "We welcome researchers, educators, graduate students, and industry professionals — everyone with an interest in Physical AI." },
  "cta.btn.join":    { ko: "회원가입 문의 →", en: "Membership Inquiry →" },
  "cta.btn.contact": { ko: "연락처 보기",    en: "Contact Us" },

  // ── CONTACT ──
  "contact.label":     { ko: "Contact",  en: "Contact" },
  "contact.title":     { ko: "연락처",   en: "Contact Us" },
  "contact.subtitle":  { ko: "학회 및 연구소에 대한 문의사항이 있으시면 연락해 주세요.",
                         en: "For inquiries about the Society or Research Institute, please reach out." },
  "contact.society":   { ko: "한국피지컬인공지능학회",         en: "Korean Society of Physical AI" },
  "contact.institute": { ko: "한국피지컬AI교육연구소",   en: "Korean Institute of Physical AI Education & Research" },
  "contact.address":   { ko: "소재지 확정 후 공지 예정", en: "Address to be announced" },
  "contact.phone":     { ko: "연락처 확정 후 공지 예정", en: "Phone number to be announced" },

  // ── FOOTER ──
  "footer.about":           { ko: "물리적 세계와 인공지능의 융합을 선도하는 학술 공동체. 체화지능, 로보틱스, 자율시스템, 디지털 트윈 등 피지컬 AI의 핵심 분야를 연구합니다.",
                              en: "An academic community leading the convergence of the physical world and AI. We research core areas of Physical AI including embodied intelligence, robotics, autonomous systems, and digital twins." },
  "footer.col.society":     { ko: "학회",    en: "Society" },
  "footer.col.academic":    { ko: "학술활동", en: "Academic" },
  "footer.col.join":        { ko: "참여",    en: "Participate" },
  "footer.society.about":   { ko: "학회소개", en: "About" },
  "footer.society.research":{ ko: "연구분야", en: "Research" },
  "footer.society.officers":{ ko: "임원진",  en: "Officers" },
  "footer.society.bylaws":  { ko: "정관",    en: "Bylaws" },
  "footer.academic.conf":   { ko: "학술대회", en: "Conferences" },
  "footer.academic.submit": { ko: "논문투고", en: "Submit a Paper" },
  "footer.academic.journal":{ ko: "학회지",  en: "Journal" },
  "footer.academic.seminar":{ ko: "세미나",  en: "Seminars" },
  "footer.join.membership": { ko: "회원가입", en: "Membership" },
  "footer.join.notice":     { ko: "공지사항", en: "Notices" },
  "footer.join.contact":    { ko: "문의하기", en: "Contact" },
  "footer.join.privacy":    { ko: "개인정보처리방침", en: "Privacy Policy" },
};

// ═══════════════════════════════════════
//  Language engine
// ═══════════════════════════════════════

let currentLang = localStorage.getItem('kspai-lang') || 'ko';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('kspai-lang', lang);

  // ① CSS-based toggle (data-lang spans, used in Jekyll includes)
  document.documentElement.setAttribute('lang', lang);

  // ② JS text injection (data-i18n elements, used for UI chrome)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const entry = translations[key];
    if (!entry) return;
    if (el.hasAttribute('data-i18n-html')) {
      el.innerHTML = entry[lang];
    } else {
      el.textContent = entry[lang];
    }
  });

  // ③ Toggle button label
  const btn = document.querySelector('.lang-toggle');
  if (btn) {
    btn.textContent = lang === 'ko' ? 'EN' : 'KO';
    btn.setAttribute('aria-label', lang === 'ko' ? 'Switch to English' : '한국어로 전환');
  }
}

function toggleLang() {
  setLang(currentLang === 'ko' ? 'en' : 'ko');
}

// Apply saved language on page load
document.addEventListener('DOMContentLoaded', () => setLang(currentLang));
