/*
    sw.js
    Service Worker para Suporte Offline e Cache da Pitchutcha Docs
*/
const CACHE_NAME = 'pitchutcha-docs-v1';
const APP_SHELL_URLS = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    'https://cdn.jsdelivr.net/npm/marked/marked.min.js',
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
];
const CONTENT_URLS = [ /* Adicionar aqui os URLs dos seus artigos .md */ ];

// Evento de Instalação: Armazena o App Shell em cache
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('Cache aberto');
            return cache.addAll([...APP_SHELL_URLS, ...CONTENT_URLS]);
        })
    );
});

// Evento de Fetch: Serve a partir do cache quando possível
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            // Se encontrarmos no cache, retornamos. Senão, buscamos na rede.
            return response || fetch(event.request);
        })
    );
});
