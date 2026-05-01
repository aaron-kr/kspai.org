# Accessibility Audit — kspai.org (physical-ai-home)

**Audited:** 2026-04-30  
**Site:** Korean Society of Physical AI — Jekyll/GitHub Pages  
**Auditor:** Claude Code (automated structural analysis)  
**Standard:** WCAG 2.1 AA

---

## Summary

| Category | Issues Found | Fixed | Flagged / Manual |
|---|---|---|---|
| Skip link | 1 missing | FIXED | — |
| Focus styles | 0 rules defined | FIXED | — |
| Reduced-motion | 0 rules defined | FIXED | — |
| Nav landmark | Missing `aria-label` | FIXED | — |
| Footer landmark | Missing `aria-label` | FIXED | — |
| Mobile menu | Missing `role`, `aria-label`, `aria-controls` | FIXED | — |
| Hamburger button | Icon not aria-hidden, label not updated on toggle | FIXED | — |
| Theme-icon emoji | Not aria-hidden | FIXED | — |
| Decorative video | Not aria-hidden / not tabindex="-1" | FIXED | — |
| Decorative footer watermark | Not aria-hidden | FIXED | — |
| Vague link text ("Full page →") | 4 links | FIXED | — |
| Emoji decorative icons | Multiple bare emojis read aloud by SR | FIXED | — |
| Language toggle `aria-label` | Only set on load; not bilingual | Partially fixed | lang.js already updates |
| Color contrast — muted text | `--text-muted` (#8fa4b8) on white | — | FLAGGED |
| Color contrast — footer links | `--footer-link` (#7a9ab8) on dark | — | FLAGGED |
| Color contrast — hero chips | rgba text on dark blue | — | FLAGGED |
| `<html lang>` dynamic change | Relies on JS; SSR serves `lang="ko"` | — | FLAGGED |
| `<nav>` has no `<header>` landmark | Page has no `<header>` element | — | FLAGGED |
| News cards lack links | News items have no `<a>` to article | — | FLAGGED |
| Stat bar infinity symbol (∞) | Screen readers read "infinity" | — | FLAGGED |
| `<article>` use in page/post | `<article>` has no `aria-label`/`aria-labelledby` | — | FLAGGED |
| Inline `style=""` color overrides | Some inline `color:var(--text-secondary)` bypass theme | — | FLAGGED |
| `@keyframes pulse` duplicate | Defined twice in style.scss | — | NOTE |

---

## 1. Skip Link

**Issue:** No "skip to main content" link existed. Screen-reader and keyboard users had to tab through the entire navigation on every page load.

**Fixed:** Added `.skip-link` anchor before the nav in `_layouts/default.html`, pointing to `id="main-content"` added to the `<main>` element.

**CSS added** (in `assets/css/style.scss`):
```css
.skip-link {
  position: absolute;
  top: -999px;
  left: 8px;
  z-index: 9999;
  padding: 10px 18px;
  background: var(--accent-secondary, #2585f3);
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  border-radius: 0 0 var(--radius-sm) var(--radius-sm);
  text-decoration: none;
  transition: top 0.2s ease;
}
.skip-link:focus { top: 0; }
```

Files changed: `_layouts/default.html`, `assets/css/style.scss`

---

## 2. Focus Styles

**Issue:** No `:focus-visible` CSS rules existed anywhere in the stylesheet. All interactive elements (nav links, buttons, dropdown toggles, mobile menu items) would show only the browser default outline — which in Chrome and Firefox is very thin and low-visibility on dark backgrounds, and which some browsers suppress entirely.

**Fixed:** Added a comprehensive `:focus-visible` ruleset:
- Global `:focus-visible` — 3px solid `--accent-secondary` (#2585f3), 3px offset
- Specific overrides for `.theme-toggle`, `.lang-toggle`, `.mobile-menu-btn`, `.nav-link`, `.nav-dropdown-item`, `.mobile-menu-item`
- `:focus:not(:focus-visible) { outline: none; }` to avoid the double-ring in Safari

File changed: `assets/css/style.scss`

---

## 3. Reduced Motion

**Issue:** Multiple CSS animations run unconditionally — `chipFloat` (hero chips), `pulse` (badge dot), `spinSlow` (orb rings), `fadeSlideUp` (hero entrance). Users with vestibular disorders who set `prefers-reduced-motion: reduce` received no relief.

**Fixed:** Added `@media (prefers-reduced-motion: reduce)` block at the end of `style.scss`:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  .hero-badge-dot { animation: none; }
  .hero-chip      { animation: none; }
  .hero-orb-ring  { animation: none; }
}
```

File changed: `assets/css/style.scss`

---

## 4. Navigation Landmark

**Issue:** `<nav>` had no `aria-label`. When a page has multiple navigations (desktop nav, mobile menu), screen readers cannot distinguish them. Also, the desktop `<ul class="nav-links">` had no `role="list"` (some Safari+VoiceOver combinations drop list semantics when `list-style: none` is set).

**Fixed:**
- `<nav>` → `<nav aria-label="주 내비게이션 / Main navigation">`
- `<ul class="nav-links">` → added `role="list" aria-label="사이트 메뉴 / Site menu"`

File changed: `_includes/nav.html`

---

## 5. Mobile Menu Landmark & Controls

**Issues:**
- Mobile menu `<div id="mobile-menu">` had no `role` or `aria-label`, making it invisible as a landmark to screen readers.
- Hamburger `<button>` did not set `aria-controls="mobile-menu"` (linking button to its controlled element).
- The hamburger button's `aria-label` said "Toggle menu" on open/close but was not updated dynamically to reflect state.
- The "☰" and "✕" characters were raw text content of the button (not wrapped in `aria-hidden`), causing some screen readers to announce "Three horizontal lines" or "multiplication sign".

**Fixed:**
- Mobile menu: `role="navigation" aria-label="모바일 메뉴 / Mobile menu"`
- Hamburger: `aria-controls="mobile-menu"` added; icon wrapped in `<span aria-hidden="true">`
- `func.js` `closeMobileMenu()` and `toggleMobileMenu()`: now update `aria-label` to "메뉴 열기 / Open menu" and "메뉴 닫기 / Close menu" respectively; icon span rebuilt with `aria-hidden="true"`

Files changed: `_includes/nav.html`, `assets/js/func.js`

---

## 6. Theme Toggle Icon

**Issue:** `<span class="theme-icon">☀️</span>` — the sun and moon emoji were raw text content. Screen readers would announce "Sun emoji" or "Waxing crescent moon emoji" instead of the button's `aria-label`. The emoji should be decorative.

**Fixed:** Added `aria-hidden="true"` to `.theme-icon` span.

File changed: `_includes/nav.html`

---

## 7. Decorative Background Video

**Issue:** `<video class="hero-video-bg" autoplay muted loop playsinline>` — the video is a purely decorative background overlay at 35% opacity. It was:
- Not marked `aria-hidden="true"`, so assistive technology could encounter it
- Focusable (some AT may tab into `<video>` elements)
- No `<track>` element for captions (required if video has meaningful content)

**Fixed:** Added `aria-hidden="true" tabindex="-1"` to the video element. Since the video is confirmed decorative, a caption track is not needed, but this is noted below for reference.

File changed: `_includes/hero.html`

---

## 8. Decorative Footer Watermark Image

**Issue:** The `.footer-watermark` `<img>` of the logo existed purely as a 18%-opacity watermark background decoration. It had `alt="KSPAI"` which would cause screen readers to announce the logo twice (once in the real footer logo, once as a watermark). The containing `<div>` also had no `aria-hidden`.

**Fixed:** 
- `<div class="footer-watermark">` → added `aria-hidden="true"`
- `alt="KSPAI"` → `alt=""` (empty alt = explicitly decorative)

File changed: `_includes/footer.html`

---

## 9. Vague Link Text

**Issue:** Four section "see more" links used vague text that would be meaningless when extracted by screen-reader link lists:
- About section: "Full page →" (English)
- Research section: "Full page →" (English)
- News section: "All news →" (English) — this one was acceptable
- Contact section: "Full contact →" (English)

**Fixed:** Added bilingual `aria-label` attributes providing full context, and improved visible EN text:
- About: `aria-label="학회소개 자세히 보기 / View full About page"` + text → "Full About page →"
- Research: `aria-label="연구분야 자세히 보기 / View full Research page"` + text → "Full Research page →"
- News: `aria-label="소식 전체 보기 / View all news and announcements"`
- Contact: `aria-label="문의 전체 페이지 보기 / View full Contact page"` + text → "Full contact page →"

Files changed: `_includes/about.html`, `_includes/research.html`, `_includes/news.html`, `_includes/contact.html`

---

## 10. Emoji Decorative Icons

**Issue:** Multiple UI elements use emoji characters as decorative icons without `aria-hidden="true"`:
- `🏛` and `🔬` in `.org-card` in `_includes/about.html`
- `📧`, `📍`, `📞` in the contact section quick-cards in `_includes/contact.html`
- `📧`, `📍`, `📞`, `🌐` in `contact.md` (full contact page uses `.contact-detail-icon` class)
- `🏛`, `🔬` in `contact.md`, `about.md`

Screen readers will announce these characters (e.g., "Classical building emoji") which is redundant and disruptive.

**Fixed in includes:**
- `.org-icon` divs in `about.html`: added `aria-hidden="true"` to the containing `<div>`
- Inline emoji in `contact.html` quick-card: wrapped each in `<span aria-hidden="true">`

**Still flagged (not fixed — in `.md` page files, fix manually):**
- `contact.md` — `.contact-detail-icon` spans contain emoji without `aria-hidden`
- `about.md` — `.org-icon` and `.about-feature-icon` spans contain emoji without `aria-hidden`
- `pages/officers.md` — officer avatar divs contain emoji without `aria-hidden`

Files changed: `_includes/about.html`, `_includes/contact.html`

---

## 11. Footer Landmark

**Issue:** `<footer>` had no `aria-label`. While `<footer>` is a recognized landmark role (`contentinfo`), adding `aria-label` improves clarity when multiple footers or landmark regions exist.

**Fixed:** `<footer aria-label="사이트 푸터 / Site footer">`

File changed: `_includes/footer.html`

---

## 12. External Links (New Tab Warning)

**Issue:** Footer external links (`Aaron.kr`, `Easy-Peasy.ai`) open in a new tab (`target="_blank"`) with no indication to users that this will happen. WCAG 2.4.4 recommends making this predictable.

**Fixed:** Added `aria-label` to both links explicitly noting "(새 탭에서 열림 / opens in new tab)".

File changed: `_includes/footer.html`

---

## Flagged Issues (Not Fixed — Require Design Decisions)

### F1. Color Contrast — Muted Text (WCAG AA FAIL Risk)

**Affected tokens and approximate contrast ratios on their backgrounds:**

| Token | Value | Background | Approx. Ratio | WCAG AA |
|---|---|---|---|---|
| `--text-muted` (light) | `#8fa4b8` | `#f7f9fc` (`--bg-base`) | ~2.8:1 | FAIL (norm. text) |
| `--text-secondary` (light) | `#5a6e82` | `#f7f9fc` | ~4.2:1 | Near-fail |
| `--footer-muted` (light) | `#6a88a4` | `#051626` | ~4.7:1 | PASS |
| `--footer-link` (light) | `#7a9ab8` | `#051626` | ~6.3:1 | PASS |
| `--footer-link` (dark) | `#5a7a98` | `#020810` | ~3.9:1 | FAIL (norm. text) |
| `--text-muted` (dark) | `#445e78` | `#0d1a2e` | ~2.1:1 | FAIL |
| Hero chip text | `rgba(192,220,248,0.65)` | dark hero bg | ~2.4:1 | FAIL |

**Recommendation:**
- `--text-muted` in light theme: shift from `#8fa4b8` to at least `#637c94` (~4.5:1 on `#f7f9fc`)
- `--text-muted` in dark theme: shift from `#445e78` to at least `#6a88a2` on `#0d1a2e`
- `--footer-link` in dark theme: shift from `#5a7a98` to at least `#7a9ab8`
- Hero chip text: increase opacity from 0.65 to at least 0.80, or raise the base color value. However, since chips are `aria-hidden="true"`, this is purely a sighted-user issue.
- Note: `.section-label` uses `var(--accent-blue)` which is not defined in the token set (likely falls back to browser default or a prior variable). Verify this resolves correctly.

### F2. `<html lang>` Server-Side vs. Dynamic

**Issue:** The `default.html` layout sets `lang="ko"` statically. The inline script in `<head>` immediately reads `localStorage` and calls `document.documentElement.setAttribute('lang', ...)`, which corrects the language before first paint. However:
- Screen readers that read the DOM before JavaScript runs (e.g., some crawlers, PDF export tools, certain AT configurations) will always see `lang="ko"` regardless of user preference.
- The correct solution is server-side language detection (not feasible with GitHub Pages static hosting) or defaulting `lang` to the site's primary language and documenting this limitation.

**Recommendation:** This is acceptable for a GitHub Pages site. Document the limitation. Consider adding `<html lang="ko">` as the permanent attribute (Korean is the primary audience) and only update it dynamically for the English-language portions.

### F3. No `<header>` Element

**Issue:** The page has no `<header>` landmark element. The `<nav>` directly follows the skip link. Many screen-reader users navigate by landmarks; the expected structure is `<header>` wrapping the logo and `<nav>`.

**Recommendation:** Wrap `<nav>` in `_includes/nav.html` with a `<header role="banner">` element, or wrap only the logo portion. This is a larger structural change.

### F4. News Cards Have No Links to Articles

**Issue:** `_includes/news.html` renders `<div class="news-main">` and `<div class="news-item">` blocks but none of them are wrapped in `<a>` links. Users cannot click/activate to read the full post. The only navigation to individual posts appears to be if `post.url` is used elsewhere. This also means keyboard users cannot reach the news items as interactive targets.

**Recommendation:** Wrap each news card in `<a href="{{ post.url }}">` or add a "Read more" button with an `aria-label="'[Post title]' 읽기"`.

### F5. Infinity Symbol in Stats Bar

**Issue:** `_includes/stats.html` contains:
```html
<div class="stat-number en">∞</div>
<div class="stat-label" data-i18n="stat.potential">가능성</div>
```
Screen readers will announce "infinity" before "가능성/Possibilities". The visible label already provides context.

**Recommendation:** Add `aria-hidden="true"` to `.stat-number` containing `∞`, or add `aria-label="무한한"` to contextualize it. For numeric stats (6+, 2, 2025), the visible number + label is sufficient — consider adding `aria-label` to each `.stat-item` combining the number and label for better SR announcement.

### F6. `<article>` Without `aria-labelledby`

**Issue:** `_layouts/page.html` renders `<article class="page-article">` and `_layouts/post.html` renders `<article class="post-article">`. ARIA best practice is for `<article>` elements to have an accessible name via `aria-labelledby` pointing to their heading.

**Recommendation:** Add `aria-labelledby` pointing to the `<h1>` inside each article. Example:
```html
<article class="page-article" aria-labelledby="page-title">
  ...
  <h1 id="page-title" class="page-title">…</h1>
```

### F7. Inline Style Color Overrides Bypass Theme

**Issue:** Several includes and page files use `style="color:var(--text-secondary)"` or hardcoded colors inline (e.g., `_includes/contact.html` quick-card uses `style="font-size:14px;color:var(--text-secondary);"`). While CSS custom properties should respond to theme changes, inline styles have specificity `1-0-0-0` and can interfere with future theme patches or user stylesheets.

**Recommendation:** Move all inline color/font-size declarations to CSS classes.

### F8. `@keyframes pulse` Defined Twice

**Note:** `@keyframes pulse` is defined at line ~804 and again at ~1867 in `style.scss`. The second definition (0%→50%→100% opacity only) overrides the first (which also includes `transform: scale()`). This is a bug causing the badge dot to animate opacity only, not scale. The first definition should be kept and the duplicate removed. Not an accessibility issue but worth fixing.

### F9. `<section>` Elements Without Labels

**Issue:** `_includes/stats.html` renders `<div class="stats-bar">` which is not a `<section>` landmark. The research, about, news, cta, and contact sections do use `<section id="...">` but none have `aria-label` or `aria-labelledby`. Screen-reader users navigating by landmark will see unnamed "region" entries.

**Recommendation:** Add `aria-labelledby` to each `<section>` pointing to its `.section-title`:
```html
<section id="about" aria-labelledby="about-section-title">
  ...
  <h2 id="about-section-title" class="section-title">두 기관, 하나의 비전</h2>
```

### F10. Dropdown Navigation Pattern

**Issue:** The desktop dropdown uses `role="menu"` with `role="menuitem"` children. Per ARIA specification, a `role="menu"` is for application-style menus (like right-click context menus), not for navigation. Navigation dropdowns should use `role="navigation"` + `role="list"` + `role="listitem"`, or no role at all (native `<ul>/<li>` semantics). The current implementation also does not trap focus within the dropdown or implement arrow-key navigation expected of ARIA menus.

**Options:**
1. Remove `role="menu"` and `role="menuitem"` from the dropdown; rely on native `<div>/<a>` semantics with `aria-expanded` on the toggle.
2. Keep menu roles but implement full keyboard navigation (arrow keys, Home, End, Escape) as required by the ARIA Authoring Practices Guide.

**Recommendation:** Option 1 is simpler and still accessible. The `aria-expanded` + `aria-haspopup` on the toggle button is correct and should be kept.

### F11. Image Optimization (Non-WCAG but UX/Performance)

**Referenced large images:**
- `hero.jpg` — 2.6 MB CSS background image
- `hero2.png` — 1.9 MB (referenced in path, unused in current templates)
- `physical-ai-bg.jpg` — 1.2 MB (referenced in path, unused in current templates)

The hero image is loaded even for screen-reader-only users and on slow connections. Since it is set via CSS custom property (`--hero-bg-image`), it cannot be given `alt` text — this is correct (CSS background images should be decorative). However, the overlay (`::before` pseudo-element at 60% opacity) means the image is almost entirely obscured. Consider removing it or lazy-loading via JavaScript for performance.

---

## Files Changed (Summary)

| File | Change |
|---|---|
| `_layouts/default.html` | Added `.skip-link` element; added `id="main-content"` to `<main>`; added `aria-hidden` to background effect divs |
| `_includes/nav.html` | `<nav aria-label>`, `<ul role="list" aria-label>`, `aria-hidden` on theme icon, `aria-controls` + `aria-hidden` on hamburger, `role`+`aria-label` on mobile menu `<div>` |
| `_includes/hero.html` | `aria-label` on `<section>`; `aria-hidden="true" tabindex="-1"` on `<video>` |
| `_includes/footer.html` | `aria-label` on `<footer>`; `aria-hidden="true"` + `alt=""` on watermark img; `aria-label` on external links |
| `_includes/about.html` | `aria-hidden="true"` on emoji org-icon divs; `aria-label` on section-page-link |
| `_includes/research.html` | `aria-label` on section-page-link; updated EN link text |
| `_includes/news.html` | `aria-label` on section-page-link |
| `_includes/contact.html` | `aria-label` on section-page-link; `aria-hidden` on inline emoji; updated EN link text |
| `assets/css/style.scss` | Added: skip-link styles, `:focus-visible` ruleset, `@media (prefers-reduced-motion)` block |
| `assets/js/func.js` | `toggleMobileMenu` / `closeMobileMenu`: update `aria-label` dynamically; wrap icon chars in `aria-hidden` spans |

---

## WCAG 2.1 AA Compliance Assessment

| Criterion | Status | Notes |
|---|---|---|
| 1.1.1 Non-text Content | Partial | CSS bg images OK; video now aria-hidden; emoji icons now aria-hidden in includes; still flagged in .md pages |
| 1.2.1 Audio/Video (pre-recorded) | Pass | Video is decorative, now aria-hidden |
| 1.3.1 Info & Relationships | Partial | Landmark roles improved; dropdown role pattern flagged |
| 1.3.3 Sensory Characteristics | Pass | No color-only or shape-only instructions found |
| 1.4.1 Use of Color | Pass | Status/tags have text labels, not color alone |
| 1.4.3 Contrast (Minimum) | Partial | Several muted text tokens fail 4.5:1 — flagged |
| 1.4.4 Resize Text | Pass | Uses relative units (`clamp`, `em`) |
| 1.4.10 Reflow | Pass | Responsive breakpoints found |
| 1.4.11 Non-text Contrast | Partial | Focus ring added; button borders may be low-contrast |
| 1.4.12 Text Spacing | Pass | No fixed heights or line heights that block text spacing |
| 1.4.13 Content on Hover/Focus | Partial | Dropdown shows on hover; keyboard focus opens via click, not hover |
| 2.1.1 Keyboard | Partial | Dropdown keyboard navigation incomplete (see F10) |
| 2.1.2 No Keyboard Trap | Pass | Mobile menu uses `hidden` attribute properly |
| 2.4.1 Bypass Blocks | FIXED | Skip link added |
| 2.4.3 Focus Order | Pass | Logical DOM order |
| 2.4.4 Link Purpose | FIXED | Vague link text resolved with `aria-label` |
| 2.4.6 Headings and Labels | Pass | Heading hierarchy: h1→h2→h3, no skipped levels found |
| 2.4.7 Focus Visible | FIXED | `:focus-visible` rules added |
| 3.1.1 Language of Page | Partial | `lang="ko"` on `<html>`; JS updates correctly but SSR always serves "ko" |
| 3.2.2 On Input | Pass | No unexpected context changes |
| 3.3.1 Error Identification | N/A | No forms found (no form elements in templates) |
| 4.1.2 Name, Role, Value | Partial | ARIA improvements made; dropdown role pattern flagged |
| 4.1.3 Status Messages | N/A | No dynamic status messages found |
