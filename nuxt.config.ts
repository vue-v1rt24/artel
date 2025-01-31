// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    apiUrl: process.env.NUXT_API_URL,
    apiUrlGraphql: process.env.NUXT_API_URL_GRAPHQL,

    tokenTelegram: process.env.NUXT_TOKEN_TELEGRAM,
    userIdTovaroVed: process.env.NUXT_USER_ID_TOVARO_VED, // Я
    userIdProdavetc: process.env.NUXT_USER_ID_PRODAVETC, // Влад
    userIdYouvelir: process.env.NUXT_USER_ID_YOUVELIR,
    public: {
      apiYandexCardKey: process.env.NUXT_PUBLIC_API_YANDEX_CARD_KEY,
    },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
      meta: [{ name: 'yandex-verification', content: '706d456e1c11c274' }],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
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

  modules: [
    '@nuxt/image',
    'nuxt-viewport',
    'nuxt-mail',
    'nuxt-yandex-metrika',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
  ],

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
      s1360: 1360,
      s1500: 1500,
    },
  },

  // Настройка медиа-запросов (плагин nuxt-viewport)
  viewport: {
    breakpoints: {
      screen1600: 1600,
      screen1281: 1281,
      screen1280: 1280,
      screen1201: 1201,
      screen1200: 1200,
      screen1080: 1080,
      screen1024: 1024,

      screen320: 320,
      screen360: 360,
      screen480: 480,
      screen576: 576,
      screen768: 768,
      screen769: 769,
    },
  },

  // Отправка почты. Плагин 'nuxt-mail'
  //@ts-ignore
  mail: {
    message: {
      from: 'mail@golden-artel.ru', // от кого письмо
      to: 'mail@golden-artel.ru', // вот так нескольким получателям: 'pranaittech@mail.ru, pranaittech@yandex.ru' либо ['info@pranait.ru, pranaittech@yandex.ru']
    },
    smtp: {
      host: 'smtp.yandex.ru',
      port: 465,
      secure: true,
      auth: {
        user: 'mail@golden-artel.ru',
        pass: 'avcnhkcqihvjvonq', // пароль для приложений. Создаётся в учётной записи почты
      },
    },
  },

  // Яндекс метрика
  yandexMetrika: {
    id: '99195525',
    options: {
      webvisor: true,
    },
  },

  // Настройка файла sitemap. Плагин @nuxtjs/sitemap
  site: {
    url: 'https://golden-artel.ru',
    name: 'Золотая Артель',
  },

  //
  compatibilityDate: '2024-04-03',

  devtools: { enabled: true },
});
