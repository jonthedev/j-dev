export interface ServicePillar {
  icon: string
  headline: string
  body: string
  tags: string[]
}

export const platformPillars: ServicePillar[] = [
  {
    icon: "lucide:zap",
    headline: "AI-Augmented Development",
    body: "High-velocity development across the Vue ecosystem. Architecting Nuxt 4 platforms, engineering complex features, and delivering enterprise-grade results in a fraction of the standard time.",
    tags: ["Nuxt 4", "Vue 3", "Velocity"]
  },
  {
    icon: "lucide:shield",
    headline: "Secure Legacy Modernization",
    body: "Automate migrations from legacy stacks (React/Vue 2) to Nuxt 4. Refactored a legacy architecture in 11 hours (estimated 40+ manual) using an orchestrated AI pipeline.",
    tags: ["Migrations", "Refactoring", "Logic Translation"]
  },
  {
    icon: "lucide:server",
    headline: "100% Data Sovereignty",
    body: "Your codebase never leaves my local infrastructure. Air-gapped LLMs (Ollama) and secure virtualization (Proxmox/Tailscale) ensure total GDPR and IP compliance on-site or remotely.",
    tags: ["Ollama", "Proxmox", "Tailscale"]
  }
]
