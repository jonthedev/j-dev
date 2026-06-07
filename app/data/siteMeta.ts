/** Single source of truth for SEO strings (used by nuxt.config static head + app.vue). */

export const SITE_URL = "https://j-dev.online" as const

/** Display brand (Navbar, Footer, OG); keep in sync with social copy */
export const SITE_BRAND = "JDev Online" as const

export const SITE_TITLE = "Jonathan Kaonga | Senior Full-Stack Product Engineer | Amsterdam"

export const SITE_DESCRIPTION
  = "Senior full-stack product engineer in Amsterdam. React and Next.js at the core, Vue and Nuxt in recent production. Architecture and delivery across traffic, trading, media, and finance. Open to full-time or B2B via JDev Online."

export const PLATFORM_TITLE
  = "Jonathan Kaonga | Lab: AI Workflows & Backend Architecture"

export const PLATFORM_DESCRIPTION
  = "My lab for agentic workflows (local + cloud), reusable toolchains, RAG patterns, backend architecture, and data design."

export const OG_IMAGE = `${SITE_URL}/og-image.png`
