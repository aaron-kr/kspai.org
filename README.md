# 한국피지컬AI학회 홈페이지

**Korean Society of Physical AI (KSPAI)** — Official website  
Live: [kspai.org](https://kspai.org)

---

## Overview

This is the official website for the **Korean Society of Physical AI (한국피지컬AI학회)** and its sister organization, the **Korean Institute of Physical AI Education & Research (한국피지컬AI교육연구소)**. The site is bilingual (Korean / English) and built with Jekyll, hosted via GitHub Pages.

---

## Adding News & Announcements

**This is the most common task.** To add a new news item, create a Markdown file in `_posts/`:

```
_posts/YYYY-MM-DD-short-slug.md
```

Copy this template and fill in the fields:

```yaml
---
layout: post
title_ko: "한국어 제목"
title_en: "English Title"
excerpt_ko: "한국어 요약 (뉴스 카드에 표시됩니다)."
excerpt_en: "English summary (shown on the news card)."
tag_ko: "ANNOUNCEMENT"          # ANNOUNCEMENT | EVENT | CALL FOR PAPERS
tag_en: "ANNOUNCEMENT"
tag_class: "announcement"       # announcement | event | call
date_display_ko: "2026년 3월 27일"
date_display_en: "March 27, 2026"
date: 2026-03-27
---

본문 내용 (Markdown 형식).
Full article body in Markdown.
```

**Tag classes:**
| `tag_class`    | Colour |
|---------------|--------|
| `announcement` | Red    |
| `event`        | Amber  |
| `call`         | Blue   |

The **most recent post** is automatically displayed as the featured (wide) news card. Older posts appear as smaller cards. When there are more than 4 posts, a "View all news" button appears automatically.

---

## Adding Research Areas

Edit `_data/research.yml`. Copy one block and fill in your new area — the site renders it automatically.

```yaml
- num: "07"
  title_ko: "새 연구 분야"
  title_en: "New Research Area"
  subtitle_ko: "New Research Area"
  subtitle_en: "새 연구 분야"
  desc_ko: "한국어 설명."
  desc_en: "English description."
```

---

## Project Structure

```
.
├── _config.yml             ← Site settings (title, URL, plugins)
├── _layouts/
│   ├── default.html        ← Main layout (head + nav + footer wrapper)
│   └── post.html           ← Layout for individual news posts
├── _includes/
│   ├── head.html           ← <head> meta, fonts, CSS
│   ├── nav.html            ← Navigation bar
│   ├── hero.html           ← Hero section (full-width blue)
│   ├── stats.html          ← Stats bar
│   ├── about.html          ← About / Two org cards
│   ├── research.html       ← Research areas (reads _data/research.yml)
│   ├── news.html           ← News section (reads _posts/)
│   ├── cta.html            ← Membership CTA
│   ├── contact.html        ← Contact
│   └── footer.html         ← Footer
├── _data/
│   └── research.yml        ← ✏️ Edit to add/change research areas
├── _posts/                 ← ✏️ Add .md files here for news
├── assets/
│   ├── css/style.scss      ← All styles (compiled by Jekyll)
│   └── js/
│       ├── func.js         ← Theme toggle, scroll, animations
│       └── lang.js         ← KO/EN bilingual engine
├── index.html              ← Home page (assembles includes)
├── CNAME                   ← Custom domain: kspai.org
└── Gemfile                 ← Jekyll dependencies for GitHub Pages
```

---

## Local Development

```bash
# Install dependencies (once)
bundle install

# Serve locally with live reload
bundle exec jekyll serve --livereload

# Open http://localhost:4000
```

Requirements: Ruby ≥ 3.1, Bundler

---

## Deployment

Push to the `main` branch. GitHub Pages will build the Jekyll site automatically (no `.nojekyll` file — that has been removed to enable Jekyll processing).

Settings → Pages → Source: **Deploy from a branch** → `main` / `/ (root)`

---

## Color Palette

The site uses a warm red/amber gradient as its primary identity, with deep blue (`--color-blue-600: #2563eb`) as the accent for labels, links, and UI elements.

| Token | Value | Usage |
|-------|-------|-------|
| `--accent-primary` | `#f52e3c` | Buttons, highlights |
| `--accent-secondary` | `#f59a1b` | Gradients, hover |
| `--color-blue-600` | `#2563eb` | Section labels, links, borders |
| `--color-indigo-700` | `#4338ca` | Logo, footer icon |

---

## License

MIT © 2025 Korean Society of Physical AI (KSPAI)
