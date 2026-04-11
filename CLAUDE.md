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
     - Gemfile
     - Gemfile.lock
   ```
   *(README.md is excluded by Jekyll's built-in defaults.)*

2. **This file** — the problematic table cell now uses `{%- raw -%}` escaping. See the File Responsibilities section below.

**Rule for future AI instances:** Never write bare `{%` or `{{` sequences in CLAUDE.md, README.md, or any root-level `.md` file unless they are inside a `{% raw %}...{% endraw %}` block.

---

## What this project is

Two sister Korean academic organizations share one website:
- **한국피지컬AI학회** (Korean Society of Physical AI, KSPAI) — `kspai.org`
- **한국피지컬AI교육연구소** (Korean Institute of Physical AI Education & Research)

The site is fully bilingual (Korean/English), built with Jekyll, hosted on GitHub Pages at `https://github.com/aaron-kr/physical-ai-home`.

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
Inner pages use a short version of the same hero gradient as a header band. Controlled per-page:
- On by default for all `layout: page` pages
- `show_hero: false` in front matter suppresses it
- `hero_image: /assets/images/bg.jpg` adds a background image
- Height: `clamp(180px, 28vh, 300px)`

### Logo system (two files)
```
assets/images/logo-light.png  ← white/light, for dark backgrounds
assets/images/logo-dark.png   ← dark, for light backgrounds
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

---

## File responsibilities

| File | What it owns | What it does NOT do |
|---|---|---|
| `_data/nav.yml` | Full nav structure | No logic |
| `_data/research.yml` | Research area cards | No logic |
| `lang.js` | All translation strings + language engine | No theme logic |
| `func.js` | Theme toggle, scroll fade-in, nav transparency, desktop dropdowns, mobile menu | No translations |
| `_includes/head.html` | Anti-flash inline script, font links | No content |
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
| `/conferences/` | `conferences.md` | ✅ Rebuilt | CFP guide + template download |
| `/submit/` | `submit.md` | ✅ Rebuilt | Full submission guide + HWP template download |
| `/journal/` | `journal.md` | ✅ Rebuilt | Full regulations (5 sections) |
| `/seminars/` | `seminars.md` | ✅ Rebuilt | Seminar series + schedule |
| `/privacy/` | `privacy.md` | ✅ Live | Korean + English bilingual policy |

**Template file required:** `assets/files/kspai-journal-template.hwp` — the HWP template download button on `/submit/` and `/conferences/` points here. Create the `assets/files/` directory and place the file there before deploying.

---

## Officers status

As of site launch, the society is operating under a **설립준비위원회 (Founding Preparatory Committee)** structure. The officers page shows:
- **회장 (President):** Placeholder card — "설립준비위원회 체제 운영 중"
- **7 부회장 (Vice Presidents):** Named with affiliations, displayed in 3-column grid
- **감사 (Auditor):** Named with affiliation
- **설립자/이사회 의장 (Founder/Chair) and 회장 actual person:** Both hidden in HTML comment at bottom of `officers.md` pending inaugural general assembly

When the assembly happens: uncomment the HTML comment, change the President placeholder card to show the real person.

---

## Journal & submission system

The journal `피지컬 AI 연구` (Physical AI Research, PAIJ) uses email submission for now:
- **Submission email:** `paper@physicalai.or.kr`
- **Email subject format:** `[PAIJ 논문투고] 논문 제목`
- **Template location:** `assets/files/kspai-journal-template.hwp`
- Conference paper template: pending inaugural conference — placeholder on `/conferences/`
- Online submission portal: planned for professional rebuild phase

---

## Reference sites

- **klife.re.kr** (삶의질정보학회) — sister society co-founded by the same professor. Used as structural template for nav, journal regulations, submission guide, and bylaws. Do not copy content verbatim; adapt for Physical AI context.
- **KUPAC** (Kyoto University Physical AI Community) — content/structure model, inspired the news/activities approach and blue color palette
- **al-folio** Jekyll theme — nav data-driven pattern reference (`_data/navigation.yml`)

---

## What's coming next

- Officer profile photos for `/officers/` once available
- Hero section background image or video
- ISSN and journal volume info after launch
- Editorial board composition (after inaugural general assembly)
- Conference paper HWP template
- Online paper submission portal (professional rebuild phase)
- A professional company may build a full site with forum + paper submission system — this Jekyll site is the interim/placeholder

When continuing in a new chat, the owner may simply say "계속" (continue) — check this file and the README first to get oriented before asking clarifying questions.
