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
  /** Sector of the product. Omitted when the card is not a client industry. */
  industry?: string
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
  industry: "Trading",
  categories: ["Frontend"],
  intro: "Crypto derivatives exchange. I worked on and migrated the trading UI for futures and options, where the interface had to keep pace with the real-time order book.",
  bullets: [
    "Migrated the trading UI to Vue 3/Nuxt with Nuxt UI and built the Trading Operations panel in Vuetify.",
    "Accelerated operations onboarding by approximately 25%, while giving support teams clearer tools for managing customers.",
    "Built real-time D3.js charting and integrated the Thalex API for live market data."
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
    industry: "Mobility",
    categories: ["Frontend"],
    intro: "ANWB’s national traffic platform, used for live roads, incidents and routes across the Netherlands. Millions of people in the Netherlands open it. When the country moves at once, this surface has to stay fast.",
    bullets: [
      "Refactored the Traffic Verkeer style system from Less into styled-components on a product that absorbs national traffic spikes.",
      "The site won Best Website and Most Popular Website at Website van het Jaar 2022."
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
        id: "styled-anwb",
        icon: "simple-icons:styledcomponents",
        classname: "text-pink-400"
      }
    ]
  },
  {
    id: "dpg-media",
    img: "/project-nationale-vacaturebank.webp",
    url: "https://www.nationalevacaturebank.nl",
    github: null,
    title: "DPG Media",
    industry: "Recruitment",
    categories: ["Frontend"],
    intro: "Nationale Vacaturebank, the national job board inside DPG Media. Employers and candidates hit it at volume, and the same UI is embedded across one of the largest publishing groups in the Netherlands.",
    bullets: [
      "Led the brand-refresh style system in Tailwind, replacing a large legacy Sass codebase while the board stayed in production.",
      "Kept the React and Next.js web components stable so properties such as ad.nl could embed the job-board UI under the same load."
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
    industry: "Banking",
    categories: ["Frontend"],
    intro: "Dutch private bank and wealth manager. I worked on client-facing products for high-net-worth and institutional customers during a full rebrand.",
    bullets: [
      "Rolled out a Chakra UI design system across five applications as they moved toward one shared product surface.",
      "Kept that surface coherent across the bank’s backend and frontend teams while the brands consolidated."
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
      "Refined the migration into a production-quality site through hands-on frontend work and Cursor-assisted development.",
      "Part of ongoing homelab and local-inference work with the Home Lab Collective."
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

const ENTERPRISE_IDS = new Set(["anwb", "dpg-media"])

/** Largest consumer platforms. Rendered as the prominent feature cards. */
export const enterpriseProjects = pastProjects.filter(project => ENTERPRISE_IDS.has(project.id))

/** Remaining production apps, including the trading UI. */
export const supportingProjects = [
  featuredProject,
  ...pastProjects.filter(project => !ENTERPRISE_IDS.has(project.id))
]

/** Public asset paths for the JDev Online migration case study (PlatformProjects). */
export const jdevOnlineCaseStudyScreenshots = {
  whenThemeLight: "/jdev-online-dark.png",
  whenThemeDark: "/jdev-online-light.png"
} as const

export const architecturePlaceholders: ArchitecturePlaceholder[] = []
