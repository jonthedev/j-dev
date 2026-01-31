import type { TechStackItem } from './techStack'

export const platformTechStack: TechStackItem[] = [
  { id: 'python', title: 'Python', icon: 'simple-icons:python', iconClass: 'text-blue-600', category: 'primary' },
  { id: 'docker', title: 'Docker', icon: 'simple-icons:docker', iconClass: 'text-blue-500', category: 'primary' },
  { id: 'kubernetes', title: 'Kubernetes', icon: 'simple-icons:kubernetes', iconClass: 'text-blue-600', category: 'primary' },
  { id: 'terraform', title: 'Terraform', icon: 'simple-icons:terraform', iconClass: 'text-purple-600', category: 'primary' },
  { id: 'github-actions', title: 'GitHub Actions', icon: 'simple-icons:githubactions', iconClass: 'text-gray-700 dark:text-gray-300', category: 'primary' },
  { id: 'linux', title: 'Linux', icon: 'simple-icons:linux', iconClass: 'text-gray-800 dark:text-white', category: 'primary' },
  { id: 'bash', title: 'Bash', icon: 'simple-icons:gnubash', iconClass: 'text-gray-700 dark:text-gray-300', category: 'primary' },
  { id: 'ollama', title: 'Ollama', icon: 'simple-icons:ollama', iconClass: 'text-gray-700 dark:text-gray-300', category: 'secondary' },
  { id: 'qwen', title: 'Qwen', icon: 'simple-icons:alibabadotcom', iconClass: 'text-orange-500', category: 'secondary' },
  { id: 'opencode', title: 'OpenCode', icon: 'lucide:code-2', iconClass: 'text-vue-600 dark:text-vue-400', category: 'secondary' },
  { id: 'gitlab-ci', title: 'GitLab CI', icon: 'simple-icons:gitlab', iconClass: 'text-orange-600', category: 'secondary' },
  { id: 'prometheus', title: 'Prometheus', icon: 'simple-icons:prometheus', iconClass: 'text-orange-500', category: 'secondary' },
  { id: 'grafana', title: 'Grafana', icon: 'simple-icons:grafana', iconClass: 'text-orange-500', category: 'secondary' },
  { id: 'aws', title: 'AWS', icon: 'simple-icons:amazonaws', iconClass: 'text-orange-500', category: 'secondary' }
]
