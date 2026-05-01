---
layout: page
title: 학술대회
title_ko: 학술대회
title_en: Conferences & Events
subtitle_ko: 한국피지컬AI학회 학술행사 안내
subtitle_en: KSPAI Academic Conferences, Seminars &amp; Workshops
description: 한국피지컬AI학회(KSPAI) 학술대회 안내 — 예정 학술행사, 발표 논문 안내, 논문 양식 다운로드.
permalink: /conferences/
---

<style>
/* ── Conference hero card ── */
.conf-featured-card {
  background: linear-gradient(135deg, rgba(37,133,243,0.08), rgba(36,255,252,0.04));
  border: 1px solid var(--border-accent);
  border-radius: var(--radius-lg);
  padding: 40px;
  margin-bottom: 48px;
  position: relative;
  overflow: hidden;
}
.conf-featured-card::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
}
.conf-card-header {
  display: flex; align-items: center; gap: 12px;
  margin-bottom: 20px;
}
.conf-status-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--accent-primary);
  animation: pulse 2s ease-in-out infinite;
  flex-shrink: 0;
}
.conf-status-label {
  font-family: var(--font-mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--accent-primary);
}
.conf-title {
  font-family: var(--font-title-en);
  font-size: clamp(20px, 2.5vw, 26px);
  font-weight: 700;
  letter-spacing: -0.5px;
  margin-bottom: 12px;
}
.conf-desc {
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.8;
  max-width: 680px;
  margin-bottom: 24px;
}
.conf-meta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 28px;
}
.conf-meta-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.conf-meta-label {
  font-size: 10px;
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--text-muted);
}
.conf-meta-value {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
}

/* ── Download card ── */
.download-card {
  background: linear-gradient(135deg, rgba(37,133,243,0.07), rgba(36,255,252,0.04));
  border: 1px solid var(--border-accent);
  border-radius: var(--radius-lg);
  padding: 26px 30px;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 48px;
}
.download-card-icon {
  font-size: 30px;
  flex-shrink: 0;
  width: 56px; height: 56px;
  display: flex; align-items: center; justify-content: center;
  background: rgba(37,133,243,0.10);
  border-radius: var(--radius-md);
}
.download-card-body { flex: 1; }
.download-card-title { font-size: 15px; font-weight: 700; margin-bottom: 4px; }
.download-card-desc  { font-size: 13px; color: var(--text-secondary); line-height: 1.6; }
.download-card-actions { display: flex; gap: 10px; flex-wrap: wrap; flex-shrink: 0; }
.download-badge {
  display: inline-flex; align-items: center; gap: 6px;
  font-family: var(--font-mono); font-size: 10px;
  text-transform: uppercase; letter-spacing: 1px;
  color: var(--accent-primary);
  padding: 2px 9px;
  border: 1px solid var(--border-accent);
  border-radius: 20px;
  margin-bottom: 6px;
}
.btn-outline-cyan {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 11px 22px; border-radius: var(--radius-sm);
  font-size: 13px; font-weight: 600; text-decoration: none;
  transition: all 0.2s; cursor: pointer;
  background: transparent;
  border: 1px solid var(--accent-primary);
  color: var(--accent-primary);
  white-space: nowrap;
}
.btn-outline-cyan:hover {
  background: rgba(0,200,197,0.07);
}

/* ── Past conference list ── */
.past-conf-list {
  display: flex;
  flex-direction: column;
  gap: 0;
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  overflow: hidden;
}
.past-conf-item {
  display: flex; gap: 20px; align-items: center;
  padding: 18px 24px;
  border-bottom: 1px solid var(--border-subtle);
  transition: background 0.2s;
}
.past-conf-item:last-child { border-bottom: none; }
.past-conf-item:hover { background: var(--bg-card-hover); }
.past-conf-year {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--accent-primary);
  min-width: 60px;
  flex-shrink: 0;
}
.past-conf-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
}
.past-conf-sub {
  font-size: 12px;
  color: var(--text-muted);
  margin-top: 2px;
}

