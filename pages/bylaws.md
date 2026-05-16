---
layout: page
title: 정관
title_ko: 정관
title_en: Bylaws
subtitle_ko: 한국피지컬인공지능학회 정관
subtitle_en: Articles of Association — Korean Society of Physical AI
label_en: GOVERNANCE
tag_class: call
description: 한국피지컬인공지능학회(KSPAI) 정관 — 학회 명칭, 목적, 회원, 임원, 총회, 이사회, 재정, 보칙으로 구성된 규약.
permalink: /bylaws/
---

<div class="coming-soon-banner">
  <span class="mono">※</span>
  <span data-lang="ko">{{ site.data.bylaws.status.note_ko }}</span>
  <span data-lang="en">{{ site.data.bylaws.status.note_en }}</span>
</div>

<div class="page-section">
  <h2 class="page-section-title">
    <span data-lang="ko">정관 구성</span>
    <span data-lang="en">Structure of Bylaws</span>
  </h2>
  <p class="page-section-text">
    <span data-lang="ko">본 학회의 정관은 다음 장(章)으로 구성됩니다.</span>
    <span data-lang="en">The bylaws of this Society are organized into the following chapters.</span>
  </p>

  <div class="bylaws-toc">
    {% for chapter in site.data.bylaws.chapters %}
    <div class="bylaws-chapter">
      <span class="bylaws-num mono">{{ chapter.num }}</span>
      <div>
        <strong>
          <span data-lang="ko">{{ chapter.title_ko }}</span>
          <span data-lang="en">{{ chapter.title_en }}</span>
        </strong>
        <p>
          <span data-lang="ko">{{ chapter.desc_ko }}</span>
          <span data-lang="en">{{ chapter.desc_en }}</span>
        </p>
      </div>
    </div>
    {% endfor %}
  </div>
</div>

<div class="page-section">
  <p class="bylaws-contact">
    <span data-lang="ko">문의사항: <a href="mailto:contact@kspai.org">contact@kspai.org</a></span>
    <span data-lang="en">Inquiries: <a href="mailto:contact@kspai.org">contact@kspai.org</a></span>
  </p>
</div>
