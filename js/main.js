/* =====================================================================
   RABET — رابط  ·  main.js
   Behaviour: language switching (5 languages), the hero "unseen bridge"
   canvas, the how-we-work toggle, the contact email composer, the
   custom cursor, magnetic buttons and scroll reveals.
   ===================================================================== */
(function () {
  "use strict";

  var T = window.RABET_I18N;
  var LANGS = window.RABET_LANGS;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var isTouch = window.matchMedia("(hover: none)").matches;
  if (isTouch) document.body.classList.add("touch");

  function t(key, lang) {
    return (T[key] && T[key][lang] != null) ? T[key][lang] : (T[key] ? T[key].en : key);
  }

  /* ---------------- preloader ---------------- */
  window.addEventListener("load", function () {
    setTimeout(function () { document.getElementById("loader").classList.add("done"); }, 1500);
  });
  setTimeout(function () { var l = document.getElementById("loader"); if (l) l.classList.add("done"); }, 4000);

  /* ---------------- custom cursor ---------------- */
  if (!isTouch) {
    var dot = document.querySelector(".cursor-dot"), ring = document.querySelector(".cursor-ring");
    var rx = 0, ry = 0, tx = 0, ty = 0;
    window.addEventListener("mousemove", function (e) {
      tx = e.clientX; ty = e.clientY;
      dot.style.transform = "translate(" + tx + "px," + ty + "px) translate(-50%,-50%)";
    });
    (function loop() {
      rx += (tx - rx) * 0.18; ry += (ty - ry) * 0.18;
      ring.style.transform = "translate(" + rx + "px," + ry + "px) translate(-50%,-50%)";
      requestAnimationFrame(loop);
    })();
    document.querySelectorAll("a,button,.svc,.chip,[tabindex]").forEach(function (el) {
      el.addEventListener("mouseenter", function () { ring.classList.add("grow"); });
      el.addEventListener("mouseleave", function () { ring.classList.remove("grow"); });
    });
  }

  /* ---------------- header scroll state ---------------- */
  var head = document.getElementById("head");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 40) head.classList.add("scrolled"); else head.classList.remove("scrolled");
  }, { passive: true });

  /* ---------------- mobile menu ---------------- */
  var burger = document.getElementById("burger"), nav = document.getElementById("nav");
  burger.addEventListener("click", function () {
    nav.classList.toggle("open"); burger.classList.toggle("open");
  });
  nav.querySelectorAll(".nav-links a").forEach(function (a) {
    a.addEventListener("click", function () { nav.classList.remove("open"); burger.classList.remove("open"); });
  });

  /* ---------------- language ---------------- */
  var currentLang = "en";
  var langLabel = document.getElementById("langLabel");
  var langDD = document.getElementById("langDD");
  var langBtn = langDD.querySelector(".lang-current");
  var langItems = langDD.querySelectorAll(".lang-menu li");

  function applyLang(lang) {
    var meta = LANGS.filter(function (l) { return l.code === lang; })[0];
    if (!meta) { lang = "en"; meta = LANGS[1]; }
    currentLang = lang;

    document.documentElement.lang = lang;
    document.documentElement.dir = meta.rtl ? "rtl" : "ltr";
    document.body.classList.toggle("rtl", meta.rtl);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = t(el.getAttribute("data-i18n"), lang);
      if (v == null) return;
      // strings with markup or HTML entities need innerHTML; plain text
      // uses textContent (safe across browsers, incl. SVG <text>)
      if (/[<&]/.test(v)) el.innerHTML = v; else el.textContent = v;
    });

    if (langLabel) langLabel.textContent = meta.short;
    langItems.forEach(function (li) { li.classList.toggle("on", li.getAttribute("data-lang") === lang); });

    updateFlowCap();
    try { localStorage.setItem("rabet_lang", lang); } catch (e) {}
  }

  // open / close dropdown
  langBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    var open = langDD.classList.toggle("open");
    langBtn.setAttribute("aria-expanded", open ? "true" : "false");
  });
  langItems.forEach(function (li) {
    li.addEventListener("click", function () {
      applyLang(li.getAttribute("data-lang"));
      langDD.classList.remove("open");
      langBtn.setAttribute("aria-expanded", "false");
    });
  });
  document.addEventListener("click", function () { langDD.classList.remove("open"); langBtn.setAttribute("aria-expanded", "false"); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") { langDD.classList.remove("open"); } });

  // initial language: saved → browser → English
  (function initLang() {
    var saved = null;
    try { saved = localStorage.getItem("rabet_lang"); } catch (e) {}
    var supported = LANGS.map(function (l) { return l.code; });
    var guess = (navigator.language || "en").slice(0, 2).toLowerCase();
    var start = saved && supported.indexOf(saved) > -1 ? saved
              : supported.indexOf(guess) > -1 ? guess : "en";
    applyLang(start);
  })();

  /* ---------------- scroll reveal ---------------- */
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.18, rootMargin: "0px 0px -8% 0px" });
  document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });

  /* ---------------- magnetic buttons ---------------- */
  if (!isTouch && !reduce) {
    document.querySelectorAll(".btn-solid,.btn-ghost,.btn-line").forEach(function (btn) {
      btn.addEventListener("mousemove", function (e) {
        var r = btn.getBoundingClientRect();
        var mx = e.clientX - (r.left + r.width / 2), my = e.clientY - (r.top + r.height / 2);
        btn.style.transform = "translate(" + (mx * 0.25) + "px," + (my * 0.35) + "px)";
      });
      btn.addEventListener("mouseleave", function () { btn.style.transform = ""; });
    });
  }

  /* ---------------- hero logo parallax ---------------- */
  if (!isTouch && !reduce) {
    var logo = document.getElementById("heroMark");
    var hero = document.querySelector(".hero");
    hero.addEventListener("mousemove", function (e) {
      var r = hero.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
      logo.style.transform = "rotateY(" + (px * 12) + "deg) rotateX(" + (-py * 12) + "deg) translateZ(0)";
    });
    hero.addEventListener("mouseleave", function () { logo.style.transform = ""; });
  }

  /* ---------------- HERO: the unseen bridge ---------------- */
  var cv = document.getElementById("weave"), cx = cv.getContext("2d");
  var W, H, DPR, nodes = [], pointer = { x: -9999, y: -9999, tx: -9999, ty: -9999, inside: false }, motion = 0;
  var firstMove = false, t0 = performance.now();
  function size() {
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    W = cv.clientWidth; H = cv.clientHeight;
    cv.width = W * DPR; cv.height = H * DPR; cx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }
  function build() {
    size();
    var count = Math.round(Math.min(78, (W * H) / 15500));
    if (isTouch) count = Math.round(count * 0.6);
    nodes = [];
    for (var i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.16, vy: (Math.random() - 0.5) * 0.16,
        r: Math.random() * 1.3 + 0.6, anchor: Math.random() < 0.13
      });
    }
  }
  var LINK = 145, REVEAL = 180;
  function step(now) {
    cx.clearRect(0, 0, W, H);
    if (!firstMove) {
      var e = (now - t0) / 1000;
      if (e < 4.6) {
        pointer.tx = W * (0.5 + 0.34 * Math.cos(e * 0.9));
        pointer.ty = H * (0.46 + 0.26 * Math.sin(e * 1.35));
        pointer.inside = true; motion = Math.max(motion, 0.8);
      } else { pointer.inside = false; }
    }
    pointer.x += (pointer.tx - pointer.x) * 0.16;
    pointer.y += (pointer.ty - pointer.y) * 0.16;
    motion *= 0.94;
    var power = Math.max(pointer.inside ? 0.5 : 0, motion);

    var i, j;
    for (i = 0; i < nodes.length; i++) {
      var n = nodes[i]; n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > W) n.vx *= -1; if (n.y < 0 || n.y > H) n.vy *= -1;
    }
    for (i = 0; i < nodes.length; i++) {
      for (j = i + 1; j < nodes.length; j++) {
        var a = nodes[i], b = nodes[j];
        var dx = a.x - b.x, dy = a.y - b.y, d = Math.sqrt(dx * dx + dy * dy);
        if (d < LINK) {
          var mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
          var md = Math.sqrt((mx - pointer.x) * (mx - pointer.x) + (my - pointer.y) * (my - pointer.y));
          var rev = power > 0 ? Math.max(0, 1 - md / REVEAL) * power : 0;
          var prox = 1 - d / LINK;
          var alpha = prox * 0.045 + rev * prox * 0.95;
          if (alpha > 0.012) {
            cx.strokeStyle = "rgba(15,181,161," + alpha.toFixed(3) + ")";
            cx.lineWidth = rev > 0.25 ? 1.1 : 0.55;
            cx.beginPath(); cx.moveTo(a.x, a.y); cx.lineTo(b.x, b.y); cx.stroke();
          }
        }
      }
    }
    for (i = 0; i < nodes.length; i++) {
      var p = nodes[i];
      var pd = Math.sqrt((p.x - pointer.x) * (p.x - pointer.x) + (p.y - pointer.y) * (p.y - pointer.y));
      var near = power > 0 ? Math.max(0, 1 - pd / REVEAL) * power : 0;
      var al = 0.16 + near * 0.8 + (p.anchor ? 0.16 : 0);
      cx.fillStyle = "rgba(191,237,229," + Math.min(al, 1).toFixed(3) + ")";
      cx.beginPath(); cx.arc(p.x, p.y, p.r + near * 1.5, 0, 6.2832); cx.fill();
      if (near > 0.3) {
        cx.fillStyle = "rgba(15,181,161," + (near * 0.1).toFixed(3) + ")";
        cx.beginPath(); cx.arc(p.x, p.y, (p.r + near * 1.5) * 4.2, 0, 6.2832); cx.fill();
      }
    }
    requestAnimationFrame(step);
  }
  function pointerMove(x, y) { firstMove = true; pointer.tx = x; pointer.ty = y; pointer.inside = true; motion = 1; }
  cv.addEventListener("mousemove", function (e) { var r = cv.getBoundingClientRect(); pointerMove(e.clientX - r.left, e.clientY - r.top); });
  cv.addEventListener("mouseleave", function () { pointer.inside = false; });
  cv.addEventListener("touchmove", function (e) { var r = cv.getBoundingClientRect(); var tt = e.touches[0]; pointerMove(tt.clientX - r.left, tt.clientY - r.top); }, { passive: true });
  cv.addEventListener("touchend", function () { pointer.inside = false; });

  if (reduce) {
    build(); cx.clearRect(0, 0, W, H);
    nodes.forEach(function (p) { cx.fillStyle = "rgba(191,237,229,0.22)"; cx.beginPath(); cx.arc(p.x, p.y, p.r, 0, 6.28); cx.fill(); });
  } else { build(); requestAnimationFrame(step); }
  var rt; window.addEventListener("resize", function () { clearTimeout(rt); rt = setTimeout(build, 200); });

  /* ---------------- HOW WE WORK: flow toggle ---------------- */
  var flowBtns = document.querySelectorAll(".flow-toggle button");
  var gO = document.getElementById("g-others"), gR = document.getElementById("g-rabet");
  var directLine = document.getElementById("directLine"), pulse = document.getElementById("pulse");
  var capEl = document.querySelector(".flow .cap");
  var flowState = "rabet", pp = 0;

  function pulseLoop() {
    if (flowState === "rabet" && !reduce) {
      pp = (pp + 0.006) % 1;
      var x = 52 + (468 - 52) * pp;
      pulse.setAttribute("cx", x); pulse.setAttribute("cy", 120);
      pulse.setAttribute("opacity", (x > 234 && x < 286) ? 0 : 0.9);
    } else { pulse.setAttribute("opacity", 0); }
    requestAnimationFrame(pulseLoop);
  }
  function drawDirect() {
    var len = directLine.getTotalLength ? directLine.getTotalLength() : 500;
    directLine.style.transition = "none";
    directLine.style.strokeDasharray = len; directLine.style.strokeDashoffset = len;
    void directLine.getBoundingClientRect();
    directLine.style.transition = "stroke-dashoffset 1s ease";
    directLine.style.strokeDashoffset = 0;
  }
  function updateFlowCap() {
    if (!capEl) return;
    var key = flowState === "rabet" ? "work.cap.rabet" : "work.cap.others";
    capEl.style.opacity = 0;
    setTimeout(function () { capEl.textContent = t(key, currentLang); capEl.style.opacity = 1; }, 180);
  }
  window.updateFlowCap = updateFlowCap;
  function setFlow(s) {
    flowState = s;
    flowBtns.forEach(function (b) { b.classList.toggle("on", b.getAttribute("data-flow") === s); });
    if (s === "rabet") { gO.style.opacity = 0; gR.style.opacity = 1; drawDirect(); }
    else { gR.style.opacity = 0; gO.style.opacity = 1; }
    updateFlowCap();
  }
  flowBtns.forEach(function (b) { b.addEventListener("click", function () { setFlow(b.getAttribute("data-flow")); }); });
  var flowIO = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { if (flowState === "rabet") drawDirect(); flowIO.unobserve(e.target); } });
  }, { threshold: 0.4 });
  flowIO.observe(document.querySelector(".flow"));
  pulseLoop();

  /* ---------------- CONTACT: chips + compose + copy ---------------- */
  var selected = []; // keys: website / social / ads / branding
  document.querySelectorAll(".chip").forEach(function (chip) {
    chip.addEventListener("click", function () {
      var key = chip.getAttribute("data-need");
      chip.classList.toggle("sel");
      if (chip.classList.contains("sel")) selected.push(key);
      else selected = selected.filter(function (x) { return x !== key; });
    });
  });
  function buildMailto() {
    var lang = currentLang;
    var subj = t("mail.subject", lang);
    var body;
    if (selected.length) {
      var phrases = selected.map(function (k) { return t("mail.need." + k, lang); });
      var list = phrases.length === 1 ? phrases[0]
        : phrases.slice(0, -1).join("، ") + " " + t("mail.and", lang) + " " + phrases[phrases.length - 1];
      body = t("mail.intro_with", lang).replace("{needs}", list);
    } else {
      body = t("mail.intro_plain", lang);
    }
    return "mailto:rabet.sy@outlook.com?subject=" + encodeURIComponent(subj) + "&body=" + encodeURIComponent(body);
  }
  document.getElementById("sendBtn").addEventListener("click", function () { window.location.href = buildMailto(); });

  var note = document.getElementById("copiedNote");
  document.querySelector(".mailbox .copy").addEventListener("click", function () {
    var email = "rabet.sy@outlook.com";
    function ok() { note.classList.add("show"); setTimeout(function () { note.classList.remove("show"); }, 1900); }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(ok, function () { fallback(email, ok); });
    } else { fallback(email, ok); }
  });
  function fallback(text, cb) {
    var ta = document.createElement("textarea"); ta.value = text;
    ta.style.position = "fixed"; ta.style.opacity = 0;
    document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); cb && cb(); } catch (e) {}
    document.body.removeChild(ta);
  }
})();
