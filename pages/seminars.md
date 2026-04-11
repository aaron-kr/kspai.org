---
layout: page
title_ko: 세미나
title_en: Seminars & Lectures
subtitle_ko: 한국피지컬AI학회 세미나 시리즈
subtitle_en: KSPAI Seminar Series &amp; Special Lectures
permalink: /seminars/
---

<style>
/* ── Seminar series card ── */
.seminar-series-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 36px 40px;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.seminar-series-card:hover {
  border-color: var(--border-accent);
  box-shadow: var(--shadow-md);
}
.seminar-series-card::after {
  content: '';
  position: absolute; bottom: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
  transform: scaleX(0); transform-origin: left;
  transition: transform 0.3s ease;
}
.seminar-series-card:hover::after { transform: scaleX(1); }

.seminar-series-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}
.seminar-series-icon {
  width: 48px; height: 48px;
  border-radius: var(--radius-md);
  background: rgba(37,133,243,0.10);
  display: flex; align-items: center; justify-content: center;
  font-size: 22px;
  flex-shrink: 0;
}
.seminar-series-name {
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.3px;
  margin-bottom: 2px;
}
.seminar-series-en {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-muted);
  letter-spacing: 0.5px;
}
.seminar-series-desc {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 20px;
}
.seminar-meta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding-top: 16px;
  border-top: 1px solid var(--border-subtle);
}
.seminar-meta-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.seminar-meta-label {
  font-size: 10px;
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--text-muted);
}
.seminar-meta-value {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
}

/* ── Past seminar list ── */
.seminar-list {
  display: flex;
  flex-direction: column;
  gap: 0;
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  overflow: hidden;
}
.seminar-list-item {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  padding: 20px 24px;
  border-bottom: 1px solid var(--border-subtle);
  transition: background 0.15s;
}
.seminar-list-item:last-child { border-bottom: none; }
.seminar-list-item:hover { background: var(--bg-card-hover); }
.seminar-list-date {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--accent-primary);
  min-width: 80px;
  flex-shrink: 0;
  padding-top: 3px;
  letter-spacing: 0.5px;
}
.seminar-list-body { flex: 1; }
.seminar-list-title {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
}
.seminar-list-speaker {
  font-size: 12px;
  color: var(--text-muted);
}

/* ── How to participate ── */
.participate-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 8px;
}
.participate-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 24px;
  display: flex;
  gap: 16px;
  align-items: flex-start;
}
.participate-icon {
  font-size: 24px;
  flex-shrink: 0;
  padding-top: 2px;
}
.participate-title {
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 6px;
}
.participate-desc {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.7;
}

@media (max-width: 640px) {
  .seminar-series-card { padding: 28px 24px; }
  .seminar-list-item { flex-direction: column; gap: 6px; }
  .seminar-list-date { min-width: unset; }
  .participate-grid { grid-template-columns: 1fr; }
}
</style>

<div class="page-article page-article--has-hero">
<div class="container">

<!-- ════════════════════════════════
     INTRO
     ════════════════════════════════ -->
<div class="page-section" id="overview">
  <h2 class="page-section-title">
    <span data-lang="ko">세미나 시리즈 소개</span>
    <span data-lang="en">Seminar Series Overview</span>
  </h2>
  <p class="page-section-text">
    <span data-lang="ko">한국피지컬AI학회는 정기 연차 학술대회 외에도 다양한 세미나와 특별 강연을 운영합니다. 피지컬 AI 분야의 최전선 연구자, 산업 전문가, 해외 석학을 초청하여 최신 연구 성과와 기술 동향을 공유하는 자리입니다. 학회 회원과 비회원 모두 참여 가능합니다.</span>
    <span data-lang="en">Beyond its annual conference, KSPAI organizes a range of seminars and special lectures. These events invite leading researchers, industry experts, and international scholars in Physical AI to share the latest research outcomes and technology trends. Both members and non-members are welcome to participate.</span>
  </p>
</div>

