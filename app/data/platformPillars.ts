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
    headline: "Systems and DevOps",
    body: "Systems admin for ToekomstTech. Containers, cloud, CI/CD, and Kubernetes in the toolkit. Home Lab Collective and local AI.",
    metric: "Admin plus platform",
    tags: ["Linux", "Docker", "Kubernetes"]
  }
]
