export type PlatformTechCategory = "currentLab" | "roadmap"

export interface PlatformTechStackItem {
  id: string
  title: string
  icon?: string
  iconClass?: string
  category: PlatformTechCategory
}

export const platformTechStack: PlatformTechStackItem[] = [
  // Current Lab (Mac-Native)
  {
    id: "ollama",
    title: "Ollama",
    icon: "simple-icons:ollama",
    iconClass: "text-gray-700 dark:text-gray-300",
    category: "currentLab"
  },
  {
    id: "cursor",
    title: "Cursor",
    icon: "simple-icons:cursor",
    iconClass: "text-gray-700 dark:text-gray-300",
    category: "currentLab"
  },
  {
    id: "private-inference",
    title: "Private Local Inference",
    icon: "lucide:brain-circuit",
    iconClass: "text-orange-500",
    category: "currentLab"
  },
  // Infrastructure Roadmap
  {
    id: "proxmox",
    title: "Proxmox VE",
    icon: "simple-icons:proxmox",
    iconClass: "text-orange-600",
    category: "roadmap"
  },
  {
    id: "tailscale",
    title: "Tailscale",
    icon: "lucide:shield-check",
    iconClass: "text-gray-600 dark:text-gray-400",
    category: "roadmap"
  },
  {
    id: "system-design",
    title: "System Design",
    icon: "lucide:network",
    iconClass: "text-vue-600 dark:text-vue-400",
    category: "roadmap"
  }
]
