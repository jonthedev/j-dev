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
  },
  {
    id: "anwb-traffic",
    img: "/project-anwb-traffic-verkeer.png",
    url: "https://www.anwb.nl/verkeer",
    github: null,
    title: "ANWB Traffic Verkeer",
    text: "High-traffic web application serving millions of users. Winner: Website van het Jaar 2022.",
    tech: [
      { id: "nextjs-1", icon: "simple-icons:nextdotjs", classname: "text-gray-800 dark:text-white" },
      { id: "perf-1", icon: "lucide:zap", classname: "text-amber-600" },
      { id: "scale-1", icon: "lucide:trending-up", classname: "text-emerald-600" },
      { id: "award-1", icon: "lucide:award", classname: "text-amber-600" }
    ]
  },
  {
    id: "van-lanschot",
    img: "/project-vanlanschot.png",
    url: "https://www.vanlanschotkempen.com/en-nl",
    github: null,
    title: "Van Lanschot Kempen",
    text: "Engineered a multi-brand Design System and reusable component library to drive a national re-brand strategy.",
    tech: [
      { id: "design-1", icon: "lucide:layers", classname: "text-violet-600" },
      { id: "nextjs-2", icon: "simple-icons:nextdotjs", classname: "text-gray-800 dark:text-white" },
      { id: "storybook-1", icon: "simple-icons:storybook", classname: "text-pink-500" },
      { id: "arch-1", icon: "lucide:building-2", classname: "text-slate-600" }
    ]
  },
  {
    id: "vacaturebank",
    img: "/project-vacaturebank.png",
    url: "https://www.nationalevacaturebank.nl/",
    github: null,
    title: "National Vacaturebank",
    text: "Scaling one of the Netherlands' largest job platforms, focusing on robust search infrastructure and cloud integration.",
    tech: [
      { id: "enterprise-1", icon: "lucide:building", classname: "text-indigo-600" },
      { id: "ts-3", icon: "simple-icons:typescript", classname: "text-blue-600" },
      { id: "aws-1", icon: "simple-icons:amazonaws", classname: "text-orange-600" },
      { id: "nextjs-3", icon: "simple-icons:nextdotjs", classname: "text-gray-800 dark:text-white" }
    ]
  }
]
