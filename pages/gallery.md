---
layout: page
title: 갤러리
title_ko: 갤러리
title_en: Photo Gallery
subtitle_ko: 한국피지컬인공지능학회 학술 활동 사진
subtitle_en: KSPAI Academic Activities — Photo Archive
description: 한국피지컬인공지능학회(KSPAI) 학술대회, 세미나, 워크숍 활동 사진 모음.
permalink: /gallery/
---

<div class="page-article page-article--has-hero">
<div class="container">

{% assign active_albums = site.data.gallery.albums | where: "active", true %}

{% if active_albums.size > 0 %}

<div class="page-section" id="albums">
  <h2 class="page-section-title">
    <span data-lang="ko">앨범</span>
    <span data-lang="en">Albums</span>
  </h2>
  <div class="gallery-grid gallery-grid--full">
    {% for album in active_albums %}
    <a href="{{ album.album_url | default: '#' }}" class="gallery-item" {% if album.album_url != "" %}target="_blank" rel="noopener"{% endif %}>
      {% if album.cover != "" %}
      <img src="{{ album.cover }}" alt="{{ album.title_en }}" class="gallery-item-img" loading="lazy">
      {% else %}
      <div class="gallery-item-placeholder">
        <span class="gallery-ph-icon">{% if album.type == "conference" %}🎓{% elsif album.type == "seminar" %}🎙️{% elsif album.type == "workshop" %}🏭{% else %}📷{% endif %}</span>
      </div>
      {% endif %}
      <div class="gallery-item-caption">
        <span class="gallery-item-title">
          <span data-lang="ko">{{ album.title_ko }}</span>
          <span data-lang="en">{{ album.title_en }}</span>
        </span>
        {% if album.photo_count and album.photo_count > 0 %}
        <span class="gallery-item-count">{{ album.photo_count }} photos</span>
        {% endif %}
        <span class="gallery-item-date">{{ album.date }}</span>
      </div>
    </a>
    {% endfor %}
  </div>
</div>

{% if site.data.gallery.service_main_url != "" %}
<div class="page-section page-section--compact">
  <div class="about-full-card about-full-card--flex-row">
    <div>
      <p class="meta-label">Photo Service</p>
      <strong class="about-full-card-title">
        <span data-lang="ko">전체 앨범 보기</span>
        <span data-lang="en">View Full Album Collection</span>
      </strong>
      <p class="about-full-card-body">
        <span data-lang="ko">모든 사진은 외부 서비스에서 확인하실 수 있습니다.</span>
        <span data-lang="en">All photos are available on our external photo service.</span>
      </p>
    </div>
    <a href="{{ site.data.gallery.service_main_url }}" class="btn btn-outline" target="_blank" rel="noopener">
      <span data-lang="ko">전체 앨범 보기 →</span>
      <span data-lang="en">View all albums →</span>
    </a>
  </div>
</div>
{% endif %}

{% else %}

<div class="page-section" id="coming-soon">
  <div class="coming-soon-banner">
    <span>📷</span>
    <div>
      <strong>
        <span data-lang="ko">사진 갤러리 준비 중</span>
        <span data-lang="en">Photo Gallery Coming Soon</span>
      </strong>
      <p style="margin-top: 8px; font-size: 14px; color: var(--text-secondary);">
        <span data-lang="ko">학술대회 및 학회 활동 사진을 곧 공유할 예정입니다.</span>
        <span data-lang="en">Photos from KSPAI conferences and other academic activities will be shared here soon.</span>
      </p>
    </div>
  </div>

  <div class="gallery-ph-grid" style="margin-top: 32px; display: none;">
    {% for i in (1..6) %}
    <div class="gallery-item-placeholder gallery-item-placeholder--animated">
      <span class="gallery-ph-icon">📷</span>
    </div>
    {% endfor %}
  </div>
</div>

{% endif %}

<div class="page-section page-section--compact">
  <div class="about-full-card about-full-card--flex-row">
    <div>
      <p class="meta-label">Related</p>
      <strong class="about-full-card-title">
        <span data-lang="ko">학술대회 안내</span>
        <span data-lang="en">Academic Conferences</span>
      </strong>
      <p class="about-full-card-body">
        <span data-lang="ko">학술대회 일정과 세부 프로그램을 확인하세요.</span>
        <span data-lang="en">Check the conference schedule and detailed program.</span>
      </p>
    </div>
    <a href="{{ '/conferences/' | relative_url }}" class="btn btn-outline">
      <span data-lang="ko">학술대회 보기 →</span>
      <span data-lang="en">View Conferences →</span>
    </a>
  </div>
</div>

</div><!-- .container -->
</div><!-- .page-article -->