<!-- ════════════════════════════════
     SERIES CARDS
     ════════════════════════════════ -->
<div class="page-section" id="series">
  <h2 class="page-section-title">
    <span data-lang="ko">정기 세미나 시리즈</span>
    <span data-lang="en">Regular Seminar Series</span>
  </h2>

  <!-- KSPAI Colloquium -->
  <div class="seminar-series-card">
    <div class="seminar-series-header">
      <div class="seminar-series-icon">🎙️</div>
      <div>
        <div class="seminar-series-name">
          <span data-lang="ko">KSPAI 콜로퀴엄</span>
          <span data-lang="en">KSPAI Colloquium</span>
        </div>
        <div class="seminar-series-en">KSPAI Colloquium Series</div>
      </div>
    </div>
    <p class="seminar-series-desc">
      <span data-lang="ko">피지컬 AI 분야의 저명 연구자를 초청하여 진행하는 학술 콜로퀴엄입니다. 최신 연구 동향과 미래 방향성을 심층적으로 논의하며, 발표 후 자유로운 질의응답 시간을 갖습니다. 매월 1회 온/오프라인 병행 방식으로 진행될 예정입니다.</span>
      <span data-lang="en">An academic colloquium series featuring invited talks by distinguished researchers in Physical AI. Sessions explore the latest research trends and future directions, with open Q&amp;A following each presentation. Planned as a monthly hybrid (in-person + online) event.</span>
    </p>
    <div class="seminar-meta-row">
      <div class="seminar-meta-item">
        <span class="seminar-meta-label"><span data-lang="ko">빈도</span><span data-lang="en">Frequency</span></span>
        <span class="seminar-meta-value"><span data-lang="ko">월 1회 (예정)</span><span data-lang="en">Monthly (planned)</span></span>
      </div>
      <div class="seminar-meta-item">
        <span class="seminar-meta-label"><span data-lang="ko">형식</span><span data-lang="en">Format</span></span>
        <span class="seminar-meta-value"><span data-lang="ko">초청 강연 + 질의응답</span><span data-lang="en">Invited talk + Q&amp;A</span></span>
      </div>
      <div class="seminar-meta-item">
        <span class="seminar-meta-label"><span data-lang="ko">방식</span><span data-lang="en">Mode</span></span>
        <span class="seminar-meta-value"><span data-lang="ko">온/오프라인 병행</span><span data-lang="en">Hybrid</span></span>
      </div>
      <div class="seminar-meta-item">
        <span class="seminar-meta-label"><span data-lang="ko">참가비</span><span data-lang="en">Fee</span></span>
        <span class="seminar-meta-value"><span data-lang="ko">무료 (비회원 포함)</span><span data-lang="en">Free (members & non-members)</span></span>
      </div>
    </div>
  </div>

  <!-- Research Ethics Seminar -->
  <div class="seminar-series-card">
    <div class="seminar-series-header">
      <div class="seminar-series-icon">📋</div>
      <div>
        <div class="seminar-series-name">
          <span data-lang="ko">연구윤리 세미나</span>
          <span data-lang="en">Research Ethics Seminar</span>
        </div>
        <div class="seminar-series-en">Research Ethics Education Series</div>
      </div>
    </div>
    <p class="seminar-series-desc">
      <span data-lang="ko">연구자들의 올바른 연구 윤리 의식 함양을 위한 정기 교육 세미나입니다. 표절, 위조·변조, 저자 표시, 이해충돌 등 연구자가 반드시 알아야 할 연구윤리 사항을 다룹니다. 한국피지컬AI학회에 논문을 투고하는 연구자에게 적극 권장합니다.</span>
      <span data-lang="en">A regular educational seminar to foster sound research ethics awareness among researchers. Topics include plagiarism, fabrication and falsification, authorship, and conflict of interest — the essential research ethics knowledge every researcher needs. Strongly recommended for researchers submitting to KSPAI journals.</span>
    </p>
    <div class="seminar-meta-row">
      <div class="seminar-meta-item">
        <span class="seminar-meta-label"><span data-lang="ko">빈도</span><span data-lang="en">Frequency</span></span>
        <span class="seminar-meta-value"><span data-lang="ko">연 2회 (예정)</span><span data-lang="en">Twice yearly (planned)</span></span>
      </div>
      <div class="seminar-meta-item">
        <span class="seminar-meta-label"><span data-lang="ko">형식</span><span data-lang="en">Format</span></span>
        <span class="seminar-meta-value"><span data-lang="ko">강의 + 사례 토론</span><span data-lang="en">Lecture + case discussion</span></span>
      </div>
      <div class="seminar-meta-item">
        <span class="seminar-meta-label"><span data-lang="ko">방식</span><span data-lang="en">Mode</span></span>
        <span class="seminar-meta-value"><span data-lang="ko">온라인</span><span data-lang="en">Online</span></span>
      </div>
      <div class="seminar-meta-item">
        <span class="seminar-meta-label"><span data-lang="ko">참가비</span><span data-lang="en">Fee</span></span>
        <span class="seminar-meta-value"><span data-lang="ko">무료</span><span data-lang="en">Free</span></span>
      </div>
    </div>
  </div>

  <!-- Industry-Academia Workshop -->
  <div class="seminar-series-card">
    <div class="seminar-series-header">
      <div class="seminar-series-icon">🏭</div>
      <div>
        <div class="seminar-series-name">
          <span data-lang="ko">산학연 워크숍</span>
          <span data-lang="en">Industry–Academia Workshop</span>
        </div>
        <div class="seminar-series-en">Physical AI Industry-Academia-Research Workshop</div>
      </div>
    </div>
    <p class="seminar-series-desc">
      <span data-lang="ko">피지컬 AI 관련 기업, 연구소, 대학의 전문가가 함께 참여하는 실무 중심 워크숍입니다. 산업 현장의 기술 문제와 학계의 연구 성과를 연결하고, 공동 연구 및 기술 이전의 기회를 모색합니다.</span>
      <span data-lang="en">A practice-oriented workshop bringing together professionals from Physical AI companies, research institutes, and universities. The workshop connects real-world technical challenges with academic research outcomes and explores opportunities for joint research and technology transfer.</span>
    </p>
    <div class="seminar-meta-row">
      <div class="seminar-meta-item">
        <span class="seminar-meta-label"><span data-lang="ko">빈도</span><span data-lang="en">Frequency</span></span>
        <span class="seminar-meta-value"><span data-lang="ko">연 1–2회 (예정)</span><span data-lang="en">1–2 times yearly (planned)</span></span>
      </div>
      <div class="seminar-meta-item">
        <span class="seminar-meta-label"><span data-lang="ko">형식</span><span data-lang="en">Format</span></span>
        <span class="seminar-meta-value"><span data-lang="ko">발표 + 네트워킹</span><span data-lang="en">Presentations + networking</span></span>
      </div>
      <div class="seminar-meta-item">
        <span class="seminar-meta-label"><span data-lang="ko">방식</span><span data-lang="en">Mode</span></span>
        <span class="seminar-meta-value"><span data-lang="ko">오프라인 (서울/대전 권역)</span><span data-lang="en">In-person (Seoul/Daejeon area)</span></span>
      </div>
    </div>
  </div>

  <!-- Special Lecture -->
  <div class="seminar-series-card">
    <div class="seminar-series-header">
      <div class="seminar-series-icon">🌍</div>
      <div>
        <div class="seminar-series-name">
          <span data-lang="ko">국제 특별 강연</span>
          <span data-lang="en">International Special Lecture</span>
        </div>
        <div class="seminar-series-en">KSPAI International Distinguished Lecture</div>
      </div>
    </div>
    <p class="seminar-series-desc">
      <span data-lang="ko">해외 저명 연구자를 초청하여 진행하는 특별 강연 시리즈입니다. 글로벌 피지컬 AI 연구 동향을 국내 연구자들과 직접 교류할 수 있는 기회를 제공합니다. 강연은 영어로 진행되며 한국어 통역이 제공될 수 있습니다.</span>
      <span data-lang="en">A special lecture series featuring invited talks by internationally distinguished researchers. This series provides Korean researchers with direct access to global Physical AI research trends. Lectures are conducted in English; Korean interpretation may be provided.</span>
    </p>
    <div class="seminar-meta-row">
      <div class="seminar-meta-item">
        <span class="seminar-meta-label"><span data-lang="ko">빈도</span><span data-lang="en">Frequency</span></span>
        <span class="seminar-meta-value"><span data-lang="ko">비정기</span><span data-lang="en">Irregular</span></span>
      </div>
      <div class="seminar-meta-item">
        <span class="seminar-meta-label"><span data-lang="ko">언어</span><span data-lang="en">Language</span></span>
        <span class="seminar-meta-value"><span data-lang="ko">영어 (통역 제공 가능)</span><span data-lang="en">English (with possible interpretation)</span></span>
      </div>
      <div class="seminar-meta-item">
        <span class="seminar-meta-label"><span data-lang="ko">방식</span><span data-lang="en">Mode</span></span>
        <span class="seminar-meta-value"><span data-lang="ko">온/오프라인 병행</span><span data-lang="en">Hybrid</span></span>
      </div>
    </div>
  </div>

