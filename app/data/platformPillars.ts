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
    body: "Production Vue and Nuxt at Thalex. Production React and Next.js at DPG Media, ANWB, and Van Lanschot Kempen.",
    metric: "6+ years shipping UI",
    tags: ["Nuxt", "Vue 3", "TypeScript"],
    featured: true
  },
  {
    icon: "lucide:shield",
    headline: "Covering more of the stack",
    body: "Boot.dev DevOps path (Python, Linux, Git, Docker, Go, AWS, Kubernetes). Linux administration on a remote Ubuntu server. Home Lab Collective and local AI with Ollama.",
    metric: "Boot.dev plus Ubuntu",
    tags: ["Linux", "Python", "Ollama"]
  }
]
