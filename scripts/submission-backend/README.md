# 논문 모집 게시판 백엔드 (Paper submission backend)

The two boards on kspai.org — `/submit/inaugural/` (창간호) and `/submit/conference/` (2027 동계학술대회) — send submissions to a small Google Apps Script web app. The script runs on the **society's Google Workspace account, `admin@kspai.org`**, so everything lands in that account's Drive:

```
My Drive / KSPAI 논문투고 /
  ├─ KSPAI 논문투고 접수대장   ← Google Sheet, one tab per board, one row per submission
  ├─ 창간호 /
  │    └─ J-001_홍길동 /  J-001_원고_….hwp, J-001_심사용_….hwp
  └─ 2027 동계학술대회 /
       └─ C-001_김철수 /  C-001_논문_….hwp
```

On each submission the script also emails a confirmation (with the 접수번호) to the submitter and a notice to the editors.

**Cost:** $0 on top of the existing Workspace seat. It uses the account's normal Drive storage and Gmail sending quota (1,500 recipients a day on Workspace; each submission uses 2). Emails go out from `admin@kspai.org` with Reply-To `paper@kspai.org`.

**Deliverability:** kspai.org needs SPF, DKIM and DMARC DNS records (at DreamHost) or confirmation emails may land in spam. See the DNS section of `CHANGELOG.md` 2026-11-24.

## One-time setup (about 10 minutes)

Do this **signed in to `admin@kspai.org`**, not a personal account. The Drive folder and Sheet will belong to whichever account runs `setup()`.

1. Go to <https://script.google.com> → **New project**. Rename it `KSPAI 논문투고`.
2. Replace the contents of `Code.gs` with this folder's `Code.gs`.
3. ⚙️ **Project Settings** → tick **Show "appsscript.json" manifest file in editor**. Open `appsscript.json` and replace it with this folder's copy (it sets the Asia/Seoul time zone and the permissions).
4. ⚙️ **Project Settings → Script Properties → Add script property**
   - `NOTIFY_EMAILS` = the editors' addresses, comma-separated (e.g. `paper@kspai.org, someone@univ.ac.kr`). These stay private: they are not in the public repo.
5. In the editor choose the function **`setup`** → **Run**. Approve the permission prompt. Google shows an "unverified app" warning for your own scripts: click *Advanced → Go to KSPAI 논문투고 (unsafe)*. The log prints the folder and Sheet links.
6. Run **`testEmail`** once to confirm mail sends.
7. **Deploy → New deployment →** type **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
   
   Copy the **Web app URL** (ends in `/exec`).
8. In this repo, paste it into `_data/paper_boards.yml`:
   ```yaml
   endpoint: "https://script.google.com/macros/s/AKfy…/exec"
   ```
   Commit and push. The forms appear on both boards. While `endpoint` is blank, the boards show an "email your paper to paper@kspai.org" notice instead.
9. Share the **KSPAI 논문투고** Drive folder with the editors (Editor or Viewer access). The Sheet is inside it, so it is shared too.
10. Submit one test paper on each board, check the Sheet row, Drive folder and both emails, then delete the test row and folder. Deleting a row does not reset the numbering; if you want the first real submission to be 001, delete the `SEQ_inaugural` / `SEQ_conference` Script Properties.

## Changing the script later

Edit `Code.gs` here first (so the repo stays the source of truth), paste it into the Apps Script editor, then **Deploy → Manage deployments → ✏️ Edit → Version: New version → Deploy**. Editing the existing deployment keeps the same URL; **New deployment** would make a new URL that you'd have to paste into `paper_boards.yml` again.

## Deadlines

Deadlines live in two places. Change both:

| Where | What it controls |
|---|---|
| `Code.gs` → `BOARDS.*.rounds[].closes` | What the server accepts (the real cutoff) |
| `_data/paper_boards.yml` → `boards.*.rounds` | What the page shows (badge, D-day, struck-through past rounds) |

Current settings (KST):
- **창간호:** open until 2027-01-31 23:59 (temporary page; the 학술교육원 system takes over after the first issue).
- **학술대회:** 1차 2026-12-31 23:59, 2차 (final) 2027-01-07 23:59. The `차수` column records which round each paper arrived in.

To add another board (e.g. next summer's conference), add an entry to both `BOARDS` and `paper_boards.yml`, run `setup()` again (it only creates what's missing), redeploy a new version, and create a page that uses the paper-board include.

## For the editors: using the Sheet

- **처리상태** has a dropdown: 접수 → 검토중 → 심사중 → 수정요청 → 게재확정 / 발표확정 / 게재불가 / 철회. Rows set to 철회 disappear from the public list.
- **편집위원 메모** is free for internal notes. Nothing in the Sheet is public.
- Revisions arrive as new rows; the submitter writes the old ID in **기존접수번호**.
- The public list on each board shows only 접수번호, 분야, a masked name (홍*동), date, round and file count. Titles are hidden (`SHOW_TITLES_PUBLICLY: false` in `Code.gs`).

## Limits and safeguards

- 15 MB per file, 25 MB per submission (Apps Script request bodies cap out near 50 MB once files are base64-encoded). Allowed types: hwp, hwpx, doc, docx, pdf (plus jpg/png/zip/ppt for the optional extra file).
- Spam: a hidden honeypot field, at most 6 submissions per email address per hour, and server-side checks of every required field, consent box, file type and size.
- Sheet cells starting with `= + - @` are prefixed with `'` so a submitted title can't run as a formula.
- Personal data retention: the consent text and `/privacy/` promise deletion **3 years after review and publication or presentation**. Someone needs to actually do this. Put a reminder in the society calendar.
