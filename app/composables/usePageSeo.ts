/**
 * SEO management composable
 * Consolidates 7+ useHead patterns throughout the application
 */
export function usePageSeo(title: string, description?: string, image?: string, url?: string) {
  const baseTitle = 'Jonathan Kaonga | Freelance Vue/Nuxt Frontend Engineer'
  const fullTitle = title === baseTitle ? baseTitle : `${title} - ${baseTitle}`

  const siteUrl = url || (import.meta.client ? window.location.origin : 'https://j-dev.online')
  const siteImage = image || '/jdk-portfolio-2024.jpeg'

  const meta: ({ name?: string, property?: string, content?: string, rel?: string, href?: string })[] = []

  // Add description if provided
  if (description) {
    meta.push({ name: 'description', content: description })
  }

  // Open Graph meta tags
  meta.push(
    { property: 'og:title', content: fullTitle },
    { property: 'og:site_name', content: 'Jonathan Kaonga Portfolio' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: siteImage },
    { property: 'og:url', content: siteUrl }
  )

  // Add OG description if provided
  if (description) {
    meta.push({ property: 'og:description', content: description })
  }

  // Twitter Card meta tags
  meta.push(
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@jonthedev' },
    { name: 'twitter:creator', content: '@jonthedev' },
    { name: 'twitter:title', content: fullTitle },
    { name: 'twitter:image', content: siteImage }
  )

  // Add Twitter description if provided
  if (description) {
    meta.push({ name: 'twitter:description', content: description })
  }

  // Additional meta tags
  meta.push(
    { name: 'author', content: 'Jonathan Kaonga' },
    { name: 'robots', content: 'index, follow' },
    { name: 'googlebot', content: 'index, follow' }
  )

  useHead({
    title: fullTitle,
    meta,
    link: [
      {
        rel: 'canonical',
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
    'Home',
    'Freelance Vue/Nuxt Frontend Engineer specializing in modern web applications, component architecture, and performance optimization.',
    '/jdk-portfolio-2024.jpeg',
    'https://j-dev.online'
  ),

  // About page
  about: () => usePageSeo(
    'About',
    'Learn about Jonathan Kaonga - a passionate Vue/Nuxt developer with expertise in modern frontend development and component architecture.',
    '/jdk-portfolio-2024.jpeg',
    'https://j-dev.online#about'
  ),

  // Projects page
  projects: () => usePageSeo(
    'Projects',
    'Explore portfolio projects showcasing Vue.js, Nuxt.js, and modern web development expertise with real-world applications.',
    '/jdk-portfolio-2024.jpeg',
    'https://j-dev.online#projects'
  ),

  // Tech Stack page
  techStack: () => usePageSeo(
    'Tech Stack',
    'Discover the technologies and tools I work with - Vue.js, Nuxt.js, TypeScript, Tailwind CSS, and modern frontend development stack.',
    '/jdk-portfolio-2024.jpeg',
    'https://j-dev.online#tech-stack'
  ),

  // Contact page
  contact: () => usePageSeo(
    'Contact',
    'Get in touch with Jonathan Kaonga for Vue/Nuxt development projects, collaborations, or freelance opportunities.',
    '/jdk-portfolio-2024.jpeg',
    'https://j-dev.online#contact'
  ),

  // Platform (AI) page
  platform: () => usePageSeo(
    'AI Platform Projects',
    'Explore AI and machine learning projects built with modern web technologies, showcasing innovative applications and solutions.',
    '/jdk-portfolio-2024.jpeg',
    'https://j-dev.online'
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
    `https://j-dev.online#projects`
  )
}
