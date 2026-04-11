---
layout: page
title_ko: 학회소개
title_en: About KSPAI
subtitle_ko: 한국피지컬AI학회 및 한국피지컬AI교육연구소 소개
subtitle_en: About the Korean Society of Physical AI and its sister institute
permalink: /about/
---

<style>
/* ── Greeting section ── */
.greeting-card {
  display: flex;
  gap: 48px;
  align-items: flex-start;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 48px;
  margin-bottom: 32px;
  position: relative;
  overflow: hidden;
}
.greeting-card::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
}
.greeting-quote-mark {
  font-family: var(--font-title-en);
  font-size: 120px;
  line-height: 0.7;
  color: var(--accent-primary);
  opacity: 0.15;
  flex-shrink: 0;
  user-select: none;
  padding-top: 16px;
}
.greeting-body { flex: 1; }
.greeting-text {
  font-size: 16px;
  line-height: 2.0;
  color: var(--text-body);
  margin-bottom: 28px;
}
.greeting-text p { margin-bottom: 1.2em; }
.greeting-text p:last-child { margin-bottom: 0; }
.greeting-sig {
  display: flex;
  align-items: center;
  gap: 16px;
  padding-top: 20px;
  border-top: 1px solid var(--border-subtle);
}
.greeting-sig-avatar {
  width: 52px; height: 52px; border-radius: 50%;
  background: linear-gradient(135deg, var(--color-blue-700), var(--color-blue-900));
  display: flex; align-items: center; justify-content: center;
  font-size: 22px; flex-shrink: 0;
}
.greeting-sig-name { font-size: 15px; font-weight: 700; }
.greeting-sig-title { font-size: 12px; color: var(--text-muted); margin-top: 2px; }

/* ── Timeline ── */
.timeline {
  position: relative;
  padding-left: 32px;
}
.timeline::before {
  content: '';
  position: absolute;
  left: 7px; top: 8px; bottom: 8px;
  width: 2px;
  background: linear-gradient(180deg, var(--accent-primary), var(--accent-secondary), transparent);
  border-radius: 2px;
}
.timeline-item {
  position: relative;
  padding: 0 0 32px 24px;
}
.timeline-item:last-child { padding-bottom: 0; }
.timeline-dot {
  position: absolute;
  left: -25px;
  top: 6px;
  width: 12px; height: 12px;
  border-radius: 50%;
  background: var(--accent-primary);
  border: 2px solid var(--bg-base);
  box-shadow: 0 0 0 2px var(--accent-primary);
  flex-shrink: 0;
}
.timeline-dot.pending {
  background: var(--border-subtle);
  box-shadow: 0 0 0 2px var(--border-subtle);
}
.timeline-year {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--accent-primary);
  letter-spacing: 1px;
  margin-bottom: 4px;
  text-transform: uppercase;
}
.timeline-year.pending { color: var(--text-muted); }
.timeline-title {
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 4px;
}
.timeline-desc {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.7;
}

/* ── Mission pillars ── */
.mission-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 8px;
}
.mission-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 28px 24px;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.mission-card:hover {
  border-color: var(--border-accent);
  box-shadow: var(--shadow-md);
}
.mission-icon {
  font-size: 28px;
  margin-bottom: 14px;
  display: block;
}
.mission-title {
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 8px;
}
.mission-desc {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.7;
}

/* ── Scope callout box ── */
.scope-box {
  background: linear-gradient(135deg, rgba(37,133,243,0.06), rgba(36,255,252,0.03));
  border: 1px solid var(--border-accent);
  border-radius: var(--radius-lg);
  padding: 32px 36px;
  margin-bottom: 0;
}
.scope-box-title {
  font-family: var(--font-mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--accent-primary);
  margin-bottom: 14px;
}
.scope-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.scope-tag {
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  background: rgba(37,133,243,0.07);
  border: 1px solid var(--border-blue);
  color: var(--text-primary);
  white-space: nowrap;
}

@media (max-width: 768px) {
  .greeting-card { flex-direction: column; gap: 0; padding: 32px 24px; }
  .greeting-quote-mark { display: none; }
  .mission-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 480px) {
  .mission-grid { grid-template-columns: 1fr; }
}
</style>

