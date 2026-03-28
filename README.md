# 한국피지컬AI학회 홈페이지

**Korean Society of Physical AI (KSPAI)** — Official website  
🌐 Live: [kspai.org](https://kspai.org) · Built with Jekyll · Hosted on GitHub Pages

---

## Overview

This is the official website for the **Korean Society of Physical AI (한국피지컬AI학회)** and its sister organization, the **Korean Institute of Physical AI Education & Research (한국피지컬AI교육연구소)**. The site is fully bilingual (Korean / English), built with Jekyll, and deployed automatically via GitHub Pages on every push to `main`.

---

## Quick tasks

### Add a news item

Create a file in `_posts/` named `YYYY-MM-DD-slug.md`:

```yaml
---
layout: post
title_ko: "한국어 제목"
title_en: "English Title"
excerpt_ko: "뉴스 카드에 표시될 한국어 요약."
excerpt_en: "English summary shown on the news card."
tag_ko: "ANNOUNCEMENT"
tag_en: "ANNOUNCEMENT"
tag_class: "announcement"       # announcement | event | call
date_display_ko: "2026년 3월"
date_display_en: "March 2026"
date: 2026-03-01
---

본문 내용 (Markdown).
```

| `tag_class` | Color | Use for |
|---|---|---|
| `announcement` | Red | General notices, founding events |
| `event` | Orange | Conferences, seminars |
| `call` | Blue | Call for papers, submissions |

The most recent post becomes the featured wide card automatically. No HTML editing required.

---

### Edit the navigation menu

Open `_data/nav.yml`. The entire nav — desktop dropdowns and mobile menu — is generated from this one file.

```yaml
# Direct link (no dropdown)
- title_ko: "소식"
  title_en: "News"
  url: /news/

# Dropdown menu
- title_ko: "학술활동"
  title_en: "Academic"
  items:
    - title_ko: "학술대회"
      title_en: "Conferences"
      url: /conferences/
    - divider: true             # ← horizontal rule inside the dropdown
    - title_ko: "학회지"
      title_en: "Journal"
      url: /journal/
```

Reorder items by moving blocks up or down. Add `divider: true` between any two items to insert a separator line.

---

### Add a research area

Open `_data/research.yml` and copy a block:

```yaml
- num: "07"
  title_ko: "새 연구 분야"
  title_en: "New Research Area"
  subtitle_ko: "New Research Area"
  subtitle_en: "새 연구 분야"
  desc_ko: "한국어 설명."
  desc_en: "English description."
```

The homepage research grid and `/research/` page both update automatically.

---

### Add an officer

Open `officers.md` and add a new `officer-role-group` block inside the grid. Use the existing blocks as a template. To reveal the hidden founder/chair entries, uncomment the HTML comment block at the bottom of the file.

---

### Add a new page

1. Create `your-page.md` in the repo root
2. Set the front matter:

```yaml
---
layout: page
title_ko: "한국어 제목"
title_en: "English Title"
subtitle_ko: "한국어 부제목"
subtitle_en: "English subtitle"
permalink: /your-page/
# show_hero: false     ← add this to suppress the mini hero
---
```

3. Add it to `_data/nav.yml` so it appears in the menu

---

### Add a background image to any page hero

On any page, add `hero_image` to the front matter:

```yaml
hero_image: /assets/images/conference-bg.jpg
```

Then in `_includes/page-hero.html`, make sure the opening tag reads:

```html
<div class="page-hero" {% if page.hero_image %}style="--hero-bg-image: url('{{ page.hero_image }}')"{% endif %}>
```

---

## Project structure

```
.
├── _config.yml                 ← Site settings (title, URL, plugins)
│
├── _data/
│   ├── nav.yml                 ← ✏️  Navigation structure (edit to change menus)
│   └── research.yml            ← ✏️  Research area cards
│
├── _layouts/
│   ├── default.html            ← Master layout (head + nav + footer wrapper)
│   ├── page.html               ← Standalone pages (with optional mini hero)
│   └── post.html               ← Individual news post pages
│
├── _includes/
│   ├── head.html               ← <head>: meta, fonts, CSS
│   ├── nav.html                ← Navigation bar (reads _data/nav.yml)
│   ├── hero.html               ← Full-width homepage hero
│   ├── page-hero.html          ← Mini hero band for inner pages
│   ├── stats.html              ← Stats bar (below homepage hero)
│   ├── about.html              ← About section / two org cards
│   ├── research.html           ← Research grid (reads _data/research.yml)
│   ├── news.html               ← News section (reads _posts/)
│   ├── cta.html                ← Membership CTA
│   ├── contact.html            ← Contact section
│   └── footer.html             ← Footer
│
├── _posts/                     ← ✏️  One .md file per news item
│   └── YYYY-MM-DD-slug.md
│
├── assets/
│   ├── css/style.scss          ← All styles (compiled by Jekyll/Sass)
│   ├── js/
│   │   ├── func.js             ← Theme toggle, scroll effects, dropdowns
│   │   └── lang.js             ← Bilingual KO/EN engine
│   └── images/
│       ├── logo-light.png      ← White logo (for dark backgrounds)
│       └── logo-dark.png       ← Dark logo (for light backgrounds)
│
├── index.html                  ← Homepage (assembles includes)
│
├── about.md                    → /about/
├── research.md                 → /research/
├── news.md                     → /news/
├── join.md                     → /join/
├── contact.md                  → /contact/
├── officers.md                 → /officers/
├── bylaws.md                   → /bylaws/
├── conferences.md              → /conferences/
├── submit.md                   → /submit/
├── journal.md                  → /journal/
├── seminars.md                 → /seminars/
└── privacy.md                  → /privacy/
```

---

## Design system

### Colors

| Token | Light mode | Dark mode | Use |
|---|---|---|---|
| `--accent-primary` | `#00c8c5` | `#24fffc` | Cyan — main accent |
| `--accent-secondary` | `#2585f3` | `#2585f3` | Bright blue — secondary |
| `--accent-dark` | `#0a4c81` | `#0a4c81` | Deep navy — hero bg, logo |
| `--accent-warm` | `#e8433a` | `#ff5048` | Red — announcement tags |
| `--accent-orange` | `#f07030` | `#ff7a42` | Orange — event tags |

The hero section always uses a deep navy gradient (`#0a4c81 → #030f1e`) regardless of light/dark theme, so the hero is always a dark surface with white text.

### Typography

| Font | Use | Source |
|---|---|---|
| **Space Grotesk** | English display titles, headings, nav, stats | Google Fonts |
| **Pretendard Variable** | All body text, Korean headings | jsDelivr CDN |
| **Noto Sans KR** | Korean body fallback | Google Fonts |
| **JetBrains Mono** | Section labels, timestamps, code elements | Google Fonts |

Korean characters in Space Grotesk headings fall through to Pretendard automatically via the CSS font stack.

**Swap body fonts:** In `style.scss`, inside `:root`, comment/uncomment the `--font-body-ko` line:

```scss
/* Option A — Pretendard leads (default) */
--font-body-ko: 'Pretendard Variable', 'Pretendard', 'Noto Sans KR', sans-serif;

/* Option B — Noto Sans KR leads */
/* --font-body-ko: 'Noto Sans KR', 'Pretendard Variable', sans-serif; */
```

### Logo

Two files are required — transparent background PNGs (or SVGs):

| File | Use |
|---|---|
| `assets/images/logo-light.png` | White/light logo — used on dark backgrounds (hero, footer, nav over hero, dark theme nav) |
| `assets/images/logo-dark.png` | Dark logo — used on light backgrounds (nav when scrolled in light theme) |

CSS handles all switching automatically — no JS needed.

---

## Bilingual system

The site uses two parallel mechanisms:

**1. `data-lang` spans** — for Liquid-rendered content in Jekyll includes. CSS toggles visibility based on the `<html lang="">` attribute set by JS:

```html
<span data-lang="ko">한국어 텍스트</span>
<span data-lang="en">English text</span>
```

**2. `data-i18n` keys** — for UI chrome (nav labels, buttons, section headers). JS replaces `textContent` from the `translations` dictionary in `lang.js`:

```html
<h2 data-i18n="about.title">두 기관, 하나의 비전</h2>
```

Language preference persists via `localStorage`. The toggle button switches between KO and EN on every page.

To add a translation key, open `assets/js/lang.js` and add an entry to the `translations` object:

```js
"your.key": { ko: "한국어", en: "English" },
```

---

## Navigation

The nav has three behaviors depending on context:

**Over the homepage hero** — transparent background, white text. Transitions smoothly to solid on scroll.

**On inner pages** — always solid (`var(--nav-bg)`) with normal text colors, because there is no hero element for the `IntersectionObserver` to watch.

**Dropdown menus** — open on hover (desktop) and click (touch/keyboard). Close on outside click or Escape. The mobile menu (≤860px) shows a grouped accordion-style panel.

---

## Local development

```bash
# Install dependencies (first time only)
bundle install

# Serve with live reload
bundle exec jekyll serve --livereload

# Open http://localhost:4000
```

Requirements: Ruby ≥ 3.1, Bundler

---

## Deployment

Push to `main`. GitHub Pages detects Jekyll and builds automatically.

**GitHub Pages settings:**  
Settings → Pages → Source: **Deploy from a branch** → `main` / `/ (root)`

> ⚠️ Do not include a `.nojekyll` file — it bypasses Jekyll processing entirely.

---

## Planned improvements

- [ ] Professional rebuild with forum and paper submission system (external vendor)
- [ ] Officer profile photos in `/officers/`
- [ ] Hero background image or video
- [ ] Populate full officer names following inaugural general assembly
- [ ] Activate ISSN and journal volume information upon publication

---

## License

MIT © 2025 Korean Society of Physical AI (KSPAI)  
contact@kspai.org · [kspai.org](https://kspai.org)
