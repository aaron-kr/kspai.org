# 한국피지컬인공지능학회 홈페이지

**Korean Society of Physical AI (KSPAI)** — Official website  
🌐 [kspai.org](https://kspai.org) · Jekyll + GitHub Pages · Bilingual KO/EN

---

## Quick tasks

### Add a news item

Create `_posts/YYYY-MM-DD-slug.md`:

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

The most recent post is automatically the featured wide card. Older posts appear as smaller cards below.

---

### Edit the navigation menu

Open `_data/nav.yml`. The entire nav — desktop dropdowns, dividers, and mobile menu — is generated from this single file. No HTML editing required.

```yaml
# Direct link
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
    - divider: true             # ← horizontal separator line
    - title_ko: "학회지"
      title_en: "Journal"
      url: /journal/
```

---

### Add a research area

Open `_data/research.yml` and append a block:

```yaml
- num: "07"
  title_ko: "새 연구 분야"
  title_en: "New Research Area"
  subtitle_ko: "New Research Area"
  subtitle_en: "새 연구 분야"
  desc_ko: "한국어 설명."
  desc_en: "English description."
```

Both the homepage grid and `/research/` page update automatically.

---

### Add a new standalone page

1. Create `your-page.md` in the repo root
2. Front matter:

```yaml
---
layout: page
title_ko: "한국어 제목"
title_en: "English Title"
subtitle_ko: "한국어 부제목"
subtitle_en: "English subtitle"
permalink: /your-page/
# show_hero: false      ← uncomment to suppress the mini hero band
---
```

3. Add it to `_data/nav.yml`

---

### Add an officer

Open `officers.md`. Copy an existing `officer-role-group` block and fill in name and affiliation. To add a photo:

```html
<div class="officer-avatar">
  <img src="/assets/images/officer-name.jpg" alt="Name" />
</div>
```

The founder/chair and president entries are stored in an HTML comment at the bottom of `officers.md` — uncomment to reveal them after the inaugural general assembly.

---

### Update logo files

Replace either or both files — CSS switching is automatic:

| File | When shown |
|---|---|
| `assets/images/logo-light.png` | Dark backgrounds: hero, footer, nav over hero, dark theme |
| `assets/images/logo-dark.png` | Light backgrounds: nav when scrolled in light theme |

Both files must have transparent backgrounds. SVG works too — just change the extension in `_includes/nav.html` and `_includes/footer.html`.

---

### Add a hero background image to any page

In the page's front matter:

```yaml
hero_image: /assets/images/conference-bg.jpg
```

Then confirm `_includes/page-hero.html` opens with:

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
│   ├── nav.yml                 ← ✏️  Edit to change navigation menus
│   └── research.yml            ← ✏️  Edit to add/change research areas
│
├── _layouts/
│   ├── default.html            ← Master layout (head + nav + footer)
│   ├── page.html               ← Standalone pages (with optional mini hero)
│   └── post.html               ← Individual news post pages
│
├── _includes/
│   ├── head.html               ← <head>: meta, fonts, CSS, anti-flash script
│   ├── nav.html                ← Navigation bar (reads _data/nav.yml)
│   ├── hero.html               ← Full-width homepage hero section
│   ├── page-hero.html          ← Mini hero band for inner pages
│   ├── stats.html              ← Stats bar (6+ areas, 2 orgs, 2025, ∞)
│   ├── about.html              ← About / two org cards
│   ├── research.html           ← Research grid (reads _data/research.yml)
│   ├── news.html               ← News section (reads _posts/)
│   ├── cta.html                ← Membership CTA band
│   ├── contact.html            ← Contact section
│   └── footer.html             ← Footer with logo watermark
│
├── _posts/                     ← ✏️  One .md file per news/announcement
│   └── YYYY-MM-DD-slug.md
│
├── assets/
│   ├── css/style.scss          ← All styles (Jekyll/Sass compiles this)
│   ├── js/
│   │   ├── func.js             ← Theme, scroll, nav transparency, dropdowns, mobile menu
│   │   └── lang.js             ← KO/EN bilingual engine + translation strings
│   └── images/
│       ├── logo-light.png      ← Light logo for dark backgrounds
│       └── logo-dark.png       ← Dark logo for light backgrounds
│
├── index.html                  ← Homepage (front matter + {% include %} calls only)
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

### Color palette

| Token | Light | Dark | Use |
|---|---|---|---|
| `--accent-primary` | `#00c8c5` | `#24fffc` | Cyan — main accent, labels, borders |
| `--accent-secondary` | `#2585f3` | `#2585f3` | Bright blue — secondary accent |
| `--accent-dark` | `#0a4c81` | `#0a4c81` | Deep navy — hero bg, logo gradient |
| `--accent-warm` | `#e8433a` | `#ff5048` | Red — ANNOUNCEMENT tags (hardcoded) |
| `--accent-orange` | `#f07030` | `#ff7a42` | Orange — EVENT tags |

The hero section always uses a dark navy gradient (`#0a4c81 → #030f1e`) regardless of light/dark theme — it is always a dark surface with white text.

### Typography

| Font | Use | Loaded from |
|---|---|---|
| Space Grotesk | EN display titles, headings, nav, stats | Google Fonts |
| Pretendard Variable | KO/EN body text, KO headings (primary) | jsDelivr CDN |
| Noto Sans KR | Korean body fallback | Google Fonts |
| JetBrains Mono | Section labels (`mono`), timestamps | Google Fonts |

Korean characters in Space Grotesk contexts fall through to Pretendard automatically via the CSS font stack. To swap body fonts, edit the `--font-body-ko` variable in `:root` inside `style.scss`.

### Key CSS variables

```scss
--font-body-ko      Body font stack (Pretendard → Noto Sans KR)
--font-title-en     Title font (Space Grotesk → Outfit)
--font-mono         Monospace (JetBrains Mono)
--hero-bg-from      Hero gradient start (#0a4c81 in both themes)
--hero-bg-to        Hero gradient end (#030f1e / #020810)
--nav-bg            Solid nav background (with backdrop blur)
```

---

## Bilingual system

Two parallel mechanisms work together:

**`data-lang` spans** — Liquid-rendered content. CSS toggles visibility when JS sets `<html lang="">`:

```html
<span data-lang="ko">한국어</span>
<span data-lang="en">English</span>
```

**`data-i18n` keys** — UI chrome. JS replaces `textContent` from the `translations` dict in `lang.js`:

```html
<h2 data-i18n="about.title">두 기관, 하나의 비전</h2>
```

For elements containing HTML (line breaks, nested spans), add `data-i18n-html` alongside `data-i18n` — JS will use `innerHTML` instead of `textContent`.

Language preference persists via `localStorage('kspai-lang')`. To add a key, append to the `translations` object in `lang.js`.

---

## Navigation behavior

| Context | Nav state |
|---|---|
| Homepage, over hero | Transparent bg, white text — `IntersectionObserver` watches `.hero` |
| Homepage, scrolled past hero | Solid `var(--nav-bg)` with blur — `.nav-scrolled` class added |
| Any inner page | Always solid — JS detects no `.hero` and immediately adds `.nav-scrolled` |

Dropdown menus open on CSS hover (desktop) and JS click (touch/keyboard). They close on outside click or Escape key. The mobile menu (≤860px breakpoint) is a grouped slide-down panel driven by `toggleMobileMenu()` in `func.js`.

**Known cascade specificity note:** The `.mobile-menu` base rule must not include `border-bottom` — it only appears via `.mobile-menu[data-open="true"]`. See `KNOWN-ISSUES.md` for details.

---

## Local development

```bash
bundle install          # first time only
bundle exec jekyll serve --livereload
# open http://localhost:4000

npm install             # first time only (lint tooling)
npm run lint:css        # Stylelint (assets/css/style.scss)
```

Requirements: Ruby ≥ 3.1, Bundler. CI runs Stylelint on every push to `main`.

---

## Deployment

Push to `main`. GitHub Pages auto-builds.

Settings → Pages → Source: **Deploy from a branch** → `main` / `/ (root)`

> ⚠️ The `.nojekyll` file must not exist in the repo. Its presence silently disables Jekyll processing entirely.

---

## Planned

- [ ] Full professional rebuild with forum + paper submission (external vendor)
- [ ] Officer profile photos (`/officers/`)
- [ ] Hero background image or video
- [ ] ISSN assignment after journal launch

---

## License

MIT © 2025 Korean Society of Physical AI (KSPAI)  
contact@physicalai.or.kr · [kspai.org](https://kspai.org)
