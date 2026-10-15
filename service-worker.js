// کش ساده: بازی بعد از اولین بار بدون اینترنت هم باز می‌شه
const CACHE = "tictactoe-v1";
const FILES = [
  "./", "./index.html", "./style.css", "./neon-theme.css", "./script.js",
  "./about.html", "./privacy.html", "./manifest.json",
  "./icon-192.png", "./icon-512.png"
];

self.addEventListener("install", (e) => {
  // هر فایل جدا کش می‌شه تا اگه یکی نبود، بقیه خراب نشن
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => Promise.all(FILES.map((f) => c.add(f).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// اول اینترنت، اگه نبود از کش (تا آپدیت‌های سایت زود به کاربر برسه)
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const copy = res.clone();
        if (res.ok && new URL(e.request.url).origin === location.origin) {
          caches.open(CACHE).then((c) => c.put(e.request, copy));
        }
        return res;
      })
      .catch(() => caches.match(e.request).then((r) => r || caches.match("./index.html")))
  );
});
