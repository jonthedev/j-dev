export interface AboutProofTone {
  pulse: string
  orb: string
  icon: string
  title: string
  heading: string
  subtitle: string
}

export interface AboutProofItem {
  id: string
  icon: string
  /** Short label inside the orb. */
  title: string
  heading: string
  subtitle: string
  tone: AboutProofTone
}

/** Visual proof for About. Tools stay in Tech Stack. */
export const aboutProofItems: AboutProofItem[] = [
  {
    id: "award",
    icon: "lucide:award",
    title: "Award",
    heading: "ANWB Traffic Verkeer",
    subtitle: "Website van het Jaar 2022",
    tone: {
      pulse: "border-amber-400 dark:border-amber-300",
      orb: "border-amber-400 bg-amber-100 shadow-md shadow-amber-500/20 dark:border-amber-400 dark:bg-amber-950/80 dark:shadow-amber-400/10",
      icon: "text-amber-500 dark:text-amber-300",
      title: "text-amber-950 dark:text-amber-50",
      heading: "text-amber-900 dark:text-amber-200",
      subtitle: "text-amber-800/90 dark:text-amber-300/90"
    }
  },
  {
    id: "focus",
    icon: "lucide:layers",
    title: "Focus",
    heading: "Beyond the interface",
    subtitle: "Backend, Linux and infrastructure",
    tone: {
      pulse: "border-indigo-300/60 dark:border-indigo-500/40",
      orb: "border-indigo-200/80 bg-indigo-50/60 dark:border-indigo-800/50 dark:bg-indigo-950/30",
      icon: "text-indigo-500 dark:text-indigo-400",
      title: "text-indigo-800 dark:text-indigo-200",
      heading: "text-gray-700 dark:text-gray-300",
      subtitle: "text-gray-500 dark:text-gray-400"
    }
  },
  {
    id: "practice",
    icon: "lucide:server",
    title: "Practice",
    heading: "Self-hosted systems",
    subtitle: "Local AI and practical infrastructure",
    tone: {
      pulse: "border-teal-300/60 dark:border-teal-500/40",
      orb: "border-teal-200/80 bg-teal-50/60 dark:border-teal-800/50 dark:bg-teal-950/30",
      icon: "text-teal-500 dark:text-teal-400",
      title: "text-teal-800 dark:text-teal-200",
      heading: "text-gray-700 dark:text-gray-300",
      subtitle: "text-gray-500 dark:text-gray-400"
    }
  }
]
