interface TechItem {
  id: string
  icon: string
  classname: string
}

export interface ProjectItem {
  id: string
  img: string
  url: string
  github: string | null
  title: string
  text: string
  tech: TechItem[]
}

export interface ArchitecturePlaceholder {
  id: string
  title: string
  status: "inProgress"
  /** Prominent badge e.g. "Live Technical Demo" */
  badge?: string
  description: string
  /** Key features list (Clean Architecture, Swagger, etc.) */
  keyFeatures: string[]
  /** Optional link to Swagger/OpenAPI docs */
  swaggerUrl?: string | null
  /** Optional link to GitHub repo */
  githubUrl?: string | null
}

export const projects: ProjectItem[] = [
  {
    id: "thalex",
    img: "/project-thalex.png",
    url: "https://thalex.com/",
    github: null,
    title: "Thalex",
    text: "Derivatives trading platform — options, futures & perpetuals. Built with Vue/Nuxt and real-time data visualization.",
    tech: [
      { id: "vue-thalex", icon: "simple-icons:vuedotjs", classname: "text-green-500" },
      { id: "nuxt-thalex", icon: "simple-icons:nuxtdotjs", classname: "text-green-600" },
      { id: "ts-thalex", icon: "simple-icons:typescript", classname: "text-blue-600" },
      { id: "realtime-thalex", icon: "lucide:activity", classname: "text-cyan-600" }
    ]
  }
]

export const architecturePlaceholders: ArchitecturePlaceholder[] = [
  {
    id: "nestjs-system",
    title: "Modular B2B API Architecture",
    status: "inProgress",
    badge: "Live Technical Demo",
    description: "A production-ready NestJS implementation demonstrating modular design, strict type-safety, and automated OpenAPI documentation. Built as a reference foundation for high-performance Vue/Nuxt ecosystems.",
    keyFeatures: [
      "Modular Domain Design (Clean Architecture)",
      "Contract-First Documentation (Swagger/OpenAPI)",
      "Persistence Layer (PostgreSQL & TypeORM)",
      "The Type-Safe Bridge (Shared DTOs for Vue 3/Nuxt 4)"
    ],
    swaggerUrl: null,
    githubUrl: null
  }
]
