# 한국피지컬인공지능학회 홈페이지

**Korean Society for Physical AI (KSPAI)** — Official website  
🌐 [kspai.org](https://kspai.org) · Jekyll + GitHub Pages · Bilingual KO/EN

---

## Quick tasks

> After any change, add a dated line to [`CHANGELOG.md`](CHANGELOG.md).

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

**Event notices — "at a glance" sidebar (optional).** Add any of these to the front matter and the post gets a sidebar with key facts, prominent buttons, and a poster thumbnail (on mobile it appears above the text). Without them the post is a single centered column.

```yaml
event:
  date_ko: "2026년 11월 5일(목) ~ 6일(금)"
  date_en: "Thu–Fri, November 5–6, 2026"
  venue_ko: "..."
  venue_en: "..."
  contact_ko: "김수연 · 033-250-8524"
  contact_en: "Suyeon Kim · 033-250-8524"
links:
  - label_ko: "사전등록 신청 →"
    label_en: "Pre-register →"
    url: "https://docs.google.com/forms/..."
    style: primary          # primary | outline
    external: true          # opens in a new tab
  - label_ko: "학술대회 안내 페이지"
    label_en: "Conference page"
    url: "/conferences/2026-amsti/"
    style: outline
aside_image: /assets/images/conferences/2026-amsti/amsti-poster.jpg
aside_image_alt: "포스터 / Poster"
```

For bilingual body text, wrap each language in `<div data-lang="ko" markdown="1">` … `</div>` (and `en`) so Markdown still works inside. `##` headings get an accent bar; lists get colored bullets. See `_posts/2026-10-29-amsti-2026-conference.md`.

---

### Add a conference

All conference data lives in **one file**: `_data/conferences.yml`. It has two lists, `upcoming:` and `past:`. Everything else (homepage spotlight, `/conferences/` page, the conference's own detail page) is generated from this data automatically.

**Steps:**

1. Open `_data/conferences.yml` and add a new entry under `upcoming:` (copy an existing entry as a starting template — every field is commented). At minimum fill in: `id`, `title_ko/en`, `subtitle_ko/en`, dates, venue, `formats_ko/en`, `description_ko/en`. Leave `has_poster: false` until you have a poster image.
2. Create `_conferences/YYYY-name.md` (match the `id` you used above), e.g.:

   ```yaml
   ---
   conference_id: "2027-winter"      # ← must match the `id` in conferences.yml
   title: "2027년 동계학술대회"
   title_ko: "2027년 동계학술대회"
   title_en: "2027 Winter Conference"
   description: "One-line SEO description of the event."
   permalink: /conferences/2027-winter/
   ---
   ```

   This file is intentionally almost empty — `_layouts/conference.html` does all the rendering by looking up `conference_id` in `_data/conferences.yml`.
3. (Optional) Add a news post announcing it — see "Add a news item" above.
4. (Optional) Update `_data/banner.yml` to point the site-wide alert bar at the new conference.
5. Once a poster image exists, drop it at `/assets/images/conferences/YYYY-name-poster.jpg` (or in a per-event folder, `/assets/images/conferences/YYYY-name/`) and set `has_poster: true`.

**Page layout.** The detail page has a main column (key info, then body sections) and a sidebar (poster, hosts, organizers, contact). Upcoming **KSPAI-hosted** conferences automatically include the Call-for-Papers guidelines (`_includes/cfp-guide.html`); partner events and past conferences don't.

**Extra page content (optional).** Anything you write *below* the front matter in `_conferences/YYYY-name.md` is rendered on the detail page under the info/poster block — e.g. an invitation letter, program table, directions. Use `page-section` blocks with paired `data-lang="ko"` / `data-lang="en"` spans; see `_conferences/2026-amsti.md` for a full example (slide images + bilingual text equivalents). Wrap whole paragraphs per language in `<div data-lang="..">` inside a `<div class="conf-prose">`.

**Optional fields** (see the `2026-amsti` entry for examples):

| Field | Effect |
|---|---|
| `banner_image`, `banner_alt_ko/en` | Wide image at the top of the detail page |
| `address_ko/en`, `map_url` | Street address + map link under the venue |
| `partner_event: true` | For conferences hosted by another organization that KSPAI co-hosts or promotes: shows a "협력 학술대회 / Partner Conference" label and replaces KSPAI paper-submission buttons with a pre-registration button |
| `registration_open: true` + `registration_link` | Shows a "Register / 사전등록" button (e.g. a Google Form) |
| `contact_name_ko/en`, `contact_org_ko/en`, `contact_phone`, `contact_email`, `contact_url` | External contact block in the sidebar (otherwise "Contact" goes to `/contact/`) |
| `host_label_ko/en` | Renames the "공동 주최 / Co-Organizers" heading (e.g. "주최 / Hosts") |
| `organizers` | Second list of organizations, shown as "주관 / Organizers" (each may have a `url`) |

Leave unused link fields as `""` — templates treat empty strings as "not set".

The homepage spotlight shows the first `upcoming:` entry whose `date_to` hasn't passed (as of the last build), so keep `upcoming:` sorted by date.

**Only publish confirmed facts.** Internal planning documents (steering committee notes, meeting minutes) often contain projections and internal deliberation — expected attendee/paper counts, prospective sponsor lists not yet signed, reasoning behind a policy that hasn't been finalized. Don't copy those onto the public site; wait until they're confirmed, or omit them and leave a comment in the YAML noting what's pending (see the commented-out note where the sponsor list used to be, as an example).

---

### Retire a conference (move it to "past")

When a conference concludes:

1. In `_data/conferences.yml`, cut its entry out of `upcoming:` and paste it into `past:`.
2. Change `status:` to `"closed"`.
3. Fill in `proceedings_link` and/or `photos_link` if available — a "Proceedings →" button appears automatically on `/conferences/` once `proceedings_link` is set.
4. Leave the `_conferences/YYYY-name.md` file exactly where it is — the same detail page keeps working (Jekyll finds the entry in `past:` automatically once it's no longer in `upcoming:`; see `_layouts/conference.html`).
5. Each entry under "Past Events" on `/conferences/` automatically links to its own `/conferences/YYYY-name/` page — no extra step needed.
6. Update `_data/banner.yml` so the site-wide alert bar no longer points at the concluded event (point it at the next upcoming conference, or set `active: false` if there isn't one yet).
7. Leave the conference's own past news posts (`_posts/`) untouched — those are a historical record and should keep referencing the event by name.
8. Search the rest of the site for lingering "current" references to the old conference (paper templates, gallery placeholders, CFP guide copy) and generalize them — anything that isn't an old news post or the conference's own `/conferences/YYYY-name/` page shouldn't read as if that conference is still upcoming.

---

### Update the site banner

The dismissible alert bar under the nav on every page is `_data/banner.yml`:

```yaml
active: true              # false hides it everywhere
expires: "2026-11-06"     # optional — banner hides itself (in the browser) after this date
message_ko: "..."
message_en: "..."
link_url: "/conferences/2027-winter/"
```

"Close forever" (✕) is remembered per banner (keyed by `link_url`), so when you point the banner at a new event it reappears for everyone.

The banner sits **in the page flow** directly under the nav (not on top of the page): while it's showing it pushes the page header down, and closing it removes it from the page entirely.

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

### Add an officer or committee member

Officer data lives in `_data/officers.yml`, not in `pages/officers.md` directly — the page just loops over this data. Blocks:

| Block | Renders as | Example |
|---|---|---|
| `president` | President card | 회장 |
| `vice_presidents` | Vice Presidents grid | 총무부회장, 국내학술부회장, 산학협력부회장, etc. |
| `auditors` | Auditor grid | 감사 |
| `editorial_committee.leadership` | 편집위원회 — top row | 편집위원장, 공동편집위원장, 부편집위원장 |
| `editorial_committee.divisions` | 편집위원회 — 분과위원장 grid | one entry per journal division (`division_ko/en`) |
| `academic_committee` | 학술위원회 grid | 국내/국제학술위원장, 부학술위원장 |

The page renders each person as a card with a **monogram** (surname in Korean mode, initials in English mode) — no photos — via `_includes/person-card.html`. The counts in the overview strip at the top update automatically.

To add someone, copy an existing entry under the right list and fill in `role_ko/en` (or `division_ko/en`), `name_ko/en` and `affil_ko/en` (leave affiliation blank if unknown — the template hides it). For an unfilled post, set `name_ko: 공석`, `name_en: Vacant`, `vacant: true` — it renders as a dimmed card. No HTML editing needed in `pages/officers.md`.

**English names:** use the person's own preferred romanization if known (check their university profile, papers, or ORCID); otherwise Revised Romanization, given name first (e.g. 김세민 → Semin Kim). Use the university's official English name (e.g. 전북대학교 → Jeonbuk National University). Keep a person's spelling identical everywhere they appear in the file.

If the editorial divisions change, also update `editorial_division_ko/en` in `_data/research.yml` to match.

The founder/chair reveal-after-assembly note that used to live in `officers.md` no longer applies as written — check `pages/officers.md` directly if you need to gate a reveal behind the inaugural general assembly.

---

### Update membership dues / payment info

`join.md` (→ `/join/`) has the membership fee amount, the sign-up form link, and the bank account for dues, hardcoded in the "회비 납부 / Pay membership dues" step near the bottom of the file. Edit both the `data-lang="ko"` and `data-lang="en"` spans, and the Google Form URL in the button below it, when any of these change.

---

### Update logo files

Replace either or both files — CSS switching is automatic:

| File | When shown |
|---|---|
| `assets/images/logos/logo-light.png` | Dark backgrounds: hero, footer, nav over hero, dark theme |
| `assets/images/logos/logo-dark.png` | Light backgrounds: nav when scrolled in light theme |

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
├── _config.yml                  ← Site settings (title, URL, plugins, collections, build excludes)
├── CHANGELOG.md                 ← ✏️  Dated log of every site change — add an entry with each update
├── ARCHITECTURE-OPTIONS.md      ← Notes on future CMS options (not a decision)
│
├── _data/
│   ├── nav.yml                  ← ✏️  Navigation menus (desktop + mobile)
│   ├── research.yml             ← ✏️  Research areas (homepage grid + /research/)
│   ├── conferences.yml          ← ✏️  All conference data — upcoming[] and past[]
│   ├── officers.yml             ← ✏️  President, VPs, committee chairs, auditors, editorial board
│   ├── banner.yml               ← ✏️  Site-wide dismissible alert bar
│   ├── partners.yml             ← ✏️  Partner/co-organizing institutions (About page)
│   ├── seminars.yml             ← ✏️  Seminar series (/seminars/)
│   ├── bylaws.yml               ← ✏️  Bylaws chapter outline (/bylaws/)
│   └── gallery.yml              ← ✏️  Photo gallery albums (/gallery/)
│
├── _conferences/                ← Jekyll collection — one near-empty file per conference
│   └── YYYY-name.md             ← front matter only; _layouts/conference.html renders it
│                                    by looking up `conference_id` in _data/conferences.yml
│
├── _layouts/
│   ├── default.html             ← Master layout (head + nav + banner + footer)
│   ├── page.html                ← Standalone pages (with optional mini hero)
│   ├── post.html                ← Individual news post pages
│   └── conference.html          ← Renders a _conferences/ entry from _data/conferences.yml
│
├── _includes/
│   ├── head.html                 ← <head>: meta, fonts, CSS, anti-flash script
│   ├── nav.html                  ← Navigation bar (reads _data/nav.yml)
│   ├── banner.html                ← Site-wide alert bar (reads _data/banner.yml)
│   ├── hero.html                  ← Full-width homepage hero section
│   ├── page-hero.html             ← Mini hero band for inner pages
│   ├── person-card.html           ← Officer card with monogram avatar (/officers/)
│   ├── cfp-guide.html             ← Call-for-Papers guidelines (KSPAI conference pages)
│   ├── conf-poster.html           ← Poster or "coming soon" placeholder
│   ├── conf-key-dates.html        ← Key dates list
│   ├── conf-org-list.html         ← 주최 / 주관 lists in the conference sidebar
│   ├── monogram.html              ← Officer avatar letters
│   ├── stats.html                 ← Stats bar
│   ├── about.html                 ← About / two org cards
│   ├── research.html              ← Research grid (reads _data/research.yml)
│   ├── research-scope-tags.html   ← Shared research-tag chips (used on multiple pages)
│   ├── conference-spotlight.html  ← Homepage "next conference" card (reads upcoming[0])
│   ├── partners.html              ← Partner logos/names strip (reads _data/partners.yml)
│   ├── gallery.html               ← Gallery grid (reads _data/gallery.yml)
│   ├── announcements.html         ← Announcement list include
│   ├── news.html                  ← News section (reads _posts/)
│   ├── cta.html                   ← Membership CTA band
│   ├── contact.html               ← Contact section
│   └── footer.html                ← Footer with logo watermark
│
├── _posts/                      ← ✏️  One .md file per news/announcement
│   └── YYYY-MM-DD-slug.md
│
├── assets/
│   ├── css/style.scss           ← All styles (Jekyll/Sass compiles this)
│   ├── js/
│   │   ├── func.js              ← Theme, scroll, nav transparency, dropdowns, mobile menu
│   │   └── lang.js              ← KO/EN bilingual engine + translation strings
│   ├── files/                   ← Downloadable HWP templates (journal + conference)
│   └── images/
│       ├── conferences/         ← Posters (YYYY-name-poster.jpg) or per-event folders (YYYY-name/)
│       ├── logos/logo-light.png ← Light logo for dark backgrounds
│       └── logos/logo-dark.png  ← Dark logo for light backgrounds
│
├── index.html                   ← Homepage (front matter + {% include %} calls only)
│
├── pages/                       ← Standalone content pages (layout: page)
│   ├── about.md                 → /about/
│   ├── officers.md              → /officers/       (reads _data/officers.yml)
│   ├── bylaws.md                → /bylaws/          (reads _data/bylaws.yml)
│   ├── conferences.md           → /conferences/     (reads _data/conferences.yml)
│   ├── journal.md               → /journal/         (reads _data/research.yml)
│   ├── submit.md                → /submit/          (reads _data/research.yml)
│   ├── seminars.md              → /seminars/        (reads _data/seminars.yml)
│   ├── gallery.md                → /gallery/         (reads _data/gallery.yml)
│   ├── resources.md              → /resources/       (template downloads)
│   └── privacy.md                → /privacy/
│
└── (repo root)
    ├── research.md               → /research/
    ├── news.md                    → /news/
    ├── join.md                    → /join/            (membership fee/payment info lives here)
    └── contact.md                 → /contact/
```

> Some content pages live in `pages/`, others (`research.md`, `news.md`, `join.md`, `contact.md`) still live at the repo root — this is just how the site evolved and both locations work identically. When looking for a page, check `pages/` first, then the root.

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
- [ ] After 2026-11-06: move `2026-amsti` to `past:` and point `_data/banner.yml` back at the 2027 Winter Conference (the lines are commented out in that file, ready to restore). A scheduled Claude Code routine will open a PR with this change on 2026-11-07 09:00 KST.
- [ ] Decide on a CMS / admin approach before handing the site to non-developer managers — see `ARCHITECTURE-OPTIONS.md`

---

## License

MIT © 2025 Korean Society for Physical AI (KSPAI)  
contact@physicalai.or.kr · [kspai.org](https://kspai.org)
