/** Single source of truth for SEO strings (used by nuxt.config static head + app.vue). */

export const SITE_URL = "https://j-dev.online" as const

/** Display brand (Navbar, Footer, OG); keep in sync with social copy */
export const SITE_BRAND = "JDev Online" as const

/** Hero H1 — match cv.md */
export const SITE_HEADLINE = "Software Engineer" as const

export const SITE_TITLE = "Jonathan Kaonga | Software Engineer | Vue · Nuxt · TypeScript"

export const SITE_DESCRIPTION
  = "Software engineer with 6+ years shipping product UI in TypeScript. Vue and Nuxt at Thalex. React and Next.js at DPG Media, ANWB, and Van Lanschot Kempen. Based in Amsterdam. Open to the Netherlands, UK, and US."

export const SITE_AVAILABILITY
  = "Available for permanent roles or selective B2B via JDev Online."

export const SITE_LOCATION
  = "Based in Amsterdam. Open to the Netherlands, UK, and US." as const

export const SITE_RESIDENCY
  = "Permanent Dutch resident. British passport. No visa sponsorship required for NL or UK." as const

export const ABOUT_LEAD
  = "Software engineer with 6+ years shipping product UI in TypeScript. Strongest in Vue and Nuxt (Thalex crypto exchange). Production React and Next.js at DPG Media, ANWB Verkeer, and Van Lanschot Kempen (private bank)."

export const ABOUT_CURRENT
  = "Currently upskilling in DevOps and platform engineering to cover more of the stack, including Linux administration on a remote Ubuntu server. I also run local AI and self-hosted infra (Ollama, Home Lab Collective)."

/** Lab mode parked until claims are real — kept for future re-enable */
export const PLATFORM_TITLE
  = "Jonathan Kaonga | Lab (coming back later)"

export const PLATFORM_DESCRIPTION
  = "Private experiments. Not currently part of the public offer."

export const OG_IMAGE = `${SITE_URL}/og-image.png`
