// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    apiUrl: process.env.NUXT_API_URL,
    apiUrlGraphql: process.env.NUXT_API_URL_GRAPHQL,
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

  experimental: {
    typedPages: true,
  },

  nitro: {
    compressPublicAssets: true,
    minify: true,
  },

  //
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
});
