---
layout: page
title: 논문투고안내
title_ko: 논문투고안내
title_en: Paper Submission Guide
subtitle_ko: 피지컬 AI 연구 논문지 원고 모집
subtitle_en: Call for Papers — Physical AI Research (JKPAI)
description: 한국피지컬AI학회 학술지(JKPAI) 논문 투고 안내 — 연구 범위, 작성 요령, 투고 방법, 심사 절차, 게재료 안내.
permalink: /submit/
---

<style>
/* ── Download card ── */
.download-card {
  background: linear-gradient(135deg, rgba(37,133,243,0.07), rgba(36,255,252,0.04));
  border: 1px solid var(--border-accent);
  border-radius: var(--radius-lg);
  padding: 28px 32px;
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 56px;
}
.download-card-icon {
  font-size: 32px;
  flex-shrink: 0;
  width: 60px; height: 60px;
  display: flex; align-items: center; justify-content: center;
  background: rgba(37,133,243,0.10);
  border-radius: var(--radius-md);
}
.download-card-body { flex: 1; }
.download-card-title { font-size: 16px; font-weight: 700; margin-bottom: 4px; }
.download-card-desc  { font-size: 13px; color: var(--text-secondary); line-height: 1.6; }
.download-card-actions { display: flex; gap: 10px; flex-wrap: wrap; flex-shrink: 0; }
.download-card-actions .btn { white-space: nowrap; }
.download-badge {
  display: inline-flex; align-items: center; gap: 6px;
  font-family: var(--font-mono); font-size: 10px;
  text-transform: uppercase; letter-spacing: 1px;
  color: var(--accent-primary);
  padding: 3px 10px;
  border: 1px solid var(--border-accent);
  border-radius: 20px;
  margin-bottom: 8px;
}
@media (max-width: 640px) {
  .download-card { flex-direction: column; align-items: flex-start; padding: 24px; }
  .download-card-actions { width: 100%; }
  .download-card-actions .btn { width: 100%; justify-content: center; }
}

/* ── Fee table ── */
.fee-table-wrapper { overflow-x: auto; margin-top: 12px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); }
.fee-table { width: 100%; border-collapse: collapse; font-size: 13px; }
.fee-table th {
  background: rgba(37,133,243,0.06);
  padding: 12px 16px;
  text-align: center;
  font-weight: 600;
  color: var(--text-primary);
  white-space: nowrap;
  border-bottom: 1px solid var(--border-subtle);
}
.fee-table td {
  padding: 11px 16px;
  text-align: center;
  color: var(--text-secondary);
  border-bottom: 1px solid var(--border-subtle);
}
.fee-table tr:last-child td { border-bottom: none; }
.fee-table tr:hover td { background: var(--bg-card-hover); }

/* ── Submission note box ── */
.submit-note {
  display: flex; align-items: flex-start; gap: 12px;
  background: rgba(37,133,243,0.05);
  border: 1px solid rgba(37,133,243,0.15);
  border-radius: var(--radius-md);
  padding: 16px 20px;
  font-size: 13px; color: var(--text-secondary); line-height: 1.7;
  margin-bottom: 20px;
}
.submit-note-icon { font-size: 18px; flex-shrink: 0; padding-top: 1px; }

/* ── Email code block ── */
.email-block {
  margin-top: 12px;
  padding: 12px 18px;
  background: var(--bg-card);
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-subtle);
  font-family: var(--font-mono);
  font-size: 13px;
  display: flex; align-items: center; gap: 10px;
}
.email-block a { color: var(--accent-primary); text-decoration: none; }
.email-block a:hover { text-decoration: underline; }
</style>

<div class="page-article page-article--has-hero">
<div class="container">

<!-- ════════════════════════════════════════════
     TEMPLATE DOWNLOAD — most prominent element
     ════════════════════════════════════════════ -->
