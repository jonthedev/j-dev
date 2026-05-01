/**
 * SEO management composable
 * Consolidates 7+ useHead patterns throughout the application
 */
export function usePageSeo(title: string, description?: string, image?: string, url?: string) {
  const baseTitle = "Jonathan Kaonga | Vue & AI Engineer"
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
    { property: "og:site_name", content: "Jonathan Kaonga Portfolio" },
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
    "Vue and Nuxt engineer. RAG systems, local LLMs, and high-traffic frontends. Based in Amsterdam.",
    "/jdk-portfolio-2024.jpeg",
    "https://j-dev.online"
  ),

  // About page
  about: () => usePageSeo(
    "About",
    "Six years building production platforms. ANWB, Thalex, DPG Media. Vue, Nuxt, and private AI systems.",
    "/jdk-portfolio-2024.jpeg",
    "https://j-dev.online#about"
  ),

  // Projects page
  projects: () => usePageSeo(
    "Projects",
    "Case studies in Vue.js, Nuxt.js, and AI-augmented development. Real production systems with measured results.",
    "/jdk-portfolio-2024.jpeg",
    "https://j-dev.online#projects"
  ),

  // Tech Stack page
  techStack: () => usePageSeo(
    "Tech Stack",
    "Vue 3, Nuxt 4, TypeScript, NestJS, PostgreSQL. Tools used in production, not tutorials.",
    "/jdk-portfolio-2024.jpeg",
    "https://j-dev.online#tech-stack"
  ),

  // Contact page
  contact: () => usePageSeo(
    "Contact",
    "Available for Vue, Nuxt, and full-stack contract work. KVK registered in Amsterdam.",
    "/jdk-portfolio-2024.jpeg",
    "https://j-dev.online#contact"
  ),

  // Platform (AI) page
  platform: () => usePageSeo(
    "AI & Platform Engineering",
    "Local LLM inference with Ollama. Private RAG pipelines. No cloud exposure. GDPR compliant by architecture.",
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
