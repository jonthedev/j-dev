/**
 * Icon management composable
 * Provides icon utilities, tech name mapping, and official brand colors
 */
export function useIcons() {
  // Official brand colors for tech badges (Tailwind: bg tint + text)
  const techBrandColorMap: Record<string, string> = {
    "simple-icons:vuedotjs": "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400",
    "simple-icons:nuxtdotjs": "bg-green-500/15 text-green-700 dark:text-green-400",
    "simple-icons:typescript": "bg-blue-600/15 text-blue-700 dark:text-blue-300",
    "simple-icons:tailwindcss": "bg-cyan-500/15 text-cyan-700 dark:text-cyan-400",
    "simple-icons:vitejs": "bg-purple-500/15 text-purple-700 dark:text-purple-400",
    "simple-icons:pinia": "bg-amber-500/15 text-amber-700 dark:text-amber-400",
    "simple-icons:javascript": "bg-yellow-400/20 text-yellow-800 dark:text-yellow-300",
    "simple-icons:react": "bg-cyan-400/15 text-cyan-700 dark:text-cyan-300",
    "simple-icons:nextdotjs": "bg-gray-800/15 text-gray-800 dark:bg-white/15 dark:text-white",
    "simple-icons:styledcomponents": "bg-pink-400/15 text-pink-700 dark:text-pink-300",
    "simple-icons:chakraui": "bg-teal-500/15 text-teal-700 dark:text-teal-400",
    "simple-icons:storybook": "bg-pink-500/15 text-pink-700 dark:text-pink-400",
    "simple-icons:sass": "bg-pink-500/15 text-pink-700 dark:text-pink-400",
    "simple-icons:amazonaws": "bg-orange-500/15 text-orange-700 dark:text-orange-400",
    "simple-icons:html5": "bg-orange-500/15 text-orange-700 dark:text-orange-400",
    "simple-icons:css3": "bg-blue-600/15 text-blue-700 dark:text-blue-300",
    "simple-icons:github": "bg-gray-800/15 text-gray-800 dark:bg-white/10 dark:text-white",
    "simple-icons:docker": "bg-blue-600/15 text-blue-700 dark:text-blue-300",
    "simple-icons:netlify": "bg-teal-500/15 text-teal-700 dark:text-teal-400",
    "simple-icons:vercel": "bg-gray-800/15 text-gray-800 dark:bg-white/10 dark:text-white",
    "lucide:activity": "bg-cyan-500/15 text-cyan-700 dark:text-cyan-400",
    "lucide:zap": "bg-amber-500/15 text-amber-700 dark:text-amber-400",
    "lucide:trending-up": "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400",
    "lucide:award": "bg-amber-500/15 text-amber-700 dark:text-amber-400",
    "lucide:layers": "bg-violet-500/15 text-violet-700 dark:text-violet-400",
    "lucide:building-2": "bg-slate-500/15 text-slate-700 dark:text-slate-400",
    "lucide:building": "bg-indigo-500/15 text-indigo-700 dark:text-indigo-400"
  }

  // Tech name mapping for better display
  const techNameMap: Record<string, string> = {
    "simple-icons:vuedotjs": "Vue 3",
    "simple-icons:nuxtdotjs": "Nuxt",
    "simple-icons:typescript": "TypeScript",
    "simple-icons:tailwindcss": "Tailwind CSS",
    "simple-icons:vitejs": "Vite",
    "simple-icons:pinia": "Pinia",
    "simple-icons:javascript": "JavaScript",
    "simple-icons:html5": "HTML5",
    "simple-icons:css3": "CSS3",
    "simple-icons:react": "React",
    "simple-icons:nextdotjs": "Next.js",
    "simple-icons:nodedotjs": "Node.js",
    "simple-icons:python": "Python",
    "simple-icons:postgresql": "PostgreSQL",
    "simple-icons:docker": "Docker",
    "simple-icons:git": "Git",
    "simple-icons:github": "GitHub",
    "simple-icons:gitlab": "GitLab",
    "simple-icons:vercel": "Vercel",
    "simple-icons:netlify": "Netlify",
    "simple-icons:googlecloud": "Google Cloud",
    "simple-icons:amazonaws": "AWS",
    "simple-icons:figma": "Figma",
    "simple-icons:adobexd": "Adobe XD",
    "simple-icons:adobephotoshop": "Photoshop",
    "simple-icons:visualstudiocode": "VS Code",
    "simple-icons:apple": "Apple",
    "simple-icons:microsoft": "Microsoft",
    "simple-icons:android": "Android",
    "simple-icons:ubuntu": "Ubuntu",
    "lucide:server": "Server",
    "lucide:database": "Database",
    "lucide:cloud": "Cloud",
    "lucide:shield": "Security",
    "lucide:zap": "Performance Engineering",
    "lucide:users": "Users",
    "lucide:mail": "Email",
    "lucide:phone": "Phone",
    "lucide:map-pin": "Location",
    "lucide:globe": "Global",
    "lucide:code": "Code",
    "lucide:terminal": "Terminal",
    "lucide:layers": "Design Systems",
    "lucide:package": "Package",
    "lucide:cog": "Settings",
    "lucide:moon": "Dark Mode",
    "lucide:sun": "Light Mode",
    "lucide:menu": "Menu",
    "lucide:x": "Close",
    "lucide:arrow-right": "Next",
    "lucide:arrow-left": "Previous",
    "lucide:eye": "View",
    "lucide:search": "Search",
    "lucide:download": "Download",
    "lucide:upload": "Upload",
    "lucide:external-link": "External Link",
    "lucide:link": "Link",
    "lucide:star": "Favorite",
    "lucide:heart": "Like",
    "lucide:share": "Share",
    "lucide:copy": "Copy",
    "lucide:trash": "Delete",
    "lucide:edit": "Edit",
    "lucide:plus": "Add",
    "lucide:minus": "Remove",
    "lucide:check": "Success",
    "lucide:x-circle": "Error",
    "lucide:alert-circle": "Warning",
    "lucide:info": "Info",
    "lucide:help-circle": "Help",
    "lucide:calendar": "Calendar",
    "lucide:clock": "Time",
    "lucide:bookmark": "Bookmark",
    "lucide:filter": "Filter",
    "lucide:sliders": "Options",
    "lucide:more-horizontal": "More",
    "lucide:more-vertical": "More Vertical",
    "lucide:chevron-right": "Expand Right",
    "lucide:chevron-left": "Expand Left",
    "lucide:chevron-up": "Expand Up",
    "lucide:chevron-down": "Scroll Down",
    "lucide:activity": "Real-time Data",
    "lucide:trending-up": "Scale",
    "lucide:award": "Award-Winning",
    "lucide:building-2": "Architecture",
    "lucide:building": "Enterprise Systems"
  }

  /**
   * Get human-readable tech name from icon identifier
   */
  const getTechName = (iconName: string): string => {
    return techNameMap[iconName] || iconName.split(":").pop() || iconName
  }

  /**
   * Get official brand color classes for tech badge (bg + text)
   * Falls back to neutral if icon not in map
   */
  const getTechBrandClass = (iconName: string): string => {
    return techBrandColorMap[iconName] ?? "bg-gray-500/10 text-gray-700 dark:text-gray-300"
  }

  /**
   * Get icon category/type
   */
  const getIconCategory = (iconName: string): string => {
    if (iconName.includes("simple-icons")) return "technology"
    if (iconName.includes("lucide")) return "ui"
    return "other"
  }

  /**
   * Check if icon is from a specific category
   */
  const isIconCategory = (iconName: string, category: string): boolean => {
    return getIconCategory(iconName) === category
  }

  /**
   * Get icon size presets
   */
  const iconSizes = {
    "xs": "0.875rem",
    "sm": "1rem",
    "md": "1.125rem",
    "lg": "1.25rem",
    "xl": "1.5rem",
    "2xl": "1.75rem",
    "3xl": "2rem"
  }

  /**
   * Get icon with specific size
   */
  const getSizedIcon = (iconName: string, size: keyof typeof iconSizes) => ({
    name: iconName,
    size: iconSizes[size]
  })

  return {
    techNameMap,
    techBrandColorMap,
    getTechName,
    getTechBrandClass,
    getIconCategory,
    isIconCategory,
    iconSizes,
    getSizedIcon
  }
}
