import tailwindcss from "@tailwindcss/vite";

// Mixed Content Configuration:
// Allows HTTP requests to specific endpoint (107.175.194.17) while maintaining security

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      meta: [
        { 
          name: 'Content-Security-Policy', 
          content: "default-src 'self' https:; connect-src 'self' https: http://107.175.194.17; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https: http:; font-src 'self' https: data:;" 
        },
        { 
          'http-equiv': 'Content-Security-Policy', 
          content: "default-src 'self' https:; connect-src 'self' https: http://107.175.194.17; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https: http:; font-src 'self' https: data:;" 
        }
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
          'Content-Security-Policy': "default-src 'self' https:; connect-src 'self' https: http://107.175.194.17; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https: http:; font-src 'self' https: data:;",
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