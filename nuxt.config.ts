// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    apiUrl: process.env.NUXT_API_URL,
    apiUrlGraphql: process.env.NUXT_API_URL_GRAPHQL,
    public: {
      apiYandexCardKey: process.env.NUXT_PUBLIC_API_YANDEX_CARD_KEY,
    },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
    },
  },

  css: ['assets/css/index.css'],

  router: {
    options: {
      linkActiveClass: 'active',
      linkExactActiveClass: 'active',
    },
  },

  routeRules: {
    '/catalog': { redirect: '/catalog/serebro' },
  },

  modules: ['@nuxt/image', 'nuxt-viewport', 'nuxt-mail'],

  experimental: {
    typedPages: true,
  },

  nitro: {
    compressPublicAssets: true,
    minify: true,
  },

  // Настройка изображений (плагин @nuxt/image)
  image: {
    domains: [process.env.NUXT_API_URL || 'http://176.53.163.5:5000'],
    screens: {
      s320: 320,
      s360: 360,
      s576: 576,
      s640: 640,
      s768: 768,
      s1200: 1200,
      s1024: 1024,
      s1250: 1250,
      s1280: 1280,
      s1500: 1500,
    },
  },

  // Настройка медиа-запросов (плагин nuxt-viewport)
  viewport: {
    breakpoints: {
      screen1600: 1600,
      screen1281: 1281,
      screen1280: 1280,
      screen1024: 1024,
      screen1080: 1080,
      screen1200: 1200,

      screen320: 320,
      screen360: 360,
      screen480: 480,
      screen576: 576,
      screen768: 768,
      screen769: 769,
    },

    /* defaultBreakpoints: {
      desktop: 'desktop',
      mobile: 'mobile',
      tablet: 'tablet',
    },

    fallbackBreakpoint: 'desktop',

    feature: 'minWidth', */
  },

  // Отправка почты. Плагин 'nuxt-mail'
  //@ts-ignore
  mail: {
    message: {
      from: 'rrublyov@yandex.ru', // от кого письмо
      to: 'rrublyov@yandex.ru', // вот так нескольким получателям: 'pranaittech@mail.ru, pranaittech@yandex.ru' либо ['info@pranait.ru, pranaittech@yandex.ru']
    },
    smtp: {
      host: 'smtp.yandex.ru',
      port: 465,
      secure: true,
      auth: {
        user: 'rrublyov',
        pass: 'mbsczeudzclhdidd', // пароль для приложений. Создаётся в учётной записи почты
      },
    },
  },

  //
  compatibilityDate: '2024-04-03',

  devtools: { enabled: true },
});
