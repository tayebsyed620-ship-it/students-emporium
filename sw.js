self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('emporium-store').then(cache => {
      return cache.addAll([
        'index.html',
        'home.html',
        'add.html',
        'sale.html',
        'report.html',
        'backup.html',
        'manifest.json'
      ]);
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
