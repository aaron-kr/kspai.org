/**
 * KSPAI 논문 모집 게시판 — Google Apps Script backend
 * ------------------------------------------------------------------
 * Receives submissions from the kspai.org boards (/submit/inaugural/,
 * /submit/conference/), saves the files to the society's Google Drive,
 * logs one row per submission in a Google Sheet, and emails the
 * submitter and the editors.
 *
 * Cost: $0. It runs on the Google account that deploys it, inside that
 * account's normal Drive (15 GB) and Gmail (≈100 recipients/day for a
 * free @gmail.com account) quotas.
 *
 * Setup and redeploy steps: see README.md next to this file.
 *
 * DEADLINES ARE IN TWO PLACES: here (BOARDS, enforced) and in
 * _data/paper_boards.yml (shown on the site). Change both.
 */

// ── Settings ──────────────────────────────────────────────────────
var CONFIG = {
  ROOT_FOLDER_NAME: 'KSPAI 논문투고',
  SPREADSHEET_NAME: 'KSPAI 논문투고 접수대장',
  SITE_URL: 'https://kspai.org',
  CONTACT_EMAIL: 'paper@kspai.org',   // Reply-To on all emails
  SENDER_NAME: '한국피지컬인공지능학회 논문투고',
  MAX_FILE_MB: 15,          // per file (the site shows the same limit)
  MAX_TOTAL_MB: 25,         // per submission; Apps Script request bodies cap out near 50 MB of base64
  RATE_LIMIT_PER_HOUR: 6,   // submissions per email address per hour
  SHOW_TITLES_PUBLICLY: false, // public list shows 🔒 instead of titles when false
  TZ: 'Asia/Seoul'
};

// Server-side copy of the board rules. Times are KST.
var BOARDS = {
  inaugural: {
    name: '창간호',
    prefix: 'J',
    kind: 'journal',
    opens: '2026-11-24T00:00:00+09:00',
    rounds: [
      { label: '상시', closes: '2027-01-31T23:59:59+09:00' }
    ],
    files: {
      manuscript: { label: '원고', required: true,  ext: ['hwp', 'hwpx', 'doc', 'docx', 'pdf'] },
      blind:      { label: '심사용', required: true, ext: ['hwp', 'hwpx', 'doc', 'docx', 'pdf'] },
      extra:      { label: '기타', required: false,  ext: ['hwp', 'hwpx', 'doc', 'docx', 'pdf', 'jpg', 'jpeg', 'png', 'zip'] }
    }
  },
  conference: {
    name: '2027 동계학술대회',
    prefix: 'C',
    kind: 'conference',
    opens: '2026-11-24T00:00:00+09:00',
    rounds: [
      { label: '1차', closes: '2026-12-31T23:59:59+09:00' }
      // 2차 not announced yet; when it is, add the line below (and redeploy):
      // , { label: '2차', closes: '2027-01-07T23:59:59+09:00' }
    ],
    files: {
      manuscript: { label: '논문', required: true,  ext: ['hwp', 'hwpx', 'doc', 'docx', 'pdf'] },
      extra:      { label: '기타', required: false, ext: ['hwp', 'hwpx', 'doc', 'docx', 'pdf', 'jpg', 'jpeg', 'png', 'ppt', 'pptx', 'zip'] }
    }
  }
};

var STATUS_VALUES = ['접수', '검토중', '심사중', '수정요청', '게재확정', '발표확정', '게재불가', '철회'];

// Sheet columns. `key` is the submitted field; `col` is the header.
var COLUMNS = [
  { col: '접수번호' }, { col: '접수일시' }, { col: '차수' }, { col: '처리상태' },
  { col: '논문제목(국문)', key: 'title_ko' }, { col: '논문제목(영문)', key: 'title_en' },
  { col: '투고분야', key: 'track' }, { col: '논문종류/발표형식', key: 'type' },
  { col: '투고자', key: 'name' }, { col: '소속', key: 'affiliation' }, { col: '직위', key: 'position' },
  { col: '이메일', key: 'email' }, { col: '연락처', key: 'phone' },
  { col: '저자(전원)', key: 'authors' }, { col: '키워드', key: 'keywords' },
  { col: '학생논문', key: 'student' }, { col: '기존접수번호', key: 'prev_id' }, { col: '비고', key: 'memo' },
  { col: '동의항목', key: 'consents' },
  { col: '폴더' }, { col: '파일' }, { col: '편집위원 메모' }
];

