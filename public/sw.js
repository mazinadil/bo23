const CACHE_NAME = 'box-entertainment-v12';
const ASSETS_TO_CACHE = [
  '/images/hero-poster.webp',
  '/images/og-image.jpg',
  '/assets/box-logo.webp',
];

// Install service worker and cache assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

// Activate and clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch strategy: Network-first for HTML, cache-first for assets
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') {
    return; // Let the browser handle non-GET requests
  }

  const url = new URL(req.url);
  const isDocument = req.destination === 'document' || req.mode === 'navigate';
  const isImage = req.destination === 'image' || /\.(jpg|jpeg|png|gif|webp)$/.test(url.pathname);

  // Network-first strategy for HTML documents to always get fresh content
  if (isDocument) {
    event.respondWith(
      fetch(new Request(req, { cache: 'reload' }))
        .catch(() => caches.match(req))
    );
    return;
  }

  // Network-first strategy for images to avoid stale caches
  if (isImage) {
    event.respondWith(
      fetch(new Request(req, { cache: 'reload' }))
        .then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
          }
          return response;
        })
        .catch(() => caches.match(req))
    );
    return;
  }

  // Cache-first for everything else, then network
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((response) => {
        if (!response || response.status !== 200) return response;
        const shouldCache = /\.(jpg|jpeg|png|gif|webp|woff|woff2|ttf)$/.test(url.pathname);
        if (shouldCache) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
        }
        return response;
      });
    })
  );
});
