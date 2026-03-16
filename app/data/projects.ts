interface TechItem {
  id: string
  icon: string
  classname: string
}

export interface ProjectItem {
  id: string
  img: string
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
      {
        id: "vue-thalex",
        icon: "simple-icons:vuedotjs",
        classname: "text-green-500"
      },
      {
        id: "nuxt-thalex",
        icon: "simple-icons:nuxtdotjs",
        classname: "text-green-600"
      },
      {
        id: "ts-thalex",
        icon: "simple-icons:typescript",
        classname: "text-blue-600"
      },
      {
        id: "realtime-thalex",
        icon: "lucide:activity",
        classname: "text-cyan-600"
      }
    ]
  }
]

export const architecturePlaceholders: ArchitecturePlaceholder[] = [
  {
    id: "nestjs-system",
    title: "Technical Blueprint: Type-Safe Modular API",
    status: "inProgress",
    badge: "Live Technical Demo",
    description:
      "Modular NestJS API architecture with type-safe DTOs, Prisma-managed PostgreSQL, and Swagger/OpenAPI documentation. Production-ready, integration-ready foundation for any frontend.",
    keyFeatures: [
      "Modular Domain Design (Clean Architecture)",
      "Contract-First API Documentation (Swagger/OpenAPI)",
      "Type-Safe Persistence Layer (Prisma & PostgreSQL)",
      "Type-Safe DTOs for reliable API → client integration"
    ],
    swaggerUrl: null,
    githubUrl: null
  }
]
