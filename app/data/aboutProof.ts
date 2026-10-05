export interface AboutProofTone {
  pulse: string
  orb: string
  icon: string
  title: string
  caption: string
}

export interface AboutProofItem {
  id: string
  icon: string
  title: string
  /** Lines under the circle. Story, not a tech dump. */
  captions: string[]
  tone: AboutProofTone
}

/** Visual proof for About. Tools stay in Tech Stack. */
export const aboutProofItems: AboutProofItem[] = [
  {
    id: "award",
    icon: "lucide:award",
    title: "Award",
    captions: [
      "ANWB Traffic Verkeer",
      "Website van het Jaar 2022"
    ],
    tone: {
      pulse: "border-amber-400 dark:border-amber-300",
      orb: "border-amber-300/90 bg-amber-50/90 dark:border-amber-700 dark:bg-amber-950/50",
      icon: "text-amber-600 dark:text-amber-400",
      title: "text-amber-950 dark:text-amber-100",
      caption: "text-amber-800 dark:text-amber-300"
    }
  },
  {
    id: "devops",
    icon: "lucide:server",
    title: "Systems",
    captions: [
      "Beyond the interface",
      "Backend, Linux and infrastructure"
    ],
    tone: {
      pulse: "border-indigo-400 dark:border-indigo-300",
      orb: "border-indigo-300/90 bg-indigo-50/90 dark:border-indigo-700 dark:bg-indigo-950/50",
      icon: "text-indigo-600 dark:text-indigo-400",
      title: "text-indigo-950 dark:text-indigo-100",
      caption: "text-indigo-800 dark:text-indigo-300"
    }
  },
  {
    id: "homelab",
    icon: "lucide:house",
    title: "Home Lab",
    captions: [
      "Self-hosted systems",
      "Local AI and practical infrastructure"
    ],
    tone: {
      pulse: "border-teal-400 dark:border-teal-300",
      orb: "border-teal-300/90 bg-teal-50/90 dark:border-teal-700 dark:bg-teal-950/50",
      icon: "text-teal-600 dark:text-teal-400",
      title: "text-teal-950 dark:text-teal-100",
      caption: "text-teal-800 dark:text-teal-300"
    }
  }
]
