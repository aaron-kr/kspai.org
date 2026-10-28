---
layout: page
title: 학술대회
title_ko: 학술대회
title_en: Conferences & Events
subtitle_ko: 한국피지컬인공지능학회 학술행사 안내
subtitle_en: KSPAI Academic Conferences, Seminars &amp; Workshops
description: 한국피지컬인공지능학회(KSPAI) 학술대회 안내 — 예정 학술행사, 발표 논문 안내, 논문 양식 다운로드.
permalink: /conferences/
---

<div class="page-article page-article--has-hero">
<div class="container">

<!-- ════════════════════════════════
     UPCOMING CONFERENCES (from _data/conferences.yml)
     ════════════════════════════════ -->
<div class="page-section" id="upcoming">
  <h2 class="page-section-title">
    <span data-lang="ko">예정 학술행사</span>
    <span data-lang="en">Upcoming Events</span>
  </h2>

  {% for conf in site.data.conferences.upcoming %}
  <div class="conf-featured-card" style="margin-bottom: 40px;">
    <div class="conf-with-poster">

      <!-- ── INFO SIDE ── -->
      <div class="conf-card-main">
        <div class="conf-card-header">
          <span class="conf-status-dot"></span>
          <span class="conf-status-label">
            <span data-lang="ko">{{ conf.date_ko }} · {{ conf.title_ko }}</span>
            <span data-lang="en">{{ conf.date_en }} · {{ conf.title_en }}</span>
          </span>
          {% if conf.partner_event %}
          <span class="conf-partner-chip mono">
            <span data-lang="ko">협력 학술대회</span>
            <span data-lang="en">Partner Event</span>
          </span>
          {% endif %}
        </div>
        <h3 class="conf-title">
          <a href="{{ '/conferences/' | append: conf.id | append: '/' | relative_url }}" style="color: inherit; text-decoration: none;">
            <span data-lang="ko">{{ conf.title_ko }} ({{ conf.venue_ko | split: "," | last | strip }})</span>
            <span data-lang="en">{{ conf.title_en }}</span>
          </a>
        </h3>
        <p class="conf-desc">
          <span data-lang="ko">{{ conf.description_ko }}</span>
          <span data-lang="en">{{ conf.description_en }}</span>
        </p>

        <div class="conf-meta-row">
          <div class="conf-meta-item">
            <span class="conf-meta-label"><span data-lang="ko">일시</span><span data-lang="en">Date</span></span>
            <span class="conf-meta-value">
              <span data-lang="ko">{{ conf.date_ko }}</span>
              <span data-lang="en">{{ conf.date_en }}</span>
            </span>
          </div>
          <div class="conf-meta-item">
            <span class="conf-meta-label"><span data-lang="ko">장소</span><span data-lang="en">Venue</span></span>
            <span class="conf-meta-value">
              <span data-lang="ko">{{ conf.venue_ko }}</span>
              <span data-lang="en">{{ conf.venue_en }}</span>
            </span>
          </div>
          <div class="conf-meta-item">
            <span class="conf-meta-label"><span data-lang="ko">발표 형식</span><span data-lang="en">Formats</span></span>
            <span class="conf-meta-value">
              <span data-lang="ko">{{ conf.formats_ko }}</span>
              <span data-lang="en">{{ conf.formats_en }}</span>
            </span>
          </div>
          <div class="conf-meta-item">
            <span class="conf-meta-label">{% if conf.partner_event %}<span data-lang="ko">사전등록</span><span data-lang="en">Registration</span>{% else %}CFP{% endif %}</span>
            <span class="conf-meta-value">
              <span data-lang="ko">{{ conf.key_dates[0].date_ko }}</span>
              <span data-lang="en">{{ conf.key_dates[0].date_en }}</span>
            </span>
          </div>
        </div>

        <div style="margin-top: 20px;">{% include conf-key-dates.html conf=conf %}</div>

        <div class="section-actions" style="margin-top: 24px;">
          <a href="{{ '/conferences/' | append: conf.id | append: '/' | relative_url }}" class="btn btn-primary btn-sm">
            <span data-lang="ko">자세히 보기 →</span>
            <span data-lang="en">Details →</span>
          </a>
          {% if conf.registration_open and conf.registration_link != "" %}
          <a href="{{ conf.registration_link }}" class="btn btn-outline btn-sm" target="_blank" rel="noopener">
            <span data-lang="ko">사전등록</span>
            <span data-lang="en">Register</span>
          </a>
          {% endif %}
          <a href="{{ '/contact/' | relative_url }}" class="btn btn-outline btn-sm">
            <span data-lang="ko">문의하기</span>
            <span data-lang="en">Contact Us</span>
          </a>
        </div>
      </div>

      <!-- ── POSTER SIDE ── -->
      <div class="conf-poster-side">
        {% include conf-poster.html conf=conf %}
      </div>

    </div><!-- .conf-with-poster -->
  </div><!-- .conf-featured-card -->
  {% endfor %}

