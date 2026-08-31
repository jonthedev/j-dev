/**
 * SEO management composable
 * Consolidates 7+ useHead patterns throughout the application
 */
import { SITE_AVAILABILITY, SITE_DESCRIPTION, SITE_LOCATION, SITE_TITLE } from "~/data/siteMeta"

export function usePageSeo(title: string, description?: string, image?: string, url?: string) {
  const fullTitle = title === SITE_TITLE ? SITE_TITLE : `${title} - ${SITE_TITLE}`

  const siteUrl = url || (import.meta.client ? window.location.origin : "https://j-dev.online")
  const siteImagePath = image || "/jdk-portfolio-2024.jpeg"
  const siteImageAbsolute = siteImagePath.startsWith("http") ? siteImagePath : `${siteUrl}${siteImagePath.startsWith("/") ? siteImagePath : `/${siteImagePath}`}`

  const meta: ({ name?: string, property?: string, content?: string, rel?: string, href?: string })[] = []

  // Add description if provided
  if (description) {
    meta.push({ name: "description", content: description })
  }

  // Open Graph meta tags (og:image must be absolute URL)
  meta.push(
    { property: "og:title", content: fullTitle },
    { property: "og:site_name", content: "JDev Online" },
    { property: "og:type", content: "website" },
    { property: "og:image", content: siteImageAbsolute },
    { property: "og:url", content: siteUrl }
  )

  // Add OG description if provided
  if (description) {
    meta.push({ property: "og:description", content: description })
  }

  // Twitter Card meta tags (twitter:image must be absolute URL)
  meta.push(
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@jonthedev" },
    { name: "twitter:creator", content: "@jonthedev" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:image", content: siteImageAbsolute }
  )

  // Add Twitter description if provided
  if (description) {
    meta.push({ name: "twitter:description", content: description })
  }

  // Additional meta tags
  meta.push(
    { name: "author", content: "Jonathan Kaonga" },
    { name: "robots", content: "index, follow" },
    { name: "googlebot", content: "index, follow" }
  )

  useHead({
    title: fullTitle,
    meta,
    link: [
      {
        rel: "canonical",
        href: siteUrl
      }
    ]
  })
}

/**
 * SEO presets for common page types
 */
export const seoPresets = {
  // Home page
  home: () => usePageSeo(
    SITE_TITLE,
    SITE_DESCRIPTION,
    "/jdk-portfolio-2024.jpeg",
    "https://j-dev.online"
  ),

  // About page
  about: () => usePageSeo(
    "About",
    "Senior full-stack engineer via JDev Online. Vue, Nuxt, and TypeScript. Background at DPG Media, ANWB, and Thalex.",
    "/jdk-portfolio-2024.jpeg",
    "https://j-dev.online#about"
  ),

  // Projects page
  projects: () => usePageSeo(
    "Projects",
    "Production case studies across Vue, Nuxt, React, and high-traffic product UI.",
    "/jdk-portfolio-2024.jpeg",
    "https://j-dev.online#projects"
  ),

  // Tech Stack page
  techStack: () => usePageSeo(
    "Tech Stack",
    "Vue, Nuxt, Pinia, and TypeScript at the core, plus React, Next.js, Python, and Linux.",
    "/jdk-portfolio-2024.jpeg",
    "https://j-dev.online#tech-stack"
  ),

  // Contact page
  contact: () => usePageSeo(
    "Contact",
    `${SITE_AVAILABILITY} ${SITE_LOCATION}`,
    "/jdk-portfolio-2024.jpeg",
    "https://j-dev.online#contact"
  ),

  // Platform (parked)
  platform: () => usePageSeo(
    "Lab",
    "Private experiments. Not currently part of the public offer.",
    "/jdk-portfolio-2024.jpeg",
    "https://j-dev.online"
  )
}

/**
 * Dynamic SEO for project pages
 */
export function useProjectSeo(projectTitle: string, projectDescription: string, projectImage?: string) {
  return usePageSeo(
    projectTitle,
    projectDescription,
    projectImage,
    "https://j-dev.online#projects"
  )
}
