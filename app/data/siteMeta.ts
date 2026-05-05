/** Single source of truth for SEO strings (used by nuxt.config static head + app.vue). */

export const SITE_URL = "https://j-dev.online" as const

/** Display brand (Navbar, Footer, OG); keep in sync with social copy */
export const SITE_BRAND = "JDev Online" as const

export const SITE_TITLE = "Jonathan Kaonga | AI Product Engineer | Vue & Nuxt 4 | Amsterdam"

export const SITE_DESCRIPTION
  = "AI Product Engineer building high-performance Vue & Nuxt 4 products with agentic workflows and a hybrid AI setup: local LLMs for sensitive code, Claude for reasoning and research. Six years shipping production systems across traffic, trading, media, and finance."

export const PLATFORM_TITLE
  = "Jonathan Kaonga | Lab: AI Workflows, NestJS, PostgreSQL (In Development)"

export const PLATFORM_DESCRIPTION
  = "My active learning environment. Local AI workflows, NestJS, PostgreSQL. Working through Unlearn.dev courses. Not production services yet."

export const OG_IMAGE = `${SITE_URL}/og-image.png`
