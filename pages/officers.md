---
layout: page
title: 임원진
title_ko: 임원진
title_en: Officers
subtitle_ko: 한국피지컬인공지능학회 임원진 및 조직 구성
subtitle_en: Leadership and organizational structure of KSPAI
label_en: ORGANIZATION
tag_class: call
description: 한국피지컬인공지능학회(KSPAI) 임원진 소개 — 회장, 부회장단, 감사, 편집위원회, 학술위원회 등 조직 구성.
permalink: /officers/
---
{% comment %}
  All names/roles come from _data/officers.yml. Cards render via _includes/person-card.html
  (monogram avatars — the society has decided not to publish officer photos).
{% endcomment %}
{% assign o = site.data.officers %}

<!-- <div class="coming-soon-banner">
  <span class="mono">※</span>
  <div>
    <strong>
      <span data-lang="ko">{{ o.status.banner_ko }}</span>
      <span data-lang="en">{{ o.status.banner_en }}</span>
    </strong><br>
    <span data-lang="ko">{{ o.status.note_ko }}</span>
    <span data-lang="en">{{ o.status.note_en }}</span>
  </div>
</div> -->

<!-- ── ORGANIZATION OVERVIEW (jump links with counts) ── -->
<div class="org-overview" role="navigation" aria-label="조직 구성 바로가기 / Organization overview">
  <a href="#president" class="org-overview-item">
    <span class="org-overview-num">1</span>
    <span class="org-overview-label"><span data-lang="ko">회장</span><span data-lang="en">President</span></span>
  </a>
  <a href="#vice-presidents" class="org-overview-item">
    <span class="org-overview-num">{{ o.vice_presidents.size }}</span>
    <span class="org-overview-label"><span data-lang="ko">부회장</span><span data-lang="en">Vice Presidents</span></span>
  </a>
  <a href="#auditor" class="org-overview-item">
    <span class="org-overview-num">{{ o.auditors.size }}</span>
    <span class="org-overview-label"><span data-lang="ko">감사</span><span data-lang="en">Auditor</span></span>
  </a>
  <a href="#editorial" class="org-overview-item">
    <span class="org-overview-num">{{ o.editorial_committee.divisions.size }}</span>
    <span class="org-overview-label"><span data-lang="ko">편집위원회 분과</span><span data-lang="en">Editorial Divisions</span></span>
  </a>
  <a href="#academic" class="org-overview-item">
    <span class="org-overview-num">{{ o.academic_committee.size }}</span>
    <span class="org-overview-label"><span data-lang="ko">학술위원회</span><span data-lang="en">Academic Committee</span></span>
  </a>
</div>

<!-- ── PRESIDENT ── -->
<div class="page-section" id="president">
  <div class="president-card">
    <div class="president-avatar" aria-hidden="true">
      {% include monogram.html person=o.president %}
    </div>
    <div class="president-info">
      <p class="president-role">
        <span data-lang="ko">회장 · PRESIDENT</span>
        <span data-lang="en">PRESIDENT · 회장</span>
      </p>
      <h2 class="president-name">
        <span data-lang="ko">{{ o.president.name_ko }}</span>
        <span data-lang="en">{{ o.president.name_en }}</span>
      </h2>
      <p class="president-affil">
        <span data-lang="ko">{{ o.president.affil_ko }}</span>
        <span data-lang="en">{{ o.president.affil_en }}</span>
      </p>
    </div>
  </div>
</div>

<!-- ── VICE PRESIDENTS ── -->
<div class="page-section" id="vice-presidents">
  <p class="org-eyebrow mono">01 · EXECUTIVE</p>
  <h2 class="page-section-title">
    <span data-lang="ko">부회장단</span>
    <span data-lang="en">Vice Presidents</span>
  </h2>
  <div class="person-grid">
    {% for officer in o.vice_presidents %}
      {% assign tone = forloop.index0 | modulo: 3 %}
      {% include person-card.html person=officer label_ko=officer.role_ko label_en=officer.role_en tone=tone %}
    {% endfor %}
  </div>
</div>

<!-- ── AUDITOR ── -->
<div class="page-section" id="auditor">
  <p class="org-eyebrow mono">02 · AUDIT</p>
  <h2 class="page-section-title">
    <span data-lang="ko">감사</span>
    <span data-lang="en">Auditor</span>
  </h2>
  <div class="person-grid">
    {% for auditor in o.auditors %}
      {% include person-card.html person=auditor label_ko=auditor.role_ko label_en=auditor.role_en tone=2 %}
    {% endfor %}
  </div>
</div>

<!-- ── EDITORIAL COMMITTEE ── -->
<div class="page-section" id="editorial">
  <p class="org-eyebrow mono">03 · JOURNAL</p>
  <h2 class="page-section-title">
    <span data-lang="ko">편집위원회</span>
    <span data-lang="en">Editorial Committee</span>
  </h2>
  <div class="committee-panel">
    <div class="person-grid">
      {% for member in o.editorial_committee.leadership %}
        {% assign tone = forloop.index0 | modulo: 3 %}
        {% include person-card.html person=member label_ko=member.role_ko label_en=member.role_en tone=tone %}
      {% endfor %}
    </div>

    <h3 class="committee-subtitle">
      <span data-lang="ko">분과위원장</span>
      <span data-lang="en">Division Chairs</span>
    </h3>
    <ol class="division-list">
      {% for member in o.editorial_committee.divisions %}
      <li class="division-row{% if member.vacant %} division-row--vacant{% endif %}">
        <span class="division-num mono">{{ forloop.index | prepend: "0" | slice: -2, 2 }}</span>
        <span class="division-name">
          <span data-lang="ko">{{ member.division_ko }}</span>
          <span data-lang="en">{{ member.division_en }}</span>
        </span>
        <span class="division-chair">
          <strong>
            <span data-lang="ko">{{ member.name_ko }}</span>
            <span data-lang="en">{{ member.name_en }}</span>
          </strong>
          {% if member.affil_ko %}
          <small>
            <span data-lang="ko">{{ member.affil_ko }}</span>
            <span data-lang="en">{{ member.affil_en }}</span>
          </small>
          {% endif %}
        </span>
      </li>
      {% endfor %}
    </ol>
  </div>
</div>

<!-- ── ACADEMIC COMMITTEE ── -->
<div class="page-section" id="academic">
  <p class="org-eyebrow mono">04 · CONFERENCES</p>
  <h2 class="page-section-title">
    <span data-lang="ko">학술위원회</span>
    <span data-lang="en">Academic Committee</span>
  </h2>
  <div class="committee-panel">
    <div class="person-grid person-grid--4">
      {% for member in o.academic_committee %}
        {% assign tone = forloop.index0 | modulo: 3 %}
        {% include person-card.html person=member label_ko=member.role_ko label_en=member.role_en tone=tone %}
      {% endfor %}
    </div>
  </div>
</div>