<div class="download-card">
  <div class="download-card-icon">📄</div>
  <div class="download-card-body">
    <div class="download-badge">논문 작성 양식 · Paper Template</div>
    <div class="download-card-title">
      <span data-lang="ko">피지컬 AI 연구 (JKPAI) 논문 양식 — HWP</span>
      <span data-lang="en">Physical AI Research (JKPAI) Paper Template — HWP</span>
    </div>
    <p class="download-card-desc">
      <span data-lang="ko">공식 HWP 논문 양식을 내려받아 작성 후 제출하시기 바랍니다. 반드시 최신 버전을 사용하시기 바랍니다. (최종 수정: 2025)</span>
      <span data-lang="en">Please download and use the official HWP template. Always use the latest version. (Last updated: 2025)</span>
    </p>
  </div>
  <div class="download-card-actions">
    <a href="/assets/files/kspai-journal-template.hwp" class="btn btn-primary" download>
      <span data-lang="ko">↓ 학술지 양식 다운로드</span>
      <span data-lang="en">↓ Download Journal Template</span>
    </a>
  </div>
</div>

<!-- ════════════════════
     OVERVIEW
     ════════════════════ -->
<div class="page-section" id="overview">
  <h2 class="page-section-title">
    <span data-lang="ko">원고 모집 안내</span>
    <span data-lang="en">Call for Papers</span>
  </h2>
  <p class="page-section-text">
    <span data-lang="ko">한국피지컬AI학회는 학술지 <strong>「피지컬 AI 연구」(Physical AI Research, JKPAI)</strong>를 통해 피지컬 AI 분야의 이론적·응용적 연구 논문을 상시 접수합니다. 로보틱스, 체화지능, 자율시스템, 디지털 트윈, 인간-로봇 상호작용, 피지컬 AI 교육 및 이와 융합된 제반 분야의 독창적인 연구 성과를 발표할 수 있는 공개적 학술 플랫폼입니다. 학계, 산업체, 대학원생 모든 연구자의 적극적인 참여를 환영합니다.</span>
    <span data-lang="en">The Korean Society of Physical AI (KSPAI) invites submissions to its peer-reviewed journal, <strong><em>Physical AI Research</em> (JKPAI)</strong>. The journal publishes original theoretical and applied research in robotics, embodied intelligence, autonomous systems, digital twins, human-robot interaction, Physical AI education, and related interdisciplinary fields. We welcome contributions from researchers in academia, industry, and graduate programs.</span>
  </p>

  <div class="journal-meta-grid" style="margin-top: 0;">
    <div class="journal-meta-item">
      <span style="font-size: 11px; font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 1px; color: var(--accent-primary);">JOURNAL</span>
      <strong>
        <span data-lang="ko">피지컬 AI 연구 (JKPAI)</span>
        <span data-lang="en">Physical AI Research (JKPAI)</span>
      </strong>
    </div>
    <div class="journal-meta-item">
      <span style="font-size: 11px; font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 1px; color: var(--accent-primary);">PUBLISHER</span>
      <strong>
        <span data-lang="ko">한국피지컬AI학회 (KSPAI)</span>
        <span data-lang="en">Korean Society of Physical AI (KSPAI)</span>
      </strong>
    </div>
    <div class="journal-meta-item">
      <span style="font-size: 11px; font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 1px; color: var(--accent-primary);">FREQUENCY</span>
      <strong>
        <span data-lang="ko">연 2회 발행 (6월, 12월 예정)</span>
        <span data-lang="en">Twice yearly (June & December, planned)</span>
      </strong>
    </div>
    <div class="journal-meta-item">
      <span style="font-size: 11px; font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 1px; color: var(--accent-primary);">ISSN</span>
      <strong>
        <span data-lang="ko">창간 후 부여 예정</span>
        <span data-lang="en">To be assigned upon inaugural issue</span>
      </strong>
    </div>
    <div class="journal-meta-item">
      <span style="font-size: 11px; font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 1px; color: var(--accent-primary);">LANGUAGE</span>
      <strong>
        <span data-lang="ko">국문 또는 영문</span>
        <span data-lang="en">Korean or English</span>
      </strong>
    </div>
    <div class="journal-meta-item">
      <span style="font-size: 11px; font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 1px; color: var(--accent-primary);">REVIEW</span>
      <strong>
        <span data-lang="ko">이중 익명 심사 (3인)</span>
        <span data-lang="en">Double-blind peer review (3 reviewers)</span>
      </strong>
    </div>
  </div>
