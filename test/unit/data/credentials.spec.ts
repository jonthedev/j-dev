import { describe, expect, it } from "vitest"
import { bootdevCredentials, bootdevPathComplete } from "../../../app/data/credentials"

describe("bootdevCredentials", () => {
  it("only lists course certs until the path certificate exists", () => {
    expect(bootdevPathComplete).toBe(false)
    expect(bootdevCredentials.every(c => c.kind === "course")).toBe(true)
  })

  it("uses Boot.dev verify URLs and local certificate image backups", () => {
    for (const cert of bootdevCredentials) {
      expect(cert.href).toBe(`https://www.boot.dev/certificates/${cert.uuid}`)
      expect(cert.imageSrc).toBe(`/credential-${cert.id}.jpeg`)
      expect(cert.skills.length).toBeGreaterThan(0)
    }
  })
})
