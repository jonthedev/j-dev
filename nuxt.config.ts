// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    "@nuxt/eslint",
    "@nuxt/ui",
    "@nuxt/fonts",
    "@nuxt/image"
  ],

  // Static profile site: client-only SPA; static preset skips Nitro server bundle (avoids client.precomputed.mjs bug)
  ssr: false,

  devtools: {
    enabled: true
  },

  css: ["~/assets/css/main.css"],

  srcDir: "app",

  // Defer link prefetching until user interaction to reduce initial network contention
  experimental: {
    defaults: {
      nuxtLink: {
        prefetchOn: {
          interaction: true,
          visibility: false
        }
      }
    }
  },

  // Prerender disabled temporarily due to Nuxt 4 client.precomputed.mjs bug (nuxt/nuxt#33579)
  // routeRules: {
  //   '/': { prerender: true }
  // },

  compatibilityDate: "2025-01-15",
  nitro: {
    preset: "static"
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs"
      }
    }
  },

  fonts: {
    defaults: {
      subsets: ["latin"],
      preload: true
    },
    families: [
      {
        name: "Kanit",
        provider: "google",
        weights: ["400", "600"],
        display: "swap",
        preload: true
      }
    ]
  },

  // Nuxt Image: explicit Netlify provider so production uses Netlify Image CDN (https://image.nuxt.com/providers/netlify)
  image: {
    provider: "netlify"
  }
})
