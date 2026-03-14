const CACHE_STATIC_NAME = 'static-v1'

self.addEventListener('install', event => {
    console.log("Service Worker en proceso de instalacion")

    event.waitUntil(
        caches.open(CACHE_STATIC_NAME).then(cache => {
            return cache.addAll([
                './favicon.ico'
            ])
        }).then(() => {
            console.log('Instalacion completa')
            self.skipWaiting()
        })
    )
})

self.addEventListener('fetch', event => {
    // Ignorar requests que no sean GET
    if (event.request.method !== 'GET') return

    event.respondWith(
        caches.match(event.request).then(resp => {
            if (resp) return resp

            return fetch(event.request).then(newResp => {
                // Solo cachear respuestas válidas
                if (!newResp || newResp.status !== 200 || newResp.type === 'opaque') {
                    return newResp
                }

                const respToCache = newResp.clone()
                caches.open(CACHE_STATIC_NAME).then(cache => {
                    cache.put(event.request, respToCache)
                })
                return newResp
            }).catch(() => {
                return caches.match(event.request)
            })
        })
    )
})