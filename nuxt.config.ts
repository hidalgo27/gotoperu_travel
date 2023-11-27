// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // @ts-ignore
  apps: [
    {
      name: 'NuxtAppName',
      port: '4000',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
    },
  ],
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],

  // app: {
  //   head: {
  //     script: [
  //       {
  //         src: 'https://cdn.wetravel.com/widgets/embed_checkout.js',
  //         async: true,
  //       },
  //     ],
  //   }
  // },

  server: {
    port: 4000, // Cambia el puerto a uno disponible
  },

  port: 4000,

  piniaPersistedstate: {
    storage: 'localStorage'
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    '~/assets/css/main.css',
    `~/assets/css/page.css`
  ],
  runtimeConfig: {
    apiSecret: '',
    public: {
      apiBase: '' || "https://api.gotoperu.travel/api",
      // apiBaseTest: process.env.API_BASE_TEST || "https://app.gotolatam.travel/api",
      apiBaseTest: ''
      // apiBase: process.env.API_BASE_TEST || "http://localhost:8080/api",
    }
  },
  nitro: {
    preset: 'node-server'
  }

})