// ── Web app entry points ──────────────────────────────────────────

function doPost(e) {
  try {
    var body = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    return json_(handleSubmission_(body));
  } catch (err) {
    console.error(err && err.stack || err);
    return json_({ ok: false, error: 'server', message: String(err && err.message || err) });
  }
}

function doGet(e) {
  var p = (e && e.parameter) || {};
  try {
    if (p.action === 'list') return json_(publicList_(p.board));
    if (p.action === 'status') return json_(boardStatus_(p.board));
    return json_({ ok: true, service: 'kspai-submissions' });
  } catch (err) {
    console.error(err && err.stack || err);
    return json_({ ok: false, error: 'server' });
  }
}

// ── Submission ────────────────────────────────────────────────────

function handleSubmission_(b) {
  var board = BOARDS[b.board];
  if (!board) return { ok: false, error: 'board' };

  // Honeypot: real people never see or fill the "website" field.
  if (b.website) return { ok: true, id: 'X-000' };

  var now = new Date();
  var round = currentRound_(board, now);
  if (!round) return { ok: false, error: 'closed' };

  var f = {
    title_ko: clean_(b.title_ko, 300), title_en: clean_(b.title_en, 300),
    track: clean_(b.track, 120), type: clean_(b.type, 120),
    name: clean_(b.name, 80), affiliation: clean_(b.affiliation, 200), position: clean_(b.position, 80),
    email: clean_(b.email, 200).toLowerCase(), phone: clean_(b.phone, 40),
    authors: clean_(b.authors, 2000), keywords: clean_(b.keywords, 500),
    student: clean_(b.student, 60), prev_id: clean_(b.prev_id, 40), memo: clean_(b.memo, 2000)
  };
  var required = ['title_ko', 'track', 'type', 'name', 'affiliation', 'email', 'phone', 'authors'];
  if (board.kind === 'journal') required.push('title_en', 'keywords');
  for (var i = 0; i < required.length; i++) {
    if (!f[required[i]]) return { ok: false, error: 'missing', field: required[i] };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) return { ok: false, error: 'email' };

  var c = b.consents || {};
  if (!c.privacy || !c.ethics || (board.kind === 'journal' && !c.copyright)) {
    return { ok: false, error: 'consent' };
  }
  f.consents = ['개인정보', '연구윤리', board.kind === 'journal' ? '저작권' : null]
    .filter(Boolean).join(', ') + ' (' + fmt_(now) + ')';

  // Files: validate everything before writing anything.
  var files = Array.isArray(b.files) ? b.files : [];
  var seen = {}, total = 0, blobs = [];
  for (var j = 0; j < files.length; j++) {
    var fl = files[j] || {};
    var rule = board.files[fl.key];
    if (!rule || seen[fl.key]) return { ok: false, error: 'file', field: fl.key };
    var name = safeName_(fl.name);
    var ext = (name.split('.').pop() || '').toLowerCase();
    if (rule.ext.indexOf(ext) < 0) return { ok: false, error: 'filetype', field: fl.key };
    var bytes = Utilities.base64Decode(String(fl.data || ''));
    if (!bytes.length) return { ok: false, error: 'file', field: fl.key };
    if (bytes.length > CONFIG.MAX_FILE_MB * 1048576) return { ok: false, error: 'filesize', field: fl.key };
    total += bytes.length;
    seen[fl.key] = true;
    blobs.push({ key: fl.key, label: rule.label, name: name, bytes: bytes });
  }
  if (total > CONFIG.MAX_TOTAL_MB * 1048576) return { ok: false, error: 'totalsize' };
  for (var k in board.files) {
    if (board.files[k].required && !seen[k]) return { ok: false, error: 'missing', field: k };
  }

  if (!rateOk_(f.email)) return { ok: false, error: 'rate' };

  var ctx = ctx_();
  var id = nextId_(b.board, board.prefix);

  // Drive: <root>/<board>/<id>_<name>/<id>_<label>_<original name>
  var boardFolder = DriveApp.getFolderById(ctx.folders[b.board]);
  var folder = boardFolder.createFolder(id + '_' + f.name);
  var links = blobs.map(function (x) {
    var file = folder.createFile(Utilities.newBlob(x.bytes, mime_(x.name), id + '_' + x.label + '_' + x.name));
    return x.label + ': ' + file.getUrl();
  });

  var row = COLUMNS.map(function (c) {
    switch (c.col) {
      case '접수번호': return id;
      case '접수일시': return fmt_(now);
      case '차수': return round.label;
      case '처리상태': return '접수';
      case '폴더': return folder.getUrl();
      case '파일': return links.join('\n');
      case '편집위원 메모': return '';
      default: return cell_(f[c.key]);
    }
  });
  SpreadsheetApp.openById(ctx.sheetId).getSheetByName(board.name).appendRow(row);
  CacheService.getScriptCache().remove('list_' + b.board);

  sendEmails_(board, round, id, f, blobs, folder.getUrl(), now);
  return { ok: true, id: id, round: round.label };
}

