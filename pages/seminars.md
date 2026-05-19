---
layout: page
title: 세미나
title_ko: 세미나
title_en: Seminars & Lectures
subtitle_ko: 한국피지컬인공지능학회 세미나 시리즈
subtitle_en: KSPAI Seminar Series &amp; Special Lectures
description: 한국피지컬인공지능학회(KSPAI) 세미나 시리즈 안내 — KSPAI 콜로퀴엄, 연구윤리 세미나, 산학연 워크숍, 국제 특별 강연.
permalink: /seminars/
---

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
    <span data-lang="ko">한국피지컬인공지능학회는 정기 연차 학술대회 외에도 다양한 세미나와 특별 강연을 운영합니다. 피지컬 AI 분야의 최전선 연구자, 산업 전문가, 해외 석학을 초청하여 최신 연구 성과와 기술 동향을 공유하는 자리입니다. 학회 회원과 비회원 모두 참여 가능합니다.</span>
    <span data-lang="en">Beyond its annual conference, KSPAI organizes a range of seminars and special lectures. These events invite leading researchers, industry experts, and international scholars in Physical AI to share the latest research outcomes and technology trends. Both members and non-members are welcome to participate.</span>
  </p>
</div>

<!-- ════════════════════════════════
     SERIES CARDS — data-driven from _data/seminars.yml
     ════════════════════════════════ -->
<div class="page-section" id="series">
  <h2 class="page-section-title">
    <span data-lang="ko">정기 세미나 시리즈</span>
    <span data-lang="en">Regular Seminar Series</span>
  </h2>

  {% for series in site.data.seminars.series %}
  <div class="seminar-series-card">
    <div class="seminar-series-header">
      <div class="seminar-series-icon">{{ series.icon }}</div>
      <div>
        <div class="seminar-series-name">
          <span data-lang="ko">{{ series.name_ko }}</span>
          <span data-lang="en">{{ series.name_en }}</span>
        </div>
        <div class="seminar-series-en">{{ series.subtitle_en }}</div>
      </div>
    </div>
    <p class="seminar-series-desc">
      <span data-lang="ko">{{ series.desc_ko }}</span>
      <span data-lang="en">{{ series.desc_en }}</span>
    </p>
    <div class="seminar-meta-row">
      {% for meta in series.meta %}
      <div class="seminar-meta-item">
        <span class="seminar-meta-label">
          <span data-lang="ko">{{ meta.label_ko }}</span>
          <span data-lang="en">{{ meta.label_en }}</span>
        </span>
        <span class="seminar-meta-value">
          <span data-lang="ko">{{ meta.value_ko }}</span>
          <span data-lang="en">{{ meta.value_en }}</span>
        </span>
      </div>
      {% endfor %}
    </div>
  </div>
  {% endfor %}

</div>

<!-- ════════════════════════════════
     UPCOMING SEMINARS
     ════════════════════════════════ -->
