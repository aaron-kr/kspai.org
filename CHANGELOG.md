# Changelog

All notable changes to the KSPAI website (kspai.org). Newest first.
Dates are commit dates (KST). Entries before 2026-10-29 were reconstructed from `git log` and project notes, so they are summaries, not a complete record.

**How to add an entry:** add a new dated section at the top. Group items under **Content** (officers, conferences, news, files), **Features** (templates, data fields), **Fixes**, and **Tooling / Docs**. One line per change, naming the file or page. Bump nothing; there are no version numbers.

> This file is excluded from the Jekyll build (`_config.yml` → `exclude`). Never write bare Liquid tag or output delimiters in it.

---

## 2026-10-29 (review & cleanup)

### Fixes
- **Accessibility — contrast:** the cyan accent (`#00c8c5`) used as *text* on light backgrounds was ~2:1 (WCAG AA needs 4.5:1). New `--accent-text` token (`#007a78` light / `#24fffc` dark) now colors 44 label/link/number styles; the bright cyan stays on always-dark surfaces (footer, nav over hero) and for borders/backgrounds.
- **Accessibility — headings:** footer column titles were `h4` directly after the page `h1`/`h2` (skipped levels on every page) → now `h2` with the same look.
- Removed the unused Genos web font (an extra third-party request on every page).

