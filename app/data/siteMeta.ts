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

/** Thalex, DPG, ANWB Verkeer, Van Lanschot Kempen */
export const PRODUCTION_PRODUCT_COUNT = 4

export const SITE_TITLE
  = "Jonathan Kaonga | JDEV Online | Full Stack Engineer | TypeScript · Vue · React · Go · Docker · AWS · Kubernetes"

export const SITE_DESCRIPTION
  = `Full stack engineer with ${yearsInCareerLabel()} years shipping high-traffic product UI at Thalex, DPG Media, ANWB Verkeer (Website van het Jaar 2022), and Van Lanschot Kempen. Based in Amsterdam. Open to full-time roles and selective B2B via JDev Online.`

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
    `I have spent the last ${years} years shipping product UI in the Netherlands: ANWB traffic, DPG's job board, Van Lanschot Kempen, and most recently Thalex.`,
    "I am based in Amsterdam, originally from London. I show up at ToekomstTech and Amsterdam AI Tinkerers. I ship the UI, and I work on the rails those applications sit on."
  ]
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
