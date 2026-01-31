import type { TechStackItem } from './techStack'

export const platformTechStack: TechStackItem[] = [
  { id: 'python', title: 'Python', icon: 'simple-icons:python', iconClass: 'text-blue-600', category: 'primary' },
  { id: 'ollama', title: 'Ollama', icon: 'simple-icons:ollama', iconClass: 'text-gray-700 dark:text-gray-300', category: 'primary' },
  { id: 'qwen', title: 'Qwen', icon: 'simple-icons:alibabadotcom', iconClass: 'text-orange-500', category: 'primary' },
  { id: 'opencode', title: 'OpenCode', icon: 'lucide:code-2', iconClass: 'text-vue-600 dark:text-vue-400', category: 'primary' },
  { id: 'proxmox', title: 'Proxmox', icon: 'simple-icons:proxmox', iconClass: 'text-orange-600', category: 'secondary' }
]
