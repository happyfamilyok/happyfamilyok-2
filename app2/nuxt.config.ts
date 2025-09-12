import tailwindcss from "@tailwindcss/vite";

// Mixed Content Configuration Options:
// 1. 'upgrade-insecure-requests' - Automatically upgrades HTTP to HTTPS (recommended)
// 2. For more permissive mixed content, replace the CSP with:
//    'default-src \'self\' https: http: data: blob: \'unsafe-inline\' \'unsafe-eval\''

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      meta: [
        { name: 'Content-Security-Policy', content: 'upgrade-insecure-requests' },
        { 'http-equiv': 'Content-Security-Policy', content: 'upgrade-insecure-requests' }
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/favicon.png' }
      ]
    }
  },
  nitro: {
    routeRules: {
      '/**': {
        headers: {
          'Content-Security-Policy': 'upgrade-insecure-requests',
          'X-Content-Type-Options': 'nosniff',
          'X-Frame-Options': 'DENY',
          'X-XSS-Protection': '1; mode=block'
        }
      }
    }
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});