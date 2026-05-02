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
    company: "JDev Online (B2B)",
    description: "Delivering Vue 3 and Nuxt 4 projects. Using hybrid Claude + local Ollama workflows for development pipelines.",
    icon: "i-lucide-briefcase"
  },
  {
    date: "Feb 2025 – Feb 2026",
    title: "Frontend Engineer",
    company: "TLX Technology",
    description: "Built real-time trading dashboards with Vue 3 and Nuxt. Introduced Playwright E2E testing and D3 charting for derivatives trading.",
    icon: "i-lucide-chart-line"
  },
  {
    date: "Aug 2024 – Feb 2025",
    title: "Frontend Engineer",
    company: "DPG Media",
    description: "Optimized Next.js for the country's largest job board. Built a centralized Tailwind design system adopted across national brands.",
    icon: "i-lucide-newspaper"
  },
  {
    date: "May 2022 – May 2024",
    title: "Frontend Consultant",
    company: "iO Tech Consultancy",
    description: "Core engineer for Traffic Verkeer (Website van het Jaar 2022). Architected Chakra UI library for Van Lanschot Kempen rebrand.",
    icon: "i-lucide-users"
  },
  {
    date: "May 2021 – May 2022",
    title: "Freelance Frontend Engineer",
    company: "JDev Online",
    description: "Delivered modern UI architectures and React/GraphQL integrations for various clients.",
    icon: "i-lucide-laptop"
  },
  {
    date: "Mar 2020 – May 2021",
    title: "Frontend Engineer",
    company: "Technology Catalogue",
    description: "Engineered technology-deployment matrix for B2B energy clients.",
    icon: "i-lucide-code"
  }
]
