---
layout: page
title: 소식
title_ko: 소식
title_en: News & Announcements
subtitle_ko: 한국피지컬인공지능학회 최신 소식 및 공지사항
subtitle_en: Latest news and announcements from KSPAI
description: 한국피지컬인공지능학회(KSPAI) 최신 소식, 공지사항, 학술대회 일정 및 논문 모집 안내.
permalink: /news/
---

<div class="page-section">
  {% assign posts = site.posts %}
  {% if posts.size == 0 %}
  <div class="coming-soon-banner">
    <span class="mono">※</span>
    <span data-lang="ko">등록된 소식이 없습니다. 곧 새로운 소식을 전해드리겠습니다.</span>
    <span data-lang="en">No announcements yet. Check back soon for updates.</span>
  </div>
  {% else %}

  <!-- Featured / most recent post -->
  {% assign featured = posts.first %}
  <div class="news-main news-main--spaced">
    <span class="news-tag {{ featured.tag_class }} en">
      <span data-lang="ko">{{ featured.tag_ko }}</span>
      <span data-lang="en">{{ featured.tag_en }}</span>
    </span>
    <h2 class="news-title">
      <span data-lang="ko">{{ featured.title_ko }}</span>
      <span data-lang="en">{{ featured.title_en }}</span>
    </h2>
    <p class="news-excerpt">
      <span data-lang="ko">{{ featured.excerpt_ko }}</span>
      <span data-lang="en">{{ featured.excerpt_en }}</span>
    </p>
    <p class="news-date mono">
      <span data-lang="ko">{{ featured.date_display_ko }}</span>
      <span data-lang="en">{{ featured.date_display_en }}</span>
    </p>
  </div>

  <!-- All remaining posts -->
  {% if posts.size > 1 %}
  <div class="news-list">
    {% for post in posts offset:1 %}
    <div class="news-list-item">
      <div class="news-list-tag-date">
        <span class="news-tag {{ post.tag_class }} en">
          <span data-lang="ko">{{ post.tag_ko }}</span>
          <span data-lang="en">{{ post.tag_en }}</span>
        </span>
        <span class="news-date mono">
          <span data-lang="ko">{{ post.date_display_ko }}</span>
          <span data-lang="en">{{ post.date_display_en }}</span>
        </span>
      </div>
      <div class="news-list-body">
        <h3 class="news-list-title">
          <span data-lang="ko">{{ post.title_ko }}</span>
          <span data-lang="en">{{ post.title_en }}</span>
        </h3>
        <p class="news-excerpt">
          <span data-lang="ko">{{ post.excerpt_ko }}</span>
          <span data-lang="en">{{ post.excerpt_en }}</span>
        </p>
      </div>
    </div>
    {% endfor %}
  </div>
  {% endif %}

  {% endif %}
</div>