<div class="page-article page-article--has-hero">
<div class="container">

<!-- ════════════════════════════════
     GREETING
     ════════════════════════════════ -->
<div class="page-section" id="greeting">
  <h2 class="page-section-title">
    <span data-lang="ko">설립자 인사말</span>
    <span data-lang="en">Founder's Greeting</span>
  </h2>

  <div class="greeting-card">
    <div class="greeting-quote-mark">"</div>
    <div class="greeting-body">
      <div class="greeting-text">
        <p>
          <span data-lang="ko">피지컬 AI(Physical AI)는 디지털 지능이 물리적 세계와 만나는 경계에서 탄생하는 새로운 패러다임입니다. 로봇이 사람의 손길처럼 섬세하게 물체를 다루고, 자율 시스템이 복잡한 환경을 스스로 이해하며, 디지털 트윈이 현실의 쌍둥이로서 의사결정을 돕는 시대가 빠르게 다가오고 있습니다.</span>
          <span data-lang="en">Physical AI is a new paradigm born at the boundary where digital intelligence meets the physical world. The era is rapidly approaching in which robots manipulate objects with the delicacy of human hands, autonomous systems independently understand complex environments, and digital twins serve as real-world counterparts that inform decision-making.</span>
        </p>
        <p>
          <span data-lang="ko">한국은 세계 최고 수준의 제조업 기반과 ICT 인프라를 바탕으로 피지컬 AI 분야에서 선도적인 역할을 담당할 역량을 충분히 갖추고 있습니다. 그러나 이 잠재력이 실현되기 위해서는 학문적 토대를 다지고, 연구자와 교육자, 산업체 전문가들이 함께 모일 구심점이 필요합니다.</span>
          <span data-lang="en">Korea possesses the capacity to play a leading role in Physical AI, grounded in its world-class manufacturing base and ICT infrastructure. Yet realizing that potential requires a solid academic foundation and a gathering point where researchers, educators, and industry professionals can come together.</span>
        </p>
        <p>
          <span data-lang="ko">한국피지컬AI학회와 한국피지컬AI교육연구소는 바로 그 구심점이 되고자 설립되었습니다. 연구의 최전선에서 이루어지는 발견들이 교육 현장과 산업 현장으로 이어지고, 다시 새로운 연구의 씨앗이 되는 선순환의 생태계를 만들어 나가겠습니다. 피지컬 AI의 미래를 함께 만들어갈 여러분의 동참을 환영합니다.</span>
          <span data-lang="en">The Korean Society of Physical AI and the Korean Institute of Physical AI Education and Research were established to be exactly that gathering point. We will build a virtuous ecosystem in which discoveries at the research frontier flow into education and industry, and in turn give rise to new research. We warmly welcome you to join us in shaping the future of Physical AI.</span>
        </p>
      </div>
      <div class="greeting-sig">
        <div class="greeting-sig-avatar">🤖</div>
        <div>
          <div class="greeting-sig-name">
            <span data-lang="ko">한국피지컬AI학회 설립자·이사회 의장</span>
            <span data-lang="en">Founder & Board Chair, KSPAI</span>
          </div>
          <div class="greeting-sig-title">
            <span data-lang="ko">한국피지컬AI학회 / 한국피지컬AI교육연구소</span>
            <span data-lang="en">Korean Society of Physical AI / Korean Institute of Physical AI Education & Research</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ════════════════════════════════
     ABOUT THE SOCIETY
     ════════════════════════════════ -->
