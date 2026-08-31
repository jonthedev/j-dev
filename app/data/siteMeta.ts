/** Single source of truth for SEO strings (used by nuxt.config static head + app.vue). */

export const SITE_URL = "https://j-dev.online" as const

/** Display brand (Navbar, Footer, OG); keep in sync with social copy */
export const SITE_BRAND = "JDev Online" as const

/** Hero H1 — expertise first, arrangement second */
export const SITE_HEADLINE = "Senior Full-Stack Engineer" as const

export const SITE_TITLE = "Jonathan Kaonga | Senior Full-Stack Engineer | Vue · Nuxt · TypeScript"

export const SITE_DESCRIPTION
  = "Senior full-stack engineer in Amsterdam. Vue, Nuxt, Pinia, and TypeScript for product UI. Available for permanent roles or selective B2B via JDev Online."

export const SITE_AVAILABILITY
  = "Available for permanent roles or selective B2B via JDev Online."

export const SITE_LOCATION = "Amsterdam · EU" as const

/** Lab mode parked until claims are real — kept for future re-enable */
export const PLATFORM_TITLE
  = "Jonathan Kaonga | Lab (coming back later)"

export const PLATFORM_DESCRIPTION
  = "Private experiments. Not currently part of the public offer."

export const OG_IMAGE = `${SITE_URL}/og-image.png`
