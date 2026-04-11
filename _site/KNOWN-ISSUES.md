# Known Issues & Fixes

A record of bugs discovered and resolved during development. Useful context when debugging regressions or understanding why certain patterns exist in the code.

---

## Bug 1 — Jekyll not building (`.nojekyll` file)

**Symptom:** GitHub Pages serves raw HTML files with Liquid tags visible as literal text. SCSS not compiled. Includes not resolved.

**Root cause:** A `.nojekyll` file in the repo root tells GitHub Pages to skip Jekyll entirely and serve files statically. This was added during the original static-site phase to prevent Jekyll from trying to process plain HTML.

**Fix:** Delete `.nojekyll` from the repo root.

**Status:** Fixed. Do not re-add `.nojekyll`.

---

## Bug 2 — Mobile menu not working

**Symptom:** Tapping the hamburger (☰) button on mobile did nothing. No error visible in console on iOS Safari.

**Root cause:** `nav.html` contains `onclick="toggleMobileMenu(this)"` but `toggleMobileMenu()` was never appended to `func.js`. The function simply didn't exist. The same was true for the desktop dropdown click handlers.

**Fix:** Added `toggleMobileMenu()`, `closeMobileMenu()`, desktop dropdown JS, and Escape key handler to `func.js`.

**Status:** Fixed in `func.js`.

---

## Bug 3 — `IntersectionObserver` variable name conflict

**Symptom:** Scroll fade-in animations or nav transparency stopped working intermittently, depending on browser/order of execution.

**Root cause:** Both the scroll fade-in block and the nav transparency IIFE declared `const observer = new IntersectionObserver(...)`. In strict mode or certain V8 versions, the second declaration shadowed or conflicted with the first within the same module scope.

**Fix:** Renamed to `fadeObserver` (scroll fade-in) and `heroObserver` (nav transparency).

**Status:** Fixed in `func.js`. Never reuse `observer` as a bare variable name in this file.

---

## Bug 4 — Nav `border-bottom` line visible over hero

**Symptom:** A 1px horizontal line was visible at the bottom of the nav bar when the nav should have been fully transparent over the hero section. CSS DevTools showed `border-bottom: 1px solid transparent` being overridden.

**Root cause:** A cascade specificity collision caused by three interacting rules:

1. `.mobile-menu { border-bottom: 1px solid var(--border-subtle); }` — base rule sets a visible border on the mobile menu panel
2. `.mobile-menu[hidden] { display: block !important; }` — specificity `0,2,0` (class + attribute) — makes the hidden menu technically rendered (just zero height) on all screen sizes
3. `@media (min-width: 861px) { .mobile-menu { display: none !important; } }` — specificity `0,1,0` (class only) — loses to rule 2 because `!important` + lower specificity

The result: on desktop, `.mobile-menu` was `display: block` with `max-height: 0` and `overflow: hidden` — invisible to users, but the `border-bottom` on the zero-height element still painted as a 1px line right at the bottom edge of the nav bar.

**Fix:**
```scss
/* Remove from .mobile-menu base rule: */
border-bottom: 1px solid var(--border-subtle);  /* ← DELETE */

/* Add separately, only when open: */
.mobile-menu[data-open="true"] {
  border-bottom: 1px solid var(--border-subtle);
}
```

**Additional guard added:**
```scss
nav:not(.nav-scrolled) {
  border-bottom-color: transparent;
}
```
This higher-specificity rule (`0,2,0`) overrides any lingering `border-bottom` values from the base `nav` rule (`0,1,0`) regardless of cascade order.

**Status:** Fixed in `style.scss`.

---

## Bug 5 — Nav transparent on all pages, not just homepage

**Symptom:** On inner pages (`/about/`, `/privacy/`, etc.), the nav background was transparent and text was white, making it invisible or unreadable over the page's light background.

**Root cause:** The `IntersectionObserver` IIFE in `func.js` returned early with `return` when no `.hero` element was found, leaving the nav in its default CSS state — which is `background: transparent`.

**Fix:**
```js
// BEFORE:
if (!nav || !hero) return;

// AFTER:
if (!nav) return;
if (!hero) { nav.classList.add('nav-scrolled'); return; }
```

When there is no hero, `.nav-scrolled` is immediately applied, giving the nav its solid background.

**Status:** Fixed in `func.js`.

---

## Pending / Watch list

### Hero `background: none` flash on slow connections
When the page loads, `--hero-bg-image` defaults to `none` in CSS. If a `hero_image` is set via front matter and the image loads slowly, there may be a brief flash of the gradient-only background before the image appears. Mitigation: use well-optimized images and consider a CSS `background-color` fallback matching the gradient start color.

### Pretendard CDN availability
Pretendard Variable is loaded from `cdn.jsdelivr.net`. If jsDelivr has an outage, Korean body text falls back to Noto Sans KR (Google Fonts). Both are listed in the font stack — no action needed, just awareness.

### `data-i18n` on `<button>` elements
The `lang.js` engine uses `el.textContent = entry[lang]` which on a `<button>` with a `::after` pseudo-element (like the dropdown chevron) can cause the chevron to disappear if the button's text content is replaced. Currently avoided because the chevron is drawn with CSS `clip-path` on `::after` — it is not a text character and survives `textContent` replacement. Do not change the chevron to a text/emoji character.

### Superwide monitor (3660px) hero
Hero height is capped at `clamp(600px, 80vh, 820px)` to prevent an overwhelming full-screen hero on ultrawide displays. The `.hero-inner` grid uses `max-width: 1200px` via `.container`. If the owner ever requests a wider content area, the `max-width` in `.container` is the knob to turn — currently at `1200px`.