<div class="page-section" id="society">
  <h2 class="page-section-title">
    <span data-lang="ko">학회 소개</span>
    <span data-lang="en">About the Society</span>
  </h2>
  <p class="page-section-text">
    <span data-lang="ko"><strong>한국피지컬AI학회(KSPAI)</strong>는 피지컬 AI 분야의 학술 연구와 기술 발전을 선도하기 위해 2025년 설립된 국내 최초의 피지컬 AI 전문 학술단체입니다. 로보틱스, 체화지능, 자율시스템, 디지털 트윈, 인간-로봇 상호작용 등을 핵심 연구 분야로 삼으며, 학술지 발행·학술대회 개최·산학연 협력을 통해 피지컬 AI 생태계를 구축해 나갑니다.</span>
    <span data-lang="en">The <strong>Korean Society of Physical AI (KSPAI)</strong> was founded in 2025 as Korea's first dedicated academic society for Physical AI. With robotics, embodied intelligence, autonomous systems, digital twins, and human-robot interaction as its core research areas, KSPAI advances the Physical AI ecosystem through journal publication, academic conferences, and industry–academia–research collaboration.</span>
  </p>

  <div class="mission-grid">
    <div class="mission-card">
      <span class="mission-icon">📖</span>
      <div class="mission-title">
        <span data-lang="ko">학술 연구</span>
        <span data-lang="en">Scholarly Research</span>
      </div>
      <p class="mission-desc">
        <span data-lang="ko">학술지 「피지컬 AI 연구」 발행 및 엄격한 동료 심사를 통해 피지컬 AI 분야의 연구 수준을 높입니다.</span>
        <span data-lang="en">Advancing research quality in Physical AI through the publication of <em>Physical AI Research</em> (PAIJ) and rigorous peer review.</span>
      </p>
    </div>
    <div class="mission-card">
      <span class="mission-icon">🎤</span>
      <div class="mission-title">
        <span data-lang="ko">학술 교류</span>
        <span data-lang="en">Academic Exchange</span>
      </div>
      <p class="mission-desc">
        <span data-lang="ko">연차 학술대회, 워크숍, 세미나를 통해 국내외 연구자들이 최신 연구를 발표하고 교류하는 장을 마련합니다.</span>
        <span data-lang="en">Providing platforms for domestic and international researchers to present and discuss cutting-edge work through annual conferences, workshops, and seminars.</span>
      </p>
    </div>
    <div class="mission-card">
      <span class="mission-icon">🤝</span>
      <div class="mission-title">
        <span data-lang="ko">산학연 협력</span>
        <span data-lang="en">Industry Collaboration</span>
      </div>
      <p class="mission-desc">
        <span data-lang="ko">대학, 연구소, 기업을 연결하는 산학연 공동 연구 프로젝트와 기술 이전을 촉진합니다.</span>
        <span data-lang="en">Facilitating joint research projects and technology transfer that connect universities, research institutes, and industry.</span>
      </p>
    </div>
    <div class="mission-card">
      <span class="mission-icon">🌏</span>
      <div class="mission-title">
        <span data-lang="ko">국제 협력</span>
        <span data-lang="en">International Ties</span>
      </div>
      <p class="mission-desc">
        <span data-lang="ko">해외 학술단체 및 연구기관과의 협력을 통해 한국 피지컬 AI 연구의 국제적 위상을 높입니다.</span>
        <span data-lang="en">Raising the international profile of Korean Physical AI research through partnerships with overseas academic societies and research institutions.</span>
      </p>
    </div>
    <div class="mission-card">
      <span class="mission-icon">🎓</span>
      <div class="mission-title">
        <span data-lang="ko">인재 양성</span>
        <span data-lang="en">Talent Development</span>
      </div>
      <p class="mission-desc">
        <span data-lang="ko">차세대 피지컬 AI 연구자와 엔지니어 양성을 위한 학술 지원 및 경력 개발 프로그램을 운영합니다.</span>
        <span data-lang="en">Supporting the next generation of Physical AI researchers and engineers through academic support and career development programs.</span>
      </p>
    </div>
    <div class="mission-card">
      <span class="mission-icon">📢</span>
      <div class="mission-title">
        <span data-lang="ko">정책 기여</span>
        <span data-lang="en">Policy Contribution</span>
      </div>
      <p class="mission-desc">
        <span data-lang="ko">피지컬 AI 관련 국가 연구·교육 정책 수립에 전문가 집단으로서 적극적으로 기여합니다.</span>
        <span data-lang="en">Contributing as an expert body to national research and education policy development related to Physical AI.</span>
      </p>
    </div>
  </div>
</div>

<!-- ════════════════════════════════
     ABOUT THE INSTITUTE
     ════════════════════════════════ -->
