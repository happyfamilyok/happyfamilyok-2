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
      meta: [
        { 
          name: 'Content-Security-Policy', 
          content: `
            default-src 'self' https:;
            connect-src 'self' http: https: ws: wss: https://www.googletagmanager.com https://www.google-analytics.com https://static.hotjar.com https://in.hotjar.com https://script.hotjar.com wss://ws.hotjar.com;
            script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.apple-mapkit.com https://cdn.featurable.com https://www.googletagmanager.com https://static.hotjar.com https://script.hotjar.com https://googleads.g.doubleclick.net;
            style-src 'self' 'unsafe-inline' https: https://static.hotjar.com;
            img-src 'self' data: blob: https: http: https://www.google-analytics.com https://www.googletagmanager.com https://static.hotjar.com https://in.hotjar.com;
            font-src 'self' https: data: https://static.hotjar.com;
            frame-src https://static.hotjar.com https://www.googletagmanager.com;
            worker-src 'self' blob:;
          `
        },
        { 
          'http-equiv': 'Content-Security-Policy', 
          content: `
            default-src 'self' https:;
            connect-src 'self' http: https: ws: wss: https://www.googletagmanager.com https://www.google-analytics.com https://static.hotjar.com https://in.hotjar.com https://script.hotjar.com wss://ws.hotjar.com;
            script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.apple-mapkit.com https://cdn.featurable.com https://www.googletagmanager.com https://static.hotjar.com https://script.hotjar.com https://googleads.g.doubleclick.net;
            style-src 'self' 'unsafe-inline' https: https://static.hotjar.com;
            img-src 'self' data: blob: https: http: https://www.google-analytics.com https://www.googletagmanager.com https://static.hotjar.com https://in.hotjar.com;
            font-src 'self' https: data: https://static.hotjar.com;
            frame-src https://static.hotjar.com https://www.googletagmanager.com;
            worker-src 'self' blob:;
          `
        },
        { name: 'referrer', content: 'no-referrer-when-downgrade' }
      ],
      script: [
        // --- Combined gtag.js for GA + Ads ---
        {
          async: true,
          src: 'https://www.googletagmanager.com/gtag/js?id=G-PSKN1R7CLW'
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            // Google Analytics
            gtag('config', 'G-PSKN1R7CLW', {
              page_title: 'Happy Family - SiteV2',
              custom_map: {'dimension1': 'stream_name'}
            });
            // Google Ads
            gtag('config', 'AW-606049347');
          `,
          type: 'text/javascript'
        },
        // Hotjar
        {
          innerHTML: `
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:4999438,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `,
          type: 'text/javascript'
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
  runtimeConfig: {
    public: {
      orderEmbed: process.env.ORDER_EMBED_ENABLED !== '0',
      orderEmbedOrigin: (
        process.env.NUXT_PUBLIC_ORDER_EMBED_ORIGIN ||
        'https://107-175-194-17.nip.io'
      ).replace(/\/$/, ''),
      orderStoreUrl:
        process.env.ORDER_STORE_URL ||
        'https://www.doordash.com/store/happy-family-chinese-restaurant-norman-36737771/82709946/',
    },
  },
nitro: {
  experimental: {
    websocket: true,
  },
  externals: {
    external: ['playwright', 'playwright-core'],
  },
  routeRules: {
    '/**': {
      headers: {
        'Content-Security-Policy': "default-src 'self' https:; connect-src 'self' http: https: ws: wss: https://www.googletagmanager.com https://www.google-analytics.com https://static.hotjar.com https://in.hotjar.com https://script.hotjar.com wss://ws.hotjar.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.apple-mapkit.com https://cdn.featurable.com https://www.googletagmanager.com https://static.hotjar.com https://script.hotjar.com https://googleads.g.doubleclick.net; style-src 'self' 'unsafe-inline' https: https://static.hotjar.com; img-src 'self' data: blob: https: http: https://www.google-analytics.com https://www.googletagmanager.com https://static.hotjar.com https://in.hotjar.com; font-src 'self' https: data: https://static.hotjar.com; frame-src https://static.hotjar.com https://www.googletagmanager.com; worker-src 'self' blob:;",
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'X-XSS-Protection': '1; mode=block'
      }
    }
  }
},
  vite: {
    plugins: [tailwindcss()],
  },
});
