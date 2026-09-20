import { describe, expect, it } from "vitest"
import { bootdevCredentials, bootdevPathComplete } from "../../../app/data/credentials"

describe("bootdevCredentials", () => {
  it("only lists course certs until the path certificate exists", () => {
    expect(bootdevPathComplete).toBe(false)
    expect(bootdevCredentials.every(c => c.kind === "course")).toBe(true)
  })

  it("uses Boot.dev verify URLs and hosted certificate images", () => {
    for (const cert of bootdevCredentials) {
      expect(cert.href).toBe(`https://www.boot.dev/certificates/${cert.uuid}`)
      expect(cert.imageSrc).toBe(
        `https://qvault-webapp-dynamic-assets.storage.googleapis.com/certificates/${cert.uuid}.jpeg`
      )
    }
  })
})