<div class="page-section" id="institute">
  <h2 class="page-section-title">
    <span data-lang="ko">교육연구소 소개</span>
    <span data-lang="en">About the Institute</span>
  </h2>
  <p class="page-section-text">
    <span data-lang="ko"><strong>한국피지컬AI교육연구소</strong>는 피지컬 AI 분야의 교육 역량을 체계적으로 구축하기 위해 설립된 자매 기관입니다. 학회가 연구 중심의 학술 활동에 집중하는 반면, 교육연구소는 피지컬 AI 교육 과정 개발, 교원 연수, 실습 콘텐츠 제작 및 교육 효과성 연구에 특화되어 있습니다.</span>
    <span data-lang="en">The <strong>Korean Institute of Physical AI Education and Research</strong> is a sister organization established to systematically build educational capacity in Physical AI. While KSPAI focuses on research-centered academic activities, the Institute specializes in Physical AI curriculum development, teacher training, hands-on content creation, and educational effectiveness research.</span>
  </p>

  <div class="about-full-card">
    <div class="about-full-header">
      <div class="org-icon institute" style="margin-bottom: 0;">🏫</div>
      <div>
        <strong style="font-size: 18px;">
          <span data-lang="ko">한국피지컬AI교육연구소</span>
          <span data-lang="en">Korean Institute of Physical AI Education & Research</span>
        </strong>
        <div style="font-size: 13px; color: var(--text-muted); margin-top: 3px;">
          <span data-lang="ko">Korean Institute of Physical AI Education & Research</span>
          <span data-lang="en">한국피지컬AI교육연구소</span>
        </div>
      </div>
    </div>
    <div class="about-features-grid">
      <div class="about-feature-item">
        <span class="about-feature-icon">📐</span>
        <div>
          <strong><span data-lang="ko">교육 커리큘럼 개발</span><span data-lang="en">Curriculum Development</span></strong>
          <p><span data-lang="ko">초·중·고·대학·대학원 각 수준에 맞는 피지컬 AI 교육 과정 설계 및 표준화</span><span data-lang="en">Design and standardization of Physical AI curricula for K–12, undergraduate, and graduate levels</span></p>
        </div>
      </div>
      <div class="about-feature-item">
        <span class="about-feature-icon">👩‍🏫</span>
        <div>
          <strong><span data-lang="ko">교원 연수</span><span data-lang="en">Teacher Training</span></strong>
          <p><span data-lang="ko">피지컬 AI 교육 역량 강화를 위한 현직 교원 및 예비 교원 대상 연수 프로그램 운영</span><span data-lang="en">In-service and pre-service teacher training programs to strengthen Physical AI teaching competencies</span></p>
        </div>
      </div>
      <div class="about-feature-item">
        <span class="about-feature-icon">🛠️</span>
        <div>
          <strong><span data-lang="ko">실습 콘텐츠</span><span data-lang="en">Hands-on Content</span></strong>
          <p><span data-lang="ko">로보틱스·자율시스템 등 피지컬 AI 주요 분야의 실험·실습 교재 및 키트 개발</span><span data-lang="en">Development of experimental and hands-on teaching materials and kits for robotics, autonomous systems, and related Physical AI areas</span></p>
        </div>
      </div>
      <div class="about-feature-item">
        <span class="about-feature-icon">📊</span>
        <div>
          <strong><span data-lang="ko">교육 효과성 연구</span><span data-lang="en">Effectiveness Research</span></strong>
          <p><span data-lang="ko">피지컬 AI 교육 프로그램의 효과성을 측정·분석하고 근거 기반의 교육 개선 방안을 제시</span><span data-lang="en">Measuring and analyzing the effectiveness of Physical AI education programs and proposing evidence-based improvements</span></p>
        </div>
      </div>
      <div class="about-feature-item">
        <span class="about-feature-icon">🏭</span>
        <div>
          <strong><span data-lang="ko">산업 맞춤 교육</span><span data-lang="en">Industry Training</span></strong>
          <p><span data-lang="ko">피지컬 AI 관련 기업 및 기관의 임직원을 위한 맞춤형 직무 교육 프로그램 개발·운영</span><span data-lang="en">Development and delivery of tailored professional training programs for employees of Physical AI-related companies and organizations</span></p>
        </div>
      </div>
      <div class="about-feature-item">
        <span class="about-feature-icon">🌐</span>
        <div>
          <strong><span data-lang="ko">국제 교육 협력</span><span data-lang="en">International Education Cooperation</span></strong>
          <p><span data-lang="ko">해외 교육기관과의 피지컬 AI 교육 과정 공동 개발 및 교환 프로그램 운영</span><span data-lang="en">Joint curriculum development and exchange programs with international educational institutions</span></p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ════════════════════════════════
     RESEARCH SCOPE
     ════════════════════════════════ -->
