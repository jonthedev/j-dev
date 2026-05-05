/**
 * SEO management composable
 * Consolidates 7+ useHead patterns throughout the application
 */
export function usePageSeo(title: string, description?: string, image?: string, url?: string) {
  const baseTitle = "Jonathan Kaonga | AI Product Engineer | Vue & Nuxt 4"
  const fullTitle = title === baseTitle ? baseTitle : `${title} - ${baseTitle}`

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
    "Home",
    "AI Product Engineer building high-performance Vue & Nuxt 4 products with agentic workflows and a hybrid AI setup: local LLMs for sensitive code, Claude for reasoning and research. Six years shipping production systems across traffic, trading, media, and finance.",
    "/jdk-portfolio-2024.jpeg",
    "https://j-dev.online"
  ),

  // About page
  about: () => usePageSeo(
    "About",
    "Frontend-first AI Product Engineer working in Vue & Nuxt 4 with TypeScript. Agentic workflows and a hybrid AI setup: local LLMs for sensitive code, Claude for reasoning and research.",
    "/jdk-portfolio-2024.jpeg",
    "https://j-dev.online#about"
  ),

  // Projects page
  projects: () => usePageSeo(
    "Projects",
    "Case studies in Vue.js, Nuxt.js, and frontend architecture. Real production systems with measured results.",
    "/jdk-portfolio-2024.jpeg",
    "https://j-dev.online#projects"
  ),

  // Tech Stack page
  techStack: () => usePageSeo(
    "Tech Stack",
    "Vue 3, Nuxt 4, TypeScript. NestJS and PostgreSQL in active development. Tools used in production and in the lab.",
    "/jdk-portfolio-2024.jpeg",
    "https://j-dev.online#tech-stack"
  ),

  // Contact page
  contact: () => usePageSeo(
    "Contact",
    "Available for Vue and Nuxt contract work. KVK registered in Amsterdam.",
    "/jdk-portfolio-2024.jpeg",
    "https://j-dev.online#contact"
  ),

  // Platform (AI) page
  platform: () => usePageSeo(
    "AI & Platform Engineering",
    "My lab environment for AI workflows and backend foundations. Hybrid AI setup: local LLMs for sensitive code, Claude for reasoning and research. NestJS and PostgreSQL are in development.",
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
