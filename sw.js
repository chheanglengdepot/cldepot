const CACHE_NAME = 'chheangleng-pwa-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
];

// រក្សាទុកកូដសំខាន់ៗពេលដំឡើងដំបូង
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// ទាញយកទិន្នន័យ (បើគ្មានអ៊ីនធឺណិត វាទាញពី Cache មកបង្ហាញសិន)
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});