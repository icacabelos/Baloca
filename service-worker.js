const CACHE_NAME = 'baloca-cache-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/bar.html',
  '/pub.html',
  '/styles.css',
  '/icons/icon-192.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
