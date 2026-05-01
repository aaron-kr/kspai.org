---
layout: page
title: 학술지
title_ko: 학술지
title_en: Physical AI Research (JKPAI)
subtitle_ko: 피지컬 AI 연구 — 학술지 소개 및 규정
subtitle_en: Journal overview, submission, review &amp; ethics regulations
description: 한국피지컬AI학회 학술지 「피지컬 AI 연구」(JKPAI) 소개, 투고규정, 발행규정, 심사규정, 연구윤리규정 안내.
permalink: /journal/
---

<style>
/* ── In-page jump nav ── */
.page-jumpnav {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 48px;
  padding: 14px 18px;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
}
.page-jumpnav a {
  font-size: 12px;
  font-family: var(--font-mono);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--text-secondary);
  text-decoration: none;
  padding: 5px 12px;
  border-radius: 20px;
  border: 1px solid var(--border-subtle);
  transition: all 0.2s;
  white-space: nowrap;
}
.page-jumpnav a:hover {
  color: var(--accent-primary);
  border-color: var(--accent-primary);
  background: rgba(0,200,197,0.05);
}

/* ── Regulation block ── */
.regulation-block { margin-bottom: 48px; }
.regulation-block-title {
  font-family: var(--font-title-en);
  font-size: 19px;
  font-weight: 700;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--border-accent);
  display: flex;
  align-items: center;
  gap: 10px;
}
.regulation-block-title::before {
  content: '';
  display: inline-block;
  width: 4px;
  height: 18px;
  background: var(--accent-primary);
  border-radius: 2px;
  flex-shrink: 0;
}
.regulation-article {
  display: flex;
  gap: 20px;
  padding: 16px 0;
  border-bottom: 1px solid var(--border-subtle);
  font-size: 14px;
  color: var(--text-body);
  line-height: 1.9;
}
.regulation-article:last-child { border-bottom: none; }
.regulation-num {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--accent-primary);
  min-width: 60px;
  padding-top: 3px;
  flex-shrink: 0;
  letter-spacing: 0.5px;
}
.regulation-body { flex: 1; }
.regulation-body ol,
.regulation-body ul {
  margin: 10px 0 4px 22px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.regulation-body table {
  margin-top: 12px;
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
}
.regulation-body th {
  background: rgba(37,133,243,0.06);
  border: 1px solid var(--border-subtle);
  padding: 8px 12px;
  text-align: center;
  font-weight: 600;
}
.regulation-body td {
  border: 1px solid var(--border-subtle);
  padding: 8px 12px;
  text-align: center;
  color: var(--text-secondary);
}

/* ── Addendum block ── */
.addendum-block {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 16px 20px;
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-top: 12px;
}
.addendum-block strong { color: var(--text-primary); }

@media (max-width: 640px) {
  .regulation-article { flex-direction: column; gap: 4px; }
  .regulation-num { min-width: unset; }
}
</style>

<div class="page-article page-article--has-hero">
<div class="container">

<!-- ── Jump nav ── -->
<nav class="page-jumpnav" aria-label="Section navigation">
  <a href="#overview"><span data-lang="ko">학술지 소개</span><span data-lang="en">Overview</span></a>
  <a href="#submission-reg"><span data-lang="ko">투고규정</span><span data-lang="en">Submission Regs.</span></a>
  <a href="#publication-reg"><span data-lang="ko">발행규정</span><span data-lang="en">Publication Regs.</span></a>
  <a href="#review-reg"><span data-lang="ko">심사규정</span><span data-lang="en">Review Regs.</span></a>
  <a href="#ethics-reg"><span data-lang="ko">연구윤리규정</span><span data-lang="en">Ethics</span></a>
  <a href="#editorial-reg"><span data-lang="ko">편집위원회 규정</span><span data-lang="en">Editorial Board</span></a>
</nav>

<!-- ════════════════════════════════
     1. JOURNAL OVERVIEW
     ════════════════════════════════ -->
<div class="page-section" id="overview">
  <h2 class="page-section-title">
    <span data-lang="ko">학술지 소개</span>
    <span data-lang="en">Journal Overview</span>
  </h2>
  <p class="page-section-text">
    <span data-lang="ko"><strong>「피지컬 AI 연구」(Physical AI Research, JKPAI)</strong>는 한국피지컬AI학회가 발행하는 정기 학술지로서, 피지컬 AI의 이론적·응용적 연구 성과를 국내외에 소개하는 것을 목적으로 합니다. 로보틱스, 체화지능, 자율시스템, 디지털 트윈, 인간-로봇 상호작용, 피지컬 AI 교육 등 관련 모든 분야의 독창적인 연구 논문 및 종설 논문을 게재합니다.</span>
    <span data-lang="en"><strong><em>Physical AI Research</em> (JKPAI)</strong> is the peer-reviewed journal of the Korean Society of Physical AI (KSPAI). The journal publishes original research and review articles advancing theory and applications in Physical AI, including robotics, embodied intelligence, autonomous systems, digital twins, human-robot interaction, and Physical AI education.</span>
  </p>

  <div class="journal-meta-grid">
    <div class="journal-meta-item">
      <span style="font-size: 11px; font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 1px; color: var(--accent-primary);">JOURNAL NAME</span>
      <strong>피지컬 AI 연구 (Physical AI Research)</strong>
    </div>
    <div class="journal-meta-item">
      <span style="font-size: 11px; font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 1px; color: var(--accent-primary);">ABBREVIATION</span>
      <strong>JKPAI</strong>
    </div>
    <div class="journal-meta-item">
      <span style="font-size: 11px; font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 1px; color: var(--accent-primary);">PUBLISHER</span>
      <strong><span data-lang="ko">한국피지컬AI학회 (KSPAI)</span><span data-lang="en">Korean Society of Physical AI (KSPAI)</span></strong>
    </div>
    <div class="journal-meta-item">
      <span style="font-size: 11px; font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 1px; color: var(--accent-primary);">ISSN</span>
      <strong><span data-lang="ko">창간 후 부여 예정</span><span data-lang="en">To be assigned upon inaugural issue</span></strong>
    </div>
    <div class="journal-meta-item">
      <span style="font-size: 11px; font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 1px; color: var(--accent-primary);">FREQUENCY</span>
      <strong><span data-lang="ko">연 2회 (6월, 12월 예정)</span><span data-lang="en">Twice yearly (June &amp; December, planned)</span></strong>
    </div>
    <div class="journal-meta-item">
      <span style="font-size: 11px; font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 1px; color: var(--accent-primary);">REVIEW</span>
      <strong><span data-lang="ko">이중 익명 심사 (전문가 3인)</span><span data-lang="en">Double-blind (3 expert reviewers)</span></strong>
    </div>
  </div>

  <div style="margin-top: 24px;">
    <a href="/submit/" class="btn btn-primary">
      <span data-lang="ko">논문투고 안내 →</span>
      <span data-lang="en">Submission Guide →</span>
    </a>
  </div>
</div>

<!-- ════════════════════════════════
     2. 투고규정
     ════════════════════════════════ -->
<div class="page-section" id="submission-reg">
  <h2 class="page-section-title">
    <span data-lang="ko">투고규정</span>
    <span data-lang="en">Submission Regulations</span>
  </h2>

  <div class="regulation-block">

    <div class="regulation-article">
      <span class="regulation-num">제 1 조</span>
      <div class="regulation-body">
        <span data-lang="ko">투고 논문은 피지컬 AI 분야의 이론, 연구 및 그 응용에 관련된 것으로서 학문 및 관련 산업의 발전에 기여하는 독창성 있는 것이어야 하며, 다른 논문지에 게재되었거나 심사 중인 논문은 투고할 수 없다.</span>
        <span data-lang="en">Submitted papers must be original contributions to the theory, research, or application of Physical AI and must make a meaningful contribution to the field or related industries. Papers previously published in or currently under review by another journal may not be submitted.</span>
      </div>
    </div>

    <div class="regulation-article">
      <span class="regulation-num">제 2 조</span>
      <div class="regulation-body">
        <span data-lang="ko">논문의 저자 전원은 한국피지컬AI학회 회원을 원칙으로 한다.</span>
        <span data-lang="en">All authors of a submitted paper must, in principle, be members of the Korean Society of Physical AI (KSPAI).</span>
      </div>
    </div>

    <div class="regulation-article">
      <span class="regulation-num">제 3 조</span>
      <div class="regulation-body">
        <span data-lang="ko">게재 논문에 대한 최종 책임은 저자가 진다.</span>
        <span data-lang="en">The authors bear full and final responsibility for the content of all published papers.</span>
      </div>
    </div>

    <div class="regulation-article">
      <span class="regulation-num">제 4 조</span>
      <div class="regulation-body">
        <span data-lang="ko">투고자는 논문의 투고 분야를 명시하여 투고하여야 하며, 편집위원회에서 투고 분야의 적합성 여부에 따라 최종 분야를 결정하고 투고자에게 통보한다.
        <ol>
          <li>로보틱스 분과 (로보틱스 및 자율이동)</li>
          <li>체화지능 분과 (체화지능 및 감각운동 통합)</li>
          <li>자율시스템 분과 (자율시스템 설계 및 제어)</li>
          <li>디지털 트윈 분과 (디지털 트윈 모델링 및 응용)</li>
          <li>인간-로봇 상호작용 분과</li>
          <li>피지컬 AI 교육 분과</li>
        </ol></span>
        <span data-lang="en">Authors must indicate the relevant research track at submission. The editorial board makes the final determination of track assignment and notifies the author.
        <ol>
          <li>Robotics Track (Robotics &amp; Autonomous Mobility)</li>
          <li>Embodied Intelligence Track (Embodied AI &amp; Sensorimotor Integration)</li>
          <li>Autonomous Systems Track (Autonomous System Design &amp; Control)</li>
          <li>Digital Twin Track (Digital Twin Modeling &amp; Applications)</li>
          <li>Human-Robot Interaction (HRI) Track</li>
          <li>Physical AI Education Track</li>
        </ol></span>
      </div>
    </div>

    <div class="regulation-article">
      <span class="regulation-num">제 5 조</span>
      <div class="regulation-body">
        <span data-lang="ko">논문 투고자는 다음 양식으로 작성된 심사용 논문 파일을 제출하여야 한다.
        <ol>
          <li>논문은 한글 사용을 원칙으로 하되, 의미 혼용 가능성이 있는 경우 한자로 표시하거나 괄호 안에 원어를 병기한다.</li>
          <li>논문은 학회 홈페이지에서 최종 논문 양식을 내려받아 .hwp 파일로 작성하여 이메일 또는 온라인 투고 시스템으로 제출한다.</li>
          <li>논문 표지에는 국문 및 영문으로 작성된 제목, 저자 정보(성명, 소속기관, 직위) 및 국문·영문 키워드를 기입한다.</li>
          <li>학생저자가 있을 경우 학생저자의 구체적인 기여 역할에 대한 진술을 요청할 수 있으며, 이에 대한 책임은 저자 본인에게 있다.</li>
          <li>논문은 본 학회의 연구윤리규정을 성실히 준수하여야 한다.</li>
        </ol></span>
        <span data-lang="en">Authors must submit a manuscript file prepared according to the following guidelines.
        <ol>
          <li>Papers are principally written in Korean; original-language terms may be included in parentheses where ambiguity exists.</li>
          <li>Papers must be prepared using the official KSPAI HWP template (downloadable from this website) and submitted as a .hwp file by email or the online submission system.</li>
          <li>The cover page must include the title, author information (name, affiliation, position), and keywords in both Korean and English.</li>
          <li>If any author is a student, the editorial board may request a statement of that author's specific contribution; the author bears responsibility for such statements.</li>
          <li>All papers must comply in good faith with the Society's Research Ethics Regulations.</li>
        </ol></span>
      </div>
    </div>

    <div class="regulation-article">
      <span class="regulation-num">제 6 조</span>
      <div class="regulation-body">
        <span data-lang="ko">원고는 국문 또는 영문으로 작성하며, 논문의 전체 길이는 그림과 표를 포함하여 기본 6페이지로 한다.</span>
        <span data-lang="en">Papers may be written in Korean or English. The standard paper length is 6 pages, including all figures and tables.</span>
      </div>
    </div>

    <div class="regulation-article">
      <span class="regulation-num">제 7 조</span>
      <div class="regulation-body">
        <span data-lang="ko">게재가 확정되면 투고자는 저자 소개, 저자 사진 및 최종 수정 논문을 제출하여야 한다.</span>
        <span data-lang="en">Upon acceptance, authors must submit a short author biography, a photograph, and the final revised manuscript.</span>
      </div>
    </div>

    <div class="regulation-article">
      <span class="regulation-num">제 8 조</span>
      <div class="regulation-body">
        <span data-lang="ko">국문 및 영문으로 원고 제목, 저자 성명 및 소속을 명기하여야 하며, 국문 요약은 500자 내외, 영문 요약은 250 단어 내외로 작성한다. 국문 및 영문 키워드는 각 5개 이상 작성한다. 또한 논문에 관련된 사항을 책임지는 교신저자(Corresponding Author)를 표기하여야 한다.</span>
        <span data-lang="en">The title, author names, and affiliations must be provided in both Korean and English. The Korean abstract should be approximately 500 characters; the English abstract approximately 250 words. At least 5 keywords must be provided in each language. A corresponding author responsible for the paper must be clearly identified.</span>
      </div>
    </div>

    <div class="regulation-article">
      <span class="regulation-num">제 9 조</span>
      <div class="regulation-body">
        <span data-lang="ko">편집 용지는 폭 188, 길이 258로 하되 2단(단간격 6, 너비 71, 단구분선 투명)으로 편집하고, 용지 여백은 위쪽 0, 아래쪽 0, 왼쪽 20, 오른쪽 20, 머리말 28, 꼬리말 20으로 하며, 기본 폰트는 신명조, 글자 크기는 9, 줄 간격 160%로 한다. 글자모양에서 장평은 96, 자간은 –8로 한다.</span>
        <span data-lang="en">The paper layout uses page dimensions of width 188 / height 258 in two columns (column gap 6, width 71, transparent column divider). Margins: top 0, bottom 0, left 20, right 20, header 28, footer 20. Default font: Shin Myungjo, size 9, line spacing 160%. Character width: 96%, letter-spacing: –8.</span>
      </div>
    </div>

    <div class="regulation-article">
      <span class="regulation-num">제 10 조</span>
      <div class="regulation-body">
        <span data-lang="ko">
        <ol>
          <li>국문 논문의 순서: 한글 제목 → 한글 저자명/소속 → 영문 제목 → 영문 저자명/소속 → 한글 요약 → 영문 요약 → 본문 → 이해상충 → 사사 (해당 시) → 참고문헌 → 부록 (해당 시)</li>
          <li>영문 논문은 위 순서에서 영문을 앞에, 한글을 뒤에 배치한다.</li>
          <li>저자 정보에 직위(직급)을 표기한다.</li>
        </ol></span>
        <span data-lang="en">
        <ol>
          <li>Korean paper order: KO title → KO authors/affiliations → EN title → EN authors/affiliations → KO abstract → EN abstract → Body → Conflicts of interest → Acknowledgments (if applicable) → References → Appendix (if applicable)</li>
          <li>For English papers, reverse the language order (English first, Korean second).</li>
          <li>Author positions/titles must be indicated.</li>
        </ol></span>
      </div>
    </div>

    <div class="regulation-article">
      <span class="regulation-num">제 11 조</span>
      <div class="regulation-body">
        <span data-lang="ko">참고문헌은 본문 중 [1], [1-3], [1,2,5] 형식으로 인용하며, 참고문헌 목록은 인용 순서대로 영어로 작성한다.
        <ol>
          <li>학술 논문지: 저자명. (발행연도). 논문명. 학술지명, 권(호), 수록면수. DOI</li>
          <li>학술대회: 저자명. (연도). 논문명. In Proceedings of 학술대회명 (pp. 시작-끝). 주최기관명.</li>
          <li>단행본: 저자명. (발행연도). 제목. 도시: 출판사명.</li>
          <li>학위논문: 저자. (연도). 논문명. (석사/박사) 학위청구논문, 학교명, 도시.</li>
          <li>인터넷 인용: 저자명. (연도). 제목. URL</li>
        </ol></span>
        <span data-lang="en">In-text citations use numbered format [1], [1-3], [1,2,5]. The reference list is ordered by citation appearance and must be written in English.
        <ol>
          <li>Journal article: Author(s). (Year). Title. Journal Name, Vol(No), pp. DOI</li>
          <li>Conference paper: Author(s). (Year). Title. In Proceedings of Conference Name (pp. start–end). Publisher.</li>
          <li>Book: Author(s). (Year). Title. City: Publisher.</li>
          <li>Thesis/Dissertation: Author. (Year). Title. (Master's/Doctoral thesis). University, City.</li>
          <li>Web source: Author(s). (Year). Title. Retrieved from URL</li>
        </ol></span>
      </div>
    </div>

    <div class="regulation-article">
      <span class="regulation-num">제 12 조</span>
      <div class="regulation-body">
        <span data-lang="ko">장 및 절에 해당하는 번호는 아라비아 숫자로 각각 1., 1.1, 1.1.1 등과 같이 표기한다.</span>
        <span data-lang="en">Section and subsection headings are numbered in Arabic numerals: 1., 1.1, 1.1.1, etc.</span>
      </div>
    </div>

    <div class="regulation-article">
      <span class="regulation-num">제 13 조</span>
      <div class="regulation-body">
        <span data-lang="ko">모든 그림이나 표는 아라비아 숫자로 일련번호를 붙여야 한다.
        <ol>
          <li>그림의 명칭은 하단 가운데 정렬에 Fig. 1로 표기하고, 표는 상단 가운데 정렬에 Table 1로 표기한다.</li>
          <li>그림과 표의 제목 및 내용은 원칙적으로 영문으로 표기한다.</li>
          <li>그림은 충분한 해상도를 유지하고, 표는 내용이 잘리거나 선이 겹치지 않도록 작성한다.</li>
        </ol></span>
        <span data-lang="en">All figures and tables must be numbered consecutively in Arabic numerals.
        <ol>
          <li>Figure captions (Fig. 1) are centered below the figure; table captions (Table 1) are centered above the table.</li>
          <li>Captions and table contents should be in English as a rule.</li>
          <li>Figures must have sufficient resolution; tables must not have truncated content or overlapping lines.</li>
        </ol></span>
      </div>
    </div>

    <div class="regulation-article">
      <span class="regulation-num">제 14 조</span>
      <div class="regulation-body">
        <span data-lang="ko">신규 논문의 투고료는 무료이고, 투고된 논문이 게재 승인을 받으면 게재료를 납부하여야 한다.
        <table>
          <thead><tr><th>투고료</th><th>기본 게재료 (1–6쪽)</th><th>7–8쪽 추가</th><th>9–15쪽 추가</th><th>사사 표기</th></tr></thead>
          <tbody>
            <tr><td>0원</td><td>150,000원</td><td>+20,000원/쪽</td><td>+30,000원/쪽</td><td>+150,000원</td></tr>
          </tbody>
        </table></span>
        <span data-lang="en">Submission is free of charge. Upon acceptance, the following publication fees apply.
        <table>
          <thead><tr><th>Submission fee</th><th>Base fee (1–6 pp.)</th><th>7–8 pp.</th><th>9–15 pp.</th><th>Funding listed</th></tr></thead>
          <tbody>
            <tr><td>Free</td><td>₩150,000</td><td>+₩20,000/pp.</td><td>+₩30,000/pp.</td><td>+₩150,000</td></tr>
          </tbody>
        </table></span>
      </div>
    </div>

    <div class="regulation-article">
      <span class="regulation-num">제 15 조</span>
      <div class="regulation-body">
        <span data-lang="ko">채택된 논문은 접수순으로 게재함을 원칙으로 하며, 특별한 사정으로 긴급 심사 및 긴급 게재를 요할 경우에는 편집위원회의 승인을 얻어야 한다.</span>
        <span data-lang="en">Accepted papers are published in the order received, as a rule. Expedited review or expedited publication requires approval by the editorial board.</span>
      </div>
    </div>

    <div class="regulation-article">
      <span class="regulation-num">제 16 조</span>
      <div class="regulation-body">
        <span data-lang="ko">본 학회 논문지에 게재된 논문은 학회의 승인 없이 무단 복제할 수 없다.</span>
        <span data-lang="en">Papers published in the Society's journal may not be reproduced without the Society's authorization.</span>
      </div>
    </div>

    <div class="regulation-article">
      <span class="regulation-num">제 17 조</span>
      <div class="regulation-body">
        <span data-lang="ko">본 학회 논문지에 게재된 논문에 대한 저작권은 한국피지컬AI학회에 있으며, 심사 결과가 게재인 경우 저자들은 저작권 양도 서류에 서명하여 학회로 제출하여야 한다.</span>
        <span data-lang="en">Copyright of all published papers belongs to the Korean Society of Physical AI (KSPAI). Upon acceptance, all authors must sign and submit a copyright transfer agreement to the Society.</span>
      </div>
    </div>

  </div><!-- .regulation-block -->

  <div class="addendum-block">
    <strong><span data-lang="ko">부칙</span><span data-lang="en">Addendum</span></strong><br>
    <span data-lang="ko">본 규정은 제1권 제1호부터 그 효력을 발생한다. 본 규정의 개정은 이사회의 심의·의결을 거쳐야 하며, 개정 시 해당 권호부터 효력을 발생한다.</span>
    <span data-lang="en">These regulations take effect from Volume 1, Issue 1. Amendments require deliberation and resolution by the Board of Directors, and take effect from the issue in which they are adopted.</span>
  </div>
</div>

<!-- ════════════════════════════════
     3. 발행규정
     ════════════════════════════════ -->
<div class="page-section" id="publication-reg">
  <h2 class="page-section-title">
    <span data-lang="ko">발행규정</span>
    <span data-lang="en">Publication Regulations</span>
  </h2>

  <div class="regulation-block">

    <div class="regulation-article">
      <span class="regulation-num">제 1 조</span>
      <div class="regulation-body">
        <span data-lang="ko">「피지컬 AI 연구」는 한국피지컬AI학회가 발행하는 정기 학술지로, 연 2회(6월 30일, 12월 31일) 발행함을 원칙으로 한다. 필요한 경우 임시호 또는 특별호를 발간할 수 있다.</span>
        <span data-lang="en"><em>Physical AI Research</em> is published twice annually (June 30 and December 31) by the Korean Society of Physical AI. Special or supplementary issues may be published as needed.</span>
      </div>
    </div>

    <div class="regulation-article">
      <span class="regulation-num">제 2 조</span>
      <div class="regulation-body">
        <span data-lang="ko">학술지의 발행 업무는 편집위원장 및 편집위원회가 총괄 관리한다.</span>
        <span data-lang="en">Journal publication activities are managed by the Editor-in-Chief and the Editorial Board.</span>
      </div>
    </div>

    <div class="regulation-article">
      <span class="regulation-num">제 3 조</span>
      <div class="regulation-body">
        <span data-lang="ko">각 호의 투고 마감일은 발행일 60일 전을 원칙으로 하며, 편집위원회의 결정에 따라 변경될 수 있다. 마감일 이후 접수된 논문은 다음 호로 이월된다.</span>
        <span data-lang="en">The submission deadline for each issue is, in principle, 60 days before the publication date, and may be adjusted by the editorial board. Papers received after the deadline will be carried over to the next issue.</span>
      </div>
    </div>

    <div class="regulation-article">
      <span class="regulation-num">제 4 조</span>
      <div class="regulation-body">
        <span data-lang="ko">학술지는 전자 파일(PDF) 형식으로 학회 홈페이지에 게재하는 것을 원칙으로 하며, 필요에 따라 인쇄본을 발간할 수 있다.</span>
        <span data-lang="en">The journal is published primarily in electronic (PDF) format on the Society's website. Print editions may be produced as needed.</span>
      </div>
    </div>

  </div>
</div>

<!-- ════════════════════════════════
     4. 심사규정
     ════════════════════════════════ -->
<div class="page-section" id="review-reg">
  <h2 class="page-section-title">
    <span data-lang="ko">심사규정</span>
    <span data-lang="en">Review Regulations</span>
  </h2>

  <div class="regulation-block">

    <div class="regulation-article">
      <span class="regulation-num">제 1 조</span>
      <div class="regulation-body">
        <span data-lang="ko">투고된 논문은 편집위원회에서 해당 분야 전문가 3인의 심사위원을 위촉하여 이중 익명(double-blind) 심사를 원칙으로 한다.</span>
        <span data-lang="en">All submitted papers undergo double-blind peer review by three expert reviewers appointed by the editorial board.</span>
      </div>
    </div>

    <div class="regulation-article">
      <span class="regulation-num">제 2 조</span>
      <div class="regulation-body">
        <span data-lang="ko">심사 결과는 다음과 같이 구분한다.
        <ol>
          <li><strong>게재 가 (Accept)</strong>: 수정 없이 게재 확정</li>
          <li><strong>수정 후 게재 (Revise and Resubmit)</strong>: 요구 사항 수정 후 재심사 또는 편집위원 확인 후 게재</li>
          <li><strong>게재 불가 (Reject)</strong>: 게재 불가 결정</li>
        </ol></span>
        <span data-lang="en">Review decisions are categorized as follows.
        <ol>
          <li><strong>Accept</strong>: Paper accepted as submitted.</li>
          <li><strong>Revise and Resubmit</strong>: Paper accepted pending revision; revised manuscript subject to re-review or editorial confirmation.</li>
          <li><strong>Reject</strong>: Paper not accepted for publication.</li>
        </ol></span>
      </div>
    </div>

    <div class="regulation-article">
      <span class="regulation-num">제 3 조</span>
      <div class="regulation-body">
        <span data-lang="ko">심사위원 3인 중 2인 이상의 게재 가 판정이 있을 때 게재를 확정함을 원칙으로 한다. 심사 결과가 엇갈리는 경우 편집위원장이 추가 심사위원을 위촉하거나 편집위원회의 심의로 결정할 수 있다.</span>
        <span data-lang="en">A paper is accepted when at least 2 of 3 reviewers recommend acceptance. In cases of divided review, the Editor-in-Chief may appoint an additional reviewer or refer the paper to the full editorial board.</span>
      </div>
    </div>

    <div class="regulation-article">
      <span class="regulation-num">제 4 조</span>
      <div class="regulation-body">
        <span data-lang="ko">심사 결과 및 심사 의견은 저자에게 이메일로 통보하며, 심사위원의 신원은 공개하지 않는다.</span>
        <span data-lang="en">Review results and reviewer comments are communicated to authors by email. Reviewer identities are kept confidential.</span>
      </div>
    </div>

    <div class="regulation-article">
      <span class="regulation-num">제 5 조</span>
      <div class="regulation-body">
        <span data-lang="ko">수정 후 게재 판정을 받은 저자는 수정 사항 및 수정 내용 요약서를 작성하여 지정된 기한 내에 제출하여야 한다. 기한 내 미제출 시 취소 처리될 수 있다.</span>
        <span data-lang="en">Authors whose papers receive a "Revise and Resubmit" decision must submit the revised manuscript and a point-by-point response letter by the specified deadline. Failure to resubmit within the deadline may result in the paper being withdrawn.</span>
      </div>
    </div>

    <div class="regulation-article">
      <span class="regulation-num">제 6 조</span>
      <div class="regulation-body">
        <span data-lang="ko">심사위원은 심사 내용의 비밀을 유지하여야 하며, 심사 논문 정보를 제3자에게 공개하거나 자신의 이익을 위해 이용하여서는 아니 된다.</span>
        <span data-lang="en">Reviewers must maintain the confidentiality of all manuscripts under review and must not disclose any information about reviewed papers to third parties or use it for personal benefit.</span>
      </div>
    </div>

  </div>
</div>

<!-- ════════════════════════════════
     5. 연구윤리규정
     ════════════════════════════════ -->
<div class="page-section" id="ethics-reg">
  <h2 class="page-section-title">
    <span data-lang="ko">연구윤리규정</span>
    <span data-lang="en">Research Ethics Regulations</span>
  </h2>

  <div class="regulation-block">

    <div class="regulation-article">
      <span class="regulation-num">제 1 조 (목적)</span>
      <div class="regulation-body">
        <span data-lang="ko">본 규정은 한국피지컬AI학회가 발행하는 「피지컬 AI 연구」에 투고하는 저자와 심사에 참여하는 위원들이 지켜야 할 연구윤리 기준을 제시함으로써 학술 연구의 진실성을 확보함을 목적으로 한다.</span>
        <span data-lang="en">These regulations establish research ethics standards for authors submitting to and reviewers participating in <em>Physical AI Research</em>, published by KSPAI, with the aim of ensuring the integrity of scholarly research.</span>
      </div>
    </div>

    <div class="regulation-article">
      <span class="regulation-num">제 2 조 (저자의 의무)</span>
      <div class="regulation-body">
        <span data-lang="ko">저자는 다음 의무를 준수하여야 한다.
        <ol>
          <li>연구 결과를 정확하고 충실하게 보고한다.</li>
          <li>표절, 위조, 변조 등 연구부정행위를 하여서는 아니 된다.</li>
          <li>타인의 연구 결과를 인용할 때는 반드시 출처를 명기한다.</li>
          <li>논문에 기여한 모든 저자를 저자에 포함하고, 기여하지 않은 자는 저자에 포함하지 않는다. (부당한 저자 표시 금지)</li>
          <li>동일 논문을 두 개 이상의 학술지에 중복 투고하여서는 아니 된다.</li>
          <li>연구비 지원 및 이해상충에 관한 사항을 반드시 기재한다.</li>
          <li>인간 및 동물 대상 연구는 해당 기관의 윤리위원회(IRB) 또는 IACUC의 승인을 받아야 하며, 논문에 그 내용을 명시한다.</li>
        </ol></span>
        <span data-lang="en">Authors must comply with the following obligations.
        <ol>
          <li>Report research results accurately and faithfully.</li>
          <li>Refrain from research misconduct including plagiarism, fabrication, and falsification.</li>
          <li>Properly cite all sources when referencing others' research.</li>
          <li>Include all individuals who contributed substantively as authors; exclude those who did not contribute. (Prohibited: gift authorship, ghost authorship)</li>
          <li>Do not submit the same paper to more than one journal simultaneously.</li>
          <li>Disclose all funding sources and conflicts of interest.</li>
          <li>Research involving human subjects or animals must have received approval from the relevant ethics committee (IRB or IACUC), and this must be stated in the paper.</li>
        </ol></span>
      </div>
    </div>

    <div class="regulation-article">
      <span class="regulation-num">제 3 조 (심사위원의 의무)</span>
      <div class="regulation-body">
        <span data-lang="ko">심사위원은 다음 의무를 준수하여야 한다.
        <ol>
          <li>심사를 공정하고 객관적으로 수행한다.</li>
          <li>심사 논문의 내용을 비밀로 유지한다.</li>
          <li>저자와 이해관계가 있는 경우 즉시 편집위원장에게 통보하고 심사를 거절한다.</li>
          <li>심사 기한을 준수하며, 기한 내 심사가 불가한 경우 편집위원회에 즉시 통보한다.</li>
        </ol></span>
        <span data-lang="en">Reviewers must comply with the following obligations.
        <ol>
          <li>Conduct reviews fairly and objectively.</li>
          <li>Maintain the confidentiality of all manuscript content.</li>
          <li>Immediately notify the Editor-in-Chief and decline to review if a conflict of interest with any author exists.</li>
          <li>Adhere to the review deadline; notify the editorial board immediately if unable to complete the review within the required timeframe.</li>
        </ol></span>
      </div>
    </div>

    <div class="regulation-article">
      <span class="regulation-num">제 4 조 (연구부정행위 처리)</span>
      <div class="regulation-body">
        <span data-lang="ko">연구부정행위가 확인된 경우, 편집위원회는 해당 논문의 게재를 취소하거나 철회하고, 그 사실을 공지할 수 있다. 해당 저자에 대해서는 일정 기간 투고를 금지할 수 있으며, 필요한 경우 해당 기관 및 관계 기관에 통보할 수 있다.</span>
        <span data-lang="en">When research misconduct is confirmed, the editorial board may retract the published paper and issue a public notice. The author(s) involved may be prohibited from submitting papers for a specified period; the relevant institution and authorities may be notified as necessary.</span>
      </div>
    </div>

  </div>
</div>

<!-- ════════════════════════════════
     6. 편집위원회 규정
     ════════════════════════════════ -->
<div class="page-section" id="editorial-reg">
  <h2 class="page-section-title">
    <span data-lang="ko">편집위원회 규정</span>
    <span data-lang="en">Editorial Board Regulations</span>
  </h2>

  <div class="regulation-block">

    <div class="regulation-article">
      <span class="regulation-num">제 1 조 (구성)</span>
      <div class="regulation-body">
        <span data-lang="ko">편집위원회는 편집위원장 1인과 편집위원 약간 명으로 구성한다. 편집위원은 피지컬 AI 관련 각 분야의 전문가로서 회장의 추천에 의해 임명한다.</span>
        <span data-lang="en">The Editorial Board consists of one Editor-in-Chief and a number of editorial board members. Board members are subject-matter experts in Physical AI-related fields, appointed upon the recommendation of the Society President.</span>
      </div>
    </div>

    <div class="regulation-article">
      <span class="regulation-num">제 2 조 (임기)</span>
      <div class="regulation-body">
        <span data-lang="ko">편집위원의 임기는 2년으로 하며, 연임할 수 있다.</span>
        <span data-lang="en">Editorial board members serve two-year terms and may be reappointed.</span>
      </div>
    </div>

    <div class="regulation-article">
      <span class="regulation-num">제 3 조 (역할)</span>
      <div class="regulation-body">
        <span data-lang="ko">편집위원회는 다음 역할을 수행한다.
        <ol>
          <li>학술지의 편집 방침 수립 및 시행</li>
          <li>투고 논문의 분야 적합성 검토 및 심사위원 위촉</li>
          <li>심사 결과의 종합·판정 및 게재 여부 결정</li>
          <li>투고규정, 심사규정 및 연구윤리규정의 개정 심의</li>
          <li>연구부정행위 접수 및 처리</li>
        </ol></span>
        <span data-lang="en">The Editorial Board is responsible for the following.
        <ol>
          <li>Establishing and implementing editorial policies.</li>
          <li>Assessing scope suitability of submitted papers and appointing reviewers.</li>
          <li>Consolidating review results and making final publication decisions.</li>
          <li>Reviewing proposed amendments to submission, review, and ethics regulations.</li>
          <li>Receiving and handling reports of research misconduct.</li>
        </ol></span>
      </div>
    </div>

    <div class="regulation-article">
      <span class="regulation-num">제 4 조 (현황)</span>
      <div class="regulation-body">
        <span data-lang="ko">편집위원회는 학회 설립 후 첫 이사회 회의에서 구성·확정됩니다. 구성 완료 후 학회 홈페이지에 공개할 예정입니다.</span>
        <span data-lang="en">The Editorial Board will be constituted and confirmed at the first Board of Directors meeting following the Society's official establishment. The complete board roster will be published on this website thereafter.</span>
      </div>
    </div>

  </div>
</div>

</div><!-- .container -->
</div><!-- .page-article -->
