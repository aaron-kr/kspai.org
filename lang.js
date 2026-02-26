// ═══════════════════════════════════════════════════════
//  lang.js — Bilingual KO/EN for KSPAI static site
//  Usage: add data-i18n="key" to any HTML element
//         then call toggleLang() or setLang('en'|'ko')
// ═══════════════════════════════════════════════════════

const translations = {

  // ── NAV ──
  "nav.about":       { ko: "소개",     en: "About" },
  "nav.research":    { ko: "연구분야",  en: "Research" },
  "nav.news":        { ko: "소식",     en: "News" },
  "nav.join":        { ko: "회원가입",  en: "Join" },
  "nav.contact":     { ko: "문의",     en: "Contact" },

  // ── HERO ──
  "hero.badge":      { ko: "창립 2025",
                       en: "Founding 2025" },
  "hero.title.1":    { ko: "물리 세계를 이해하는",
                       en: "A New Horizon of" },
  "hero.title.2":    { ko: "지능의 새로운 지평",
                       en: "Intelligence for the Physical World" },
  "hero.subtitle":   { ko: "Korean Society of Physical AI & Research Institute",
                       en: "Korean Society of Physical AI & Research Institute" },
  "hero.desc":       { ko: "한국피지컬AI학회는 물리적 세계와 인공지능의 융합을 선도하는 학술 공동체입니다. 로보틱스, 체화지능, 자율시스템, 디지털 트윈 등 피지컬 AI의 핵심 분야를 연구하고 차세대 융합 인재를 양성합니다.",
                       en: "The Korean Society of Physical AI is an academic community leading the convergence of the physical world and artificial intelligence. We advance core areas of Physical AI including robotics, embodied intelligence, autonomous systems, and digital twins, while cultivating the next generation of interdisciplinary talent." },
  "hero.btn.join":   { ko: "회원가입 →",  en: "Join Us →" },
  "hero.btn.about":  { ko: "학회소개 보기", en: "Learn More" },

  // ── STATS ──
  "stat.research":   { ko: "핵심 연구 분야",  en: "Core Research Areas" },
  "stat.orgs":       { ko: "산하 기관",       en: "Affiliated Organizations" },
  "stat.founded":    { ko: "창립 연도",       en: "Year Founded" },
  "stat.potential":  { ko: "가능성",          en: "Possibilities" },

  // ── ABOUT SECTION ──
  "about.label":     { ko: "About Us",  en: "About Us" },
  "about.title":     { ko: "두 기관, 하나의 비전",
                       en: "Two Organizations, One Vision" },
  "about.subtitle":  { ko: "피지컬 AI의 학술 연구와 교육을 통합적으로 추진하는 자매 기관입니다.",
                       en: "Sister organizations driving academic research and education in Physical AI." },

  // Society card
  "society.name":    { ko: "한국피지컬AI학회",
                       en: "Korean Society of Physical AI" },
  "society.name.en": { ko: "Korean Society of Physical AI (KSPAI)",
                       en: "한국피지컬AI학회 (KSPAI)" },
  "society.desc":    { ko: "피지컬 AI 분야의 학술 연구, 국내외 학술대회 개최, 논문 심사 및 출판, 산학연 협력을 통한 기술 발전을 선도하는 학술 단체입니다.",
                       en: "An academic society leading technological advancement in Physical AI through scholarly research, domestic and international conferences, paper review and publication, and industry–academia–research collaboration." },
  "society.f1":      { ko: "학술 논문지 발간 및 논문 투고 시스템",
                       en: "Academic journal publication and paper submission system" },
  "society.f2":      { ko: "연차 학술대회 및 워크숍 개최",
                       en: "Annual conferences and workshops" },
  "society.f3":      { ko: "국제 학술 교류 및 협력",
                       en: "International academic exchange and cooperation" },
  "society.f4":      { ko: "산학연 공동 연구 프로젝트",
                       en: "Joint industry–academia–research projects" },
  "society.f5":      { ko: "학회지 및 뉴스레터 발행",
                       en: "Society journal and newsletter publication" },

  // Institute card
  "institute.name":    { ko: "한국피지컬AI교육연구소",
                         en: "Korean Institute of Physical AI Education & Research" },
  "institute.name.en": { ko: "Korean Institute of Physical AI Education & Research",
                         en: "한국피지컬AI교육연구소" },
  "institute.desc":    { ko: "피지컬 AI 분야의 교육 과정 개발, 인력 양성, 실습 프로그램 운영 및 교육 연구를 전문적으로 수행하는 연구소입니다.",
                         en: "A research institute specializing in curriculum development, workforce training, hands-on program delivery, and educational research in the field of Physical AI." },
  "institute.f1":      { ko: "피지컬 AI 교육 커리큘럼 개발",
                         en: "Physical AI curriculum development" },
  "institute.f2":      { ko: "교원 연수 및 전문 인력 양성",
                         en: "Teacher training and professional development" },
  "institute.f3":      { ko: "교육용 실습 콘텐츠 제작",
                         en: "Educational hands-on content creation" },
  "institute.f4":      { ko: "교육 효과성 연구 및 평가",
                         en: "Educational effectiveness research and assessment" },
  "institute.f5":      { ko: "산업체 맞춤형 교육 프로그램",
                         en: "Industry-tailored training programs" },

  // ── RESEARCH SECTION ──
  "research.label":    { ko: "Research Areas", en: "Research Areas" },
  "research.title":    { ko: "연구 분야",
                         en: "Research Areas" },
  "research.subtitle": { ko: "피지컬 AI의 핵심 기술과 응용 분야를 탐구합니다.",
                         en: "Exploring the core technologies and applications of Physical AI." },

  // NOTE: research titles use data-i18n-html because they contain <br><span>
  "r1.title":   { ko: '체화 지능<br><span class="en" style="font-size:13px;color:var(--text-muted);">Embodied Intelligence</span>',
                  en: 'Embodied Intelligence<br><span style="font-size:13px;color:var(--text-muted);">체화 지능</span>' },
  "r1.desc":    { ko: "물리적 신체를 통해 환경과 상호작용하며 학습하는 AI 시스템 연구. 감각-운동 통합과 인지 발달 모델링.",
                  en: "AI systems that learn through physical interaction with their environment. Research on sensorimotor integration and cognitive development modeling." },

  "r2.title":   { ko: '자율 로보틱스<br><span class="en" style="font-size:13px;color:var(--text-muted);">Autonomous Robotics</span>',
                  en: 'Autonomous Robotics<br><span style="font-size:13px;color:var(--text-muted);">자율 로보틱스</span>' },
  "r2.desc":    { ko: "범용 로봇, 휴머노이드, 자율주행 시스템 등 물리적 환경에서 자율적으로 동작하는 지능형 시스템.",
                  en: "Intelligent systems operating autonomously in physical environments, including general-purpose robots, humanoids, and autonomous vehicles." },

  "r3.title":   { ko: '디지털 트윈 &amp; 시뮬레이션<br><span class="en" style="font-size:13px;color:var(--text-muted);">Digital Twin &amp; Simulation</span>',
                  en: 'Digital Twin &amp; Simulation<br><span style="font-size:13px;color:var(--text-muted);">디지털 트윈 &amp; 시뮬레이션</span>' },
  "r3.desc":    { ko: "물리 기반 시뮬레이션, 합성 데이터 생성, 가상 환경에서의 AI 훈련 및 검증 기술.",
                  en: "Physics-based simulation, synthetic data generation, and AI training and validation in virtual environments." },

  "r4.title":   { ko: '센서 융합 &amp; 인지<br><span class="en" style="font-size:13px;color:var(--text-muted);">Sensor Fusion &amp; Perception</span>',
                  en: 'Sensor Fusion &amp; Perception<br><span style="font-size:13px;color:var(--text-muted);">센서 융합 &amp; 인지</span>' },
  "r4.desc":    { ko: "시각, 촉각, 청각 등 다중 감각 데이터의 통합 처리와 물리 세계의 이해 기술.",
                  en: "Integrated processing of multimodal sensory data — vision, touch, and audio — for understanding the physical world." },

  "r5.title":   { ko: '산업 응용<br><span class="en" style="font-size:13px;color:var(--text-muted);">Industrial Applications</span>',
                  en: 'Industrial Applications<br><span style="font-size:13px;color:var(--text-muted);">산업 응용</span>' },
  "r5.desc":    { ko: "스마트 제조, 의료 로봇, 물류 자동화, 스마트 공간 등 산업 현장에서의 피지컬 AI 적용.",
                  en: "Applying Physical AI in industry: smart manufacturing, medical robotics, logistics automation, and intelligent spaces." },

  "r6.title":   { ko: 'AI 안전 &amp; 윤리<br><span class="en" style="font-size:13px;color:var(--text-muted);">Safety &amp; Ethics</span>',
                  en: 'Safety &amp; Ethics<br><span style="font-size:13px;color:var(--text-muted);">AI 안전 &amp; 윤리</span>' },
  "r6.desc":    { ko: "물리적 AI 시스템의 안전성, 인간-로봇 상호작용의 윤리적 프레임워크, 규제 및 표준화.",
                  en: "Safety of physical AI systems, ethical frameworks for human-robot interaction, regulation, and standardization." },

  // ── NEWS SECTION ──
  "news.label":        { ko: "News & Announcements", en: "News & Announcements" },
  "news.title":        { ko: "소식",       en: "News" },
  "news.subtitle":     { ko: "학회와 연구소의 최신 소식을 전합니다.",
                         en: "The latest news from the Society and Research Institute." },

  "news1.tag":         { ko: "ANNOUNCEMENT", en: "ANNOUNCEMENT" },
  "news1.title":       { ko: "한국피지컬AI학회 창립총회 안내",
                         en: "Inaugural General Assembly of KSPAI" },
  "news1.excerpt":     { ko: "한국피지컬AI학회의 창립총회가 개최될 예정입니다. 피지컬 AI 분야에 관심 있는 연구자, 교육자, 산업체 관계자 여러분의 많은 참여 부탁드립니다. 학회의 비전과 방향, 초대 임원 선출, 사업 계획 등이 논의됩니다.",
                         en: "The inaugural general assembly of the Korean Society of Physical AI will be held soon. We welcome researchers, educators, and industry professionals with an interest in Physical AI. The assembly will cover the society's vision, election of founding officers, and strategic plans." },
  "news1.date":        { ko: "일정 확정 후 공지 예정",
                         en: "Date to be announced" },

  "news2.tag":         { ko: "CALL FOR PAPERS", en: "CALL FOR PAPERS" },
  "news2.title":       { ko: "창간호 논문 모집 (준비중)",
                         en: "Call for Papers — Inaugural Issue (In Preparation)" },
  "news2.excerpt":     { ko: "학회 학술지 창간호 발간을 위한 논문 모집이 준비되고 있습니다.",
                         en: "Paper submissions for the inaugural issue of the society journal are being prepared." },
  "news2.date":        { ko: "Coming Soon", en: "Coming Soon" },

  "news3.tag":         { ko: "EVENT", en: "EVENT" },
  "news3.title":       { ko: "제1회 학술대회 (준비중)",
                         en: "1st Annual Conference (In Preparation)" },
  "news3.excerpt":     { ko: "제1회 한국피지컬AI학회 학술대회 개최가 계획되고 있습니다.",
                         en: "The 1st KSPAI Annual Conference is currently being planned." },
  "news3.date":        { ko: "Coming Soon", en: "Coming Soon" },

  // ── CTA / MEMBERSHIP ──
  "cta.label":     { ko: "Membership",  en: "Membership" },
  "cta.title":   { ko: "함께 만들어가는<br>피지컬 AI의 미래",
                   en: "Shaping the Future of<br>Physical AI — Together" },
  "cta.desc":      { ko: "연구자, 교육자, 대학원생, 산업체 관계자 등 피지컬 AI에 관심 있는 모든 분의 참여를 환영합니다.",
                     en: "We welcome researchers, educators, graduate students, and industry professionals — everyone with an interest in Physical AI." },
  "cta.btn.join":  { ko: "회원가입 문의 →", en: "Membership Inquiry →" },
  "cta.btn.contact": { ko: "연락처 보기",   en: "Contact Us" },

  // ── CONTACT SECTION ──
  "contact.label":     { ko: "Contact",   en: "Contact" },
  "contact.title":     { ko: "연락처",     en: "Contact Us" },
  "contact.subtitle":  { ko: "학회 및 연구소에 대한 문의사항이 있으시면 연락해 주세요.",
                         en: "For inquiries about the Society or Research Institute, please reach out." },
  "contact.society":   { ko: "한국피지컬AI학회",
                         en: "Korean Society of Physical AI" },
  "contact.institute": { ko: "한국피지컬AI교육연구소",
                         en: "Korean Institute of Physical AI Education & Research" },
  "contact.address":   { ko: "소재지 확정 후 공지 예정",
                         en: "Address to be announced" },
  "contact.phone":     { ko: "연락처 확정 후 공지 예정",
                         en: "Phone number to be announced" },

  // ── FOOTER ──
  "footer.about":      { ko: "물리적 세계와 인공지능의 융합을 선도하는 학술 공동체. 체화지능, 로보틱스, 자율시스템, 디지털 트윈 등 피지컬 AI의 핵심 분야를 연구합니다.",
                         en: "An academic community leading the convergence of the physical world and AI. We research core areas of Physical AI including embodied intelligence, robotics, autonomous systems, and digital twins." },
  "footer.col.society":   { ko: "학회",       en: "Society" },
  "footer.col.academic":  { ko: "학술활동",    en: "Academic" },
  "footer.col.join":      { ko: "참여",       en: "Participate" },
  "footer.society.about":   { ko: "학회소개",     en: "About" },
  "footer.society.research":{ ko: "연구분야",     en: "Research" },
  "footer.society.officers":{ ko: "임원진",      en: "Officers" },
  "footer.society.bylaws":  { ko: "정관",        en: "Bylaws" },
  "footer.academic.conf":   { ko: "학술대회",     en: "Conferences" },
  "footer.academic.submit": { ko: "논문투고",     en: "Submit a Paper" },
  "footer.academic.journal":{ ko: "학회지",      en: "Journal" },
  "footer.academic.seminar":{ ko: "세미나",      en: "Seminars" },
  "footer.join.membership": { ko: "회원가입",     en: "Membership" },
  "footer.join.notice":     { ko: "공지사항",     en: "Notices" },
  "footer.join.contact":    { ko: "문의하기",     en: "Contact" },
  "footer.join.privacy":    { ko: "개인정보처리방침", en: "Privacy Policy" },
};


// ═══════════════════════════════════════
//  Language engine
// ═══════════════════════════════════════

let currentLang = localStorage.getItem('kspai-lang') || 'ko';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('kspai-lang', lang);
  document.documentElement.setAttribute('lang', lang);

  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const entry = translations[key];
    if (!entry) return;

    // Support innerHTML for elements that contain <br> or <span>
    if (el.hasAttribute('data-i18n-html')) {
      el.innerHTML = entry[lang];
    } else {
      el.textContent = entry[lang];
    }
  });

  // Update the toggle button label
  const btn = document.querySelector('.lang-toggle');
  if (btn) {
    btn.textContent = lang === 'ko' ? 'EN' : 'KO';
    btn.setAttribute('aria-label',
      lang === 'ko' ? 'Switch to English' : '한국어로 전환');
  }

  // Update <html lang="">
  document.documentElement.lang = lang;
}

function toggleLang() {
  setLang(currentLang === 'ko' ? 'en' : 'ko');
}

// Apply saved language on page load
document.addEventListener('DOMContentLoaded', () => {
  setLang(currentLang);
});
