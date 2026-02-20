/* ============================================================
   main.js — 全站共用腳本
   ============================================================ */

// ── 自動填入年份 ──
(function setYear() {
  var el = document.getElementById('y');
  if (el) el.textContent = new Date().getFullYear();
})();

// ── 透過 GitHub API 獲取倉庫最後更新時間 ──
(function fetchLastUpdate() {
  var el = document.getElementById('lastUpdateDate');
  if (!el) return;

  fetch('https://api.github.com/repos/kevinwei1029/kevinwei1029.github.io')
    .then(function (response) { return response.json(); })
    .then(function (data) {
      var d = new Date(data.updated_at);
      el.textContent =
        d.getFullYear() + '.' +
        String(d.getMonth() + 1).padStart(2, '0') + '.' +
        String(d.getDate()).padStart(2, '0');
    })
    .catch(function () {
      el.textContent = '2025.08.20';
    });
})();
