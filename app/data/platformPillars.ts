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
    body: "I build Vue systems fast. A recent Nuxt 4 migration took 11 hours instead of the estimated 40+. That was my own portfolio site, but the same approach applies to client migrations. Five years of React before switching to Vue. I know what good frontend looks like.",
    metric: "40+ hours compressed to 11",
    tags: ["Nuxt", "Vue 3", "Migration"],
    featured: true
  },
  {
    icon: "lucide:shield",
    headline: "Private Development",
    body: "GDPR-compliant workflow: ALL client code on local LLMs (Ollama), Claude ONLY for reasoning tasks. This isn't a service I sell yet. It's how I build. Working through Unlearn.dev courses on workflows, RAG, and AI testing. The infrastructure path is: local Ollama now, private GPU node later via Proxmox.",
    metric: "Local-first, hybrid AI",
    tags: ["Ollama", "Proxmox", "Privacy"]
  }
]