function sendEmails_(board, round, id, f, blobs, folderUrl, now) {
  var fileList = blobs.map(function (x) { return '<li>' + esc_(x.label) + ': ' + esc_(x.name) + '</li>'; }).join('');
  var summary =
    '<table style="border-collapse:collapse;font-size:14px">' +
    tr_('접수번호', id) + tr_('게시판', board.name + ' (' + round.label + ')') + tr_('접수일시', fmt_(now) + ' KST') +
    tr_('논문제목', esc_(f.title_ko) + (f.title_en ? '<br>' + esc_(f.title_en) : ''), true) +
    tr_('투고분야', f.track) + tr_(board.kind === 'journal' ? '논문종류' : '발표형식', f.type) +
    tr_('투고자', f.name + ' (' + f.affiliation + ')') +
    '</table><p>첨부 파일</p><ul>' + fileList + '</ul>';

  // 1) Confirmation to the submitter
  try {
    MailApp.sendEmail({
      to: f.email,
      replyTo: CONFIG.CONTACT_EMAIL,
      name: CONFIG.SENDER_NAME,
      subject: '[KSPAI 논문투고] 접수 확인 ' + id + ' — ' + f.title_ko,
      htmlBody:
        '<p>' + esc_(f.name) + ' 님, 논문이 정상적으로 접수되었습니다.</p>' + summary +
        '<p>수정본을 제출하실 때에는 같은 게시판에서 다시 제출하시고 「기존 접수번호」란에 <b>' + id + '</b>를 적어 주십시오.<br>' +
        '문의: <a href="mailto:' + CONFIG.CONTACT_EMAIL + '">' + CONFIG.CONTACT_EMAIL + '</a></p>' +
        '<p style="color:#777;font-size:12px">이 메일은 발신 전용 주소에서 자동으로 발송되었습니다. 회신하시면 학회 논문투고 담당 메일로 전달됩니다.</p>'
    });
  } catch (err) { console.error('submitter mail failed', err); }

  // 2) Notice to the editors (Script Property NOTIFY_EMAILS, comma-separated)
  var notify = PropertiesService.getScriptProperties().getProperty('NOTIFY_EMAILS');
  if (notify) {
    try {
      MailApp.sendEmail({
        to: notify,
        replyTo: f.email,
        name: CONFIG.SENDER_NAME,
        subject: '[신규 투고] ' + board.name + ' ' + id + ' — ' + f.title_ko,
        htmlBody: summary + '<p>이메일: ' + esc_(f.email) + ' · 연락처: ' + esc_(f.phone) + '</p>' +
          '<p><a href="' + folderUrl + '">Drive 폴더 열기</a> · ' +
          '<a href="https://docs.google.com/spreadsheets/d/' + ctx_().sheetId + '">접수대장 열기</a></p>'
      });
    } catch (err) { console.error('editor mail failed', err); }
  }
}