</div>

<!-- ════════════════════
     SCOPE
     ════════════════════ -->
<div class="page-section" id="scope">
  <h2 class="page-section-title">
    <span data-lang="ko">투고 분야</span>
    <span data-lang="en">Research Scope</span>
  </h2>
  <p class="page-section-text">
    <span data-lang="ko">아래 6개 분과 및 이와 융합된 분야의 논문을 접수합니다. 투고 분야는 투고 시 명시하여야 하며, 편집위원회에서 최종 결정합니다.</span>
    <span data-lang="en">Papers in the following six tracks and related interdisciplinary areas are welcome. Authors must indicate the relevant track at submission; the editorial board makes the final determination.</span>
  </p>
  <div class="submit-scope-grid">
    <div class="submit-scope-item">
      <span class="research-num">01</span>
      <div>
        <strong><span data-lang="ko">로보틱스 분과</span><span data-lang="en">Robotics Track</span></strong>
        <div style="font-size: 12px; color: var(--text-muted); margin-top: 3px;">
          <span data-lang="ko">로보틱스 및 자율이동</span>
          <span data-lang="en">Robotics & Autonomous Mobility</span>
        </div>
      </div>
    </div>
    <div class="submit-scope-item">
      <span class="research-num">02</span>
      <div>
        <strong><span data-lang="ko">체화지능 분과</span><span data-lang="en">Embodied Intelligence Track</span></strong>
        <div style="font-size: 12px; color: var(--text-muted); margin-top: 3px;">
          <span data-lang="ko">체화지능 및 감각운동 통합</span>
          <span data-lang="en">Embodied AI & Sensorimotor Integration</span>
        </div>
      </div>
    </div>
    <div class="submit-scope-item">
      <span class="research-num">03</span>
      <div>
        <strong><span data-lang="ko">자율시스템 분과</span><span data-lang="en">Autonomous Systems Track</span></strong>
        <div style="font-size: 12px; color: var(--text-muted); margin-top: 3px;">
          <span data-lang="ko">자율시스템 설계 및 제어</span>
          <span data-lang="en">Autonomous System Design & Control</span>
        </div>
      </div>
    </div>
    <div class="submit-scope-item">
      <span class="research-num">04</span>
      <div>
        <strong><span data-lang="ko">디지털 트윈 분과</span><span data-lang="en">Digital Twin Track</span></strong>
        <div style="font-size: 12px; color: var(--text-muted); margin-top: 3px;">
          <span data-lang="ko">디지털 트윈 모델링 및 응용</span>
          <span data-lang="en">Digital Twin Modeling & Applications</span>
        </div>
      </div>
    </div>
    <div class="submit-scope-item">
      <span class="research-num">05</span>
      <div>
        <strong><span data-lang="ko">인간-로봇 상호작용 분과</span><span data-lang="en">HRI Track</span></strong>
        <div style="font-size: 12px; color: var(--text-muted); margin-top: 3px;">
          <span data-lang="ko">인간-로봇 상호작용 및 인터페이스</span>
          <span data-lang="en">Human-Robot Interaction & Interface</span>
        </div>
      </div>
    </div>
    <div class="submit-scope-item">
      <span class="research-num">06</span>
      <div>
        <strong><span data-lang="ko">피지컬 AI 교육 분과</span><span data-lang="en">Education Track</span></strong>
        <div style="font-size: 12px; color: var(--text-muted); margin-top: 3px;">
          <span data-lang="ko">피지컬 AI 교육·커리큘럼 연구</span>
          <span data-lang="en">Physical AI Education & Curriculum</span>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ════════════════════
     FORMATTING
     ════════════════════ -->