@media (max-width: 640px) {
  .conf-featured-card { padding: 28px 24px; }
  .conf-meta-row { gap: 14px; }
  .download-card { flex-direction: column; align-items: flex-start; padding: 22px; }
  .download-card-actions { width: 100%; }
}
</style>

<div class="page-article page-article--has-hero">
<div class="container">

<!-- ════════════════════════════════
     CONFERENCE TEMPLATE DOWNLOAD
     ════════════════════════════════ -->
<div class="page-section">
  <h2 class="page-section-title">
    <span data-lang="ko">논문 작성 양식</span>
    <span data-lang="en">Paper Templates</span>
  </h2>
  <p class="page-section-text">
    <span data-lang="ko">학술대회 발표 논문은 아래 양식을 사용하여 작성합니다. 학술지(JKPAI) 논문과 학술대회 발표 논문의 양식이 다르오니 반드시 해당 양식을 사용하시기 바랍니다.</span>
    <span data-lang="en">Conference presentation papers must use the template below. Note that the conference template and the journal (JKPAI) template are different — please use the correct version for each venue.</span>
  </p>

<div class="about-grid">
  <div class="download-card">
    <div class="download-card-icon">📄</div>
    <div class="download-card-body">
      <div class="download-badge"><span data-lang="ko">학술지 논문 양식</span><span data-lang="en">Journal Template</span></div>
      <div class="download-card-title">
        <span data-lang="ko">피지컬 AI 연구 (JKPAI) 논문 양식 — HWP</span>
        <span data-lang="en">Physical AI Research (JKPAI) Paper Template — HWP</span>
      </div>
      <p class="download-card-desc">
        <span data-lang="ko">학술지 「피지컬 AI 연구」에 투고하는 논문에 사용합니다.</span>
        <span data-lang="en">For papers submitted to the journal <em>Physical AI Research</em> (JKPAI).</span>
      </p>
    </div>
    <div class="download-card-actions">
      <a href="/assets/files/kspai-journal-template.hwp" class="btn btn-primary" download>
        <span data-lang="ko">↓ 학술지 양식</span>
        <span data-lang="en">↓ Journal Template</span>
      </a>
    </div>
  </div>

  <div class="download-card" style="border-color: rgba(240,112,48,0.25); background: linear-gradient(135deg, rgba(240,112,48,0.05), rgba(37,133,243,0.03));">
    <div class="download-card-icon" style="background: rgba(240,112,48,0.10);">🗂️</div>
    <div class="download-card-body">
      <div class="download-badge" style="color: var(--accent-orange); border-color: rgba(240,112,48,0.25);"><span data-lang="ko">학술대회 발표 논문 양식</span><span data-lang="en">Conference Template</span></div>
      <div class="download-card-title">
        <span data-lang="ko">한국피지컬AI학회 학술대회 발표 논문 양식 — HWP</span>
        <span data-lang="en">KSPAI Conference Paper Template — HWP</span>
      </div>
      <p class="download-card-desc">
        <span data-lang="ko">학술대회 발표 논문(구두 발표, 포스터 발표)에 사용합니다. 창립학술대회 이후 등록 예정입니다.</span>
        <span data-lang="en">For oral and poster presentations at KSPAI academic conferences. Template will be made available after the inaugural conference.</span>
      </p>
    </div>
    <div class="download-card-actions">
      <span class="btn-outline-cyan" style="opacity: 0.55; cursor: not-allowed; border-color: var(--accent-orange); color: var(--accent-orange);">
        <span data-lang="ko">준비 중</span>
        <span data-lang="en">Coming Soon</span>
      </span>
    </div>
  </div>
</div>

</div>
<!-- ════════════════════════════════
     UPCOMING CONFERENCE
     ════════════════════════════════ -->
