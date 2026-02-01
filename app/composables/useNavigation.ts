/**
 * Navigation management composable
 * Centralizes navigation logic and links used across the application
 */
export function useNavigation() {
  // Main navigation links
  const navigationLinks = [
    {
      name: 'About',
      href: '#about',
      description: 'Learn more about my background and expertise'
    },
    {
      name: 'Tech Stack',
      href: '#tech-stack',
      description: 'Technologies and tools I work with'
    },
    {
      name: 'Projects',
      href: '#projects',
      description: 'Portfolio of my recent work'
    },
    {
      name: 'Contact',
      href: '#contact',
      description: 'Get in touch for collaborations'
    }
  ]

  // Quick links (same as navigation for now, but can be customized)
  const quickLinks = [...navigationLinks]

  // Social links
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/jonthedev',
      icon: 'simple-icons:github',
      description: 'View my code repositories'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jonathan-kaonga-5a04871b5/',
      icon: 'simple-icons:linkedin',
      description: 'Connect with me professionally'
    }
  ]

  // Helper function to check if current route matches a nav item
  const isActive = (href: string) => {
    if (import.meta.client) {
      return window.location.hash === href
    }
    return false
  }

  // Smooth scroll to section
  const scrollToSection = (href: string) => {
    if (import.meta.client) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
  }

  // Get navigation with current active state
  const navigationWithActive = computed(() =>
    navigationLinks.map(link => ({
      ...link,
      active: isActive(link.href)
    }))
  )

  return {
    // Data
    navigationLinks,
    quickLinks,
    socialLinks,

    // Computed
    navigationWithActive,

    // Methods
    isActive,
    scrollToSection
  }
}

/**
 * Navigation presets for different contexts
 */
export const navigationPresets = {
  // Mobile navigation (simplified)
  mobile: () => {
    const { navigationLinks } = useNavigation()
    return navigationLinks.slice(0, 4) // Limit for mobile
  },

  // Footer navigation (all links)
  footer: () => {
    const { quickLinks, socialLinks } = useNavigation()
    return {
      quick: quickLinks,
      social: socialLinks
    }
  },

  // Desktop navigation (full)
  desktop: () => {
    const { navigationWithActive } = useNavigation()
    return navigationWithActive.value
  }
}
