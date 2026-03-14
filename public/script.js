if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/serviceWorker.js')
        .then(reg => {
            console.log('Service worker se ha instalado correctamente. Scope', reg.scope)
        }).catch(err => {
            console.log('Error al instalar el serviceWorker', err)
        })
} else {
    console.log('Este navegador no soporta este ServiceWorker')
}