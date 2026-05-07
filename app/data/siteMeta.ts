/** Single source of truth for SEO strings (used by nuxt.config static head + app.vue). */

export const SITE_URL = "https://j-dev.online" as const

/** Display brand (Navbar, Footer, OG); keep in sync with social copy */
export const SITE_BRAND = "JDev Online" as const

export const SITE_TITLE = "Jonathan Kaonga | British AI Product Engineer | Nuxt 4 | Amsterdam"

export const SITE_DESCRIPTION
  = "British AI Product Engineer delivering Nuxt 4 systems from Amsterdam. GDPR-compliant AI workflows: local LLMs (Ollama) for ALL client code, Claude ONLY for reasoning tasks. KVK registered, Outside IR35. Six years in traffic, trading, media, finance."

export const PLATFORM_TITLE
  = "Jonathan Kaonga | Lab: AI Workflows, NestJS, PostgreSQL (In Development)"

export const PLATFORM_DESCRIPTION
  = "My active learning environment. Local AI workflows, NestJS, PostgreSQL. Working through Unlearn.dev courses. Not production services yet."

export const OG_IMAGE = `${SITE_URL}/og-image.png`
