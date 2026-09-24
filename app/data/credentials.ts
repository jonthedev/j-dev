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

/** Path or official exam not earned yet. Practice platforms stay off this list. */
export interface PlannedCredential {
  id: string
  title: string
  issuer: string
  skills: string[]
  /** False keeps LF exams in data without implying they are the current campaign. */
  onHandshake?: boolean
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
 * Earned Boot.dev course certificates. These live in the expand, not the
 * handshake grid. Add a row when a course is done. `kind: "path"` is for
 * the track certificate — then drop the planned path card.
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
  }),
  bootdevCert({
    id: "asteroids",
    title: "Build Asteroids using Python and Pygame",
    kind: "course",
    issued: "2026-09-23",
    uuid: "7aa97cbb-bb51-4fb7-bce3-7cb0960e5ca6",
    skills: [
      "2D Graphics Programming",
      "Game Loop Architecture",
      "Event Handling",
      "Sprite Management",
      "Game Physics",
      "Collision Detection",
      "Projectile Systems"
    ]
  })
]

export const bootdevPathComplete = bootdevCredentials.some(c => c.kind === "path")

/**
 * Planned path and official exams. Only `onHandshake` cards sit on the wall.
 * LFCS/CKA wait until the Boot.dev path is further along.
 * Killercoda and KodeKloud stay off this list.
 */
export const plannedCredentials: PlannedCredential[] = [
  {
    id: "devops-path",
    title: "DevOps Engineer Path",
    issuer: "Boot.dev",
    skills: [
      "Python",
      "Linux",
      "Go",
      "SQL",
      "Docker",
      "Observability",
      "AWS",
      "CI/CD",
      "Kubernetes"
    ]
  },
  {
    id: "lfcs",
    title: "Linux Foundation Certified System Administrator",
    issuer: "Linux Foundation",
    onHandshake: false,
    skills: ["Linux Administration", "Systems"]
  },
  {
    id: "cka",
    title: "Certified Kubernetes Administrator",
    issuer: "Linux Foundation",
    onHandshake: false,
    skills: ["Kubernetes", "Clusters"]
  }
]

export const handshakeCredentials = plannedCredentials.filter(
  item => item.onHandshake !== false
)
