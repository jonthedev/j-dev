import { yearsInCareer, yearsInCareerLabel, yearsInWords } from "../utils/careerYears"

/** Single source of truth for SEO strings (used by nuxt.config static head + app.vue). */

export const SITE_URL = "https://j-dev.online" as const

/** Navbar, Footer, Open Graph site name */
export const SITE_BRAND = "JDev Online" as const

/** KVK trade name */
export const SITE_LEGAL_NAME = "JDEV Online" as const

export const SITE_PERSON_NAME = "Jonathan Kaonga" as const

export const SITE_KVK = "93792670" as const

export const SITE_HEADLINE = "Full Stack Engineer" as const

/** Hero framing: direction and literacy, not a job-title dump. */
export const SITE_HERO_STANCE = "Technical direction · Code literacy" as const

export const SITE_HERO_LEAD
  = "I build fluid product UIs in TypeScript and Vue that have to hold when the traffic hits. I am working toward the systems those products run on."

/** Campaign destination, not a chapter list. Update when the path itself changes. */
export const SITE_CURRENT_FOCUS
  = "Services, cloud, and clusters." as const

/** Thalex, DPG, ANWB Verkeer, Van Lanschot Kempen */
export const PRODUCTION_PRODUCT_COUNT = 4

export const SITE_TITLE
  = "Jonathan Kaonga | JDEV Online | Full Stack Engineer | TypeScript · Vue · React · Linux · Go · Docker · AWS · Kubernetes"

export const SITE_DESCRIPTION
  = `I build fluid product UIs for high-traffic products. ${yearsInCareerLabel()} years at Thalex, DPG Media, ANWB Verkeer (Website van het Jaar 2022), and Van Lanschot Kempen. Based in Amsterdam.`

export const SITE_AVAILABILITY
  = "Open to full-time roles and selective B2B contracts via JDev Online."

/** Short status on the hero portrait. */
export const SITE_AVAILABLE_STATUS = "Available" as const

/** Shorter repeat for Contact / Footer. Full line lives in the hero. */
export const SITE_AVAILABILITY_SHORT
  = "Open to full-time roles and B2B contracts"

export const SITE_LOCATION = "Amsterdam, NL" as const

export const SITE_RESIDENCY
  = "Permanent Dutch resident. British passport. No visa sponsorship required for NL or UK." as const

export function aboutLeadParagraphs(now = new Date()) {
  const years = yearsInWords(yearsInCareer(now))
  return [
    `For ${years} years I have directed product interfaces that have to stay up under real traffic: ANWB, DPG's job board, Van Lanschot Kempen, and Thalex.`,
    "After years on the frontend I am working on the layer underneath.",
    "I show up at ToekomstTech because it is a room for people who build working systems.",
    "I am originally from London and currently based in Amsterdam."
  ]
}

/** Why the credentials section exists. Not a course inventory. */
export function credentialsLead(now = new Date()) {
  return `From ${yearsInWords(yearsInCareer(now))} years of product UI toward the layer underneath.`
}

export const PLATFORM_TITLE = "Jonathan Kaonga | Lab (coming back later)"

export const PLATFORM_DESCRIPTION
  = "Private experiments. Not currently part of the public offer."

export const OG_IMAGE = `${SITE_URL}/og-image.png`

export const SITE_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      "name": SITE_LEGAL_NAME,
      "alternateName": [
        SITE_BRAND,
        "JDev",
        "jdev online",
        "j dev online",
        "j-dev"
      ],
      "url": SITE_URL,
      "identifier": {
        "@type": "PropertyValue",
        "name": "KVK",
        "value": SITE_KVK
      }
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      "name": SITE_PERSON_NAME,
      "url": SITE_URL,
      "jobTitle": SITE_HEADLINE,
      "worksFor": { "@id": `${SITE_URL}/#organization` }
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      "name": SITE_LEGAL_NAME,
      "alternateName": [SITE_BRAND, "j-dev.online"],
      "url": SITE_URL,
      "publisher": { "@id": `${SITE_URL}/#organization` }
    }
  ]
} as const