### Tooling / Docs
- Stopped tracking the generated `_site/` folder (`git rm -r --cached _site`); it was already in `.gitignore`.
- **DRY:** new includes `conf-poster.html` (poster or "coming soon" placeholder, replacing two copies with inline styles), `conf-key-dates.html` (two copies), `conf-org-list.html` (주최/주관 sidebar lists), `monogram.html` (officer initials, two copies).
- **Dead CSS removed:** 80 rules (~330 lines) whose classes no template, data file or script uses — old officer cards, old post header, events strip, journal teaser, news list, past-conference list, unused button variants. `style.scss` now has 0 unused classes.
- Site-wide static audit (25 pages): no broken internal links, missing assets, images without `alt`, empty links, duplicate IDs, or `target="_blank"` without `rel="noopener"`. No secrets in the repo; JS `innerHTML` only uses fixed strings.
- Known, left as is: `http://klife.re.kr` links (that site has no working HTTPS); third-party font stylesheets load without SRI hashes (stylesheets can't run scripts; versions are pinned).

---

## 2026-10-29 (second pass)

### Content
- Renamed the partner conference abbreviation **AMSCT → AMSTI** (the institute's official abbreviation) in every file, folder and URL: `/conferences/2026-amsti/`, `assets/images/conferences/2026-amsti/amsti-*.jpg`, `_posts/2026-10-29-amsti-2026-conference.md`. Linked the institute website (https://amsti.kangwon.ac.kr/amsti/index.do) from the organizer list and the contact block.
- AMSTI news post: rewritten with Overview / How to attend sections, and the pre-registration form and conference page as buttons in a new sidebar with the poster.

### Features
- **Site banner is now part of the page flow** instead of an overlay: it pushes the page header down while showing and is removed from the DOM when closed. Visibility is decided before first paint (`head.html`), so a dismissed banner doesn't flash. New CSS variables `--nav-h` / `--nav-clear` replace the hard-coded 64px/120px nav clearances.
- **Page headers centered** vertically and horizontally (page hero, conference hero, post hero); Korean wraps between words (`word-break: keep-all`).
- **Conference detail page:** two-column layout — main column (info, then body sections) plus a sidebar with the poster (no longer sticky), hosts, organizers (주관) and contact. Mobile order is info → sidebar → body.
- **CFP guide** moved off `/conferences/` into `_includes/cfp-guide.html`, shown only on upcoming KSPAI-hosted conference pages. `/conferences/` now lists upcoming events first, then the paper template, then past events.
- **Officers page redesign** (no photos): overview strip with counts and jump links, featured president card on the hero gradient, monogram-avatar person cards (`_includes/person-card.html`), committee panels, and numbered division-chair rows (vacant posts dimmed).
- **News post layout:** hero header band like other pages, optional "at a glance" sidebar (`event`, `links`, `aside_image` front matter), and better prose styling (accent-bar headings, colored bullets, larger lead paragraph).

### Fixes
- Conference detail pages used the no-hero article padding (120px) under the hero; they now use the with-hero spacing.
- Banner `role="alert"` → `role="region"` (an alert on every page load is announced by screen readers).

---

## 2026-10-29

### Content
- **New partner conference:** *2026 첨단군사과학융합기술 학술대회 / 2026 Advanced Military Science & Convergence Technology Conference* (Nov 5–6, 2026, Gangwon Research Institute, Chuncheon). Hosted by the KNU Advanced Military Science & Technology Research Institute; KSPAI is one of the co-hosts (주최).
  - Data entry `2026-amsti` at the top of `upcoming:` in `_data/conferences.yml`
  - Detail page `_conferences/2026-amsti.md` → `/conferences/2026-amsti/`, with the four slide images (banner → invitation → program → directions), the A4 poster, and bilingual text versions of the invitation, program table and shuttle-bus schedule
  - News post `_posts/2026-10-29-amsti-2026-conference.md` with the pre-registration Google Form link (expires 2026-11-07)
  - Site banner (`_data/banner.yml`) points at the event until 2026-11-06; the commented-out 2027 Winter Conference banner is ready to restore
- **Officer roster update** (`_data/officers.yml`):
  - 에런스노버거 → 국내학술부회장, affiliation now 전북대학교 (Jeonbuk National University)
  - 문형진 → 국제학술부회장 (was 특임부회장)
  - New: 문채영 (우송정보대학), 산학협력부회장
  - 이선경 (우석대학교) → 부편집위원장, affiliation added
  - Editorial division chairs reorganized into 7 divisions: 윤리및인문학, 교육, 융합및창업, 비전및인식 (천양하, 용인대학교), 시스템 (에런스노버거), 국방및무기시스템 (vacant), 보건의료 (박미현, 백석문화대학교). The former 영상처리 and 국방피지컬AI divisions were renamed; 박상혁's entry was removed.
  - New 학술위원회 (Academic Committee): 국내학술위원장 에런스노버거, 국제학술위원장 문형진, 부학술위원장 이선경·박지현
  - Applied the 2026-09-04 "Bong Seok Jang" spelling to the editorial committee as well
- `_data/research.yml`: `editorial_division_ko/en` fields updated to the new division names

### Features
- `_data/officers.yml` restructured: `committee_chairs` + `editorial_board` replaced by `editorial_committee` (`leadership` + `divisions`) and `academic_committee`; `vacant: true` renders a dimmed card. `pages/officers.md` updated to match.
- Conference data supports **partner events** (`partner_event: true`): "협력 학술대회 / Partner Conference" label, pre-registration button instead of KSPAI paper-submission buttons, and an external contact block (`contact_*` fields).
- New optional conference fields: `banner_image`, `address_ko/en`, `organizers` (주관), `host_label_ko/en`, `contact_*`.
- `_layouts/conference.html` now renders the body of `_conferences/<id>.md` below the info/poster block, so one conference can have extra sections without changing the template.
- The homepage conference spotlight skips any `upcoming:` entry whose `date_to` has passed, as of the last build, and links to the conference's own page.
- `/conferences/` upcoming cards link to each conference's detail page.
- Banner: new `expires:` field (the banner hides itself in the browser after that date). "Close forever" now applies only to the banner that was closed, so a new banner shows again.
- New CSS: `.conf-figure`, `.conf-prose`, `.conf-program-table`, `.conf-partner-*`, `.officer-subsection-title`. `div[data-lang]` wrappers inside `.conf-prose` / `.post-body` now display as blocks.

### Fixes
- Empty-string links: Liquid treats `""` as true, so empty `cfp_link`, `proceedings_link`, `map_url` and organizer `url` values rendered buttons and links with empty `href`s. They are now checked with `!= ""`. This removes a dead "Proceedings →" button on the 2026 Summer Conference in Past Events and a dead "Submit Paper" link on the 2027 Winter page.
- `research.md`: an unquoted colon in `description` made the front matter invalid YAML, so Jekyll ignored the page's title and description. The value is now quoted.
- `_config.yml`: internal docs (`CHANGELOG.md`, `ARCHITECTURE-OPTIONS.md`, `KNOWN-ISSUES.md`, `ACCESSIBILITY_AUDIT.md`, `SEO_AUDIT.md`) are excluded from the build, so they are no longer published as public pages.

### Tooling / Docs
- Added `CHANGELOG.md` (this file) and `ARCHITECTURE-OPTIONS.md` (notes on CMS options for when non-developer admins join).
- Updated `README.md` and `CLAUDE.md` for all of the above.

---

## 2026-09-04 — Update BSJ
- Corrected 장봉석's English name to "Bong Seok Jang" in the vice-president list. The editorial-board copy kept "Bong-suk Jang" until 2026-10-29.

## 2026-09-01 — 2027 Winter Conference
- Added the 2027 Winter Conference (Jan 28–29, 2027, Jeonju National University of Education), a joint conference with the Korea Quality of Life Information Society: `_data/conferences.yml`, `_conferences/2027-winter.md`, announcement post, and the banner.
- Moved the 2026 Summer Conference to `past:`.
- Added the editorial board (division-based) and committee chairs to `_data/officers.yml` and `/officers/`.
- Membership dues/payment info updated in `join.md`.

## 2026-07-01 — News & files
- News posts for two lifelong-education project calls (`_posts/2026-07-01-project-call-*.md`) with contract/RFP files in `assets/files/2026/`.
- News board styling, file extension fixes, footer and favicon updates (light/dark SVG favicons).

## 2026-06-10 — President & officers
- President set to 이충호 (Hanbat National University); vice-president roster revised (several follow-up corrections the same day).

## 2026-05-29
- Joint Summer Conference paper template (`assets/files/2026 공동하계학술대회 논문양식.hwp`).

## 2026-05-16 → 05-19 — Data-driven rebuild
- Moved remaining hard-coded content into `_data/` (conferences, officers, banner, partners, seminars, bylaws, gallery) as the single source of truth.
- Added the `_conferences/` collection plus `_layouts/conference.html`, the site banner, the homepage conference spotlight, and the `/resources/` and `/gallery/` pages.
- 2026 Summer Conference poster; logos, favicons, and journal/conference templates.
- Society English name corrected; officers and styles cleaned up.

## 2026-05-01 — Audits & image optimization
- Accessibility audit (contrast, ARIA labels) and SEO audit, with fixes (see `ACCESSIBILITY_AUDIT.md`, `SEO_AUDIT.md`).
- Image optimization: `scripts/compress-images.mjs` (sharp; originals backed up to the gitignored `scripts/image-originals/`; writes to a temp file then renames, to avoid a Windows file-lock error) and the `.github/workflows/compress-images.yml` auto-compress action.

## 2026-04-19 — Code quality
- Stylelint (`stylelint-config-standard-scss`) with `.stylelintrc.json`, the `npm run lint:css` script, and the GitHub Actions lint workflow (`.github/workflows/lint.yml`). `package-lock.json` is committed because CI needs it.

## 2026-04-11 → 04-12
- Journal, submission and conference pages; logo variants; Genos font experiment; style refinements.

## 2026-03-27 → 03-29 — Jekyll conversion
- Converted the static HTML site to Jekyll: `_layouts/`, `_includes/`, data-driven nav (`_data/nav.yml`), research areas (`_data/research.yml`), and `_posts/` for news.
- Removed `.nojekyll`. Added the page hero, dropdown menus, mobile menu fixes (border-bottom bleed, transparent nav on inner pages), and light/dark logos.

## 2026-02-23 → 02-26 — Initial static site
- First single-page static site with theme toggle and Korean/English language switching; CNAME added. (Originally published as the `physical-ai-home` repository.)