<div class="page-section" id="formatting">
  <h2 class="page-section-title">
    <span data-lang="ko">작성 요령</span>
    <span data-lang="en">Formatting Guidelines</span>
  </h2>
  <p class="page-section-text">
    <span data-lang="ko">투고 논문은 학회 공식 HWP 양식을 사용하여 아래 요령에 따라 작성합니다. 세부 투고규정은 <a href="/journal/">학술지 규정 페이지</a>를 참조하시기 바랍니다.</span>
    <span data-lang="en">All manuscripts must follow the formatting guidelines below, using the official HWP template. For complete submission regulations, see the <a href="/journal/">Journal Regulations page</a>.</span>
  </p>

  <div class="join-steps">

    <div class="join-step">
      <span class="join-step-num">01</span>
      <div>
        <strong><span data-lang="ko">언어 및 파일 형식</span><span data-lang="en">Language & File Format</span></strong>
        <p>
          <span data-lang="ko">논문은 국문 또는 영문으로 작성하되, 의미 혼용 가능성이 있는 경우 괄호 안에 원어를 병기합니다. 반드시 학회 공식 HWP 양식(.hwp)을 사용하여 작성·제출합니다.</span>
          <span data-lang="en">Papers may be written in Korean or English. Where ambiguity exists, include the original-language term in parentheses. All submissions must use the official KSPAI HWP template.</span>
        </p>
      </div>
    </div>

    <div class="join-step">
      <span class="join-step-num">02</span>
      <div>
        <strong><span data-lang="ko">분량</span><span data-lang="en">Length</span></strong>
        <p>
          <span data-lang="ko">그림 및 표를 포함하여 기본 6페이지입니다. 7–8페이지: 1쪽당 20,000원 추가 / 9페이지 이상: 1쪽당 30,000원 추가 게재료가 적용됩니다.</span>
          <span data-lang="en">The base length is 6 pages including all figures and tables. 7–8 pages: ₩20,000/page surcharge. 9+ pages: ₩30,000/page surcharge.</span>
        </p>
      </div>
    </div>

    <div class="join-step">
      <span class="join-step-num">03</span>
      <div>
        <strong><span data-lang="ko">표지 구성</span><span data-lang="en">Cover Page</span></strong>
        <p>
          <span data-lang="ko">국문·영문 제목, 저자 성명·소속·직위(국문·영문)를 기재합니다. 국문 요약 500자 내외, 영문 요약 250 단어 내외, 국문·영문 키워드 각 5개 이상을 포함해야 합니다. 교신저자(Corresponding Author)를 반드시 표기합니다.</span>
          <span data-lang="en">Include title, author names, affiliations, and positions in both Korean and English. Include a Korean abstract (~500 characters), English abstract (~250 words), and at least 5 keywords in each language. The corresponding author must be identified.</span>
        </p>
      </div>
    </div>

    <div class="join-step">
      <span class="join-step-num">04</span>
      <div>
        <strong><span data-lang="ko">본문 순서</span><span data-lang="en">Paper Structure</span></strong>
        <p>
          <span data-lang="ko"><strong>국문 논문:</strong> 한글 제목 → 한글 저자명/소속 → 영문 제목 → 영문 저자명/소속 → 한글 요약 → 영문 요약 → 본문 → 이해상충 → 사사 (해당 시) → 참고문헌 → 부록 (해당 시)<br><strong>영문 논문:</strong> 위 순서에서 영문을 앞에, 한글을 뒤에 배치합니다.</span>
          <span data-lang="en"><strong>Korean paper:</strong> KO title → KO authors/affiliations → EN title → EN authors/affiliations → KO abstract → EN abstract → Body → Conflicts of interest → Acknowledgments (if any) → References → Appendix (if any)<br><strong>English paper:</strong> Reverse the language order above.</span>
        </p>
      </div>
    </div>

    <div class="join-step">
      <span class="join-step-num">05</span>
      <div>
        <strong><span data-lang="ko">그림 · 표</span><span data-lang="en">Figures &amp; Tables</span></strong>
        <p>
          <span data-lang="ko">그림 번호(Fig. 1)는 하단 가운데 정렬, 표 번호(Table 1)는 상단 가운데 정렬로 표기합니다. 그림·표의 제목과 내용은 영문으로 표기하는 것을 원칙으로 합니다.</span>
          <span data-lang="en">Figure captions (Fig. 1) are centered below the figure; table captions (Table 1) are centered above. Captions and internal content should be in English as a rule.</span>
        </p>
      </div>
    </div>

    <div class="join-step">
      <span class="join-step-num">06</span>
      <div>
        <strong><span data-lang="ko">참고문헌</span><span data-lang="en">References</span></strong>
        <p>
          <span data-lang="ko">본문 내 [1], [1-3], [1,2,5] 형식으로 인용하며, 참고문헌 목록은 인용 순서대로 영어로 작성합니다.</span>
          <span data-lang="en">Use numbered in-text citations: [1], [1-3], [1,2,5]. The reference list follows citation order and must be written in English.</span>
        </p>
        <div style="margin-top: 12px; padding: 14px 16px; background: var(--bg-card); border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); font-size: 12px; color: var(--text-secondary); line-height: 1.9;">
          <div style="margin-bottom: 8px; font-family: var(--font-mono); font-size: 10px; text-transform: uppercase; letter-spacing: 1px; color: var(--accent-primary);">Format Examples</div>
          <div>[1] G. D. Hong, S. M. Kim, &amp; S. Y. Ahn (2025). A Study on Embodied Intelligence Control. <em>Physical AI Research</em>, 1(1), 1–8. DOI: 10.xxxxx/JKPAI.1.1.001</div>
          <div>[2] G. D. Hong. (2025). Robotic locomotion via embodied learning. In <em>Proc. KSPAI 2025 Annual Conference</em> (pp. 45–52). KSPAI.</div>
          <div>[3] A. A. Author &amp; B. B. Author. (2024). <em>Title of book.</em> Seoul: University Press.</div>
        </div>
      </div>
    </div>

  </div>
