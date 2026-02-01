export type PlatformTechCategory = 'orchestration' | 'languages' | 'infrastructure' | 'dx'

export interface PlatformTechStackItem {
  id: string
  title: string
  icon?: string
  iconClass?: string
  category: PlatformTechCategory
}

export const platformTechStack: PlatformTechStackItem[] = [
  // AI Orchestration (Local-First)
  { id: 'ollama', title: 'Ollama', icon: 'simple-icons:ollama', iconClass: 'text-gray-700 dark:text-gray-300', category: 'orchestration' },
  { id: 'qwen', title: 'Qwen 2.5', icon: 'lucide:brain-circuit', iconClass: 'text-orange-500', category: 'orchestration' },
  { id: 'opencode', title: 'OpenCode', icon: 'lucide:terminal', iconClass: 'text-vue-600 dark:text-vue-400', category: 'orchestration' },
  // Platform Languages
  { id: 'go', title: 'Go', icon: 'simple-icons:go', iconClass: 'text-sky-500', category: 'languages' },
  { id: 'python', title: 'Python', icon: 'simple-icons:python', iconClass: 'text-[#306998]', category: 'languages' },
  // Infrastructure & Virtualization
  { id: 'proxmox', title: 'Proxmox VE', icon: 'simple-icons:proxmox', iconClass: 'text-orange-600', category: 'infrastructure' },
  { id: 'docker', title: 'Docker', icon: 'simple-icons:docker', iconClass: 'text-blue-500', category: 'infrastructure' },
  { id: 'utm', title: 'UTM', icon: 'lucide:monitor', iconClass: 'text-gray-600 dark:text-gray-400', category: 'infrastructure' },
  // Agentic Developer Experience
  { id: 'cursor', title: 'Cursor', icon: 'simple-icons:cursor', iconClass: 'text-gray-700 dark:text-gray-300', category: 'dx' }
]
