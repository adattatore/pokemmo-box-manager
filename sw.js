// Questo script fa credere al telefono che l'app sia pronta per l'uso offline
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Installato');
});

self.addEventListener('fetch', (e) => {
    // Non fa nulla di speciale, lascia passare le richieste normalmente
});