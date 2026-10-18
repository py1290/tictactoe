/* GoatCounter analytics (anonymous, no cookies).
   Sends hits straight to your GoatCounter account with an image beacon,
   so it does not need gc.zgo.at/count.js (which may be blocked). */
var GC_ACCOUNT = "tictactoe";

(function () {
  var base = "https://" + GC_ACCOUNT + ".goatcounter.com/count";

  function send(path, title, isEvent) {
    try {
      var q =
        "?p=" + encodeURIComponent(path) +
        "&t=" + encodeURIComponent(title || path) +
        "&r=" + encodeURIComponent(document.referrer || "") +
        "&s=" + [screen.width, screen.height, window.devicePixelRatio || 1].join(",") +
        (isEvent ? "&e=true" : "") +
        "&rnd=" + Math.random().toString(36).slice(2);
      new Image().src = base + q;
    } catch (e) {}
  }

  // page view
  send(location.pathname || "/", document.title, false);

  // opened as installed app?
  try {
    var standalone =
      (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) ||
      window.navigator.standalone === true;
    if (standalone) send("app-open", "Opened as installed app", true);
  } catch (e) {}

  // app installed
  window.addEventListener("appinstalled", function () {
    send("app-installed", "App installed", true);
  });

  // game started (mode cards)
  document.addEventListener("click", function (e) {
    var t = e.target && e.target.closest ? e.target.closest(".mode-card") : null;
    if (t) send("game-started", "Game started", true);
  });
})();
