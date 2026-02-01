/**
 * Icon management composable
 * Provides icon utilities and tech name mapping
 */
export function useIcons() {
  // Tech name mapping for better display
  const techNameMap: Record<string, string> = {
    'simple-icons:vuedotjs': 'Vue',
    'simple-icons:nuxtdotjs': 'Nuxt',
    'simple-icons:typescript': 'TypeScript',
    'simple-icons:tailwindcss': 'Tailwind CSS',
    'simple-icons:vitejs': 'Vite',
    'simple-icons:pinia': 'Pinia',
    'simple-icons:javascript': 'JavaScript',
    'simple-icons:html5': 'HTML5',
    'simple-icons:css3': 'CSS3',
    'simple-icons:react': 'React',
    'simple-icons:nextdotjs': 'Next.js',
    'simple-icons:nodedotjs': 'Node.js',
    'simple-icons:python': 'Python',
    'simple-icons:postgresql': 'PostgreSQL',
    'simple-icons:docker': 'Docker',
    'simple-icons:git': 'Git',
    'simple-icons:github': 'GitHub',
    'simple-icons:gitlab': 'GitLab',
    'simple-icons:vercel': 'Vercel',
    'simple-icons:netlify': 'Netlify',
    'simple-icons:googlecloud': 'Google Cloud',
    'simple-icons:amazonaws': 'AWS',
    'simple-icons:figma': 'Figma',
    'simple-icons:adobexd': 'Adobe XD',
    'simple-icons:adobephotoshop': 'Photoshop',
    'simple-icons:visualstudiocode': 'VS Code',
    'simple-icons:apple': 'Apple',
    'simple-icons:microsoft': 'Microsoft',
    'simple-icons:android': 'Android',
    'simple-icons:ubuntu': 'Ubuntu',
    'lucide:server': 'Server',
    'lucide:database': 'Database',
    'lucide:cloud': 'Cloud',
    'lucide:shield': 'Security',
    'lucide:zap': 'Performance',
    'lucide:users': 'Users',
    'lucide:mail': 'Email',
    'lucide:phone': 'Phone',
    'lucide:map-pin': 'Location',
    'lucide:globe': 'Global',
    'lucide:code': 'Code',
    'lucide:terminal': 'Terminal',
    'lucide:layers': 'Layers',
    'lucide:package': 'Package',
    'lucide:cog': 'Settings',
    'lucide:moon': 'Dark Mode',
    'lucide:sun': 'Light Mode',
    'lucide:menu': 'Menu',
    'lucide:x': 'Close',
    'lucide:arrow-right': 'Next',
    'lucide:arrow-left': 'Previous',
    'lucide:eye': 'View',
    'lucide:search': 'Search',
    'lucide:download': 'Download',
    'lucide:upload': 'Upload',
    'lucide:external-link': 'External Link',
    'lucide:link': 'Link',
    'lucide:star': 'Favorite',
    'lucide:heart': 'Like',
    'lucide:share': 'Share',
    'lucide:copy': 'Copy',
    'lucide:trash': 'Delete',
    'lucide:edit': 'Edit',
    'lucide:plus': 'Add',
    'lucide:minus': 'Remove',
    'lucide:check': 'Success',
    'lucide:x-circle': 'Error',
    'lucide:alert-circle': 'Warning',
    'lucide:info': 'Info',
    'lucide:help-circle': 'Help',
    'lucide:calendar': 'Calendar',
    'lucide:clock': 'Time',
    'lucide:bookmark': 'Bookmark',
    'lucide:filter': 'Filter',
    'lucide:sliders': 'Options',
    'lucide:more-horizontal': 'More',
    'lucide:more-vertical': 'More Vertical',
    'lucide:chevron-right': 'Expand Right',
    'lucide:chevron-left': 'Expand Left',
    'lucide:chevron-up': 'Expand Up',
    'lucide:chevron-down': 'Scroll Down'
  }

  /**
   * Get human-readable tech name from icon identifier
   */
  const getTechName = (iconName: string): string => {
    return techNameMap[iconName] || iconName.split(':').pop() || iconName
  }

  /**
   * Get icon category/type
   */
  const getIconCategory = (iconName: string): string => {
    if (iconName.includes('simple-icons')) return 'technology'
    if (iconName.includes('lucide')) return 'ui'
    return 'other'
  }

  /**
   * Check if icon is from a specific category
   */
  const isIconCategory = (iconName: string, category: string): boolean => {
    return getIconCategory(iconName) === category
  }

  /**
   * Get icon size presets
   */
  const iconSizes = {
    'xs': '0.875rem',
    'sm': '1rem',
    'md': '1.125rem',
    'lg': '1.25rem',
    'xl': '1.5rem',
    '2xl': '1.75rem',
    '3xl': '2rem'
  }

  /**
   * Get icon with specific size
   */
  const getSizedIcon = (iconName: string, size: keyof typeof iconSizes) => ({
    name: iconName,
    size: iconSizes[size]
  })

  return {
    techNameMap,
    getTechName,
    getIconCategory,
    isIconCategory,
    iconSizes,
    getSizedIcon
  }
}
