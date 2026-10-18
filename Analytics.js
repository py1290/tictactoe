/* GoatCounter analytics (anonymous, no cookies).
   Only change the account name on the next line. */
var GC_ACCOUNT = "tictactoe";

(function () {
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://gc.zgo.at/count.js";
  s.setAttribute("data-goatcounter", "https://" + GC_ACCOUNT + ".goatcounter.com/count");
  document.head.appendChild(s);

  function ev(name, title) {
    var tries = 0;
    (function send() {
      if (window.goatcounter && window.goatcounter.count) {
        window.goatcounter.count({ path: name, title: title || name, event: true });
      } else if (tries++ < 20) {
        setTimeout(send, 500);
      }
    })();
  }

  try {
    var standalone =
      (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) ||
      window.navigator.standalone === true;
    if (standalone) ev("app-open", "Opened as installed app");
  } catch (e) {}

  window.addEventListener("appinstalled", function () {
    ev("app-installed", "App installed");
  });

  document.addEventListener("click", function (e) {
    var t = e.target && e.target.closest ? e.target.closest(".mode-card") : null;
    if (t) ev("game-started", "Game started");
  });
})();
