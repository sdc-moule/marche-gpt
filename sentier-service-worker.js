/* Sentier — cache de l'interface PWA. Les fonds de carte restent disponibles
   selon les tuiles déjà chargées et les règles du navigateur. */
const CACHE_NAME = 'sentier-shell-v5';
const SHELL = [
  './marche-tracker.html',
  './sentier-manifest.webmanifest',
  './sentier-icon.svg',
  './sentier-icon-maskable.svg',
  './sentier-icon-192.png',
  './sentier-icon-512.png',
  './sentier-icon-maskable-512.png',
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css',
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js'
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await Promise.all(SHELL.map(async asset => {
      try {
        const response = await fetch(asset, { cache: 'no-cache' });
        if (response.ok) await cache.put(asset, response);
      } catch (_) { /* Un asset externe sera récupéré lors de la prochaine connexion. */ }
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    await Promise.all((await caches.keys()).filter(key => key.startsWith('sentier-') && key !== CACHE_NAME).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin && url.origin !== 'https://cdnjs.cloudflare.com') return;
  event.respondWith((async () => {
    const cached = await caches.match(event.request);
    if (cached) return cached;
    try {
      const response = await fetch(event.request);
      if (response.ok && (url.origin === self.location.origin || url.origin === 'https://cdnjs.cloudflare.com')) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
      }
      return response;
    } catch (_) {
      return cached || new Response('Hors connexion', { status: 503, statusText: 'Hors connexion' });
    }
  })());
});