<div class="page-section" id="scope">
  <h2 class="page-section-title">
    <span data-lang="ko">핵심 연구 분야</span>
    <span data-lang="en">Core Research Scope</span>
  </h2>
  <p class="page-section-text">
    <span data-lang="ko">한국피지컬AI학회는 다음 6대 핵심 분야와 이와 융합된 모든 연구를 포괄합니다.</span>
    <span data-lang="en">KSPAI encompasses the following six core research areas and all interdisciplinary research connected to them.</span>
  </p>
  <div class="scope-box">
    <div class="scope-box-title">Research Areas</div>
    <div class="scope-tags">
      <span class="scope-tag"><span data-lang="ko">🤖 로보틱스</span><span data-lang="en">🤖 Robotics</span></span>
      <span class="scope-tag"><span data-lang="ko">🧠 체화지능</span><span data-lang="en">🧠 Embodied Intelligence</span></span>
      <span class="scope-tag"><span data-lang="ko">🚗 자율시스템</span><span data-lang="en">🚗 Autonomous Systems</span></span>
      <span class="scope-tag"><span data-lang="ko">🪞 디지털 트윈</span><span data-lang="en">🪞 Digital Twin</span></span>
      <span class="scope-tag"><span data-lang="ko">🤝 인간-로봇 상호작용</span><span data-lang="en">🤝 Human-Robot Interaction</span></span>
      <span class="scope-tag"><span data-lang="ko">📚 피지컬 AI 교육</span><span data-lang="en">📚 Physical AI Education</span></span>
    </div>
  </div>
  <div style="margin-top: 20px;">
    <a href="/research/" class="btn btn-outline">
      <span data-lang="ko">연구 분야 상세 보기 →</span>
      <span data-lang="en">Explore Research Areas →</span>
    </a>
  </div>
</div>

<!-- ════════════════════════════════
     FOUNDING TIMELINE
     ════════════════════════════════ -->
