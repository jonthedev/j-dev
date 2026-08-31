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
    headline: "Vue Delivery Speed",
    body: "I ship across React, Next.js, Vue, and Nuxt. A recent portfolio migration took 11 hours instead of the estimated 40+. React and Next.js are at the core from years at DPG Media and iO. Vue and Nuxt power recent production work at Thalex.",
    metric: "40+ hours compressed to 11",
    tags: ["Nuxt", "Vue 3", "Migration"],
    featured: true
  },
  {
    icon: "lucide:shield",
    headline: "Private Development",
    body: "A pragmatic lab setup for agentic workflows (local + cloud). This is where I build and validate patterns, tooling, and workflows that I apply to client work. The infrastructure path is: local-first now, private GPU node later via Proxmox.",
    metric: "Local-first, hybrid AI",
    tags: ["Ollama", "Proxmox", "Privacy"]
  }
]
