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
    id: "ai",
    title: "AI",
    items: [
      { id: "cursor", title: "Cursor", icon: "simple-icons:cursor", iconClass: "text-gray-800 dark:text-gray-200" },
      { id: "ollama", title: "Ollama", icon: "simple-icons:ollama", iconClass: "text-gray-700 dark:text-gray-300" },
      { id: "qwen", title: "Qwen", icon: "lucide:sparkles", iconClass: "text-amber-500" },
      { id: "opencode", title: "OpenCode", icon: "lucide:terminal", iconClass: "text-emerald-600" }
    ]
  },
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
    title: "Systems and DevOps",
    items: [
      { id: "python", title: "Python", icon: "simple-icons:python", iconClass: "text-[#4B8BBE]" },
      { id: "linux", title: "Linux", icon: "simple-icons:linux", iconClass: "text-gray-800 dark:text-white" },
      { id: "git", title: "Git", icon: "simple-icons:git", iconClass: "text-orange-600" },
      { id: "go", title: "Go", icon: "simple-icons:go", iconClass: "text-cyan-600" },
      { id: "sql", title: "SQL", icon: "lucide:database", iconClass: "text-sky-600" },
      { id: "docker", title: "Docker", icon: "simple-icons:docker", iconClass: "text-blue-500" },
      { id: "aws", title: "AWS", icon: "simple-icons:amazonaws", iconClass: "text-orange-500" },
      { id: "cicd", title: "CI/CD", icon: "lucide:git-branch", iconClass: "text-emerald-600" },
      { id: "kubernetes", title: "Kubernetes", icon: "simple-icons:kubernetes", iconClass: "text-blue-600" },
      { id: "github", title: "GitHub", icon: "simple-icons:github", iconClass: "text-gray-800 dark:text-white" }
    ]
  }
]
