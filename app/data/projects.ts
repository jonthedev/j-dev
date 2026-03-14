interface TechItem {
  id: string
  icon: string
  classname: string
}

export interface ProjectItem {
  id: string
  img: string
  /** Optional dark-mode image; shown when site theme is dark */
  imgDark?: string
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
    img: "/project-tlx-light.png",
    imgDark: "/project-tlx-dark.png",
    url: "https://thalex.com/exchange/futures?underlying=BTCUSD&type=perpetual",
    github: null,
    title: "Thalex",
    text: "Vue/Nuxt real-time data visualization for derivatives trading—options, futures & perpetuals.",
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
    title: "Technical Blueprint: Modular B2B API Architecture",
    status: "inProgress",
    badge: "Live Technical Demo",
    description: "Modular NestJS API architecture with type-safe DTOs and Swagger/OpenAPI documentation. Production-ready foundation for Vue 3 and Nuxt 4 applications.",
    keyFeatures: [
      "Modular Domain Design (Clean Architecture)",
      "Contract-First Documentation (Swagger/OpenAPI)",
      "Persistence Layer (PostgreSQL & TypeORM)",
      "Type-Safe DTOs for Vue 3 / Nuxt 4"
    ],
    swaggerUrl: null,
    githubUrl: null
  }
]
