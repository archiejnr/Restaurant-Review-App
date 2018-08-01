
self.addEventListener('install',function(e){
    console.log('the sw is installed');
})
self.addEventListener('activate',function(e){
  console.log("[serviceWorker] activated");
})
