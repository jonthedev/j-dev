/** Single source of truth for SEO strings (used by nuxt.config static head + app.vue). */

export const SITE_URL = "https://j-dev.online" as const

/** Display brand (Navbar, Footer, OG); keep in sync with social copy */
export const SITE_BRAND = "JDev Online" as const

export const SITE_TITLE = "Jonathan Kaonga | British AI Product Engineer | Amsterdam"

export const SITE_DESCRIPTION
  = "British AI Product Engineer delivering modern web systems from Amsterdam. Frontend-first across the Vue ecosystem (and beyond). Agentic AI workflows (local + cloud). KVK registered, Outside IR35. Six years in traffic, trading, media, finance."

export const PLATFORM_TITLE
  = "Jonathan Kaonga | Lab: AI Workflows & Backend Architecture"

export const PLATFORM_DESCRIPTION
  = "My lab for agentic workflows (local + cloud), reusable toolchains, RAG patterns, backend architecture, and data design."

export const OG_IMAGE = `${SITE_URL}/og-image.png`
