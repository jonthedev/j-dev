import { describe, expect, it } from "vitest"
import {
  bootdevCredentials,
  bootdevPathComplete,
  handshakeCredentials,
  plannedCredentials
} from "../../../app/data/credentials"

describe("bootdevCredentials", () => {
  it("only lists course certs until the path certificate exists", () => {
    expect(bootdevPathComplete).toBe(false)
    expect(bootdevCredentials.every(c => c.kind === "course")).toBe(true)
  })

  it("uses Boot.dev verify URLs and local certificate image backups", () => {
    for (const cert of bootdevCredentials) {
      expect(cert.issuer).toBe("Boot.dev")
      expect(cert.href).toBe(`https://www.boot.dev/certificates/${cert.uuid}`)
      expect(cert.imageSrc).toBe(`/credential-${cert.id}.jpeg`)
      expect(cert.skills.length).toBeGreaterThan(0)
    }
  })
})

describe("plannedCredentials", () => {
  it("keeps official Linux Foundation exams in data, off the handshake", () => {
    expect(plannedCredentials.map(c => c.id)).toEqual(["devops-path", "lfcs", "cka"])
    expect(handshakeCredentials.map(c => c.id)).toEqual(["devops-path"])
    expect(plannedCredentials.filter(c => c.onHandshake === false).every(c => c.issuer === "Linux Foundation")).toBe(true)
  })
})
