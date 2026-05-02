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

export const featuredProject: ProjectItem = {
  id: "thalex",
  img: "/project-tlx-light.png",
  imgDark: "/project-tlx-dark.png",
  url: "https://thalex.com/exchange/futures?underlying=BTCUSD&type=perpetual",
  github: null,
  title: "Thalex",
  text: "Real-time derivatives trading dashboards handling live market data. Options, futures, and perpetuals built with Vue and Nuxt for professional traders. Introduced Playwright E2E testing and Maizzle email templates.",
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

export const pastProjects: ProjectItem[] = [
  {
    id: "anwb",
    img: "/project-traffic-verkeer.png",
    url: "https://www.anwb.nl/verkeer",
    github: null,
    title: "Traffic Verkeer",
    text: "Market-leading traffic platform for millions of daily commuters. Won Website van het Jaar 2022. High-traffic Next.js app with real-time incident reporting and Cypress testing.",
    tech: [
      {
        id: "next-anwb",
        icon: "simple-icons:nextdotjs",
        classname: "text-gray-900 dark:text-white"
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
    img: "/project-nationale-vacaturebank.png",
    url: "https://www.nationalevacaturebank.nl",
    github: null,
    title: "DPG Media",
    text: "Nationale Vacaturebank, the country's largest job board with millions of monthly visits. Built a centralized Tailwind design system adopted across multiple national brands.",
    tech: [
      {
        id: "next-dpg",
        icon: "simple-icons:nextdotjs",
        classname: "text-gray-900 dark:text-white"
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
    img: "/project-vlk.png",
    url: "https://www.vanlanschotkempen.com/nl-nl",
    github: null,
    title: "Van Lanschot Kempen",
    text: "Secure, data-intensive wealth management platform for high-net-worth clients. Next.js and React frontend built via iO consultancy, featuring a cross-team Chakra UI library for the rebrand.",
    tech: [
      {
        id: "next-vlk",
        icon: "simple-icons:nextdotjs",
        classname: "text-gray-900 dark:text-white"
      },
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
    description:
      "Modular NestJS API architecture with type-safe DTOs, Prisma-managed PostgreSQL, and Swagger/OpenAPI documentation. Active learning project building toward production-ready patterns.",
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
