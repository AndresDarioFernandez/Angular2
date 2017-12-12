
const VERSION = 'v13';


log('Installing Service Worker');


self.addEventListener('install', event => event.waitUntil(installServiceWorker()));

self.addEventListener('fetch', event => event.respondWith(cacheThenNetwork(event)));

async function cacheThenNetwork(event){
    const cache = await caches.open(getCacheName());

    const cachedResponse = cache.match(event.request);

    if(cachedResponse){
         log('From cache: '+ event.request.url);
         return cachedResponse;
    }

    const networkResponse = await fetch(event.request);
    log('From network: '+ event.request.url);

    return networkResponse;
}
/*

    These are the files that we want to download and install on the background

        '/',
        '/polyfills.bundle.js',
        '/inline.bundle.js',
        '/styles.bundle.js',
        '/vendor.bundle.js',
        '/main.bundle.js',
        '/assets/bundle.css',
        '/assets/angular-pwa-course.png',
        '/assets/main-page-logo-small-hat.png'
*/

async function installServiceWorker() {

    log("Service Worker installation started ");

    const cache = await caches.open(getCacheName());

    return cache.addAll([
        '/',
        '/polyfills.bundle.js',
        '/inline.bundle.js',
        '/styles.bundle.js',
        '/vendor.bundle.js',
        '/main.bundle.js',
        '/assets/bundle.css',
        '/assets/angular-pwa-course.png',
        '/assets/main-page-logo-small-hat.png'
    ]);
}

self.addEventListener('activate', () => {
    activateSW();

});

async function activateSW(){

    log('Service Worker activated');
    const cacheKeys = await caches.keys();
    
        cacheKeys.forEach(cacheKey=> {
            if(cacheKey !== getCacheName()){
                caches.delete(cacheKey);
            }
        });
}

function getCacheName()
{
    return "app-cache-"+ VERSION;
}







function log(message, ...data) {
    if (data.length > 0) {
        console.log(VERSION, message, data);
    }
    else {
        console.log(VERSION, message);
    }
}

















