// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // @ts-ignore
  apps: [
    {
      name: 'NuxtAppName',
      port: '3000',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
    },
  ],
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],

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
      apiBase: '' || "https://app.gotolatam.travel/api",
      // apiBaseTest: process.env.API_BASE_TEST || "https://app.gotolatam.travel/api",
      apiBaseTest: ''
      // apiBase: process.env.API_BASE_TEST || "http://localhost:8080/api",
    }
  },
  nitro: {
    preset: 'node-server'
  }

})
