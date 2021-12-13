workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.routing.setDefaultHandler(new workbox.strategies.NetworkOnly());

workbox.routing.registerRoute(
  /service-register.js/,
  new workbox.strategies.NetworkOnly()
);

workbox.recipes.pageCache();
workbox.recipes.staticResourceCache();
workbox.recipes.imageCache();