// ── Public board list (masked) ────────────────────────────────────

function publicList_(boardId) {
  var board = BOARDS[boardId];
  if (!board) return { ok: false, error: 'board' };
  var cache = CacheService.getScriptCache();
  var hit = cache.get('list_' + boardId);
  if (hit) return JSON.parse(hit);

  var sh = SpreadsheetApp.openById(ctx_().sheetId).getSheetByName(board.name);
  var values = sh.getDataRange().getValues();
  var h = values.shift();
  var ix = function (name) { return h.indexOf(name); };
  var rows = values.filter(function (r) { return r[ix('접수번호')] && r[ix('처리상태')] !== '철회'; })
    .map(function (r) {
      return {
        id: r[ix('접수번호')],
        date: String(r[ix('접수일시')]).slice(0, 10),
        round: r[ix('차수')],
        track: r[ix('투고분야')],
        title: CONFIG.SHOW_TITLES_PUBLICLY ? r[ix('논문제목(국문)')] : null,
        name: mask_(r[ix('투고자')]),
        files: String(r[ix('파일')] || '').split('\n').filter(Boolean).length
      };
    }).reverse();
  var out = { ok: true, board: boardId, count: rows.length, rows: rows, status: boardStatus_(boardId) };
  cache.put('list_' + boardId, JSON.stringify(out), 60);
  return out;
}

function boardStatus_(boardId) {
  var board = BOARDS[boardId];
  if (!board) return { ok: false, error: 'board' };
  var r = currentRound_(board, new Date());
  return { ok: true, open: !!r, round: r ? r.label : null, closes: r ? r.closes : null };
}

// ── One-time setup (run from the editor) ──────────────────────────

/**
 * Run once from the Apps Script editor (▶ Run → setup). Creates:
 *   My Drive / KSPAI 논문투고 /
 *     ├─ KSPAI 논문투고 접수대장 (Google Sheet, one tab per board)
 *     ├─ 창간호 /
 *     └─ 2027 동계학술대회 /
 * Safe to run again: it only creates what is missing (e.g. a new board).
 */
function setup() {
  var props = PropertiesService.getScriptProperties();
  var ctx = JSON.parse(props.getProperty('CTX') || '{}');
  ctx.folders = ctx.folders || {};

  var root = ctx.rootId ? DriveApp.getFolderById(ctx.rootId) : DriveApp.createFolder(CONFIG.ROOT_FOLDER_NAME);
  ctx.rootId = root.getId();

  var ss;
  if (ctx.sheetId) {
    ss = SpreadsheetApp.openById(ctx.sheetId);
  } else {
    ss = SpreadsheetApp.create(CONFIG.SPREADSHEET_NAME);
    DriveApp.getFileById(ss.getId()).moveTo(root);
    ctx.sheetId = ss.getId();
  }
  ss.setSpreadsheetTimeZone(CONFIG.TZ);

  Object.keys(BOARDS).forEach(function (id) {
    var board = BOARDS[id];
    if (!ctx.folders[id]) ctx.folders[id] = root.createFolder(board.name).getId();
    var sh = ss.getSheetByName(board.name) || ss.insertSheet(board.name);
    if (sh.getLastRow() === 0) {
      sh.appendRow(COLUMNS.map(function (c) { return c.col; }));
      sh.setFrozenRows(1);
      sh.getRange(1, 1, 1, COLUMNS.length).setFontWeight('bold').setBackground('#e8f3fe');
      var statusCol = COLUMNS.map(function (c) { return c.col; }).indexOf('처리상태') + 1;
      sh.getRange(2, statusCol, 999, 1).setDataValidation(
        SpreadsheetApp.newDataValidation().requireValueInList(STATUS_VALUES, true).build());
    }
  });
  var blank = ss.getSheetByName('Sheet1') || ss.getSheetByName('시트1');
  if (blank && ss.getSheets().length > 1) ss.deleteSheet(blank);

  props.setProperty('CTX', JSON.stringify(ctx));
  console.log('Folder: ' + root.getUrl());
  console.log('Sheet:  ' + ss.getUrl());
  console.log('Next: set Script Property NOTIFY_EMAILS, then Deploy → New deployment → Web app.');
}