<div class="page-section" id="upcoming">
  <h2 class="page-section-title">
    <span data-lang="ko">예정 세미나</span>
    <span data-lang="en">Upcoming Seminars</span>
  </h2>

  {% if site.data.seminars.upcoming.size > 0 %}
  <div class="seminar-list">
    {% for event in site.data.seminars.upcoming %}
    <div class="seminar-list-item">
      <span class="seminar-list-date">
        <span data-lang="ko">{{ event.date_display_ko }}</span>
        <span data-lang="en">{{ event.date_display_en }}</span>
      </span>
      <div class="seminar-list-body">
        <div class="seminar-list-title">
          <span data-lang="ko">{{ event.title_ko }}</span>
          <span data-lang="en">{{ event.title_en }}</span>
        </div>
        {% if event.speaker %}
        <div class="seminar-list-speaker">{{ event.speaker }}</div>
        {% endif %}
        {% if event.location_ko %}
        <div class="seminar-list-speaker">
          <span data-lang="ko">{{ event.location_ko }}</span>
          <span data-lang="en">{{ event.location_en }}</span>
        </div>
        {% endif %}
      </div>
      {% if event.registration_open and event.registration_url %}
      <a href="{{ event.registration_url }}" class="btn btn-primary btn-sm" target="_blank" rel="noopener">
        <span data-lang="ko">신청하기</span>
        <span data-lang="en">Register</span>
      </a>
      {% endif %}
    </div>
    {% endfor %}
  </div>
  {% else %}
  <div class="coming-soon-banner">
    <span>📅</span>
    <div>
      <span data-lang="ko"><strong>세미나 일정은 창립총회 이후 공지됩니다.</strong> 소식 페이지와 이메일 공지를 통해 안내드릴 예정입니다.</span>
      <span data-lang="en"><strong>Seminar schedules will be announced after the inaugural general assembly.</strong> Updates will be posted on the News page and distributed by email.</span>
    </div>
  </div>
  {% endif %}

  <div class="section-actions">
    <a href="/news/" class="btn btn-primary btn-sm">
      <span data-lang="ko">최신 소식 보기 →</span>
      <span data-lang="en">Latest News →</span>
    </a>
    <a href="/contact/" class="btn btn-outline btn-sm">
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

  {% if site.data.seminars.past.size > 0 %}
  <div class="seminar-list">
    {% for event in site.data.seminars.past %}
    <div class="seminar-list-item">
      <span class="seminar-list-date">
        <span data-lang="ko">{{ event.date_display_ko }}</span>
        <span data-lang="en">{{ event.date_display_en }}</span>
      </span>
      <div class="seminar-list-body">
        <div class="seminar-list-title">
          <span data-lang="ko">{{ event.title_ko }}</span>
          <span data-lang="en">{{ event.title_en }}</span>
        </div>
        {% if event.speaker %}
        <div class="seminar-list-speaker">{{ event.speaker }}</div>
        {% endif %}
      </div>
      {% if event.recording_url %}
      <a href="{{ event.recording_url }}" class="btn btn-outline btn-sm" target="_blank" rel="noopener">
        <span data-lang="ko">녹화 보기</span>
        <span data-lang="en">Watch Recording</span>
      </a>
      {% elsif event.slides_url %}
      <a href="{{ event.slides_url }}" class="btn btn-outline btn-sm" target="_blank" rel="noopener">
        <span data-lang="ko">자료 보기</span>
        <span data-lang="en">View Slides</span>
      </a>
      {% endif %}
    </div>
    {% endfor %}
  </div>
  {% else %}
  <div class="coming-soon-banner">
    <span>📂</span>
    <div>
      <span data-lang="ko">지난 세미나 기록은 학회 설립 후 첫 행사부터 이 목록에 추가됩니다.</span>
      <span data-lang="en">Records of past seminars will appear here starting from the first event after the Society's official establishment.</span>
    </div>
  </div>
  {% endif %}
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
        <div class="participate-card-link">
          <a href="mailto:contact@physicalai.or.kr">contact@physicalai.or.kr →</a>
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
        <div class="participate-card-link">
          <a href="/news/">
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
        <div class="participate-card-link">
          <a href="/contact/">
            <span data-lang="ko">문의하기 →</span>
            <span data-lang="en">Contact us →</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Cross-link to conferences -->
<div class="page-section page-section--compact">
  <div class="about-full-card about-full-card--flex-row">
    <div>
      <p class="meta-label">Related</p>
      <strong class="about-full-card-title">
        <span data-lang="ko">연차 학술대회</span>
        <span data-lang="en">Annual Academic Conference</span>
      </strong>
      <p class="about-full-card-body">
        <span data-lang="ko">세미나 외에도 연차 학술대회에서 연구 성과를 발표하실 수 있습니다.</span>
        <span data-lang="en">In addition to seminars, you can present your research at the annual academic conference.</span>
      </p>
    </div>
    <a href="/conferences/" class="btn btn-outline">
      <span data-lang="ko">학술대회 안내 →</span>
      <span data-lang="en">Conferences →</span>
    </a>
  </div>
</div>

</div><!-- .container -->
</div><!-- .page-article -->
