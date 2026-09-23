export type CredentialKind = "course" | "path"

export interface BootdevCredential {
  id: string
  title: string
  issuer: string
  kind: CredentialKind
  issued: string
  uuid: string
  href: string
  imageSrc: string
  alt: string
  /** Topics printed on the Boot.dev certificate. */
  skills: string[]
}

/** Official exams not earned yet. Practice platforms stay off this list. */
export interface PlannedCredential {
  id: string
  title: string
  issuer: string
  note: string
  skills: string[]
}

const BOOTDEV_CERT_PAGE = "https://www.boot.dev/certificates"

function bootdevCert(
  cert: Omit<BootdevCredential, "href" | "imageSrc" | "alt" | "issuer"> & { alt?: string }
): BootdevCredential {
  return {
    ...cert,
    issuer: "Boot.dev",
    href: `${BOOTDEV_CERT_PAGE}/${cert.uuid}`,
    // Served from public/ so the grid still works if Boot.dev is down.
    imageSrc: `/credential-${cert.id}.jpeg`,
    alt: cert.alt ?? `Boot.dev ${cert.title} certificate`
  }
}

/**
 * Completed Boot.dev certificates only. Add a row when a course (or the
 * DevOps path) is done. `kind: "path"` is for the full track certificate.
 */
export const bootdevCredentials: BootdevCredential[] = [
  bootdevCert({
    id: "python",
    title: "Introduction to Python",
    kind: "course",
    issued: "2026-08-26",
    uuid: "862cf23b-cb7b-4b6e-a54f-7af951e733c5",
    skills: [
      "Programming Fundamentals",
      "Functions and Scope",
      "Conditionals and Loops",
      "Lists, Dictionaries, Sets",
      "Error Handling",
      "Testing and Debugging"
    ]
  }),
  bootdevCert({
    id: "linux",
    title: "Learn Linux",
    kind: "course",
    issued: "2026-09-14",
    uuid: "f9dee558-ba5e-406c-a919-ea22f5d063d9",
    skills: [
      "Linux Command Line",
      "File System Management",
      "Permissions and Security",
      "Pipes and Redirection",
      "Process Management",
      "Package Management"
    ]
  }),
  bootdevCert({
    id: "bookbot",
    title: "Build a BookBot in Python",
    kind: "course",
    issued: "2026-09-15",
    uuid: "cbd3d9de-391e-46d9-9502-5b4278d7bef0",
    skills: [
      "File I/O",
      "Text Processing",
      "String Manipulation",
      "Formatted Output",
      "Command Line Arguments"
    ]
  }),
  bootdevCert({
    id: "git",
    title: "Learn Git",
    kind: "course",
    issued: "2026-09-19",
    uuid: "7e0071e0-e0ba-4e3d-86fa-a6869d83705b",
    skills: [
      "Version Control",
      "Branching and Merging",
      "Rebasing",
      "Git Internals",
      "Remote Repositories"
    ]
  }),
  bootdevCert({
    id: "oop",
    title: "Learn Object Oriented Programming in Python",
    kind: "course",
    issued: "2026-09-23",
    uuid: "71c554a3-ddf3-4fea-9fa4-d07d89e83e41",
    skills: [
      "Clean Code Principles",
      "Classes",
      "Encapsulation",
      "Abstraction",
      "Inheritance",
      "Polymorphism"
    ]
  })
]

export const bootdevPathComplete = bootdevCredentials.some(c => c.kind === "path")

/**
 * Linux Foundation exams only. Killercoda and KodeKloud are practice —
 * add a card here when the official cert exists, not when a lab is booked.
 */
export const plannedCredentials: PlannedCredential[] = [
  {
    id: "lfcs",
    title: "Linux Foundation Certified System Administrator",
    issuer: "Linux Foundation",
    note: "Target exam. Not earned yet.",
    skills: ["Linux Administration", "Systems"]
  },
  {
    id: "cka",
    title: "Certified Kubernetes Administrator",
    issuer: "Linux Foundation",
    note: "Target exam. Not earned yet.",
    skills: ["Kubernetes", "Clusters"]
  }
]