/** Sends one test email to NOTIFY_EMAILS so you can confirm mail works. */
function testEmail() {
  var to = PropertiesService.getScriptProperties().getProperty('NOTIFY_EMAILS');
  if (!to) throw new Error('Set Script Property NOTIFY_EMAILS first.');
  MailApp.sendEmail(to, '[KSPAI 논문투고] 메일 발송 테스트', '논문투고 시스템 메일 발송이 정상 작동합니다. 남은 일일 발송량: ' + MailApp.getRemainingDailyQuota());
}

// ── Helpers ───────────────────────────────────────────────────────

function ctx_() {
  var ctx = JSON.parse(PropertiesService.getScriptProperties().getProperty('CTX') || 'null');
  if (!ctx || !ctx.sheetId) throw new Error('Run setup() first.');
  return ctx;
}

function currentRound_(board, now) {
  if (now < new Date(board.opens)) return null;
  for (var i = 0; i < board.rounds.length; i++) {
    if (now <= new Date(board.rounds[i].closes)) return board.rounds[i];
  }
  return null;
}

function nextId_(boardId, prefix) {
  var lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    var props = PropertiesService.getScriptProperties();
    var n = Number(props.getProperty('SEQ_' + boardId) || 0) + 1;
    props.setProperty('SEQ_' + boardId, String(n));
    return prefix + '-' + ('00' + n).slice(-3);
  } finally {
    lock.releaseLock();
  }
}

function rateOk_(email) {
  var cache = CacheService.getScriptCache();
  var key = 'rl_' + Utilities.base64EncodeWebSafe(email).slice(0, 200);
  var n = Number(cache.get(key) || 0);
  if (n >= CONFIG.RATE_LIMIT_PER_HOUR) return false;
  cache.put(key, String(n + 1), 3600);
  return true;
}

function clean_(v, max) {
  return String(v == null ? '' : v).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, max);
}

// Stop spreadsheet formula injection (=, +, -, @ at the start of a cell).
function cell_(v) {
  v = v == null ? '' : String(v);
  return /^[=+\-@]/.test(v) ? "'" + v : v;
}

function safeName_(n) {
  n = String(n || 'file').replace(/[\\\/:*?"<>|\u0000-\u001F]/g, '_').trim();
  return n.slice(-120) || 'file';
}

function mime_(name) {
  var ext = (name.split('.').pop() || '').toLowerCase();
  return {
    pdf: 'application/pdf', hwp: 'application/x-hwp', hwpx: 'application/hwp+zip',
    doc: 'application/msword', docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ppt: 'application/vnd.ms-powerpoint', pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png', zip: 'application/zip'
  }[ext] || 'application/octet-stream';
}

function mask_(name) {
  var s = String(name || '').trim();
  if (s.length <= 1) return s;
  if (s.length === 2) return s[0] + '*';
  return s[0] + new Array(s.length - 1).join('*') + s[s.length - 1];
}

function fmt_(d) { return Utilities.formatDate(d, CONFIG.TZ, 'yyyy-MM-dd HH:mm:ss'); }

function esc_(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, function (ch) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch];
  });
}

function tr_(k, v, raw) {
  return '<tr><td style="padding:4px 12px 4px 0;color:#5a6e82;vertical-align:top">' + esc_(k) +
    '</td><td style="padding:4px 0">' + (raw ? v : esc_(v)) + '</td></tr>';  // raw: caller already escaped
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
