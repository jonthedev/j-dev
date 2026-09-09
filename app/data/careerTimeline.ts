export interface CareerTimelineItem {
  date: string
  title: string
  company: string
  /** Industry / context — keep short; detailed work lives under Projects */
  description: string
  icon: string
}

export const careerTimeline: CareerTimelineItem[] = [
  {
    date: "Feb 2026 – Present",
    title: "Software Engineer",
    company: "JDev Online",
    description: "ZZP · Boot.dev, Ubuntu, Home Lab Collective",
    icon: "i-lucide-briefcase"
  },
  {
    date: "Feb 2025 – Feb 2026",
    title: "Senior Frontend Engineer",
    company: "TLX Technology",
    description: "Thalex, crypto derivatives exchange",
    icon: "i-lucide-chart-line"
  },
  {
    date: "Aug 2024 – Feb 2025",
    title: "Frontend Engineer",
    company: "DPG Media",
    description: "Nationale Vacaturebank",
    icon: "i-lucide-newspaper"
  },
  {
    date: "May 2022 – May 2024",
    title: "Frontend Consultant",
    company: "iO",
    description: "ANWB and Van Lanschot Kempen",
    icon: "i-lucide-users"
  },
  {
    date: "May 2021 – May 2022",
    title: "Frontend Developer",
    company: "JDev Online",
    description: "Frontend for j-dev.online",
    icon: "i-lucide-laptop"
  },
  {
    date: "Mar 2020 – May 2021",
    title: "Frontend Engineer",
    company: "TechnologyCatalogue",
    description: "B2B energy marketplace",
    icon: "i-lucide-code"
  }
]
