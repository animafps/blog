const CACHE = "pwabuilder-offline";

self.addEventListener("install", function (event) {
  console.log("Install Event processing");

  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      console.log("Cached offline page during install");

      return cache.addAll([
        "/",
        "/index.html",
        "/assets/css/style.css",
        "/assets/js/main.js",
        "/assets/img/avatar.jpg",
        "/assets/img/icon.png",
      ]);
    })
  );
});

self.addEventListener("fetch", function (event) {
  const request = event.request;
  const url = new URL(event.request.url);

  // Don't cache anything that is not on this origin.
  if (url.origin !== location.origin) return;

  event.respondWith(
    caches.open(CACHE).then((cache) => {
      return cache.match(request).then((response) => {
        var fetchPromise = fetch(request).then((networkResponse) => {
          cache.put(request, networkResponse.clone());
          return networkResponse;
        });
        // We need to ensure that the event doesn't complete until we
        // know we have fetched the data
        event.waitUntil(fetchPromise);

        // Return the response from cache or wait for network.
        return response || fetchPromise;
      });
    })
  );
});
