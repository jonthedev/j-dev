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
    date: "Mar 2026 – Present",
    title: "Principal Frontend Engineer",
    company: "JDev Online",
    description: "Independent ZZP · B2B frontend contracting",
    icon: "i-lucide-briefcase"
  },
  {
    date: "Feb 2025 – Feb 2026",
    title: "Frontend Engineer",
    company: "TLX Technology",
    description: "Finance · crypto derivatives exchange (Thalex)",
    icon: "i-lucide-chart-line"
  },
  {
    date: "Aug 2024 – Feb 2025",
    title: "Frontend Engineer",
    company: "DPG Media",
    description:
      "Media & recruitment · B2C job platform (Nationale Vacaturebank)",
    icon: "i-lucide-newspaper"
  },
  {
    date: "May 2022 – May 2024",
    title: "Frontend Consultant",
    company: "iO Tech Consultancy",
    description:
      "Digital consultancy · ANWB & Van Lanschot Kempen (banking)",
    icon: "i-lucide-users"
  },
  {
    date: "May 2021 – May 2022",
    title: "Freelance Frontend Engineer",
    company: "JDev Online",
    description: "ZZP · multi-client frontend delivery",
    icon: "i-lucide-laptop"
  },
  {
    date: "Mar 2020 – May 2021",
    title: "Frontend Engineer",
    company: "Technology Catalogue",
    description: "Startup · B2B gas & energy sector (Delft)",
    icon: "i-lucide-code"
  }
]
