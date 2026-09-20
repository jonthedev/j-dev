export type CredentialKind = "course" | "path"

export interface BootdevCredential {
  id: string
  title: string
  kind: CredentialKind
  issued: string
  uuid: string
  href: string
  imageSrc: string
  alt: string
}

const BOOTDEV_CERT_PAGE = "https://www.boot.dev/certificates"
const BOOTDEV_CERT_IMAGE
  = "https://qvault-webapp-dynamic-assets.storage.googleapis.com/certificates"

function bootdevCert(
  cert: Omit<BootdevCredential, "href" | "imageSrc" | "alt"> & { alt?: string }
): BootdevCredential {
  return {
    ...cert,
    href: `${BOOTDEV_CERT_PAGE}/${cert.uuid}`,
    imageSrc: `${BOOTDEV_CERT_IMAGE}/${cert.uuid}.jpeg`,
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
    uuid: "862cf23b-cb7b-4b6e-a54f-7af951e733c5"
  }),
  bootdevCert({
    id: "linux",
    title: "Learn Linux",
    kind: "course",
    issued: "2026-09-14",
    uuid: "f9dee558-ba5e-406c-a919-ea22f5d063d9"
  }),
  bootdevCert({
    id: "bookbot",
    title: "Build a BookBot in Python",
    kind: "course",
    issued: "2026-09-15",
    uuid: "cbd3d9de-391e-46d9-9502-5b4278d7bef0"
  }),
  bootdevCert({
    id: "git",
    title: "Learn Git",
    kind: "course",
    issued: "2026-09-19",
    uuid: "7e0071e0-e0ba-4e3d-86fa-a6869d83705b"
  })
]

export const bootdevPathComplete = bootdevCredentials.some(c => c.kind === "path")
