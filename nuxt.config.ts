// https://nuxt.com/docs/api/configuration/nuxt-config
import {
  OG_IMAGE,
  SITE_BRAND,
  SITE_DESCRIPTION,
  SITE_JSON_LD,
  SITE_TITLE,
  SITE_URL
} from "./app/data/siteMeta"

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

  // Baked into generated index.html so crawlers see title/description without executing JS
  // (ssr: false SPAs otherwise ship an empty shell → Google may show URL twice instead of a snippet)
  app: {
    head: {
      title: SITE_TITLE,
      htmlAttrs: { lang: "en" },
      link: [
        { rel: "canonical", href: `${SITE_URL}/` },
        {
          rel: "preload",
          as: "image",
          href: "/jdk-portfolio-comp.webp",
          fetchpriority: "high"
        }
      ],
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify(SITE_JSON_LD)
        }
      ],
      meta: [
        { name: "description", content: SITE_DESCRIPTION },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `${SITE_URL}/` },
        { property: "og:title", content: SITE_TITLE },
        { property: "og:description", content: SITE_DESCRIPTION },
        { property: "og:image", content: OG_IMAGE },
        { property: "og:site_name", content: SITE_BRAND },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: SITE_TITLE },
        { name: "twitter:description", content: SITE_DESCRIPTION },
        { name: "twitter:image", content: OG_IMAGE }
      ]
    }
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
      // Optional fonts must not compete with the portrait and the entry CSS.
      preload: false
    },
    families: [
      {
        name: "Kanit",
        provider: "google",
        weights: ["400", "500", "600", "700"],
        // Use the face when it is already cached. A cold Slow 4G load
        // paints with the system sans instead of waiting on four weights.
        display: "optional",
        preload: false
      },
      {
        name: "JetBrains Mono",
        provider: "google",
        weights: ["400", "500"],
        display: "optional",
        preload: false
      }
    ]
  },

  // Nuxt Image: explicit Netlify provider so production uses Netlify Image CDN (https://image.nuxt.com/providers/netlify)
  // Netlify Image CDN in production. Local dev uses IPX so resized
  // images still load without the Netlify image endpoint.
  image: {
    provider: process.env.NETLIFY ? "netlify" : "ipx"
  }
})
