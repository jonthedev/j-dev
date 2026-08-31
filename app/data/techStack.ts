export interface TechClusterItem {
  id: string
  title: string
  icon: string
  iconClass: string
}

export interface TechCluster {
  id: string
  title: string
  items: TechClusterItem[]
}

/** Labeled rows. Each tool appears once. */
export const techClusters: TechCluster[] = [
  {
    id: "core",
    title: "Core",
    items: [
      { id: "vue-3", title: "Vue 3", icon: "simple-icons:vuedotjs", iconClass: "text-green-500" },
      { id: "nuxt-3", title: "Nuxt 4", icon: "simple-icons:nuxtdotjs", iconClass: "text-green-600" },
      { id: "pinia", title: "Pinia", icon: "simple-icons:pinia", iconClass: "text-yellow-500" },
      { id: "typescript", title: "TypeScript", icon: "simple-icons:typescript", iconClass: "text-blue-600" },
      { id: "vite", title: "Vite", icon: "simple-icons:vite", iconClass: "text-purple-500" },
      { id: "tailwind", title: "Tailwind CSS", icon: "simple-icons:tailwindcss", iconClass: "text-cyan-400" },
      { id: "react", title: "React", icon: "simple-icons:react", iconClass: "text-cyan-500" },
      { id: "nextjs", title: "Next.js", icon: "simple-icons:nextdotjs", iconClass: "text-gray-900 dark:text-white" }
    ]
  },
  {
    id: "test-and-design",
    title: "Test and design",
    items: [
      { id: "playwright", title: "Playwright", icon: "simple-icons:playwright", iconClass: "text-blue-500" },
      { id: "vitest", title: "Vitest", icon: "simple-icons:vitest", iconClass: "text-yellow-400" },
      { id: "cypress", title: "Cypress", icon: "simple-icons:cypress", iconClass: "text-cyan-600" },
      { id: "storybook", title: "Storybook", icon: "simple-icons:storybook", iconClass: "text-pink-500" },
      { id: "figma", title: "Figma", icon: "simple-icons:figma", iconClass: "text-purple-500" },
      { id: "lighthouse", title: "Lighthouse", icon: "lucide:gauge", iconClass: "text-blue-600" },
      { id: "wcag", title: "WCAG", icon: "lucide:accessibility", iconClass: "text-emerald-600" }
    ]
  },
  {
    id: "systems",
    title: "Systems",
    items: [
      { id: "python", title: "Python", icon: "simple-icons:python", iconClass: "text-yellow-500" },
      { id: "linux", title: "Linux", icon: "simple-icons:linux", iconClass: "text-gray-800 dark:text-white" },
      { id: "docker", title: "Docker", icon: "simple-icons:docker", iconClass: "text-blue-600" },
      { id: "github", title: "GitHub", icon: "simple-icons:github", iconClass: "text-gray-800 dark:text-white" },
      { id: "gitlab", title: "GitLab", icon: "simple-icons:gitlab", iconClass: "text-orange-600" },
      { id: "jenkins", title: "Jenkins", icon: "simple-icons:jenkins", iconClass: "text-gray-700 dark:text-gray-300" }
    ]
  }
]