<div class="page-section" id="upcoming">
  <h2 class="page-section-title">
    <span data-lang="ko">예정 학술행사</span>
    <span data-lang="en">Upcoming Events</span>
  </h2>

  <div class="conf-featured-card">
    <div class="conf-card-header">
      <span class="conf-status-dot"></span>
      <span class="conf-status-label">
        <span data-lang="ko">준비 중 · 창립학술대회</span>
        <span data-lang="en">Upcoming · Inaugural Conference</span>
      </span>
    </div>
    <h3 class="conf-title">
      <span data-lang="ko">한국피지컬AI학회 창립 학술대회</span>
      <span data-lang="en">KSPAI Inaugural Annual Conference</span>
    </h3>
    <p class="conf-desc">
      <span data-lang="ko">한국피지컬AI학회의 첫 번째 학술대회로, 피지컬 AI 분야의 최신 연구 성과를 발표하고 산학연 전문가들과 교류하는 자리입니다. 기조강연, 구두 발표, 포스터 세션, 특별 워크숍 등으로 구성될 예정입니다.</span>
      <span data-lang="en">The inaugural conference of the Korean Society of Physical AI, bringing together researchers from academia, industry, and research institutes to present and discuss the latest advances in Physical AI. The program will include keynote talks, oral presentations, poster sessions, and special workshops.</span>
    </p>
    <div class="conf-meta-row">
      <div class="conf-meta-item">
        <span class="conf-meta-label"><span data-lang="ko">일시</span><span data-lang="en">Date</span></span>
        <span class="conf-meta-value"><span data-lang="ko">추후 공지</span><span data-lang="en">To be announced</span></span>
      </div>
      <div class="conf-meta-item">
        <span class="conf-meta-label"><span data-lang="ko">장소</span><span data-lang="en">Venue</span></span>
        <span class="conf-meta-value"><span data-lang="ko">추후 공지</span><span data-lang="en">To be announced</span></span>
      </div>
      <div class="conf-meta-item">
        <span class="conf-meta-label"><span data-lang="ko">발표 형식</span><span data-lang="en">Formats</span></span>
        <span class="conf-meta-value"><span data-lang="ko">구두 / 포스터</span><span data-lang="en">Oral / Poster</span></span>
      </div>
      <div class="conf-meta-item">
        <span class="conf-meta-label">CFP</span>
        <span class="conf-meta-value"><span data-lang="ko">창립총회 이후 공지</span><span data-lang="en">After inaugural assembly</span></span>
      </div>
    </div>
    <div style="display: flex; gap: 12px; flex-wrap: wrap;">
      <a href="/news/" class="btn btn-primary" style="font-size: 13px; padding: 11px 22px;">
        <span data-lang="ko">소식 구독 →</span>
        <span data-lang="en">Follow News →</span>
      </a>
      <a href="/contact/" class="btn btn-outline" style="font-size: 13px; padding: 11px 22px;">
        <span data-lang="ko">문의하기</span>
        <span data-lang="en">Contact Us</span>
      </a>
    </div>
  </div>

</div>

<!-- ════════════════════════════════
     CFP GUIDE
     ════════════════════════════════ -->
