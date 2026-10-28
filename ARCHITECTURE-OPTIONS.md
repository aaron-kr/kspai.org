# Architecture Options — for later review

**Status:** notes only, no decision made (written 2026-10-29).
**Question:** Should kspai.org stay a Jekyll site on GitHub Pages, or move to something non-developers can run?

> Excluded from the Jekyll build. Never write bare Liquid tag or output delimiters in this file.

---

## Why this will come up

Right now one developer updates the site through Git: editing YAML in `_data/`, Markdown in `_posts/`, and pushing to `main`. That works because:

- content is already **data-driven** (officers, conferences, banner, research areas, seminars, gallery are all YAML),
- hosting is free and needs no maintenance, and
- there is nothing to patch or back up and no login to secure.

It stops working once other site managers join, especially Korean staff or officers who expect a **게시판-style admin**: log in, click 글쓰기, attach a file, publish. Few of them will have used Git, YAML or Markdown. Signs it's time to decide:

- [ ] Someone other than the current maintainer needs to post news or update officers regularly
- [ ] Members need accounts (회원가입, member-only resources, dues tracking)
- [ ] Online paper submission and review is needed (the email workflow at `paper@physicalai.or.kr` doesn't scale)
- [ ] A forum or Q&A board (자유게시판, 질의응답) is required
- [ ] Posting frequency exceeds roughly 2–3 updates per week

---

## Options, from least to most change

### A. Keep Jekyll + GitHub Pages, add a Git-backed CMS (lowest effort)

A browser-based editor that commits to the repo for you. Admins see forms ("회장 이름", "학술대회 날짜") and an Upload button. The site itself doesn't change.

| Tool | Notes |
|---|---|
| **Pages CMS** (pagescms.org) | Free; sign in with GitHub; one `.pages.yml` config maps directly onto our `_data/*.yml` and `_posts/`. Simplest fit. |
| **Decap CMS** (formerly Netlify CMS) / **Sveltia CMS** | Free, open source; an `/admin/` page in the repo. Needs a GitHub OAuth helper when not hosted on Netlify. Sveltia is a faster, maintained drop-in. |
| **CloudCannon** | Paid, polished visual editor with Jekyll support. |

- **Pros:** no rebuild; keeps free hosting, version history and rollback; the current data-driven structure is already the right shape.
- **Cons:** every editor still needs a GitHub account; publishing takes ~1 minute (Pages build); no member accounts, comments or submissions.
- **Effort:** about 1–2 days to write the config for officers, conferences, news, banner and files.

### B. Spreadsheet as the content source

Officers, conferences and news live in a shared Google Sheet (familiar to almost everyone). A scheduled GitHub Action pulls the sheet, writes the `_data/*.yml` files and rebuilds.

- **Pros:** zero learning curve for admins; the Sheet doubles as the society's records.
- **Cons:** weak for long-form posts and file attachments; more custom glue code to maintain; sheet edits aren't reviewed before publishing.
- **Fit:** good for rosters and event lists; pair it with A for news.

### C. Korean board-style CMS (그누보드 / Rhymix / WordPress)

The "native" choice for Korean academic societies: **그누보드5 (Gnuboard)** and **Rhymix (formerly XE)** are what most Korean 학회 sites and their web vendors use. **WordPress** is the international equivalent; the maintainer already runs headless WP for aaron.kr.

- **Pros:** admins already know the 게시판 UX; member accounts, boards, file attachments and comment threads come built in; easy to hand to a Korean web agency.
- **Cons:** needs paid PHP/MySQL hosting (Cafe24, Gabia, etc.); security updates, backups and spam control become ongoing work; the current design would have to be re-themed; bilingual KO/EN is harder than it is now.
- **Effort:** a theme port plus content migration, about 2–4 weeks, or hire a vendor.

### D. Headless CMS + static front end (keep our design and hosting model)

Content lives in a hosted CMS (WordPress headless, Strapi, Sanity, or Supabase with a custom admin). The front end stays static (Jekyll, Astro or Next.js) and rebuilds on publish.

- **Pros:** friendly admin UI, the custom design stays, fast static pages, and room for member features (via Supabase auth) later.
- **Cons:** the most engineering of all the options; two systems to run; needs a developer on call.
- **Fit:** only if the society wants a custom design *and* app features, and has ongoing developer support.

### E. Specialised systems for the hard parts (combine with any option above)

- **Paper submission/review:** many Korean journals use KCI's **JAMS** (Journal Article Management System) once they are registered with KCI. Otherwise use OJS (Open Journal Systems) or a vendor system. Don't build this in-house.
- **Member sign-up and dues:** Google Forms + Sheets (current approach) → a dedicated membership service → a CMS with accounts (C or D).
- **Event registration:** keep using Google Forms (as for AMSTI 2026), or a Korean event platform (e.g. 온오프믹스, 이벤터스).

---

## Current lean (to revisit)

1. **Now:** stay on Jekyll + GitHub Pages; this file plus `README.md` and `CHANGELOG.md` keep it hand-off-able.
2. **When the first non-developer admin joins:** add **Option A (Pages CMS)** over the existing `_data/` files. It's cheap, reversible, and changes nothing for visitors.
3. **When member accounts, boards or online submission become requirements:** decide between **C** (hand to a Korean vendor on 그누보드/Rhymix/WordPress) and **D** (keep a custom build), and adopt **E** (JAMS/OJS) for submissions either way.

Before choosing, ask the officers who will actually edit the site what they use day to day (Naver Cafe? another society's 그누보드 admin? Google Workspace?) and pick the option closest to that.

---

## Migration notes (whichever option is chosen)

- All structured content is already in `_data/*.yml`, so it can be exported to any CMS with a short script.
- Bilingual content uses paired `*_ko` / `*_en` fields. Keep that pairing in any CMS schema; don't split into two sites.
- URLs to preserve (or redirect): `/conferences/<id>/`, `/news/` post URLs (`/YYYY/MM/DD/slug/`), `/officers/`, `/journal/`, `/submit/`, `/resources/`, and the file downloads under `/assets/files/`.
- Domains are at Gabia (`physicalai.or.kr`, `physicalai.re.kr`); `kspai.org` is set in `CNAME`.
