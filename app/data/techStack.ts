export interface TechStackItem {
  id: string
  title: string
  icons?: string[]
  icon?: string
  iconClass?: string
  category: 'primary' | 'secondary'
}

export const techStack: TechStackItem[] = [
  {
    id: 'vue-3',
    title: 'Vue 3',
    icon: 'simple-icons:vuedotjs',
    iconClass: 'text-green-500',
    category: 'primary'
  },
  {
    id: 'nuxt-3',
    title: 'Nuxt 3',
    icon: 'simple-icons:nuxtdotjs',
    iconClass: 'text-green-600',
    category: 'primary'
  },
  {
    id: 'typescript',
    title: 'TypeScript',
    icon: 'simple-icons:typescript',
    iconClass: 'text-blue-600',
    category: 'primary'
  },
  {
    id: 'vite',
    title: 'Vite',
    icon: 'simple-icons:vite',
    iconClass: 'text-purple-500',
    category: 'primary'
  },
  {
    id: 'pinia',
    title: 'Pinia',
    icon: 'simple-icons:pinia',
    iconClass: 'text-yellow-500',
    category: 'primary'
  },
  {
    id: 'tailwind',
    title: 'Tailwind CSS',
    icon: 'simple-icons:tailwindcss',
    iconClass: 'text-cyan-400',
    category: 'primary'
  },
  {
    id: 'playwright',
    title: 'Playwright',
    icon: 'simple-icons:playwright',
    iconClass: 'text-blue-500',
    category: 'secondary'
  },
  {
    id: 'vitest',
    title: 'Vitest',
    icon: 'simple-icons:vitest',
    iconClass: 'text-yellow-400',
    category: 'primary'
  },
  {
    id: 'html',
    title: 'HTML',
    icon: 'simple-icons:html5',
    iconClass: 'text-orange-600',
    category: 'primary'
  },
  {
    id: 'css',
    title: 'CSS',
    icon: 'simple-icons:css3',
    iconClass: 'text-blue-600',
    category: 'primary'
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    icon: 'simple-icons:javascript',
    iconClass: 'text-yellow-500',
    category: 'primary'
  },
  {
    id: 'react',
    title: 'React',
    icon: 'simple-icons:react',
    iconClass: 'text-cyan-400',
    category: 'secondary'
  },
  {
    id: 'nextjs',
    title: 'Next.js',
    icon: 'simple-icons:nextdotjs',
    iconClass: 'text-gray-800 dark:text-white',
    category: 'secondary'
  },
  {
    id: 'cypress',
    title: 'Cypress',
    icon: 'simple-icons:cypress',
    iconClass: 'text-cyan-600',
    category: 'secondary'
  },
  {
    id: 'github',
    title: 'GitHub',
    icon: 'simple-icons:github',
    iconClass: 'text-gray-800 dark:text-white',
    category: 'secondary'
  },
  {
    id: 'gitlab',
    title: 'GitLab',
    icon: 'simple-icons:gitlab',
    iconClass: 'text-orange-600',
    category: 'secondary'
  }
]
