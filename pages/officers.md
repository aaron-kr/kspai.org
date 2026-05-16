---
layout: page
title: 임원진
title_ko: 임원진
title_en: Officers
subtitle_ko: 한국피지컬인공지능학회 임원진 및 조직 구성
subtitle_en: Leadership and organizational structure of KSPAI
label_en: ORGANIZATION
tag_class: call
description: 한국피지컬인공지능학회(KSPAI) 임원진 소개 — 회장, 부회장단, 감사 등 조직 구성.
permalink: /officers/
---

<div class="coming-soon-banner">
  <span class="mono">※</span>
  <div>
    <strong>
      <span data-lang="ko">{{ site.data.officers.status.banner_ko }}</span>
      <span data-lang="en">{{ site.data.officers.status.banner_en }}</span>
    </strong><br>
    <span data-lang="ko">{{ site.data.officers.status.note_ko }}</span>
    <span data-lang="en">{{ site.data.officers.status.note_en }}</span>
  </div>
</div>

<!-- ── PRESIDENT ── -->
<div class="page-section">
  <h2 class="page-section-title">
    <span data-lang="ko">회장</span>
    <span data-lang="en">President</span>
  </h2>
  <div class="officer-card officer-card--placeholder">
    <div class="officer-info">
      <p class="officer-name">
        <span data-lang="ko">{{ site.data.officers.president.placeholder_ko }}</span>
        <span data-lang="en">{{ site.data.officers.president.placeholder_en }}</span>
      </p>
      <p class="officer-affil">
        <span data-lang="ko">{{ site.data.officers.president.note_ko }}</span>
        <span data-lang="en">{{ site.data.officers.president.note_en }}</span>
      </p>
    </div>
  </div>
</div>

<!-- ── VICE PRESIDENTS ── -->
<div class="page-section">
  <h2 class="page-section-title">
    <span data-lang="ko">부회장단</span>
    <span data-lang="en">Vice Presidents</span>
  </h2>

  <div class="officers-grid">
    {% for officer in site.data.officers.vice_presidents %}
    <div class="officer-role-group">
      <h3 class="officer-role-title">
        <span data-lang="ko">{{ officer.role_ko }}</span>
        <span data-lang="en">{{ officer.role_en }}</span>
      </h3>
      <div class="officer-card">
        <div class="officer-info">
          <p class="officer-name">
            <span data-lang="ko">{{ officer.name_ko }}</span>
            <span data-lang="en">{{ officer.name_en }}</span>
          </p>
          <p class="officer-affil">
            <span data-lang="ko">{{ officer.affil_ko }}</span>
            <span data-lang="en">{{ officer.affil_en }}</span>
          </p>
          {% if officer.note_ko %}
          <p class="officer-note">
            <span data-lang="ko">{{ officer.note_ko }}</span>
            <span data-lang="en">{{ officer.note_en }}</span>
          </p>
          {% endif %}
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
</div>

<!-- ── AUDITOR ── -->
<div class="page-section">
  <h2 class="page-section-title">
    <span data-lang="ko">감사</span>
    <span data-lang="en">Auditor</span>
  </h2>
  <div class="officers-grid officers-grid--2col">
    {% for auditor in site.data.officers.auditors %}
    <div class="officer-role-group">
      <h3 class="officer-role-title">
        <span data-lang="ko">{{ auditor.role_ko }}</span>
        <span data-lang="en">{{ auditor.role_en }}</span>
      </h3>
      <div class="officer-card">
        <div class="officer-info">
          <p class="officer-name">
            <span data-lang="ko">{{ auditor.name_ko }}</span>
            <span data-lang="en">{{ auditor.name_en }}</span>
          </p>
          <p class="officer-affil">
            <span data-lang="ko">{{ auditor.affil_ko }}</span>
            <span data-lang="en">{{ auditor.affil_en }}</span>
          </p>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
</div>

<!-- ── FOUNDER NOTE (hidden — reveal after inaugural general assembly) ── -->
<!--
설립자/이사회 의장: (이름) (전주교육대학교 / Jeonju National University of Education)
회장: (이름) (원광대학교 / Wonkwang University)
To reveal: uncomment the founder and president_actual blocks in _data/officers.yml
and add rendering sections here.
-->
