var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
    '/',
    '/static/js/bundle.js',
    '/static/js/main.chunk.js',
    '/static/js/0.chunk.js',
    '/static/js/1.chunk.js',
    '/index.html'
];

self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            }).catch((err) => 
            {
                console.log("Err", err);
            })
    );
});

self.addEventListener('fetch', function(event) {
    console.log('[ServiceWorker] Fetch', event.request.url);
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  });

 