<div class="page-section" id="history">
  <h2 class="page-section-title">
    <span data-lang="ko">연혁</span>
    <span data-lang="en">History</span>
  </h2>
  <p class="page-section-text">
    <span data-lang="ko">한국피지컬AI학회의 설립 과정을 연혁으로 정리합니다.</span>
    <span data-lang="en">A timeline of key milestones in the founding of the Korean Society of Physical AI.</span>
  </p>

  <div class="timeline">

    <div class="timeline-item">
      <span class="timeline-dot"></span>
      <div class="timeline-year">2025</div>
      <div class="timeline-title">
        <span data-lang="ko">설립 준비 착수</span>
        <span data-lang="en">Founding preparation begins</span>
      </div>
      <p class="timeline-desc">
        <span data-lang="ko">피지컬 AI 분야의 전문 학술단체 설립 필요성 논의 시작. 설립준비위원회 구성 및 정관 초안 작성.</span>
        <span data-lang="en">Discussion begins on the need for a dedicated Physical AI academic society. Founding Preparatory Committee formed and draft bylaws prepared.</span>
      </p>
    </div>

    <div class="timeline-item">
      <span class="timeline-dot"></span>
      <div class="timeline-year">2025</div>
      <div class="timeline-title">
        <span data-lang="ko">한국피지컬AI학회·교육연구소 설립</span>
        <span data-lang="en">KSPAI &amp; Institute established</span>
      </div>
      <p class="timeline-desc">
        <span data-lang="ko">한국피지컬AI학회(KSPAI) 및 한국피지컬AI교육연구소 공식 설립. 설립준비위원회 체제 운영 개시.</span>
        <span data-lang="en">Official establishment of the Korean Society of Physical AI (KSPAI) and the Korean Institute of Physical AI Education and Research. Operations begin under the Founding Preparatory Committee structure.</span>
      </p>
    </div>

    <div class="timeline-item">
      <span class="timeline-dot"></span>
      <div class="timeline-year">2025</div>
      <div class="timeline-title">
        <span data-lang="ko">공식 홈페이지 개설 (kspai.org)</span>
        <span data-lang="en">Official website launched (kspai.org)</span>
      </div>
      <p class="timeline-desc">
        <span data-lang="ko">학회 공식 홈페이지(kspai.org) 개설 및 이중 언어(한국어·영어) 서비스 시작.</span>
        <span data-lang="en">Official bilingual website launched at kspai.org.</span>
      </p>
    </div>

    <div class="timeline-item">
      <span class="timeline-dot pending"></span>
      <div class="timeline-year pending">
        <span data-lang="ko">예정</span>
        <span data-lang="en">Planned</span>
      </div>
      <div class="timeline-title" style="color: var(--text-muted);">
        <span data-lang="ko">창립총회 개최 및 초대 회장 선출</span>
        <span data-lang="en">Inaugural General Assembly &amp; President elected</span>
      </div>
      <p class="timeline-desc">
        <span data-lang="ko">창립총회 개최, 정관 확정, 초대 회장 및 임원진 선출. 학회 공식 출범.</span>
        <span data-lang="en">Inaugural general assembly; bylaws finalized; first President and officers elected; Society officially launched.</span>
      </p>
    </div>

    <div class="timeline-item">
      <span class="timeline-dot pending"></span>
      <div class="timeline-year pending">
        <span data-lang="ko">예정</span>
        <span data-lang="en">Planned</span>
      </div>
      <div class="timeline-title" style="color: var(--text-muted);">
        <span data-lang="ko">창립 학술대회 개최</span>
        <span data-lang="en">Inaugural academic conference</span>
      </div>
      <p class="timeline-desc">
        <span data-lang="ko">한국피지컬AI학회 첫 번째 학술대회 개최. 구두 발표, 포스터 세션, 기조 강연 등 진행.</span>
        <span data-lang="en">KSPAI's first academic conference, featuring oral presentations, poster sessions, and keynote lectures.</span>
      </p>
    </div>

    <div class="timeline-item">
      <span class="timeline-dot pending"></span>
      <div class="timeline-year pending">
        <span data-lang="ko">예정</span>
        <span data-lang="en">Planned</span>
      </div>
      <div class="timeline-title" style="color: var(--text-muted);">
        <span data-lang="ko">학술지 「피지컬 AI 연구」 창간호 발행</span>
        <span data-lang="en">Inaugural issue of <em>Physical AI Research</em> (PAIJ)</span>
      </div>
      <p class="timeline-desc">
        <span data-lang="ko">학회지 「피지컬 AI 연구(Physical AI Research, PAIJ)」 제1권 제1호 발행.</span>
        <span data-lang="en">Publication of Volume 1, Issue 1 of <em>Physical AI Research</em> (PAIJ).</span>
      </p>
    </div>

  </div>
</div>

<!-- CTA row -->
<div class="page-section" style="padding-top: 0;">
  <div style="display: flex; gap: 14px; flex-wrap: wrap;">
    <a href="/join/" class="btn btn-primary">
      <span data-lang="ko">회원가입 안내 →</span>
      <span data-lang="en">Join KSPAI →</span>
    </a>
    <a href="/officers/" class="btn btn-outline">
      <span data-lang="ko">임원진 보기</span>
      <span data-lang="en">Officers</span>
    </a>
    <a href="/bylaws/" class="btn btn-outline">
      <span data-lang="ko">정관</span>
      <span data-lang="en">Bylaws</span>
    </a>
  </div>
</div>

</div><!-- .container -->
</div><!-- .page-article -->
