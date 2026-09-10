export interface ServicePillar {
  icon: string
  headline: string
  body: string
  metric?: string
  tags: string[]
  featured?: boolean
}

export const platformPillars: ServicePillar[] = [
  {
    icon: "lucide:zap",
    headline: "Product UI",
    body: "Production Vue and Nuxt at Thalex. Production React and Next.js at DPG Media, ANWB, and Van Lanschot Kempen. ANWB Traffic Verkeer won Website van het Jaar 2022.",
    metric: "6+ years shipping UI",
    tags: ["Nuxt", "Vue 3", "TypeScript"],
    featured: true
  },
  {
    icon: "lucide:shield",
    headline: "DevOps depth",
    body: "Boot.dev DevOps path. Python, Linux, Git, Go, SQL, Docker, AWS, CI/CD, and Kubernetes. Linux administration for ToekomstTech. Home Lab Collective and local AI.",
    metric: "UI through deploy",
    tags: ["Go", "Docker", "Kubernetes"]
  }
]
