/* NinjaHire vs Juicebox briefing: scroll-spy + comparison table filters.
   Vanilla, no dependencies, works from file://. */
(function () {
  'use strict';

  /* ---------- scroll-spy nav ---------- */
  function initSpy() {
    var links = Array.prototype.slice.call(
      document.querySelectorAll('.nav-links a[href^="#"]')
    );
    if (!links.length) return;

    var map = {};
    var sections = [];
    links.forEach(function (a) {
      var id = a.getAttribute('href').slice(1);
      var el = document.getElementById(id);
      if (el) {
        map[id] = a;
        sections.push(el);
      }
    });
    if (!sections.length) return;

    function setCurrent(id) {
      links.forEach(function (a) {
        if (a.getAttribute('href') === '#' + id) {
          a.setAttribute('aria-current', 'true');
        } else {
          a.removeAttribute('aria-current');
        }
      });
    }

    if (!('IntersectionObserver' in window)) {
      setCurrent(sections[0].id);
      return;
    }

    var visible = {};
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          visible[e.target.id] = e.isIntersecting ? e.intersectionRatio : 0;
        });
        var bestId = null;
        var best = -1;
        sections.forEach(function (s) {
          var v = visible[s.id] || 0;
          if (v > best) {
            best = v;
            bestId = s.id;
          }
        });
        // Nothing meaningfully in view: fall back to the last section above the fold.
        if (best <= 0) {
          var top = null;
          sections.forEach(function (s) {
            if (s.getBoundingClientRect().top <= 140) top = s.id;
          });
          bestId = top || sections[0].id;
        }
        if (bestId) setCurrent(bestId);
      },
      {
        rootMargin: '-120px 0px -55% 0px',
        threshold: [0, 0.15, 0.4, 0.75, 1]
      }
    );
    sections.forEach(function (s) {
      io.observe(s);
    });
  }

  /* ---------- comparison table filters ---------- */
  function initFilters() {
    var btns = Array.prototype.slice.call(document.querySelectorAll('.fbtn'));
    var table = document.getElementById('compare-table');
    var count = document.getElementById('filter-count');
    if (!btns.length || !table) return;

    var rows = Array.prototype.slice.call(table.tBodies[0].rows);

    function apply(filter) {
      var shown = 0;
      rows.forEach(function (r) {
        var win = r.getAttribute('data-win');
        var show = filter === 'all' || win === filter;
        r.classList.toggle('hidden', !show);
        if (show) shown++;
      });
      btns.forEach(function (b) {
        b.setAttribute(
          'aria-pressed',
          b.getAttribute('data-filter') === filter ? 'true' : 'false'
        );
      });
      if (count) {
        var label =
          filter === 'all'
            ? 'all dimensions'
            : filter === 'nh'
            ? 'NinjaHire wins'
            : filter === 'jb'
            ? 'Juicebox wins'
            : 'ties';
        count.textContent =
          'showing ' + shown + ' of ' + rows.length + ' · ' + label;
      }
    }

    btns.forEach(function (b) {
      b.addEventListener('click', function () {
        apply(b.getAttribute('data-filter'));
      });
    });

    apply('all');
  }

  function ready(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  ready(function () {
    initSpy();
    initFilters();
  });
})();
