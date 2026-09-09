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
  text: "Trading UI on Vue 3 and Nuxt for a crypto derivatives exchange. Exchange APIs, real-time D3.js charting, and the internal operations panel for Trading Operations.",
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
    },
    {
      id: "vitest-thalex",
      icon: "simple-icons:vitest",
      classname: "text-pink-500"
    },
    {
      id: "pinia-thalex",
      icon: "simple-icons:pinia",
      classname: "text-yellow-500"
    },
    {
      id: "playwright-thalex",
      icon: "simple-icons:playwright",
      classname: "text-purple-600"
    }
  ]
}

export const pastProjects: ProjectItem[] = [
  {
    id: "anwb",
    img: "/project-traffic-verkeer.png",
    url: "https://www.anwb.nl/verkeer",
    github: null,
    title: "ANWB Traffic Verkeer",
    text: "Traffic platform for millions of daily users. Platform won Website van het Jaar 2022.",
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
      },
      {
        id: "cypress-anwb",
        icon: "simple-icons:cypress",
        classname: "text-red-500"
      }
    ]
  },
  {
    id: "dpg-media",
    img: "/project-nationale-vacaturebank.png",
    url: "https://www.nationalevacaturebank.nl",
    github: null,
    title: "DPG Media",
    text: "Nationale Vacaturebank. Performance work on Next.js for a large Dutch job board.",
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
    text: "Chakra UI component library for a private bank during a company-wide rebrand.",
    tech: [
      {
        id: "chakra-vlk",
        icon: "simple-icons:chakraui",
        classname: "text-teal-500"
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
        id: "storybook-vlk",
        icon: "simple-icons:storybook",
        classname: "text-pink-500"
      }
    ]
  }
]

/** Public asset paths for the JDev Online migration case study (PlatformProjects). */
export const jdevOnlineCaseStudyScreenshots = {
  whenThemeLight: "/jdev-online-dark.png",
  whenThemeDark: "/jdev-online-light.png"
} as const

export const architecturePlaceholders: ArchitecturePlaceholder[] = []
