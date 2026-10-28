# CLAUDE.md — Project context for AI assistant

This file gives a new Claude instance full context on the KSPAI website project so work can continue without re-explaining history.

---

## ⚠️ Jekyll / GitHub Pages build notes

### CLAUDE.md must be excluded from Jekyll processing
**Bug fixed 2025:** CLAUDE.md caused a GitHub Pages build failure with:
> "Invalid syntax for include tag. File contains invalid characters or sequences"

**Root cause:** Jekyll processes all `.md` files at the repo root through the Liquid engine (even without front matter). The file responsibilities table contained a literal `{%- include -%}` tag (without a filename), which is invalid Liquid syntax.

**Fix applied — two parts:**

1. **`_config.yml`** — add to the `exclude` list:
   ```yaml
   exclude:
     - CLAUDE.md
     - PAGE-HERO-GUIDE.md
     - CHANGELOG.md
     - ARCHITECTURE-OPTIONS.md
     - KNOWN-ISSUES.md
     - ACCESSIBILITY_AUDIT.md
     - SEO_AUDIT.md
     - Gemfile
     - Gemfile.lock
   ```
   *(README.md is excluded by Jekyll's built-in defaults. Any new root-level internal `.md` doc must be added here too, or it gets published as a page.)*

2. **This file** — the problematic table cell now uses `{%- raw -%}` escaping. See the File Responsibilities section below.

**Rule for future AI instances:** Never write bare `{%` or `{{` sequences in CLAUDE.md, README.md, or any root-level `.md` file unless they are inside a `{% raw %}...{% endraw %}` block.

---

## What this project is

Two sister Korean academic organizations share one website:
- **한국피지컬인공지능학회** (Korean Society for Physical AI, KSPAI) — `kspai.org`
- **한국피지컬인공지능교육연구소** (Korean Institute of Physical AI Education & Research)

The site is fully bilingual (Korean/English), built with Jekyll, hosted on GitHub Pages at `https://github.com/aaron-kr/kspai.org` (originally named `physical-ai-home`).

**Change history lives in `CHANGELOG.md`** — add a dated entry for every change you make. Future CMS/architecture options are in `ARCHITECTURE-OPTIONS.md`.

The owner works on a **superwide monitor (~3660px)** — this has informed hero height constraints and max-width decisions throughout.

---

## Tech stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | Jekyll (GitHub Pages native) | No external CI needed |
| CSS | SCSS (single `style.scss`) | Jekyll compiles it |
| JS | Vanilla ES6 (`func.js`, `lang.js`) | No bundler |
| Fonts | Space Grotesk + Pretendard Variable + Noto Sans KR + JetBrains Mono | See Typography section |
| Hosting | GitHub Pages | Push to `main` = deploy |
| Domain registrar | Gabia | `physicalai.or.kr` (society), `physicalai.re.kr` (institute) |

---

## Architecture decisions

### Jekyll conversion
The site was originally plain HTML/CSS/JS. It was converted to Jekyll so that:
- News/announcements can be added as simple `.md` files in `_posts/`
- Research areas are data-driven via `_data/research.yml`
- Navigation is data-driven via `_data/nav.yml`
- Page layouts are shared via `_layouts/` and `_includes/`

**Critical:** There must be no `.nojekyll` file in the repo root. Its presence silently bypasses all Jekyll processing.

### Bilingual system — two parallel mechanisms
This is the most important architectural detail to understand:

**1. `data-lang` spans** (build-time Liquid content):
```html
<span data-lang="ko">한국어</span>
<span data-lang="en">English</span>
```
CSS toggles visibility based on `<html lang="ko|en">` set by JS. Used in `_includes/*.html` for Liquid-rendered content.

**2. `data-i18n` keys** (runtime JS replacement):
```html
<h2 data-i18n="about.title">두 기관, 하나의 비전</h2>
```
JS replaces `textContent` from the `translations` dict in `lang.js`. Used for UI chrome. For HTML content (with `<br>` or `<span>` inside), add `data-i18n-html` attribute — JS uses `innerHTML` instead.

Language preference: `localStorage('kspai-lang')`. Default: `'ko'`.
Theme preference: `localStorage('kspai-theme')`. Default: `'light'`.

Anti-flash script lives inline in `_includes/head.html` — it applies saved theme and lang before the page renders, preventing a flash of wrong theme/language.

### Navigation — three-state transparent/solid system
The nav is transparent with white text over the homepage hero, and solid on scroll or on any other page.

**How it works:**
- Default CSS: `nav { background: transparent; border-bottom: 1px solid transparent; }`
- `nav.nav-scrolled`: solid `var(--nav-bg)` + `backdrop-filter: blur(20px)` + `border-bottom: 1px solid var(--border-subtle)`
- JS `IntersectionObserver` watches `.hero` — adds/removes `.nav-scrolled` as hero enters/leaves viewport
- On non-homepage pages: no `.hero` exists, so JS immediately adds `.nav-scrolled`

**Specificity note:** `nav:not(.nav-scrolled) { border-bottom-color: transparent; }` must exist alongside the base `nav` rule to win the cascade on older patches.

### Data-driven nav (`_data/nav.yml`)
The entire nav is generated from `_data/nav.yml`. Liquid in `nav.html` loops over it to build desktop dropdowns and the mobile menu simultaneously. Structure:
```yaml
- title_ko: "..."
  title_en: "..."
  url: /path/         # direct link — OR —
  items:              # dropdown
    - title_ko: "..."
      url: /path/
    - divider: true   # horizontal rule in dropdown
```

### Hero
- Full-width dark blue gradient (`#0a4c81 → #030f1e`) — always dark regardless of light/dark theme
- Height: `clamp(600px, 80vh, 820px)` — capped for ultrawide monitors
- Optional background image via CSS custom property `--hero-bg-image`
- Floating decorative keyword chips (desktop only, CSS animation)
- Spinning orb visual (right column, CSS only)

### Page hero (mini hero band)
Inner pages, conference pages and news posts use a short version of the same hero gradient as a header band. Content is **centered vertically and horizontally** (`word-break: keep-all` so Korean wraps between words). Controlled per-page:
- On by default for all `layout: page` pages; `_layouts/conference.html` and `_layouts/post.html` render their own
- `show_hero: false` in front matter suppresses it
- `hero_image: /assets/images/bg.jpg` adds a background image
- Height: `clamp(180px, 28vh, 300px)`

### Fixed nav clearance + in-flow site banner
The nav is `position: fixed` (64px). Two CSS variables on `:root` handle the space under it:
- `--nav-h: 64px` — nav height
- `--nav-clear` — top space the first block in `<main>` reserves (`.hero`, `.page-hero` padding-top; `.page-article`, `.post-article` padding `calc(var(--nav-clear) + 56px)`)

The site banner (`_includes/banner.html`) is **in normal flow** between nav and `<main>`, with `padding-top: calc(var(--nav-h) + 10px)` so its top sits behind the nav. While it exists, `.site-banner + main` sets `--nav-clear: 0`. The inline script in `head.html` sets `html[data-banner="hidden"]` before first paint (dismissed / hidden today / expired), CSS hides it, and `func.js` removes it from the DOM. Closing it collapses the banner to `--nav-h`, then removes it — at that moment the page takes back its 64px clearance, so nothing jumps. **Any new top-level page wrapper must use `var(--nav-clear)`, not a hard-coded 64px/120px.**

### Logo system (two files)
```
assets/images/logos/logo-light.png  ← white/light, for dark backgrounds
assets/images/logos/logo-dark.png   ← dark, for light backgrounds
```
CSS `display` switching handles all four scenarios automatically — no JS, no `filter: invert()`:
- Over hero (transparent nav) → light logo
- Scrolled, light theme → dark logo
- Scrolled, dark theme → light logo
- Footer (always dark) → light logo
- Page hero band → light logo

---

## Color palette

Three anchor colors defined by the owner:
- **Dark navy:** `#0a4c81`
- **Bright blue:** `#2585f3`
- **Electric cyan:** `#24fffc`

```
--accent-primary:   #00c8c5 / #24fffc  (light/dark — cyan leads)
--accent-secondary: #2585f3             (bright blue)
--accent-dark:      #0a4c81             (deep navy)
--accent-warm:      #e8433a / #ff5048  (red — ANNOUNCEMENT tags, hardcoded)
--accent-orange:    #f07030 / #ff7a42  (orange — EVENT tags)
```

The warm/red accent was intentionally shifted from the original orange-red to true red because it complements pure blue better. The ANNOUNCEMENT tag color is hardcoded (not via `--accent-primary`) so it always signals urgency regardless of theme.

---

## Typography

```
--font-title-en: 'Space Grotesk', 'Outfit', sans-serif;
--font-body-ko:  'Pretendard Variable', 'Pretendard', 'Noto Sans KR', sans-serif;
--font-mono:     'JetBrains Mono', monospace;
```

Space Grotesk is applied to all major heading contexts (`.hero h1`, `.section-title`, `.page-title`, `.org-name`, `.news-title`, etc.). Korean characters in those elements fall through to Pretendard automatically — CSS font stack cascade.

Body font swap: comment/uncomment `--font-body-ko` lines in `:root` of `style.scss`.

Pretendard is loaded from jsDelivr (not Google Fonts):
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css">
```

---

## Known bugs fixed (do not re-introduce)

### 1. `.nojekyll` disables Jekyll
The original static site had `.nojekyll` to prevent Jekyll processing. This was deleted when the Jekyll migration happened. If it reappears, the entire site reverts to serving raw HTML with no Liquid, no Sass, no includes.

### 2. `toggleMobileMenu()` missing from `func.js`
The nav HTML calls `onclick="toggleMobileMenu(this)"` but the function was never added to the original `func.js`. The complete `func.js` now includes all nav functions. Do not deliver nav HTML changes without ensuring this function exists.

### 3. `IntersectionObserver` naming conflict
The original `func.js` used `const observer` for both the scroll fade-in and the nav transparency IIFE. This caused silent failures in some browsers. They are now named `fadeObserver` and `heroObserver` respectively. Never reuse `observer` as a variable name in this file.

### 4. Nav `border-bottom` visible over hero
**Root cause:** `.mobile-menu { border-bottom: 1px solid var(--border-subtle); }` in the base rule, combined with `.mobile-menu[hidden] { display: block !important; }` (specificity `0,2,0`) beating the `@media (min-width: 861px) { display: none !important; }` rule (specificity `0,1,0`). The mobile menu was technically present (just zero height) on desktop, rendering its `border-bottom` as a 1px line that appeared to be on the nav.

**Fix:** Remove `border-bottom` from `.mobile-menu` base rule. Add it only to `.mobile-menu[data-open="true"]`.

**Additional guard:** `nav:not(.nav-scrolled) { border-bottom-color: transparent; }` must exist to override any cascade conflicts via higher specificity.

### 5. Nav transparent on all pages (not just homepage)
Original `IntersectionObserver` IIFE returned early if no `.hero` was found, leaving the nav in its default transparent state on every inner page.

**Fix:** `if (!hero) { nav.classList.add('nav-scrolled'); return; }`

### 6. CLAUDE.md causes Jekyll build failure ← NEW
**Symptom:** GitHub Pages build fails with "Invalid syntax for include tag" pointing to CLAUDE.md.

**Root cause:** Jekyll runs Liquid templating on all `.md` files at the repo root (even without front matter). Any bare `{%` or `{{` sequence is interpreted as a Liquid tag. `{% include %}` without a filename argument is invalid Liquid syntax.

**Fix:** Add `CLAUDE.md` and `PAGE-HERO-GUIDE.md` to the `exclude` list in `_config.yml`:
```yaml
exclude:
  - CLAUDE.md
  - PAGE-HERO-GUIDE.md
  - Gemfile
  - Gemfile.lock
```
`README.md` is already excluded by Jekyll's built-in defaults.

**Rule:** Never write bare `{%` or `{{` in any root-level `.md` file. Use `(% include %)` in plain text descriptions, or `raw`/`endraw` blocks if Liquid examples are required.

### 7. Modern `rgb(r g b / a)` syntax breaks the GitHub Pages build
GitHub Pages compiles SCSS with legacy Ruby Sass 3.7, which throws `wrong number of arguments (1 for 3)` on space-separated color syntax. **Always write `rgba(37,133,243,0.06)`** (comma syntax), as the rest of `style.scss` does. `npm run lint:css` passes either way and won't catch this — run `bundle exec jekyll build` after SCSS changes.

### 8. Empty strings are truthy in Liquid
An `if conf.cfp_link` test is **true** for `cfp_link: ""`, which rendered buttons with empty `href`s. For optional string fields test `x and x != ""` instead. (Fixed 2026-10-29 in `conference.html`, `conferences.md` and the homepage spotlight.)

### 9. `_site/` is partly tracked in git
`_site/` is in `.gitignore` but ~28 generated files were committed before that. A local build modifies them. Don't commit them — run `git checkout -- _site` after building locally (or, with the owner's OK, `git rm -r --cached _site` once to untrack them).

### 11. Global `nav` and `section` element selectors
`style.scss` styles the bare `nav` element as the fixed top bar and gives every `section` large padding. Inside page content, use `<div role="navigation">` / `<div class="page-section">` instead — a `<nav>` in content gets pinned to the top of the viewport behind the real nav (invisible), and a `<section>` gets huge gaps.

### 13. Accent color as text
`--accent-primary` (cyan `#00c8c5`) is only ~2:1 on light backgrounds. For **text** use `--accent-text` (`#007a78` light / `#24fffc` dark, ≥4.5:1). Keep `--accent-primary` for borders, backgrounds, bullets, and text on always-dark surfaces (footer, nav over hero).

### 12. Monospace labels and Korean
`.mono` / `var(--font-mono)` with letter-spacing spreads Korean syllables apart ("총 무 부 회 장"). Use mono only for English/numeric labels; labels that contain Korean should use the body font.

### 10. Unquoted colons in front matter
A `description:` containing `: ` (e.g. `분야: 로보틱스`) is invalid YAML; Jekyll prints a warning and silently drops the page's front matter. Quote such values.

---

## File responsibilities

| File | What it owns | What it does NOT do |
|---|---|---|
| `_data/nav.yml` | Full nav structure | No logic |
| `_data/research.yml` | Research area cards | No logic |
| `lang.js` | All translation strings + language engine | No theme logic |
| `func.js` | Theme toggle, scroll fade-in, nav transparency, desktop dropdowns, mobile menu | No translations |
| `_includes/head.html` | Anti-flash inline script (theme, language, banner visibility), font links | No content |
| `_includes/person-card.html` | Officer card with monogram avatar | No data — pass `person`, `label_ko/en`, `tone` |
| `_includes/cfp-guide.html` | CFP guidelines for upcoming KSPAI-hosted conferences | Not shown for `partner_event` or past conferences |
| `_includes/conf-poster.html` | Conference poster or "coming soon" placeholder (`/conferences/` cards + detail sidebar) | — |
| `_includes/conf-key-dates.html` | "주요 일정 / Key Dates" list | — |
| `_includes/conf-org-list.html` | Sidebar organization list (주최 / 주관) | — |
| `_includes/monogram.html` | Officer avatar letters (KO surname / EN initials) | Used by `person-card.html` and the president card |
| `_layouts/default.html` | Wraps all pages with nav + footer | No content sections |
| `_layouts/page.html` | Standalone page wrapper with conditional mini hero | No nav/footer |
| `index.html` | Homepage: front matter + include calls only | No inline styles/scripts |

---

## Pages inventory

| URL | File | Status | Notes |
|---|---|---|---|
| `/` | `index.html` | ✅ Live | Homepage, all sections |
| `/about/` | `about.md` | ✅ Live | Society + institute intro |
| `/research/` | `research.md` | ✅ Live | Reads `_data/research.yml` |
| `/news/` | `news.md` | ✅ Live | All posts list |
| `/join/` | `join.md` | ✅ Live | Membership types + process |
| `/contact/` | `contact.md` | ✅ Live | Contact routing by topic |
| `/officers/` | `officers.md` | ✅ Live | Founder/president hidden in HTML comment |
| `/bylaws/` | `bylaws.md` | ✅ Live | Chapter outline, full text TBD |
| `/conferences/` | `conferences.md` | ✅ Rebuilt | CFP guide; poster layout driven by `_data/conferences.yml` |
| `/submit/` | `submit.md` | ✅ Rebuilt | Scope grid loops from `_data/research.yml` |
| `/journal/` | `journal.md` | ✅ Rebuilt | 제4조 track list loops from `_data/research.yml` |
| `/seminars/` | `seminars.md` | ✅ Data-driven | Series cards loop from `_data/seminars.yml` |
| `/privacy/` | `privacy.md` | ✅ Live | Korean + English bilingual policy |
| `/conferences/<id>/` | `_conferences/<id>.md` | ✅ Data-driven | `_layouts/conference.html` looks up `conference_id` in `_data/conferences.yml`; body content (if any) renders below the info block. Current: `2026-summer` (past), `2026-amsti` (partner event), `2027-winter` |
| `/resources/` | `pages/resources.md` | ✅ New | Journal + conference template downloads |
| `/gallery/` | `pages/gallery.md` | ✅ New | Photo gallery; albums driven by `_data/gallery.yml` |

**Template file required:** `assets/files/kspai-journal-template.hwp` — the HWP template download button on `/submit/` and `/resources/` points here. Create the `assets/files/` directory and place the file there before deploying.

---

## Officers status

All roster data is in `_data/officers.yml`; `pages/officers.md` only loops over it. As of 2026-10-29:
- **회장:** 이충호 (국립한밭대학교)
- **부회장단 (7):** 총무, 논문지, 국내학술, 국제학술, 대외협력, 산학협력, 기획
- **감사:** 김영태
- **편집위원회:** `editorial_committee.leadership` (편집위원장 / 공동편집위원장 / 부편집위원장) + `editorial_committee.divisions` (7 분과위원장; 국방및무기시스템 is vacant → `vacant: true`)
- **학술위원회:** `academic_committee` (국내/국제학술위원장, 부학술위원장 ×2)

The old "설립준비위원회" placeholder `status:` block is commented out at the top of the YAML. People hold several posts (e.g. 장봉석 = 논문지부회장 + 편집위원장 + 분과위원장): keep their `name_en` spelling identical in every entry. Division names are mirrored in `_data/research.yml` (`editorial_division_ko/en`).

**Translating new officers:** look up each person's own English name (university profile, papers, ORCID) before falling back to Revised Romanization. Use the institution's official English name (e.g. 우송정보대학 → Woosong Information College, 백석문화대학교 → Baekseok Culture University).

---

## Journal & submission system

The journal `피지컬 AI 연구` (Physical AI Research, JKPAI) uses email submission for now:
- **Submission email:** `paper@physicalai.or.kr`
- **Email subject format:** `[JKPAI 논문투고] 논문 제목`
- **Template location:** `assets/files/kspai-journal-template.hwp`
- Conference paper template: pending inaugural conference — placeholder on `/conferences/`
- Online submission portal: planned for professional rebuild phase

---

## Reference sites

- **klife.re.kr** (삶의질정보학회) — sister society co-founded by the same professor. Used as structural template for nav, journal regulations, submission guide, and bylaws. Do not copy content verbatim; adapt for Physical AI context.
- **KUPAC** (Kyoto University Physical AI Community) — content/structure model, inspired the news/activities approach and blue color palette
- **al-folio** Jekyll theme — nav data-driven pattern reference (`_data/navigation.yml`)

---

## Code quality

**Stylelint** — `.stylelintrc.json` (extends `stylelint-config-standard-scss`). Checks `assets/css/style.scss`.

Several rules are disabled due to false positives or format preferences: `no-descending-specificity`, `declaration-block-single-line-max-declarations`, `rule-empty-line-before`, `at-rule-empty-line-before`, `comment-empty-line-before`, `no-invalid-position-declaration` (Jekyll `---` front matter at top of SCSS file), `scss/operator-no-newline-before` and `scss/operator-no-unspaced` (SCSS parser misidentifies CSS function arguments and comment `*/` as arithmetic operators).

**GitHub Actions CI** — `.github/workflows/lint.yml`. Runs Stylelint on every push/PR to `main`.

```bash
npm run lint:css      # Stylelint over assets/css/style.scss
```

**History (April 2026):** Lint tooling added. `package-lock.json` is committed (CI needs it). `style.scss` uses comma-syntax `rgba()` throughout — keep it that way (see Known bug #7).

**Verify a change:** `npm run lint:css` **and** `bundle exec jekyll build` (the build is what catches Sass and Liquid errors). Then `git checkout -- _site`.

**Visual check:** serve `_site` (`python -m http.server 4011` inside `_site`) and screenshot with headless Chrome (`chrome --headless=new --window-size=1440,2400 --screenshot=out.png URL`). Headless Chrome won't render narrower than 500px, so a "390px" screenshot is really 500px cropped — measure mobile overflow inside a 390px `<iframe>` instead. To test English mode or a dismissed banner, set `localStorage` (`kspai-lang`, `kspai-banner-dismissed`) from a throwaway same-origin page that then redirects — and delete it afterwards.

---

## AI-assisted development

When using Claude Code or any AI assistant on this codebase:

- **Jekyll `---` front matter in `style.scss` is required** — Jekyll needs it to recognize the file for Sass compilation. Never remove the two `---` lines at the top.
- **Never write bare `{%` or `{{` in CLAUDE.md or any root-level `.md` file** — Jekyll runs Liquid on all root `.md` files and invalid Liquid syntax breaks the GitHub Pages build. Write "include tag" in plain text, not the actual tag syntax. See the Jekyll build notes at the top of this file.
- **Run `npm run lint:css` after any SCSS change** — or let CI catch it on push.
- **No custom Ruby plugins** — `safe: true` in `_config.yml`. GitHub Pages compatibility is a hard constraint. Do not suggest gems not on the whitelist.
- **Content is data-driven** — news items as `_posts/*.md`, research areas via `_data/research.yml`, nav via `_data/nav.yml`, officers via `_data/officers.yml`, conferences via `_data/conferences.yml`. Rarely need to touch HTML templates for content updates.
- **Every content item is bilingual** — paired `*_ko` / `*_en` fields in YAML, paired `data-lang` spans in HTML. When the owner pastes Korean-only info, write the English yourself (look up official names) — don't leave English blank.
- **Partner events** (conferences run by another organization that KSPAI co-hosts or promotes) use `partner_event: true` in `_data/conferences.yml`. Don't show KSPAI paper-submission CTAs for them.
- **Block-level bilingual text:** `[data-lang]` is `display: inline` globally. For whole paragraphs use a `div` with `data-lang` inside `.conf-prose` or `.post-body`, which have block overrides.
- **Log every change in `CHANGELOG.md`.**
- **Keep CSS lean:** before deleting a template block, check whether its classes become unused (`style.scss` had 0 unused classes as of 2026-10-29). Reuse the conference/officer includes instead of copying markup.
- **No `.nojekyll` file** — its presence silently disables all Jekyll processing (Sass, Liquid, includes). If the site appears as raw HTML, check for this file first.

---

## What's coming next

- Officer profile photos for `/officers/` once available
- Hero section background image or video
- ISSN and journal volume info after launch
- After 2026-11-06: retire `2026-amsti` to `past:` and restore the 2027 Winter banner (commented in `_data/banner.yml`)
- CMS/admin layer for non-developer managers — options in `ARCHITECTURE-OPTIONS.md`
- Conference paper HWP template
- Online paper submission portal (professional rebuild phase)
- A professional company may build a full site with forum + paper submission system — this Jekyll site is the interim/placeholder

When continuing in a new chat, the owner may simply say "계속" (continue) — check this file and the README first to get oriented before asking clarifying questions.
