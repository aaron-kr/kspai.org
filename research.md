---
layout: page
title: 연구분야
title_ko: 연구 분야
title_en: Research Areas
subtitle_ko: 한국피지컬AI학회 핵심 연구 분야
subtitle_en: Core research areas of the Korean Society of Physical AI
permalink: /research/
---

<div class="page-section">
  <h2 class="page-section-title">
    <span data-lang="ko">피지컬 AI란?</span>
    <span data-lang="en">What is Physical AI?</span>
  </h2>
  <p class="page-section-text">
    <span data-lang="ko">피지컬 AI(Physical AI)는 디지털 공간을 넘어 물리적 현실 세계에서 작동하고 상호작용하는 인공지능 시스템을 연구하는 분야입니다. 단순한 소프트웨어 알고리즘을 넘어, 로봇 몸체, 센서, 액추에이터, 물리 법칙을 이해하고 활용하는 지능을 연구합니다. NVIDIA, 구글 딥마인드, OpenAI 등 세계 주요 AI 기업들이 피지컬 AI를 차세대 핵심 기술로 주목하고 있으며, 스마트 제조, 의료 로봇, 자율주행, 우주 탐사 등 다양한 산업에 혁신적 변화를 가져오고 있습니다.</span>
    <span data-lang="en">Physical AI is the field studying artificial intelligence systems that operate and interact in the physical real world, beyond the digital domain. It goes beyond software algorithms to research intelligence that understands and leverages robotic bodies, sensors, actuators, and the laws of physics. Major global AI companies including NVIDIA, Google DeepMind, and OpenAI are spotlighting Physical AI as a core next-generation technology, bringing transformative change to industries including smart manufacturing, medical robotics, autonomous driving, and space exploration.</span>
  </p>
</div>

<div class="page-section">
  <h2 class="page-section-title">
    <span data-lang="ko">핵심 연구 분야</span>
    <span data-lang="en">Core Research Areas</span>
  </h2>

  <div class="research-grid">
    {% for area in site.data.research %}
    <div class="research-full-card">
      <div class="research-full-num mono">{{ area.num }}</div>
      <div class="research-full-body">
        <h3 class="research-full-title">
          <span data-lang="ko">{{ area.title_ko }}</span>
          <span data-lang="en">{{ area.title_en }}</span>
        </h3>
        <p class="research-full-subtitle">
          <span data-lang="ko">{{ area.subtitle_ko }}</span>
          <span data-lang="en">{{ area.subtitle_en }}</span>
        </p>
        <p class="research-full-desc">
          <span data-lang="ko">{{ area.desc_ko }}</span>
          <span data-lang="en">{{ area.desc_en }}</span>
        </p>
      </div>
    </div>
    {% endfor %}
  </div>
</div>

<div class="page-section">
  <h2 class="page-section-title">
    <span data-lang="ko">연구 참여</span>
    <span data-lang="en">Get Involved</span>
  </h2>
  <p class="page-section-text">
    <span data-lang="ko">피지컬 AI 연구에 관심 있는 연구자와 기관의 참여를 환영합니다. 공동 연구, 학술대회 발표, 논문 투고 등 다양한 방식으로 학회 활동에 참여하실 수 있습니다.</span>
    <span data-lang="en">We welcome researchers and institutions interested in Physical AI research. You can participate in society activities through collaborative research, conference presentations, paper submissions, and more.</span>
  </p>
  <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:8px;">
    <a href="{{ '/submit/' | relative_url }}" class="btn btn-primary">
      <span data-lang="ko">논문 투고 →</span><span data-lang="en">Submit a Paper →</span>
    </a>
    <a href="{{ '/join/' | relative_url }}" class="btn btn-outline">
      <span data-lang="ko">회원 가입</span><span data-lang="en">Join the Society</span>
    </a>
  </div>
</div>
