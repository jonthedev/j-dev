export type PlatformTechCategory = "currentLab" | "roadmap"

export interface PlatformTechStackItem {
  id: string
  title: string
  icon?: string
  iconClass?: string
  category: PlatformTechCategory
}

export const platformTechStack: PlatformTechStackItem[] = [
  // Current Local AI Stack
  {
    id: "ollama",
    title: "Ollama",
    icon: "simple-icons:ollama",
    iconClass: "text-gray-700 dark:text-gray-300",
    category: "currentLab"
  },
  {
    id: "qwen-coder",
    title: "Qwen2.5-Coder",
    icon: "lucide:code",
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
    id: "gpu-node",
    title: "Private GPU Node",
    icon: "lucide:server",
    iconClass: "text-vue-600 dark:text-vue-400",
    category: "roadmap"
  }
]
