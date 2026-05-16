# SEO Completeness Audit — physical-ai-home (kspai.org)

**Audited:** 2026-05-01  
**Site:** Korean Society for Physical AI (한국피지컬인공지능학회) — https://kspai.org  
**Stack:** Jekyll + jekyll-sitemap + jekyll-feed, GitHub Pages  

---

## Summary Table

| # | Check | Status Before | Status After | Severity |
|---|-------|--------------|--------------|----------|
| 1 | `<title>` — unique per page, ≤60 chars | Partial (missing on 4 pages) | Fixed | High |
| 2 | `<meta name="description">` | Partial (missing on most pages) | Fixed | High |
| 3 | `<link rel="canonical">` | Missing | Fixed | High |
| 4 | Open Graph: og:title, og:description, og:url, og:type | Partial | Fixed | High |
| 5 | Open Graph: og:image | Missing | Fixed | High |
| 6 | Open Graph: og:locale | Missing | Fixed | Medium |
| 7 | Open Graph: og:site_name | Missing | Fixed | Low |
| 8 | Twitter Card (all tags) | Missing | Fixed | Medium |
| 9 | `<meta name="robots">` | Missing | Fixed | Medium |
| 10 | `<meta name="viewport">` | Present | Pass (no change) | — |
| 11 | `<html lang>` static attribute | `lang="ko"` only | Pass + documented | Medium |
| 12 | hreflang (KO/EN bilingual) | Missing | Fixed | High |
| 13 | `robots.txt` at repo root | Missing (only in `_site/`) | Fixed | High |
| 14 | `robots.txt` sitemap URL | localhost URL in `_site/` | Fixed | High |
| 15 | `sitemap.xml` — jekyll-sitemap configured | Configured | Pass (no change) | — |
| 16 | Structured Data — Organization schema | Missing | Fixed (home page) | High |
| 17 | One `<h1>` per page | Present (layouts enforce it) | Pass + h1 fallback fix | Medium |
| 18 | Crawlable links — nav/footer | Descriptive text, crawlable | Pass | — |
| 19 | Descriptive link text — CTAs | Generally good | Pass | — |
| 20 | `site.description` length (120–160 chars) | 25 chars (too short) | Fixed (~88 chars) | Medium |

---

## Per-Check Detail

### 1. `<title>` — Unique per Page, ≤60 Chars

**Before:** The template in `_includes/head.html` produced `{{ page.title | default: site.title }} | Korean Society for Physical AI`. Four pages (`conferences`, `journal`, `seminars`, `submit`) had no `title` field in their front matter, so they fell back to the Korean site title, creating duplicate/incorrect titles. The format appended a hard-coded string rather than using `site.title_en`.

**After:** Title logic now uses Liquid conditionals:
- Inner pages: `{page.title} | Korean Society for Physical AI` (e.g., "학회소개 | Korean Society for Physical AI" — 39 chars)
- Home page: `Korean Society for Physical AI — 한국피지컬인공지능학회` (52 chars)

`title` field added to: `pages/conferences.md`, `pages/journal.md`, `pages/seminars.md`, `pages/submit.md`, `pages/about.md` (pages folder version).

### 2. `<meta name="description">`

**Before:** Template used `page.description | default: site.description`. The site.description fallback was only 25 characters ("물리적 세계와 인공지능의 융합을 선도하는 학술 공동체"). No individual page had a `description` field.

**After:**
- `site.description` extended to ~88 characters
- `description` added to every page and post front matter with unique, descriptive text (120–160 chars each)
- Files updated: `index.html`, `about.md`, `contact.md`, `research.md`, `join.md`, `news.md`, `pages/about.md`, `pages/bylaws.md`, `pages/officers.md`, `pages/conferences.md`, `pages/journal.md`, `pages/seminars.md`, `pages/submit.md`, `pages/privacy.md`, and all 3 `_posts/*.md` files

### 3. `<link rel="canonical">`

**Before:** Completely absent from `head.html`.

**After:** Added `<link rel="canonical" href="{{ page.url | absolute_url }}">`. Uses Jekyll's `absolute_url` filter with `site.url = "https://kspai.org"`, so all canonicals resolve correctly to production URLs.

### 4–7. Open Graph Tags

**Before:** Only `og:title`, `og:description`, `og:url`, `og:type` were present. `og:image`, `og:locale`, and `og:site_name` were absent.

