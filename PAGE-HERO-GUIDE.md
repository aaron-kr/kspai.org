# ═══════════════════════════════════════════════════════════
#  HOW TO CONTROL THE PAGE HERO
# ═══════════════════════════════════════════════════════════
#
#  The page layout now shows the mini hero BY DEFAULT on every
#  page that uses layout: page.
#
#  To DISABLE it on a specific page, add:
#    show_hero: false
#
#  To ENABLE a background image on any page hero, add:
#    hero_image: /assets/images/your-image.jpg
#  (same mechanism as the main hero — see style patch notes)
#
# ═══════════════════════════════════════════════════════════

# ── EXAMPLE: About page with hero ON (default — no flag needed) ──
---
layout: page
title_ko: 학회소개
title_en: About KSPAI
subtitle_ko: 한국피지컬AI학회 및 한국피지컬AI교육연구소 소개
subtitle_en: About the Korean Society of Physical AI and its sister institute
permalink: /about/
---

# ── EXAMPLE: A page with hero OFF ──
---
layout: page
title_ko: 개인정보처리방침
title_en: Privacy Policy
permalink: /privacy/
show_hero: false          # ← add this line to suppress the hero
---

# ── EXAMPLE: A page with a background image in the hero ──
---
layout: page
title_ko: 학술대회
title_en: Conferences
subtitle_ko: 한국피지컬AI학회 학술행사 안내
subtitle_en: KSPAI Academic Conferences and Events
permalink: /conferences/
hero_image: /assets/images/conference-bg.jpg   # ← optional image
---
# Then in _includes/page-hero.html, change the <div class="page-hero"> to:
# <div class="page-hero" {% if page.hero_image %}style="--hero-bg-image: url('{{ page.hero_image }}')"{% endif %}>
