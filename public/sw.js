// no-op service worker — silences GET /sw.js 404 (registered by browser extension or prior PWA code)
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
