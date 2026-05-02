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
    text: "Real-time derivatives trading dashboards. Options, futures, and perpetuals built with Vue and Nuxt.",
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
  },
  {
    id: "anwb",
    img: "",
    url: "https://www.anwb.nl/verkeer",
    github: null,
    title: "ANWB — anwb.nl/verkeer",
    text: "Core engineer for the Dutch motoring association's traffic platform. Won Website van het Jaar 2022. High-traffic React application with real-time traffic data, route planning, and live incident reporting.",
    tech: [
      {
        id: "react-anwb",
        icon: "simple-icons:react",
        classname: "text-cyan-400"
      },
      {
        id: "ts-anwb",
        icon: "simple-icons:typescript",
        classname: "text-blue-600"
      },
      {
        id: "tailwind-anwb",
        icon: "simple-icons:tailwindcss",
        classname: "text-cyan-400"
      }
    ]
  },
  {
    id: "dpg-media",
    img: "",
    url: "https://www.nationalevacaturebank.nl",
    github: null,
    title: "DPG Media — Nationale Vacaturebank",
    text: "High-traffic job platform under DPG Media. Built a centralized Tailwind design system adopted across multiple national brands. Performance optimization and accessibility improvements.",
    tech: [
      {
        id: "react-dpg",
        icon: "simple-icons:react",
        classname: "text-cyan-400"
      },
      {
        id: "ts-dpg",
        icon: "simple-icons:typescript",
        classname: "text-blue-600"
      },
      {
        id: "tailwind-dpg",
        icon: "simple-icons:tailwindcss",
        classname: "text-cyan-400"
      }
    ]
  },
  {
    id: "van-lanschot",
    img: "",
    url: "https://www.vanlanschotkempen.com",
    github: null,
    title: "Van Lanschot Kempen",
    text: "Financial services platform at iO. Enterprise-grade frontend work for a wealth management and banking platform. Focus on design system consistency and code quality.",
    tech: [
      {
        id: "react-vlk",
        icon: "simple-icons:react",
        classname: "text-cyan-400"
      },
      {
        id: "ts-vlk",
        icon: "simple-icons:typescript",
        classname: "text-blue-600"
      },
      {
        id: "tailwind-vlk",
        icon: "simple-icons:tailwindcss",
        classname: "text-cyan-400"
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
      "Modular NestJS API architecture with type-safe DTOs, Prisma-managed PostgreSQL, and Swagger/OpenAPI documentation. Active learning project — building toward production-ready patterns.",
    keyFeatures: [
      "Modular Domain Design (Clean Architecture)",
      "Contract-First API Documentation (Swagger/OpenAPI)",
      "Type-Safe Persistence Layer (Prisma & PostgreSQL)",
      "Type-Safe DTOs for reliable API to client integration"
    ],
    swaggerUrl: null,
    githubUrl: null
  }
]
