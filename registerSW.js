if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/focus-pwa/sw.js', { scope: '/focus-pwa/' })})}