<div class="page-section" id="cfp">
  <h2 class="page-section-title">
    <span data-lang="ko">발표 논문 안내</span>
    <span data-lang="en">Call for Papers — Guide</span>
  </h2>
  <p class="page-section-text">
    <span data-lang="ko">학술대회 발표 논문 접수 세부 사항은 각 행사의 Call for Papers 공고를 통해 안내됩니다. 아래는 일반 지침입니다.</span>
    <span data-lang="en">Detailed submission information is provided in each conference's Call for Papers announcement. The following are general guidelines.</span>
  </p>

  <div class="join-steps">

    <div class="join-step">
      <span class="join-step-num">01</span>
      <div>
        <strong><span data-lang="ko">발표 형식</span><span data-lang="en">Presentation Formats</span></strong>
        <p>
          <span data-lang="ko"><strong>구두 발표 (Oral Presentation)</strong>: 발표 15분 + 질의응답 5분<br>
          <strong>포스터 발표 (Poster Presentation)</strong>: 포스터 규격 및 세션 일정은 각 행사 공고 참조</span>
          <span data-lang="en"><strong>Oral Presentation</strong>: 15-minute presentation + 5-minute Q&amp;A<br>
          <strong>Poster Presentation</strong>: See individual conference announcements for poster dimensions and session schedule.</span>
        </p>
      </div>
    </div>

    <div class="join-step">
      <span class="join-step-num">02</span>
      <div>
        <strong><span data-lang="ko">발표 분야</span><span data-lang="en">Topics</span></strong>
        <p>
          <span data-lang="ko">로보틱스, 체화지능, 자율시스템, 디지털 트윈, 인간-로봇 상호작용, 피지컬 AI 교육 및 이와 융합된 제반 분야.</span>
          <span data-lang="en">Robotics, Embodied Intelligence, Autonomous Systems, Digital Twin, Human-Robot Interaction, Physical AI Education, and related interdisciplinary fields.</span>
        </p>
      </div>
    </div>

    <div class="join-step">
      <span class="join-step-num">03</span>
      <div>
        <strong><span data-lang="ko">논문 양식</span><span data-lang="en">Paper Template</span></strong>
        <p>
          <span data-lang="ko">학술대회 발표 논문은 학술지 양식과 별도의 학술대회 발표 논문 양식을 사용합니다. 창립학술대회 공고 시 양식이 함께 배포될 예정입니다.</span>
          <span data-lang="en">Conference papers use a separate template from the journal. The conference template will be distributed with the inaugural conference announcement.</span>
        </p>
      </div>
    </div>

    <div class="join-step">
      <span class="join-step-num">04</span>
      <div>
        <strong><span data-lang="ko">우수 논문 시상</span><span data-lang="en">Awards</span></strong>
        <p>
          <span data-lang="ko">학술대회에서 발표된 우수 논문에 대해 최우수상, 우수상, 대학(원)생 경진대회 수상 등을 수여할 예정입니다. 수상 논문의 학술지 투고를 장려합니다.</span>
          <span data="data-lang-en">Outstanding papers presented at the conference will be recognized with Best Paper Award, Excellence Award, and Student Competition awards. Award recipients are encouraged to submit their papers to the JKPAI journal.</span>
        </p>
      </div>
    </div>

    <div class="join-step">
      <span class="join-step-num">05</span>
      <div>
        <strong><span data-lang="ko">등록비</span><span data-lang="en">Registration Fee</span></strong>
        <p>
          <span data-lang="ko">학술대회 참가 등록비는 각 행사의 공고문을 통해 별도 안내됩니다.</span>
          <span data-lang="en">Conference registration fees will be announced separately in each event's official Call for Papers.</span>
        </p>
      </div>
    </div>

  </div>
</div>

<!-- ════════════════════════════════
     PAST CONFERENCES
     ════════════════════════════════ -->
<div class="page-section" id="past">
  <h2 class="page-section-title">
    <span data-lang="ko">지난 학술행사</span>
    <span data-lang="en">Past Events</span>
  </h2>

  <div class="coming-soon-banner">
    <span>🗓</span>
    <span>
      <span data-lang="ko">학회 창립 후 개최되는 첫 학술대회 기록부터 이 목록이 채워집니다.</span>
      <span data-lang="en">This list will be populated starting from the first conference held after the Society's official establishment.</span>
    </span>
  </div>
</div>

<!-- ════════════════════════════════
     SEMINARS CROSS-LINK
     ════════════════════════════════ -->
<div class="page-section" style="padding-top: 0;">
  <div class="about-full-card" style="display: flex; align-items: center; justify-content: space-between; gap: 20px; flex-wrap: wrap;">
    <div>
      <p style="font-size: 11px; font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 1px; color: var(--accent-primary); margin-bottom: 6px;">Related</p>
      <strong style="font-size: 17px;">
        <span data-lang="ko">세미나 시리즈</span>
        <span data-lang="en">Seminar Series</span>
      </strong>
      <p style="font-size: 14px; color: var(--text-secondary); margin-top: 6px;">
        <span data-lang="ko">학술대회 외에도 정기 세미나와 특별 강연이 진행됩니다.</span>
        <span data-lang="en">In addition to annual conferences, regular seminars and special lectures are held.</span>
      </p>
    </div>
    <a href="/seminars/" class="btn btn-outline" style="white-space: nowrap;">
      <span data-lang="ko">세미나 안내 →</span>
      <span data-lang="en">Seminars →</span>
    </a>
  </div>
</div>

</div><!-- .container -->
</div><!-- .page-article -->
