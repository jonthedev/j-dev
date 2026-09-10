export interface AboutProofItem {
  id: string
  icon: string
  title: string
  /** Short line under the circle. Story, not a tech dump. */
  caption: string
}

/** Visual proof for About. Tools stay in Tech Stack. */
export const aboutProofItems: AboutProofItem[] = [
  {
    id: "product-ui",
    icon: "lucide:layout-dashboard",
    title: "Product UI",
    caption: "Thalex, DPG, ANWB, VLK. Website van het Jaar 2022."
  },
  {
    id: "devops",
    icon: "lucide:server",
    title: "Systems",
    caption: "Remote Linux administration on a partitioned Ubuntu server. Containers, cloud, and CI/CD."
  },
  {
    id: "network",
    icon: "lucide:users",
    title: "Network",
    caption: "AI Tinkerers and ToekomstTech. Home Lab Collective."
  }
]
