export interface CareerTimelineItem {
  date: string
  title: string
  company: string
  description: string
  icon: string
}

export const careerTimeline: CareerTimelineItem[] = [
  {
    date: "Mar 2026 – Present",
    title: "Principal Frontend Engineer",
    company: "JDev Online",
    description:
      "Vue 3 & Nuxt for B2B clients. Claude + Ollama workflows for refactors and pipelines.",
    icon: "i-lucide-briefcase"
  },
  {
    date: "Feb 2025 – Feb 2026",
    title: "Frontend Engineer",
    company: "TLX Technology",
    description:
      "Trading UI with Vue/Nuxt, TradingView and D3, Playwright E2E for derivatives.",
    icon: "i-lucide-chart-line"
  },
  {
    date: "Aug 2024 – Feb 2025",
    title: "Frontend Engineer",
    company: "DPG Media",
    description:
      "Next.js performance at national job-board scale and Tailwind design systems adopted across multiple brands.",
    icon: "i-lucide-newspaper"
  },
  {
    date: "May 2022 – May 2024",
    title: "Frontend Consultant",
    company: "iO Tech Consultancy",
    description:
      "Traffic Verkeer (Website van het Jaar 2022). Chakra UI library for Van Lanschot Kempen.",
    icon: "i-lucide-users"
  },
  {
    date: "May 2021 – May 2022",
    title: "Freelance Frontend Engineer",
    company: "JDev Online",
    description:
      "React/GraphQL integrations and UI foundations for client projects.",
    icon: "i-lucide-laptop"
  },
  {
    date: "Mar 2020 – May 2021",
    title: "Frontend Engineer",
    company: "Technology Catalogue",
    description: "Deployment matrix tooling for B2B energy clients.",
    icon: "i-lucide-code"
  }
]
