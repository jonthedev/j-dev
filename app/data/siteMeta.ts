/** Single source of truth for SEO strings (used by nuxt.config static head + app.vue). */

export const SITE_URL = "https://j-dev.online" as const

/** Display brand (Navbar, Footer, OG); keep in sync with social copy */
export const SITE_BRAND = "JDev Online" as const

/** Hero H1 — match cv.md / LinkedIn title */
export const SITE_HEADLINE = "Full Stack Engineer" as const

export const SITE_TITLE
  = "Jonathan Kaonga | Full Stack Engineer | TypeScript · Vue · React · Go · Docker · AWS · Kubernetes"

export const SITE_DESCRIPTION
  = "Full stack engineer with 6+ years shipping high-traffic product UI, plus DevOps depth across Python, Linux, Git, Go, SQL, Docker, AWS, CI/CD, and Kubernetes. Production at Thalex, DPG Media, ANWB Verkeer (Website van het Jaar 2022), and Van Lanschot Kempen. Based in Amsterdam. Open to full-time roles and selective B2B via JDev Online."

export const SITE_AVAILABILITY
  = "Open to full-time roles and selective B2B contracts via JDev Online."

/** Shorter repeat for Contact / Footer. Full line lives in the hero. */
export const SITE_AVAILABILITY_SHORT
  = "Open to full-time roles and B2B contracts"

export const SITE_LOCATION
  = "Based in Amsterdam. Open to the Netherlands, UK, and US." as const

export const SITE_RESIDENCY
  = "Permanent Dutch resident. British passport. No visa sponsorship required for NL or UK." as const

export const ABOUT_LEAD
  = "Full stack engineer. High-traffic product UI, plus the Linux, container, and cloud work to run it."

/** Lab mode parked until claims are real — kept for future re-enable */
export const PLATFORM_TITLE
  = "Jonathan Kaonga | Lab (coming back later)"

export const PLATFORM_DESCRIPTION
  = "Private experiments. Not currently part of the public offer."

export const OG_IMAGE = `${SITE_URL}/og-image.png`