</div>

<!-- ════════════════════════
     CONFERENCE TEMPLATE
     ════════════════════════ -->
<div class="page-section" id="conference-template">
  <h2 class="page-section-title">
    <span data-lang="ko">학술대회 발표 논문 양식</span>
    <span data-lang="en">Conference Paper Template</span>
  </h2>
  <p class="page-section-text">
    <span data-lang="ko">KSPAI 학술대회 발표 논문 제출용 공식 HWP 양식입니다. 아래에서 다운로드하실 수 있습니다.</span>
    <span data-lang="en">The official HWP template for conference paper submissions to KSPAI events. Available for download below.</span>
  </p>
  <div class="download-card download-card--warm">
    <div class="download-card-icon">📋</div>
    <div class="download-card-body">
      <div class="download-badge">학술대회 · Conference</div>
      <div class="download-card-title">
        <span data-lang="ko">KSPAI 학술대회 발표 논문 양식 — HWP</span>
        <span data-lang="en">KSPAI Conference Paper Template — HWP</span>
      </div>
      <p class="download-card-desc">
        <span data-lang="ko">한국피지컬인공지능학회 학술대회 발표 논문 작성에 사용하는 공식 양식입니다.</span>
        <span data-lang="en">The official template for papers presented at KSPAI academic conferences.</span>
      </p>
    </div>
    <div class="download-card-actions">
      <a href="/assets/files/2026 공동하계학술대회 논문양식.hwp" class="btn btn-primary" download>
        <span data-lang="ko">↓ 학술대회 양식</span>
        <span data-lang="en">↓ Conference Template</span>
      </a>
      <a href="/conferences/" class="btn btn-outline">
        <span data-lang="ko">학술대회 안내</span>
        <span data-lang="en">Conference Info</span>
      </a>
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

  {% if site.data.conferences.past.size > 0 %}
  {% for conf in site.data.conferences.past %}
  <div class="conf-past-item">
    <div class="conf-past-date mono">
      <span data-lang="ko">{{ conf.date_ko }}</span>
      <span data-lang="en">{{ conf.date_en }}</span>
    </div>
    <div class="conf-past-body">
      <strong class="conf-past-title">
        <a href="{{ '/conferences/' | append: conf.id | append: '/' | relative_url }}" style="color: inherit; text-decoration: none;">
          <span data-lang="ko">{{ conf.title_ko }}</span>
          <span data-lang="en">{{ conf.title_en }}</span>
        </a>
      </strong>
      <p class="conf-past-venue">
        <span data-lang="ko">{{ conf.venue_ko }}</span>
        <span data-lang="en">{{ conf.venue_en }}</span>
      </p>
    </div>
    <a href="{{ '/conferences/' | append: conf.id | append: '/' | relative_url }}" class="btn btn-outline btn-sm">
      <span data-lang="ko">자세히 →</span>
      <span data-lang="en">Details →</span>
    </a>
    {% if conf.proceedings_link and conf.proceedings_link != "" %}
    <a href="{{ conf.proceedings_link }}" class="btn btn-outline btn-sm">
      <span data-lang="ko">논문집 →</span>
      <span data-lang="en">Proceedings →</span>
    </a>
    {% endif %}
  </div>
  {% endfor %}
  {% else %}
  <div class="coming-soon-banner">
    <span>🗓</span>
    <span>
      <span data-lang="ko">학회 창립 후 개최되는 첫 학술대회 기록부터 이 목록이 채워집니다.</span>
      <span data-lang="en">This list will be populated starting from the first conference held after the Society's official establishment.</span>
    </span>
  </div>
  {% endif %}
</div>

<!-- ════════════════════════════════
     SEMINARS CROSS-LINK
     ════════════════════════════════ -->
<div class="page-section page-section--compact">
  <div class="about-full-card about-full-card--flex-row">
    <div>
      <p class="meta-label">Related</p>
      <strong class="about-full-card-title">
        <span data-lang="ko">세미나 시리즈</span>
        <span data-lang="en">Seminar Series</span>
      </strong>
      <p class="about-full-card-body">
        <span data-lang="ko">학술대회 외에도 정기 세미나와 특별 강연이 진행됩니다.</span>
        <span data-lang="en">In addition to annual conferences, regular seminars and special lectures are held.</span>
      </p>
    </div>
    <a href="/seminars/" class="btn btn-outline">
      <span data-lang="ko">세미나 안내 →</span>
      <span data-lang="en">Seminars →</span>
    </a>
  </div>
</div>

</div><!-- .container -->
</div><!-- .page-article -->