</div>

<!-- ════════════════════════════════
     UPCOMING SEMINARS
     ════════════════════════════════ -->
<div class="page-section" id="upcoming">
  <h2 class="page-section-title">
    <span data-lang="ko">예정 세미나</span>
    <span data-lang="en">Upcoming Seminars</span>
  </h2>

  <div class="coming-soon-banner">
    <span>📅</span>
    <div>
      <span data-lang="ko"><strong>세미나 일정은 창립총회 이후 공지됩니다.</strong> 소식 페이지와 이메일 공지를 통해 안내드릴 예정입니다.</span>
      <span data-lang="en"><strong>Seminar schedules will be announced after the inaugural general assembly.</strong> Updates will be posted on the News page and distributed by email.</span>
    </div>
  </div>

  <div style="margin-top: 16px; display: flex; gap: 10px; flex-wrap: wrap;">
    <a href="/news/" class="btn btn-primary" style="font-size: 13px; padding: 11px 22px;">
      <span data-lang="ko">최신 소식 보기 →</span>
      <span data-lang="en">Latest News →</span>
    </a>
    <a href="/contact/" class="btn btn-outline" style="font-size: 13px; padding: 11px 22px;">
      <span data-lang="ko">세미나 문의</span>
      <span data-lang="en">Seminar Inquiry</span>
    </a>
  </div>
