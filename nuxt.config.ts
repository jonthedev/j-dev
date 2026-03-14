// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    "@nuxt/eslint",
    "@nuxt/ui",
    "@nuxt/fonts",
    "@nuxt/image",
    "@vueuse/motion/nuxt"
  ],

  // Static profile site: client-only SPA; static preset skips Nitro server bundle (avoids client.precomputed.mjs bug)
  ssr: false,

  devtools: {
    enabled: true
  },

  srcDir: "app",

  // Prerender disabled temporarily due to Nuxt 4 client.precomputed.mjs bug (nuxt/nuxt#33579)
  // routeRules: {
  //   '/': { prerender: true }
  // },

  compatibilityDate: "2025-01-15",
  nitro: {
    preset: "static"
  },

  // Inline global CSS in initial HTML to avoid render-blocking entry.css (Lighthouse LCP)
  hooks: {
    "build:manifest": (manifest: Record<string, { css?: string[] }>) => {
      for (const key of Object.keys(manifest)) {
        const entry = manifest[key]
        const css = entry?.css
        if (css) {
          for (let i = css.length - 1; i >= 0; i--) {
            const file = css[i]
            if (file?.startsWith("entry")) css.splice(i, 1)
          }
        }
      }
    }
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
    families: [
      { name: "Kanit", provider: "google", weights: ["400", "600"] }
    ]
  },

  // Nuxt Image: explicit Netlify provider so production uses Netlify Image CDN (https://image.nuxt.com/providers/netlify)
  image: {
    provider: "netlify"
  }
})
