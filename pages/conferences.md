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

<!-- ════════════════════════
     CONFERENCE TEMPLATE
     ════════════════════════ -->
<div class="page-section" id="conference-template">
  <h2 class="page-section-title">
    <span data-lang="ko">학술대회 발표 논문 양식</span>
    <span data-lang="en">Conference Paper Template</span>
  </h2>
  <p class="page-section-text">
    <span data-lang="ko">KSPAI 학술대회 발표 논문 제출용 공식 HWP 양식입니다. 제1회 하계학술대회(2026년 6월, 한밭대학교) 배포 버전을 아래에서 다운로드하실 수 있습니다.</span>
    <span data-lang="en">The official HWP template for conference paper submissions to KSPAI events. The version distributed at the 1st Summer Conference (June 2026, Hanbat National University) is available for download below.</span>
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
        <span data-lang="ko">제1회 하계학술대회(2026년 6월 25–26일, 한밭대학교)에서 배포된 발표 논문 양식입니다.</span>
        <span data-lang="en">Paper template distributed at the 1st Summer Conference (June 25–26, 2026, Hanbat National University).</span>
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
        </div>
        <h3 class="conf-title">
          <span data-lang="ko">{{ conf.title_ko }} ({{ conf.venue_ko | split: "," | last | strip }})</span>
          <span data-lang="en">{{ conf.title_en }}</span>
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
            <span class="conf-meta-label">CFP</span>
            <span class="conf-meta-value">
              <span data-lang="ko">{{ conf.key_dates[0].date_ko }}</span>
              <span data-lang="en">{{ conf.key_dates[0].date_en }}</span>
            </span>
          </div>
        </div>

        {% if conf.key_dates.size > 0 %}
        <div class="conf-key-dates" style="margin-top: 20px;">
          <p class="meta-label" style="margin-bottom: 10px;">
            <span data-lang="ko">주요 일정</span>
            <span data-lang="en">Key Dates</span>
          </p>
          {% for kd in conf.key_dates %}
          <div class="conf-key-date-row">
            <span class="conf-key-date-label">
              <span data-lang="ko">{{ kd.label_ko }}</span>
              <span data-lang="en">{{ kd.label_en }}</span>
            </span>
            <span class="conf-key-date-value mono {% if kd.status == 'confirmed' %}conf-key-date--confirmed{% endif %}">
              <span data-lang="ko">{{ kd.date_ko }}</span>
              <span data-lang="en">{{ kd.date_en }}</span>
            </span>
          </div>
          {% endfor %}
        </div>
        {% endif %}

        <div class="section-actions" style="margin-top: 24px;">
          <a href="{{ '/news/' | relative_url }}" class="btn btn-primary btn-sm">
            <span data-lang="ko">소식 구독 →</span>
            <span data-lang="en">Follow News →</span>
          </a>
          <a href="{{ '/contact/' | relative_url }}" class="btn btn-outline btn-sm">
            <span data-lang="ko">문의하기</span>
            <span data-lang="en">Contact Us</span>
          </a>
        </div>
      </div>

      <!-- ── POSTER SIDE ── -->
      <div class="conf-poster-side">
        {% if conf.has_poster %}
        <img src="{{ conf.poster | relative_url }}"
             alt="{% if page.lang == 'en' %}{{ conf.poster_alt_en }}{% else %}{{ conf.poster_alt_ko }}{% endif %}"
             class="conf-poster-img"
             loading="lazy" />
        {% else %}
        <div class="conf-poster-placeholder" aria-hidden="true">
          <span class="conf-poster-ph-label" style="font-family: var(--font-mono); font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(36,255,252,0.6); position: relative;">
            <span data-lang="ko">포스터 준비 중</span>
            <span data-lang="en">POSTER COMING SOON</span>
          </span>
          <p class="conf-poster-ph-title" style="font-family: var(--font-title-en); font-size: 15px; font-weight: 800; color: #fff; line-height: 1.3; position: relative; text-align: center;">
            <span data-lang="ko">{{ conf.title_ko }}</span>
            <span data-lang="en">{{ conf.title_en }}</span>
          </p>
          <p class="conf-poster-ph-date" style="font-family: var(--font-mono); font-size: 12px; color: rgba(192,220,248,0.75); position: relative;">
            <span data-lang="ko">{{ conf.date_ko }}</span>
            <span data-lang="en">{{ conf.date_en }}</span>
          </p>
          <p class="conf-poster-ph-venue" style="font-size: 11px; color: rgba(192,220,248,0.55); position: relative; text-align: center;">
            <span data-lang="ko">{{ conf.venue_ko }}</span>
            <span data-lang="en">{{ conf.venue_en }}</span>
          </p>
        </div>
        {% endif %}
      </div>

    </div><!-- .conf-with-poster -->
  </div><!-- .conf-featured-card -->
  {% endfor %}

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
          <span data-lang="ko">로보틱스, 체화지능, 자율시스템, 디지털 트윈, 영상처리 및 컴퓨터 비전, 피지컬AI 교육, 국방 피지컬AI, 보건의료 피지컬AI, 인간-로봇 상호작용, 피지컬AI 융합 및 창업 및 이와 융합된 제반 분야.</span>
          <span data-lang="en">Robotics, Embodied Intelligence, Autonomous Systems, Digital Twin, Image Processing &amp; Computer Vision, Physical AI Education, Defense Physical AI, Healthcare Physical AI, Human-Robot Interaction, Physical AI Convergence &amp; Entrepreneurship, and related interdisciplinary fields.</span>
        </p>
      </div>
    </div>

    <div class="join-step">
      <span class="join-step-num">03</span>
      <div>
        <strong><span data-lang="ko">논문 양식</span><span data-lang="en">Paper Template</span></strong>
        <p>
          <span data-lang="ko">학술대회 발표 논문은 학술지 양식과 별도의 학술대회 발표 논문 양식을 사용합니다. 제1회 하계학술대회 양식은 위 다운로드 섹션에서 받으실 수 있습니다.</span>
          <span data-lang="en">Conference papers use a separate template from the journal. The 1st Summer Conference template is available in the download section above.</span>
        </p>
      </div>
    </div>

    <div class="join-step">
      <span class="join-step-num">04</span>
      <div>
        <strong><span data-lang="ko">우수 논문 시상</span><span data-lang="en">Awards</span></strong>
        <p>
          <span data-lang="ko">학술대회에서 발표된 우수 논문에 대해 최우수상, 우수상, 대학(원)생 경진대회 수상 등을 수여할 예정입니다. 수상 논문의 학술지 투고를 장려합니다.</span>
          <span data-lang="en">Outstanding papers presented at the conference will be recognized with Best Paper Award, Excellence Award, and Student Competition awards. Award recipients are encouraged to submit their papers to the JKPAI journal.</span>
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

  {% if site.data.conferences.past.size > 0 %}
  {% for conf in site.data.conferences.past %}
  <div class="conf-past-item">
    <div class="conf-past-date mono">
      <span data-lang="ko">{{ conf.date_ko }}</span>
      <span data-lang="en">{{ conf.date_en }}</span>
    </div>
    <div class="conf-past-body">
      <strong class="conf-past-title">
        <span data-lang="ko">{{ conf.title_ko }}</span>
        <span data-lang="en">{{ conf.title_en }}</span>
      </strong>
      <p class="conf-past-venue">
        <span data-lang="ko">{{ conf.venue_ko }}</span>
        <span data-lang="en">{{ conf.venue_en }}</span>
      </p>
    </div>
    {% if conf.proceedings_link %}
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