</div>

<!-- ════════════════════
     SUBMISSION PROCESS
     ════════════════════ -->
<div class="page-section" id="process">
  <h2 class="page-section-title">
    <span data-lang="ko">투고 방법</span>
    <span data-lang="en">How to Submit</span>
  </h2>

  <div class="submit-note">
    <span class="submit-note-icon">📬</span>
    <div>
      <span data-lang="ko"><strong>현재 이메일 투고 방식으로 운영합니다.</strong> 온라인 투고 시스템은 추후 개설 예정이며, 별도 공지 후 전환됩니다.</span>
      <span data-lang="en"><strong>Submissions are currently accepted by email only.</strong> An online submission portal will be launched at a future date and announced separately.</span>
    </div>
  </div>

  <div class="join-steps">

    <div class="join-step">
      <span class="join-step-num">STEP 1</span>
      <div>
        <strong><span data-lang="ko">양식 다운로드</span><span data-lang="en">Download Template</span></strong>
        <p><span data-lang="ko">이 페이지 상단의 공식 HWP 양식을 다운로드합니다.</span><span data-lang="en">Download the official HWP template at the top of this page.</span></p>
      </div>
    </div>

    <div class="join-step">
      <span class="join-step-num">STEP 2</span>
      <div>
        <strong><span data-lang="ko">회원 확인</span><span data-lang="en">Membership</span></strong>
        <p>
          <span data-lang="ko">논문 저자 전원이 한국피지컬AI학회 회원임을 확인합니다. 미가입 저자는 <a href="/join/">회원가입 안내</a>를 참조하거나 학회 이메일로 문의하시기 바랍니다.</span>
          <span data-lang="en">All co-authors must be members of KSPAI. Non-members should refer to the <a href="/join/">membership page</a> or contact the Society.</span>
        </p>
      </div>
    </div>

    <div class="join-step">
      <span class="join-step-num">STEP 3</span>
      <div>
        <strong><span data-lang="ko">파일 준비</span><span data-lang="en">Prepare Files</span></strong>
        <p>
          <span data-lang="ko">다음 두 개의 파일을 준비합니다:<br>① <strong>최종 논문 파일</strong> — 저자 정보 포함<br>② <strong>심사용 파일</strong> — 저자 정보(성명·소속·감사의 글 등) 모두 삭제한 익명 버전</span>
          <span data-lang="en">Prepare two files:<br>① <strong>Full manuscript</strong> — with all author information<br>② <strong>Blind review copy</strong> — all author information (names, affiliations, acknowledgments) removed</span>
        </p>
      </div>
    </div>

    <div class="join-step">
      <span class="join-step-num">STEP 4</span>
      <div>
        <strong><span data-lang="ko">이메일 제출</span><span data-lang="en">Submit by Email</span></strong>
        <p>
          <span data-lang="ko">두 파일을 첨부하여 아래 주소로 발송합니다. 이메일 제목은 아래 형식을 따릅니다:</span>
          <span data-lang="en">Attach both files and send to the address below. Use the following subject line format:</span>
        </p>
        <div class="email-block">
          <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: var(--text-muted); white-space: nowrap;">Subject:</span>
          <code style="color: var(--text-primary);">[JKPAI 논문투고] 논문 제목</code>
        </div>
        <div class="email-block" style="margin-top: 8px;">
          <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: var(--text-muted); white-space: nowrap;">To:</span>
          <a href="mailto:paper@physicalai.or.kr">paper@physicalai.or.kr</a>
        </div>
      </div>
    </div>

    <div class="join-step">
      <span class="join-step-num">STEP 5</span>
      <div>
        <strong><span data-lang="ko">접수 확인</span><span data-lang="en">Acknowledgment</span></strong>
        <p>
          <span data-lang="ko">이메일 접수 후 편집사무국에서 2–3 영업일 이내에 접수 확인 이메일을 발송합니다. 확인 이메일이 없는 경우 재문의 바랍니다.</span>
          <span data-lang="en">The editorial office will send an acknowledgment email within 2–3 business days of receipt. If you do not receive a confirmation, please follow up.</span>
        </p>
      </div>
    </div>

    <div class="join-step">
      <span class="join-step-num">STEP 6</span>
      <div>
        <strong><span data-lang="ko">심사 및 결과 통보</span><span data-lang="en">Review &amp; Decision</span></strong>
        <p>
          <span data-lang="ko">편집위원회가 투고 분야 적합성을 검토한 후 관련 분야 전문 심사위원 3인에게 이중 익명 심사를 의뢰합니다. 심사 결과(게재 확정/수정 후 게재/게재 불가)는 이메일로 통보됩니다.</span>
          <span data-lang="en">The editorial board checks scope suitability, then assigns three expert reviewers for double-blind review. The decision (accept / revise / reject) will be communicated by email.</span>
        </p>
      </div>
    </div>

  </div>
