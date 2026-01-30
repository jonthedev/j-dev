// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'app',

  // Static profile site: client-only SPA; static preset skips Nitro server bundle (avoids client.precomputed.mjs bug)
  ssr: false,
  nitro: {
    preset: 'static'
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@vueuse/motion/nuxt'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  // Prerender disabled temporarily due to Nuxt 4 client.precomputed.mjs bug (nuxt/nuxt#33579)
  // routeRules: {
  //   '/': { prerender: true }
  // },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
