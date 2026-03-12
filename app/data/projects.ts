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
  description: string
  tech: string[]
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
    title: "NestJS System Architecture",
    status: "inProgress",
    description: "Modular backend architecture with type-safe DTOs, Swagger/OpenAPI documentation, and PostgreSQL persistence. Built for scalability and maintainability.",
    tech: ["Type-safe DTOs", "Swagger", "Modular Architecture", "NestJS", "PostgreSQL"]
  }
]