</div>

<!-- ════════════════════
     PUBLICATION FEES
     ════════════════════ -->
<div class="page-section" id="fees">
  <h2 class="page-section-title">
    <span data-lang="ko">게재료</span>
    <span data-lang="en">Publication Fees</span>
  </h2>
  <p class="page-section-text">
    <span data-lang="ko">투고료는 무료입니다. 심사 후 게재가 확정된 논문에 한해 아래 게재료가 적용됩니다. 게재료 납부 계좌 및 방법은 게재 확정 통보 시 안내드립니다.</span>
    <span data-lang="en">Submission is free of charge. Publication fees apply only upon acceptance. Payment details will be provided in the acceptance notification.</span>
  </p>

  <div class="fee-table-wrapper">
    <table class="fee-table">
      <thead>
        <tr>
          <th><span data-lang="ko">구분</span><span data-lang="en">Category</span></th>
          <th><span data-lang="ko">기본 게재료 (1–6쪽)</span><span data-lang="en">Base Fee (1–6 pp.)</span></th>
          <th><span data-lang="ko">7–8쪽 추가</span><span data-lang="en">7–8 pp. surcharge</span></th>
          <th><span data-lang="ko">9–15쪽 추가</span><span data-lang="en">9–15 pp. surcharge</span></th>
          <th><span data-lang="ko">사사 표기</span><span data-lang="en">Funding listed</span></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="text-align: left; font-weight: 600;"><span data-lang="ko">일반</span><span data-lang="en">Regular</span></td>
          <td>150,000원</td>
          <td><span data-lang="ko">+20,000원/쪽</span><span data-lang="en">+₩20,000/pp.</span></td>
          <td><span data-lang="ko">+30,000원/쪽</span><span data-lang="en">+₩30,000/pp.</span></td>
          <td>+150,000원</td>
        </tr>
        <tr>
          <td style="text-align: left; font-weight: 600;"><span data-lang="ko">학생 제1저자</span><span data-lang="en">Student 1st Author</span></td>
          <td>100,000원</td>
          <td><span data-lang="ko">+20,000원/쪽</span><span data-lang="en">+₩20,000/pp.</span></td>
          <td><span data-lang="ko">+30,000원/쪽</span><span data-lang="en">+₩30,000/pp.</span></td>
          <td>+150,000원</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p style="font-size: 12px; color: var(--text-muted); margin-top: 12px; line-height: 1.7;">
    <span data-lang="ko">※ 위 게재료는 2025년 기준이며, 학회 운영 이사회 결정에 따라 변경될 수 있습니다.<br>
    ※ 학생 제1저자 할인은 투고 시 재학 증명서(또는 학생증 사본) 제출이 필요합니다.</span>
    <span data-lang="en">※ Fees are as of 2025 and are subject to change by the Board of Directors.<br>
    ※ The student discount requires proof of enrollment (enrollment certificate or student ID copy) at time of submission.</span>
  </p>
