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
    id: "award",
    icon: "lucide:award",
    title: "Award",
    captions: [
      "ANWB Verkeer.",
      "Website van het Jaar 2022."
    ]
  },
  {
    id: "devops",
    icon: "lucide:server",
    title: "Systems",
    captions: [
      "After the frontend.",
      "The layer underneath."
    ]
  },
  {
    id: "homelab",
    icon: "lucide:house",
    title: "Home Lab",
    captions: [
      "Co-organise the Collective.",
      "Self-hosted infra and local AI."
    ]
  }
]
