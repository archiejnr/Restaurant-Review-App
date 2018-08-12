var cacheName="v1";
var cachedItems=[
'./',
  '/index.html',
  '/css/styles.css',
  '/js/main.js',
  '/js/restaurant_info.js',
  '/img/',
  '/img/1.jpg',
  '/img/2.jpg',
  '/img/3.jpg',
  '/img/4.jpg',
  '/img/5.jpg',
  '/img/6.jpg',
  '/img/7.jpg',
  '/img/8.jpg',
  '/img/9.jpg',
  '/img/10.jpg',
  'https://api.mapbox.com/mapbox-gl-js/v0.47.0/mapbox-gl.css',
  "https://unpkg.com/leaflet@1.3.1/dist/leaflet.css",
  './data/restaurants.json',
  'http://localhost:8000/img/1.jpg'

];



self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('caching resources');
      return cache.addAll(cachedItems);
    }).catch(function(){
      console.log('couldnt cache resources')
    })
  );
});

self.addEventListener('activate',function(e){
  console.log("[serviceWorker] activated");
});
//to keep a constant update on our cache incase of updates


self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(resp) {
      return resp || fetch(event.request).then(function(response) {
        return caches.open('v1').then(function(cache) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});
