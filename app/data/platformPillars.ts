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
    headline: "Full-Lifecycle Modernization & Feature Engineering",
    body: "I engineer high-performance Vue systems with a 72% velocity increase. Whether architecting new Nuxt platforms or refactoring legacy debt into modern standards, I deliver months of manual roadmap progress in weeks.",
    metric: "🚀 40+ hours compressed to 11",
    tags: ["Nuxt", "Feature Engineering", "Architecture"],
    featured: true
  },
  {
    icon: "lucide:shield",
    headline: "100% Data Sovereignty & Private Inference",
    body: "Your codebase never leaves my local infrastructure. Using air-gapped LLMs (Ollama) and secure virtualization (Proxmox), I ensure total GDPR and IP compliance while orchestrating complex, agentic refactors.",
    metric: "🔒 0% Cloud Exposure / Private GPU Node",
    tags: ["Ollama", "Proxmox", "Security"]
  }
]
