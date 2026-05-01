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
    id: "claude",
    title: "Claude (Anthropic)",
    icon: "simple-icons:anthropic",
    iconClass: "text-gray-700 dark:text-gray-300",
    category: "currentLab"
  },
  {
    id: "ollama-qwen",
    title: "Ollama · Qwen2.5-Coder",
    icon: "simple-icons:ollama",
    iconClass: "text-gray-700 dark:text-gray-300",
    category: "currentLab"
  },
  {
    id: "linux-neovim",
    title: "Linux · Neovim",
    icon: "simple-icons:neovim",
    iconClass: "text-green-600 dark:text-green-400",
    category: "currentLab"
  },
  {
    id: "cursor",
    title: "Cursor",
    icon: "simple-icons:cursor",
    iconClass: "text-gray-700 dark:text-gray-300",
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
