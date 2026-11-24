// ═══════════════════════════════════════════════════════════════
//  paper-board.js — 논문 모집 게시판 (paper submission boards)
//  Markup: _includes/paper-board.html · Config: _data/paper_boards.yml
//  Backend: scripts/submission-backend/Code.gs (Google Apps Script)
//
//  Posts JSON as text/plain so the browser sends a "simple" request
//  (no CORS preflight, which Apps Script cannot answer).
// ═══════════════════════════════════════════════════════════════
(function () {
  'use strict';

  var isEn = function () { return document.documentElement.getAttribute('lang') === 'en'; };
  var t = function (ko, en) { return isEn() ? en : ko; };

  var ERRORS = {
    closed:    ['접수 기간이 아닙니다.', 'Submissions are closed.'],
    missing:   ['필수 항목을 모두 입력해 주십시오.', 'Please fill in every required field.'],
    email:     ['이메일 주소를 확인해 주십시오.', 'Please check your email address.'],
    consent:   ['필수 동의 항목에 체크해 주십시오.', 'Please tick the required consent boxes.'],
    filetype:  ['허용되지 않는 파일 형식입니다.', 'That file type is not accepted.'],
    filesize:  ['파일 용량이 너무 큽니다.', 'A file is too large.'],
    totalsize: ['첨부 파일 합계 용량이 너무 큽니다.', 'The files are too large in total.'],
    rate:      ['짧은 시간에 너무 많이 제출하셨습니다. 1시간 후 다시 시도하거나 이메일로 문의해 주십시오.', 'Too many submissions in a short time. Try again in an hour or email us.'],
    server:    ['서버 오류가 발생했습니다. 잠시 후 다시 시도하거나 이메일로 보내 주십시오.', 'Server error. Please try again shortly or email your paper.'],
    network:   ['네트워크 오류로 제출하지 못했습니다. 연결을 확인하고 다시 시도해 주십시오.', 'Network error. Check your connection and try again.']
  };
  var err = function (code) { var e = ERRORS[code] || ERRORS.server; return t(e[0], e[1]); };

  function currentRound(rounds, opens, now) {
    if (opens && now < new Date(opens)) return { notYet: true };
    for (var i = 0; i < rounds.length; i++) {
      if (now <= new Date(rounds[i].closes)) return { round: rounds[i], index: i };
    }
    return null;
  }

  function renderStatus(root, rounds, opens) {
    var now = new Date();
    var cur = currentRound(rounds, opens, now);
    var state = root.querySelector('[data-pb-state]');
    var dday = root.querySelector('[data-pb-dday]');
    var open = !!(cur && cur.round);

    root.querySelectorAll('.pb-round').forEach(function (li, i) {
      li.classList.toggle('is-past', now > new Date(li.getAttribute('data-closes')));
      li.classList.toggle('is-current', !!(cur && cur.index === i));
    });

    state.classList.toggle('is-open', open);
    state.classList.toggle('is-closed', !open);
    if (open) {
      state.innerHTML = '<span data-lang="ko">접수 중</span><span data-lang="en">Open</span> · ' +
        '<span data-lang="ko">' + cur.round.label_ko + '</span><span data-lang="en">' + cur.round.label_en + '</span>';
      var days = Math.ceil((new Date(cur.round.closes) - now) / 86400000);
      dday.textContent = days <= 0 ? 'D-DAY' : 'D-' + days;
    } else if (cur && cur.notYet) {
      state.innerHTML = '<span data-lang="ko">접수 예정</span><span data-lang="en">Opening soon</span>';
      dday.textContent = '';
    } else {
      state.innerHTML = '<span data-lang="ko">접수 마감</span><span data-lang="en">Closed</span>';
      dday.textContent = '';
    }
    return open;
  }

  function readFile(file) {
    return new Promise(function (resolve, reject) {
      var r = new FileReader();
      r.onload = function () { resolve(String(r.result).split(',')[1] || ''); };
      r.onerror = function () { reject(r.error); };
      r.readAsDataURL(file);
    });
  }

  function setMessage(el, kind, html) {
    el.className = 'pb-message' + (kind ? ' is-' + kind : '');
    el.innerHTML = html;
  }

  function loadList(root, endpoint, board) {
    var tbody = root.querySelector('[data-pb-rows]');
    if (!tbody) return;
    var showRound = !!tbody.getAttribute('data-show-round');
    var cols = showRound ? 7 : 6;
    fetch(endpoint + '?action=list&board=' + encodeURIComponent(board))
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (!data.ok) throw new Error(data.error);
        var count = root.querySelector('[data-pb-count]');
        if (count) count.textContent = data.count;
        if (!data.rows.length) {
          tbody.innerHTML = '<tr><td colspan="' + cols + '"><span data-lang="ko">아직 접수된 논문이 없습니다.</span><span data-lang="en">No submissions yet.</span></td></tr>';
          return;
        }
        tbody.innerHTML = '';
        data.rows.forEach(function (r) {
          var tr = document.createElement('tr');
          var cells = [r.id, r.track, r.title || '🔒', r.name, r.date];
          if (showRound) cells.push(r.round);
          cells.push('📎 ' + r.files);
          cells.forEach(function (v, i) {
            var td = document.createElement('td');
            td.textContent = v == null ? '' : String(v);
            if (i === 0 || i === 4) td.className = 'mono';
            if (i === 2 && !r.title) td.title = t('비공개', 'Private');
            tr.appendChild(td);
          });
          tbody.appendChild(tr);
        });
      })
      .catch(function () {
        tbody.innerHTML = '<tr><td colspan="' + cols + '"><span data-lang="ko">접수 현황을 불러오지 못했습니다.</span><span data-lang="en">Could not load the list.</span></td></tr>';
      });
  }

  function init(root) {
    var endpoint = root.getAttribute('data-endpoint');
    var board = root.getAttribute('data-board');
    var kind = root.getAttribute('data-kind');
    var maxMb = Number(root.getAttribute('data-max-mb')) || 15;
    var maxTotalMb = Number(root.getAttribute('data-max-total-mb')) || 25;
    var opens = root.getAttribute('data-opens');
    var rounds = [];
    try { rounds = JSON.parse(root.getAttribute('data-rounds') || '[]'); } catch (e) { /* keep [] */ }

    var open = renderStatus(root, rounds, opens);
    var form = root.querySelector('[data-pb-form]');
    if (!form || !endpoint) return;

    var btn = form.querySelector('[data-pb-submit]');
    var msg = form.querySelector('[data-pb-message]');
    if (!open) {
      btn.disabled = true;
      setMessage(msg, 'error', err('closed'));
    }
    loadList(root, endpoint, board);

    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      if (btn.disabled) return;

      if (!form.checkValidity()) {
        form.reportValidity();
        setMessage(msg, 'error', err('missing'));
        return;
      }

      // Client-side size checks (the server checks again).
      var fileInputs = form.querySelectorAll('[data-pb-file]');
      var total = 0, tooBig = false;
      fileInputs.forEach(function (inp) {
        var f = inp.files && inp.files[0];
        if (!f) return;
        total += f.size;
        if (f.size > maxMb * 1048576) tooBig = true;
      });
      if (tooBig) { setMessage(msg, 'error', err('filesize') + ' (≤ ' + maxMb + ' MB)'); return; }
      if (total > maxTotalMb * 1048576) { setMessage(msg, 'error', err('totalsize') + ' (≤ ' + maxTotalMb + ' MB)'); return; }

      btn.disabled = true;
      setMessage(msg, 'busy', t('파일을 올리는 중입니다. 창을 닫지 마십시오…', 'Uploading. Please keep this page open…'));

      var fd = new FormData(form);
      var payload = {
        board: board,
        website: fd.get('website') || '',
        consents: {
          privacy: !!fd.get('consent_privacy'),
          ethics: !!fd.get('consent_ethics'),
          copyright: kind === 'journal' ? !!fd.get('consent_copyright') : true
        },
        files: []
      };
      ['title_ko', 'title_en', 'track', 'type', 'keywords', 'name', 'affiliation', 'position',
        'email', 'phone', 'student', 'authors', 'prev_id', 'memo'].forEach(function (k) {
        payload[k] = (fd.get(k) || '').toString().trim();
      });

      var reads = [];
      fileInputs.forEach(function (inp) {
        var f = inp.files && inp.files[0];
        if (!f) return;
        var key = inp.getAttribute('data-pb-file');
        reads.push(readFile(f).then(function (data) {
          payload.files.push({ key: key, name: f.name, type: f.type, data: data });
        }));
      });

      Promise.all(reads)
        .then(function () {
          return fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify(payload)
          });
        })
        .then(function (r) { return r.json(); })
        .then(function (res) {
          if (!res.ok) {
            btn.disabled = false;
            setMessage(msg, 'error', err(res.error));
            return;
          }
          form.reset();
          setMessage(msg, 'ok',
            t('접수되었습니다. 접수번호 ', 'Received. Your submission ID is ') +
            '<strong class="mono">' + res.id + '</strong>' +
            t(' — 확인 메일을 보냈습니다. 메일이 오지 않으면 스팸함을 확인해 주십시오.',
              ' — a confirmation email is on its way (check your spam folder).'));
          btn.disabled = false;
          loadList(root, endpoint, board);
        })
        .catch(function () {
          btn.disabled = false;
          setMessage(msg, 'error', err('network'));
        });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.paper-board').forEach(init);
  });
})();
