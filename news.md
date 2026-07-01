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

  <div class="news-board">
    <div class="news-board-header">
      <span>
        <span data-lang="ko">분류</span>
        <span data-lang="en">Category</span>
      </span>
      <span>
        <span data-lang="ko">제목</span>
        <span data-lang="en">Title</span>
      </span>
      <span>
        <span data-lang="ko">날짜</span>
        <span data-lang="en">Date</span>
      </span>
    </div>

    {% for post in posts %}
    <a href="{{ post.url | relative_url }}" class="news-board-row">
      <span class="news-tag {{ post.tag_class }}">
        <span data-lang="ko">{{ post.tag_ko }}</span>
        <span data-lang="en">{{ post.tag_en }}</span>
      </span>
      <span class="news-board-title">
        <span data-lang="ko">{{ post.title_ko | default: post.title }}</span>
        <span data-lang="en">{{ post.title_en | default: post.title }}</span>
      </span>
      <span class="news-board-date mono">
        <span data-lang="ko">{{ post.date_display_ko }}</span>
        <span data-lang="en">{{ post.date_display_en }}</span>
      </span>
    </a>
    {% endfor %}
  </div>

  {% endif %}
</div>