</div>

<!-- ════════════════════════════════
     PAST SEMINARS
     ════════════════════════════════ -->
<div class="page-section" id="past">
  <h2 class="page-section-title">
    <span data-lang="ko">지난 세미나</span>
    <span data-lang="en">Past Seminars</span>
  </h2>

  <div class="coming-soon-banner">
    <span>📂</span>
    <div>
      <span data-lang="ko">지난 세미나 기록은 학회 설립 후 첫 행사부터 이 목록에 추가됩니다.</span>
      <span data-lang="en">Records of past seminars will appear here starting from the first event after the Society's official establishment.</span>
    </div>
  </div>
</div>

<!-- ════════════════════════════════
     HOW TO PARTICIPATE
     ════════════════════════════════ -->
<div class="page-section" id="participate">
  <h2 class="page-section-title">
    <span data-lang="ko">참여 방법</span>
    <span data-lang="en">How to Participate</span>
  </h2>

  <div class="participate-grid">
    <div class="participate-card">
      <span class="participate-icon">📣</span>
      <div>
        <div class="participate-title">
          <span data-lang="ko">발표 신청</span>
          <span data-lang="en">Speaker Application</span>
        </div>
        <p class="participate-desc">
          <span data-lang="ko">콜로퀴엄 발표를 희망하시는 연구자는 학회 이메일로 발표 주제 및 초록을 보내주시면 편집위원회에서 검토 후 연락드립니다.</span>
          <span data-lang="en">Researchers interested in speaking at the colloquium are welcome to send their proposed topic and abstract to the Society email; the editorial committee will follow up.</span>
        </p>
        <div style="margin-top: 12px;">
          <a href="mailto:contact@physicalai.or.kr" style="font-size: 13px; color: var(--accent-primary); text-decoration: none;">contact@physicalai.or.kr →</a>
        </div>
      </div>
    </div>

    <div class="participate-card">
      <span class="participate-icon">🎧</span>
      <div>
        <div class="participate-title">
          <span data-lang="ko">청중 참가</span>
          <span data-lang="en">Attending</span>
        </div>
        <p class="participate-desc">
          <span data-lang="ko">세미나 참가 신청은 각 행사 공지에 포함된 링크를 통해 진행합니다. 대부분의 세미나는 무료로 운영되며 비회원도 참가 가능합니다.</span>
          <span data-lang="en">Registration for individual seminars is handled through the link included in each event announcement. Most seminars are free and open to non-members.</span>
        </p>
        <div style="margin-top: 12px;">
          <a href="/news/" style="font-size: 13px; color: var(--accent-primary); text-decoration: none;">
            <span data-lang="ko">공지사항 확인 →</span>
            <span data-lang="en">Check announcements →</span>
          </a>
        </div>
      </div>
    </div>

    <div class="participate-card">
      <span class="participate-icon">📹</span>
      <div>
        <div class="participate-title">
          <span data-lang="ko">녹화 자료</span>
          <span data-lang="en">Recordings</span>
        </div>
        <p class="participate-desc">
          <span data-lang="ko">발표자 동의 하에 일부 세미나는 녹화본이 학회 홈페이지 자료실에 업로드될 예정입니다.</span>
          <span data-lang="en">With speaker consent, recordings of selected seminars will be uploaded to the Society's website archive.</span>
        </p>
      </div>
    </div>

    <div class="participate-card">
      <span class="participate-icon">🤝</span>
      <div>
        <div class="participate-title">
          <span data-lang="ko">공동 주최 제안</span>
          <span data-lang="en">Co-hosting Proposals</span>
        </div>
        <p class="participate-desc">
          <span data-lang="ko">대학, 연구소, 기업에서 공동으로 세미나를 주최하고자 하신다면 학회 이메일로 제안해 주시기 바랍니다.</span>
          <span data-lang="en">Universities, research institutes, and companies interested in co-hosting a seminar are welcome to send a proposal to the Society.</span>
        </p>
        <div style="margin-top: 12px;">
          <a href="/contact/" style="font-size: 13px; color: var(--accent-primary); text-decoration: none;">
            <span data-lang="ko">문의하기 →</span>
            <span data-lang="en">Contact us →</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Cross-link to conferences -->
<div class="page-section" style="padding-top: 0;">
  <div class="about-full-card" style="display: flex; align-items: center; justify-content: space-between; gap: 20px; flex-wrap: wrap;">
    <div>
      <p style="font-size: 11px; font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 1px; color: var(--accent-primary); margin-bottom: 6px;">Related</p>
      <strong style="font-size: 17px;">
        <span data-lang="ko">연차 학술대회</span>
        <span data-lang="en">Annual Academic Conference</span>
      </strong>
      <p style="font-size: 14px; color: var(--text-secondary); margin-top: 6px;">
        <span data-lang="ko">세미나 외에도 연차 학술대회에서 연구 성과를 발표하실 수 있습니다.</span>
        <span data-lang="en">In addition to seminars, you can present your research at the annual academic conference.</span>
      </p>
    </div>
    <a href="/conferences/" class="btn btn-outline" style="white-space: nowrap;">
      <span data-lang="ko">학술대회 안내 →</span>
      <span data-lang="en">Conferences →</span>
    </a>
  </div>
</div>

</div><!-- .container -->
</div><!-- .page-article -->