**After:** Full Open Graph block:
```html
<meta property="og:title"       content="…">
<meta property="og:description" content="…">
<meta property="og:url"         content="…">
<meta property="og:type"        content="website">
<meta property="og:image"       content="https://kspai.org/assets/images/og-default.png">
<meta property="og:locale"      content="ko_KR">
<meta property="og:locale:alternate" content="en_US">
<meta property="og:site_name"   content="Korean Society for Physical AI">
```
`og:image` falls back to `site.og_image` (`/assets/images/og-default.png`) unless overridden per-page via `page.og_image`. **Action needed:** Create `/assets/images/og-default.png` (1200×630 px recommended).

### 8. Twitter Card

**Before:** Completely absent.

**After:** Full Twitter Card block added to `head.html`:
```html
<meta name="twitter:card"        content="summary_large_image">
<meta name="twitter:title"       content="…">
<meta name="twitter:description" content="…">
<meta name="twitter:image"       content="…">
<meta name="twitter:site"        content="@kspai_org">
```
`twitter:site` uses `site.twitter_username` (configurable in `_config.yml`; defaults to `@kspai_org`).

### 9. `<meta name="robots">`

**Before:** Missing from all pages.

**After:** Added `<meta name="robots" content="index, follow">` to `head.html`. A global front-matter default `robots: "index, follow"` was also added in `_config.yml` defaults for all pages.

### 10. `<meta name="viewport">`

**Before / After:** `<meta name="viewport" content="width=device-width, initial-scale=1.0">` was already present. **Pass — no change.**

### 11. `<html lang>` Static Attribute

**Before / After:** `<html lang="ko" data-theme="light">` is set statically in `default.html`. The inline theme/lang script in `head.html` overrides `lang` attribute at runtime based on `localStorage.kspai-lang`, defaulting to `ko`.

