/** Single source of truth for SEO strings (used by nuxt.config static head + app.vue). */

export const SITE_URL = "https://j-dev.online" as const

/** Display brand (Navbar, Footer, OG); keep in sync with social copy */
export const SITE_BRAND = "JDev Online" as const

export const SITE_TITLE = "Jonathan Kaonga | Freelance Software Engineer | Vue · Nuxt · TypeScript"

export const SITE_DESCRIPTION
  = "Freelance software engineer in Amsterdam. Vue ecosystem shop — Vue, Nuxt, Pinia, and TypeScript for B2B web products. Migrations, product UI, and type-safe frontends via JDev Online."

/** Lab mode parked until claims are real — kept for future re-enable */
export const PLATFORM_TITLE
  = "Jonathan Kaonga | Lab (coming back later)"

export const PLATFORM_DESCRIPTION
  = "Private experiments — not currently part of the public offer."

export const OG_IMAGE = `${SITE_URL}/og-image.png`
