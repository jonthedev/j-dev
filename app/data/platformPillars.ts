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
    headline: "Migration & Feature Development",
    body: "I build Vue systems fast. A recent Nuxt 4 migration took 11 hours instead of the estimated 40+. I refactor legacy code into modern patterns and ship features that work.",
    metric: "40+ hours compressed to 11",
    tags: ["Nuxt", "Feature Engineering", "Architecture"],
    featured: true
  },
  {
    icon: "lucide:shield",
    headline: "Private Infrastructure",
    body: "Code never leaves my machines. Ollama runs locally. Proxmox handles virtualization. GDPR and IP compliance comes from the architecture, not a policy document.",
    metric: "0% Cloud Exposure",
    tags: ["Ollama", "Proxmox", "Security"]
  }
]
