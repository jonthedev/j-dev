interface TechItem {
  id: string
  icon: string
  classname: string
  /** Override the icon-derived badge label when it would collide with another card. */
  label?: string
}

export type ProjectCategory = "Frontend" | "AI"

export interface ProjectItem {
  id: string
  img: string
  imgDark?: string
  url: string | null
  github: string | null
  title: string
  categories: ProjectCategory[]
  intro: string
  bullets: string[]
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
  img: "/project-tlx-light.webp",
  imgDark: "/project-tlx-dark.webp",
  url: "https://thalex.com/exchange/futures?underlying=BTCUSD&type=perpetual",
  github: null,
  title: "Thalex",
  categories: ["Frontend"],
  intro: "Crypto derivatives exchange. Traders buy and sell futures and options on a professional trading platform.",
  bullets: [
    "Migrated the trading UI to Vue 3/Nuxt with Nuxt UI and built the Trading Operations panel in Vuetify.",
    "About 25% faster onboarding for ops, plus clearer tools for supporting customers.",
    "Real-time D3.js charting and Thalex API integration."
  ],
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
    img: "/project-traffic-verkeer.webp",
    url: "https://www.anwb.nl/verkeer",
    github: null,
    title: "ANWB Traffic Verkeer",
    categories: ["Frontend"],
    intro: "ANWB’s national traffic and travel platform. Millions of people in the Netherlands check live traffic, road conditions, and route info here every day.",
    bullets: [
      "Refactored the Less-based style system into styled-components for Traffic Verkeer (millions of daily users).",
      "The product won Best Website and Most Popular Website at Website van het Jaar 2022."
    ],
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
    img: "/project-nationale-vacaturebank.webp",
    url: "https://www.nationalevacaturebank.nl",
    github: null,
    title: "DPG Media",
    categories: ["Frontend"],
    intro: "Nationale Vacaturebank is a large Dutch job board within DPG Media, connecting employers and candidates across major publishing brands.",
    bullets: [
      "Led the Nationale Vacaturebank brand-refresh style system in Tailwind, shrinking a large legacy Sass codebase.",
      "Maintained React/Next.js and web components so other DPG properties (for example ad.nl) could embed job-board UI."
    ],
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
    img: "/project-vlk.webp",
    url: "https://www.vanlanschotkempen.com/nl-nl",
    github: null,
    title: "Van Lanschot Kempen",
    categories: ["Frontend"],
    intro: "Dutch private bank and wealth manager. Client-facing digital products for high-net-worth and institutional customers.",
    bullets: [
      "Rolled out a Chakra UI design system while five applications were merged into one during a company-wide rebrand.",
      "Paired daily with the client's frontend engineer alongside their native team (2 backend, 1 frontend)."
    ],
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
  },
  {
    id: "this-site",
    img: "/project-this-site-light.webp",
    imgDark: "/project-this-site-dark.webp",
    url: null,
    github: null,
    title: "This Site",
    categories: ["Frontend", "AI"],
    intro: "Own portfolio site, migrated from React to Nuxt 4 / Nuxt UI.",
    bullets: [
      "Ran the migration locally using a self-hosted homelab: Ollama serving Qwen models, driven through QwenCode and OpenCode. No cloud AI API in the loop.",
      "Refined the AI-driven migration into production quality using Cursor and hands-on frontend work.",
      "Part of ongoing homelab and local-inference work alongside Amsterdam AI Tinkerers and the Home Lab Collective."
    ],
    tech: [
      {
        id: "nuxt-site",
        icon: "simple-icons:nuxtdotjs",
        classname: "text-green-600",
        label: "Nuxt 4"
      },
      {
        id: "nuxtui-site",
        icon: "lucide:panels-top-left",
        classname: "text-green-600",
        label: "Nuxt UI"
      },
      {
        id: "ts-site",
        icon: "simple-icons:typescript",
        classname: "text-blue-600"
      },
      {
        id: "ollama-site",
        icon: "simple-icons:ollama",
        classname: "text-gray-700 dark:text-gray-300",
        label: "Ollama"
      },
      {
        id: "qwencode-site",
        icon: "lucide:sparkles",
        classname: "text-amber-500",
        label: "QwenCode"
      },
      {
        id: "opencode-site",
        icon: "lucide:terminal",
        classname: "text-emerald-600",
        label: "OpenCode"
      },
      {
        id: "cursor-site",
        icon: "simple-icons:cursor",
        classname: "text-gray-800 dark:text-gray-200",
        label: "Cursor"
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
