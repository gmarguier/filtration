/* Filtration service worker — offline after first visit.
   Same-origin: network-first (so updates to data.js/index.html land immediately).
   CDN assets (KaTeX, fonts): cache-first (versioned, immutable). */
var CACHE = "filtration-v1";

self.addEventListener("install", function (e) {
  self.skipWaiting();
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  var url = new URL(e.request.url);

  if (url.origin === location.origin) {
    // network-first
    e.respondWith(
      fetch(e.request).then(function (res) {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put(e.request, copy); });
        return res;
      }).catch(function () {
        return caches.match(e.request).then(function (m) {
          return m || caches.match("./index.html");
        });
      })
    );
  } else {
    // cache-first for CDN
    e.respondWith(
      caches.match(e.request).then(function (m) {
        if (m) return m;
        return fetch(e.request).then(function (res) {
          var copy = res.clone();
          caches.open(CACHE).then(function (c) { c.put(e.request, copy); });
          return res;
        });
      })
    );
  }
});
