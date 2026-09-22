import { describe, expect, it } from "vitest"
import {
  bootdevCredentials,
  bootdevPathComplete,
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
  it("lists official Linux Foundation exams only, not practice platforms", () => {
    expect(plannedCredentials.map(c => c.id)).toEqual(["lfcs", "cka"])
    for (const item of plannedCredentials) {
      expect(item.issuer).toBe("Linux Foundation")
      expect(item.note).toMatch(/not earned/i)
    }
  })
})
