var cacheName="v1";
var cachedItems=[
  '/',
  '/index.html',
  '/css/styles.css',
  '/js/main.js',
  '/img',
  'img/1.jpg',
  '/img/2.jpg',
  '/img/3.jpg',
  '/img/4.jpg',
  '/img/5.jpg',
  '/img/6.jpg',
  '/img/7.jpg',
  '/img/8.jpg',
  '/img/9.jpg',
  '/img/10.jpg'
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
})

self.addEventListener('fetch', function(event) {
  event.respondWith(
      caches.match(event.request)
      )
});
