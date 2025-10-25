import tailwindcss from "@tailwindcss/vite";

// Mixed Content Configuration:
// Uses server-side proxy to avoid mixed content issues with HTTP endpoint

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
          content: "default-src 'self' https:; connect-src 'self' https: https://www.googletagmanager.com https://www.google-analytics.com https://static.hotjar.com https://in.hotjar.com https://script.hotjar.com wss://ws.hotjar.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.apple-mapkit.com https://www.googletagmanager.com https://static.hotjar.com https://script.hotjar.com; style-src 'self' 'unsafe-inline' https: https://static.hotjar.com; img-src 'self' data: https: http: https://www.google-analytics.com https://www.googletagmanager.com https://static.hotjar.com https://in.hotjar.com; font-src 'self' https: data: https://static.hotjar.com; frame-src https://static.hotjar.com;" 
        },
        { 
          'http-equiv': 'Content-Security-Policy', 
          content: "default-src 'self' https:; connect-src 'self' https: https://www.googletagmanager.com https://www.google-analytics.com https://static.hotjar.com https://in.hotjar.com https://script.hotjar.com wss://ws.hotjar.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.apple-mapkit.com https://www.googletagmanager.com https://static.hotjar.com https://script.hotjar.com; style-src 'self' 'unsafe-inline' https: https://static.hotjar.com; img-src 'self' data: https: http: https://www.google-analytics.com https://www.googletagmanager.com https://static.hotjar.com https://in.hotjar.com; font-src 'self' https: data: https://static.hotjar.com; frame-src https://static.hotjar.com;" 
        },
        { name: 'referrer', content: 'no-referrer-when-downgrade' }
      ],
      script: [
        //GOOGLE ANALYTICS MANAGER
        {
          async: true,
          src: 'https://www.googletagmanager.com/gtag/js?id=G-PSKN1R7CLW'
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PSKN1R7CLW', {
              page_title: 'Happy Family - SiteV2',
              custom_map: {
                'dimension1': 'stream_name'
              }
            });
          `,
          type: 'text/javascript'
        },
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
        },

        //GOOGLE ADS MANAGER
         {
          async: true,
          src: 'https://www.googletagmanager.com/gtag/js?id=AW-606049347'
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-606049347');
          `,
          type: 'text/javascript'
        },
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
        'Content-Security-Policy': `
          default-src 'self' https:;

          connect-src 'self' https: wss://ws.hotjar.com
            https://cdn.apple-mapkit.com
            https://www.googletagmanager.com
            https://www.google-analytics.com
            https://googleads.g.doubleclick.net
            https://*.doubleclick.net
            https://www.googleadservices.com
            https://tpc.googlesyndication.com
            https://www.gstatic.com
            https://static.hotjar.com
            https://in.hotjar.com
            https://script.hotjar.com;

          script-src 'self' 'unsafe-inline' 'unsafe-eval'
            https://cdn.apple-mapkit.com
            https://www.googletagmanager.com
            https://www.google-analytics.com
            https://googleads.g.doubleclick.net
            https://*.doubleclick.net
            https://www.googleadservices.com
            https://tpc.googlesyndication.com
            https://www.gstatic.com
            https://static.hotjar.com
            https://script.hotjar.com;

          style-src 'self' 'unsafe-inline' https:
            https://static.hotjar.com
            https://www.gstatic.com;

          img-src 'self' data: blob: https: http:
            https://cdn.apple-mapkit.com
            https://www.google-analytics.com
            https://www.googletagmanager.com
            https://googleads.g.doubleclick.net
            https://*.doubleclick.net
            https://www.googleadservices.com
            https://tpc.googlesyndication.com
            https://static.hotjar.com
            https://in.hotjar.com
            https://www.gstatic.com;

          font-src 'self' https: data:
            https://static.hotjar.com
            https://www.gstatic.com;

          frame-src 'self' blob:
            https://www.googletagmanager.com
            https://www.googletagmanager.com/static/service_worker/
            https://www.googleadservices.com
            https://googleads.g.doubleclick.net
            https://*.doubleclick.net
            https://tpc.googlesyndication.com
            https://cdn.apple-mapkit.com
            https://static.hotjar.com
            https://www.gstatic.com;

          worker-src 'self' blob: data:
            https://www.googletagmanager.com
            https://www.googletagmanager.com/static/service_worker/
            https://cdn.apple-mapkit.com;

          child-src 'self' blob:;
        `.replace(/\s+/g, ' ').trim(),
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