</div>

<!-- ════════════════════
     CONTACT
     ════════════════════ -->
<div class="page-section" id="contact">
  <h2 class="page-section-title">
    <span data-lang="ko">문의</span>
    <span data-lang="en">Contact</span>
  </h2>
  <div style="max-width: 560px;">
    <div class="contact-card">
      <p class="contact-card-title">
        <span data-lang="ko">피지컬 AI 연구 편집 사무국</span>
        <span data-lang="en">JKPAI Editorial Office</span>
      </p>
      <p style="font-size: 13px; color: var(--text-secondary); margin-top: 8px;">
        <span data-lang="ko">논문 투고 및 심사 관련 문의는 아래 이메일로 연락하시기 바랍니다.</span>
        <span data-lang="en">For all submission and review inquiries, please contact us by email.</span>
      </p>
      <div class="contact-details">
        <div class="contact-detail-row">
          <span class="contact-detail-icon">✉️</span>
          <div>
            <span class="contact-detail-label">논문 투고 · SUBMISSION</span>
            <a href="mailto:paper@physicalai.or.kr" class="contact-link">paper@physicalai.or.kr</a>
          </div>
        </div>
        <div class="contact-detail-row">
          <span class="contact-detail-icon">✉️</span>
          <div>
            <span class="contact-detail-label">일반 문의 · GENERAL</span>
            <a href="mailto:contact@physicalai.or.kr" class="contact-link">contact@physicalai.or.kr</a>
          </div>
        </div>
        <div class="contact-detail-row">
          <span class="contact-detail-icon">🌐</span>
          <div>
            <span class="contact-detail-label">WEB</span>
            <a href="https://kspai.org" class="contact-link">kspai.org</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</div><!-- .container -->
</div><!-- .page-article -->
