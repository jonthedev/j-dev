export interface AboutProofItem {
  id: string
  icon: string
  title: string
  /** Lines under the circle. Story, not a tech dump. */
  captions: string[]
}

/** Visual proof for About. Tools stay in Tech Stack. */
export const aboutProofItems: AboutProofItem[] = [
  {
    id: "product-ui",
    icon: "lucide:layout-dashboard",
    title: "Product UI",
    captions: [
      "Thalex, DPG, ANWB, VLK.",
      "Website van het Jaar 2022."
    ]
  },
  {
    id: "devops",
    icon: "lucide:server",
    title: "Systems",
    captions: [
      "Remote Linux for real workloads.",
      "Containers, cloud, and CI/CD in the same delivery path."
    ]
  },
  {
    id: "network",
    icon: "lucide:users",
    title: "Network",
    captions: [
      "AI Tinkerers and ToekomstTech.",
      "Home Lab Collective."
    ]
  }
]
