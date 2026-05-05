export interface TechStackItem {
  id: string
  title: string
  icons?: string[]
  icon?: string
  iconClass?: string
  category: "primary" | "secondary" | "frontend" | "backend"
  /** Show "Certified" badge (e.g. Vue 3 certification in progress) */
  certified?: boolean
  /** Sublabel for backend items (e.g. "Application Logic", "Persistence") */
  sublabel?: string
}

export const techStack: TechStackItem[] = [
  {
    id: "vue-3",
    title: "Vue 3",
    icon: "simple-icons:vuedotjs",
    iconClass: "text-green-500",
    category: "frontend",
    certified: false
  },
  {
    id: "nuxt-3",
    title: "Nuxt 4",
    icon: "simple-icons:nuxtdotjs",
    iconClass: "text-green-600",
    category: "frontend",
    certified: false
  },
  {
    id: "typescript",
    title: "TypeScript",
    icon: "simple-icons:typescript",
    iconClass: "text-blue-600",
    category: "frontend"
  },
  {
    id: "vite",
    title: "Vite",
    icon: "simple-icons:vite",
    iconClass: "text-purple-500",
    category: "frontend"
  },
  {
    id: "pinia",
    title: "Pinia",
    icon: "simple-icons:pinia",
    iconClass: "text-yellow-500",
    category: "frontend",
    certified: false
  },
  {
    id: "tailwind",
    title: "Tailwind CSS",
    icon: "simple-icons:tailwindcss",
    iconClass: "text-cyan-400",
    category: "frontend"
  },
  // Previously used at scale (ANWB, DPG Media, iO)
  {
    id: "react",
    title: "React",
    icon: "simple-icons:react",
    iconClass: "text-gray-400 dark:text-gray-600",
    category: "secondary",
    sublabel: "Former Expertise"
  },
  {
    id: "nextjs",
    title: "Next.js",
    icon: "simple-icons:nextdotjs",
    iconClass: "text-gray-400 dark:text-gray-600",
    category: "secondary",
    sublabel: "Former Expertise"
  },
  {
    id: "playwright",
    title: "Playwright",
    icon: "simple-icons:playwright",
    iconClass: "text-blue-500",
    category: "frontend"
  },
  {
    id: "vitest",
    title: "Vitest",
    icon: "simple-icons:vitest",
    iconClass: "text-yellow-400",
    category: "primary"
  },
  {
    id: "html",
    title: "HTML",
    icon: "simple-icons:html5",
    iconClass: "text-orange-600",
    category: "primary"
  },
  {
    id: "css",
    title: "CSS",
    icon: "simple-icons:css3",
    iconClass: "text-blue-600",
    category: "primary"
  },
  {
    id: "javascript",
    title: "JavaScript",
    icon: "simple-icons:javascript",
    iconClass: "text-yellow-500",
    category: "primary"
  },
  {
    id: "cypress",
    title: "Cypress",
    icon: "simple-icons:cypress",
    iconClass: "text-cyan-600",
    category: "frontend"
  },
  {
    id: "github",
    title: "GitHub",
    icon: "simple-icons:github",
    iconClass: "text-gray-800 dark:text-white",
    category: "primary"
  },
  {
    id: "gitlab",
    title: "GitLab",
    icon: "simple-icons:gitlab",
    iconClass: "text-orange-600",
    category: "primary"
  },
  {
    id: "storybook",
    title: "Storybook",
    icon: "simple-icons:storybook",
    iconClass: "text-pink-500",
    category: "frontend"
  },
  {
    id: "figma",
    title: "Figma",
    icon: "simple-icons:figma",
    iconClass: "text-purple-500",
    category: "frontend"
  },
  // Backend (Architecture & Data)
  {
    id: "nestjs",
    title: "NestJS",
    icon: "simple-icons:nestjs",
    iconClass: "text-red-600",
    category: "backend",
    sublabel: "Application logic and modular service architecture, active personal projects"
  },
  {
    id: "postgresql-prisma",
    title: "PostgreSQL + Prisma",
    icons: ["simple-icons:postgresql", "simple-icons:prisma"],
    iconClass: "text-blue-700",
    category: "backend",
    sublabel: "Type-safe persistence and schema-driven database access, active personal projects"
  },
  {
    id: "swagger",
    title: "Swagger / OpenAPI",
    icon: "simple-icons:swagger",
    iconClass: "text-green-600",
    category: "backend",
    sublabel: "API contract documentation and integration support"
  }
]

export interface StrategicToolingItem {
  id: string
  title: string
  icon: string
  iconClass: string
}

export interface StrategicToolingGroup {
  title: string
  items: StrategicToolingItem[]
}

export const strategicTooling: StrategicToolingGroup[] = [
  {
    title: "CI/CD",
    items: [
      { id: "docker", title: "Docker", icon: "simple-icons:docker", iconClass: "text-blue-600" },
      { id: "github", title: "GitHub", icon: "simple-icons:github", iconClass: "text-gray-800 dark:text-white" },
      { id: "gitlab", title: "GitLab", icon: "simple-icons:gitlab", iconClass: "text-orange-600" },
      { id: "jenkins", title: "Jenkins", icon: "simple-icons:jenkins", iconClass: "text-gray-700 dark:text-gray-300" }
    ]
  },
  {
    title: "Auditing",
    items: [
      { id: "lighthouse", title: "Google Lighthouse (performance audits)", icon: "lucide:gauge", iconClass: "text-blue-600" },
      { id: "wcag", title: "WCAG (accessibility standards)", icon: "lucide:accessibility", iconClass: "text-emerald-600" }
    ]
  }
]
