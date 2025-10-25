import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
    'animate.css/animate.min.css',
    '@fortawesome/fontawesome-free/css/all.min.css'
  ],
  app: {
    head: {
      title: 'Happy Family《家家樂》',
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/favicon.png' },
      ],
    }
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