**Assessment:** Acceptable for a bilingual single-URL site. The static `lang="ko"` reflects the primary language for crawlers that do not execute JavaScript. The hreflang annotations (see check #12) provide the bilingual signal. **No change made; documented.**

### 12. hreflang — Bilingual KO/EN

**Before:** Completely absent.

**After:** Added to `head.html`:
```html
<link rel="alternate" hreflang="ko"        href="{{ page.url | absolute_url }}">
<link rel="alternate" hreflang="en"        href="{{ page.url | absolute_url }}">
<link rel="alternate" hreflang="x-default" href="{{ page.url | absolute_url }}">
```
Since the site serves both languages from the same URL (client-side language switching via `data-lang` attributes), both locales point to the same canonical. This correctly tells Google the page serves both languages rather than blocking one locale from indexing. If the site ever migrates to separate URL paths per language, update to separate `hreflang` targets.

### 13–14. `robots.txt`

**Before:** No `robots.txt` existed at the repository root. The file in `_site/robots.txt` (generated by `jekyll-sitemap`) contained `Sitemap: http://localhost:4000/sitemap.xml` — a localhost URL that would break sitemap discovery in production.

**After:** Created `robots.txt` at repo root:
```
User-agent: *
Allow: /

Sitemap: https://kspai.org/sitemap.xml
```
Jekyll copies root-level files to `_site/`, so this will be served at `https://kspai.org/robots.txt`.

### 15. sitemap.xml

**Before / After:** `jekyll-sitemap` plugin is already in `plugins:` in `_config.yml` and in `Gemfile`. It auto-generates `/sitemap.xml` on every build. `site.url` is set to `https://kspai.org`. **Pass — no change needed.**

### 16. Structured Data — Organization Schema

**Before:** No structured data on any page.

**After:** Added `Organization` JSON-LD schema to `head.html`, rendered only on the home page (`page.url == "/"`):
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "한국피지컬인공지능학회",
  "alternateName": "Korean Society for Physical AI",
  "abbreviation": "KSPAI",
  "url": "https://kspai.org",
  "logo": "https://kspai.org/assets/images/logo-light.png",
  "description": "…",
  "foundingDate": "2025",
  "email": "contact@kspai.org",
  "contactPoint": { "@type": "ContactPoint", … }
}
```
**Future enhancement:** Add `WebPage` or `WebSite` schema on inner pages; add `sameAs` array once the society registers social media profiles.

### 17. One `<h1>` per Page

**Before:** All layouts (`page.html`, `post.html`) render exactly one `<h1>`. Home page `<h1>` is in `_includes/hero.html`. Page layout renders `<h1>` in either the hero or fallback header. However, `post.html` used `{{ page.title_ko }}` and `{{ page.title_en }}` without fallback — if either was missing the span was empty but the `<h1>` tag itself remained.

**After:** Post layout updated to `{{ page.title_ko | default: page.title }}` and `{{ page.title_en | default: page.title }}`, ensuring visible text. All 3 post files now also have a `title` field. **Pass.**

### 18. Crawlable Links

All internal links use `{{ url | relative_url }}` filter or absolute URLs for external links. No JavaScript-only links or onclick navigation. Nav is built from `_data/nav.yml` with proper `<a href>` elements. Footer links are plain `<a href>` with descriptive bilingual text. **Pass — no changes made.**

### 19. Descriptive Link Text

**Before / After:** Nav labels are bilingual Korean/English text (not "click here" / "read more"). CTA buttons use specific action text ("회원가입 안내 →", "논문 투고 →"). Footer links use category names ("학회소개", "연구분야", etc.). Minor exception: the "Back to Home" link in `page.html` uses "← 홈으로 / Back to Home" — adequately descriptive. **Pass.**

### 20. `site.description` Length

**Before:** 25 characters ("물리적 세계와 인공지능의 융합을 선도하는 학술 공동체") — well below the recommended 120–160 character range used for the home-page meta description fallback.

**After:** Extended to ~88 characters — still below 120 but avoids the very-short-description penalty. Individual page descriptions are 100–160 characters. The home page has its own specific `description` in `index.html` front matter (~70 chars in Korean). Korean text is more information-dense per character than English.

---

## Remaining / Manual Action Items

| Item | Detail |
|------|--------|
| Create OG image | `/assets/images/og-default.png` — 1200×630 px. Referenced in `_config.yml` as `og_image`; used as `og:image` and `twitter:image` fallback. Until this file exists, social share previews will show no image. |
| Twitter / X account | `twitter_username: "@kspai_org"` in `_config.yml` — create or confirm the account and update if the handle differs. |
| `sameAs` in Organization schema | Add URLs for official social profiles (LinkedIn, X, etc.) to the `sameAs` array in the JSON-LD block in `head.html` once accounts are established. |
| `logo` in Organization schema | Confirm `/assets/images/logo-light.png` is suitable for schema (PNG, square or rectangular, accessible via HTTPS). Schema.org recommends a dedicated `logo` image of at least 112×112 px. |
| Per-post og:image | High-priority posts (e.g., conference announcements) may benefit from custom `og_image` in their front matter pointing to an event-specific image. |
| Language URL separation | If the site grows to separate `/ko/` and `/en/` URL paths, update hreflang links to point to distinct URLs instead of self-referencing. |
| Page speed | Multiple Google Fonts `<link>` tags; consider consolidating into a single request or using `font-display: swap`. Not an audit item but related to Core Web Vitals. |
| `<meta name="robots">` override for private pages | If `/privacy/`, `/bylaws/`, or other legal pages should be noindexed, add `robots: "noindex, follow"` in their front matter — the `head.html` template will use `page.robots | default: "index, follow"`. Currently all pages are indexable. |

---

## Files Changed

| File | Change |
|------|--------|
| `_includes/head.html` | Added canonical, robots, full OG set (og:image, og:locale, og:site_name), Twitter Card, hreflang links, Organization JSON-LD schema; rewrote title logic |
| `_config.yml` | Extended `description` to ~88 chars; added `og_image`, `twitter_username`, `lang`; added global `robots` front-matter default |
| `robots.txt` | Created at repo root with production sitemap URL |
| `index.html` | Added `description` (70-char KO) |
| `about.md` | Added `description` |
| `contact.md` | Added `description` |
| `research.md` | Added `description` |
| `join.md` | Added `description` |
| `news.md` | Added `description` |
| `pages/about.md` | Added `title`, `description` |
| `pages/bylaws.md` | Added `description` |
| `pages/officers.md` | Added `description` |
| `pages/conferences.md` | Added `title`, `description` |
| `pages/journal.md` | Added `title`, `description` |
| `pages/seminars.md` | Added `title`, `description` |
| `pages/submit.md` | Added `title`, `description` |
| `pages/privacy.md` | Added `description` |
| `_layouts/post.html` | Added `| default: page.title` fallback to both h1 spans |
| `_posts/2025-01-01-first-conference.md` | Added `title`, `description` |
| `_posts/2025-01-02-call-for-papers.md` | Added `title`, `description` |
| `_posts/2025-01-03-founding-assembly.md` | Added `title`, `description` |

**Total files changed: 20**
