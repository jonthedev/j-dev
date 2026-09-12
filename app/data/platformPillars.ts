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
    body: "Remote Linux for real workloads.\nContainers, cloud, and CI/CD in the same delivery path.",
    metric: "UI through deploy",
    tags: ["Linux", "Docker", "Kubernetes"]
  }
]
