// Minimal SW — just enables PWA installability, no caching that can break
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', e => e.respondWith(fetch(e.request)));
