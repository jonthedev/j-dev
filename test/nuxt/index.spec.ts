import { describe, expect, it } from "vitest"
import { mountSuspended } from "@nuxt/test-utils/runtime"
import Navbar from "~/components/Navbar.vue"

describe("Navbar", () => {
  it("renders site name and navigation links", async () => {
    const wrapper = await mountSuspended(Navbar)
    expect(wrapper.text()).toContain("JDev Online")
    expect(wrapper.text()).toContain("About")
    expect(wrapper.text()).toContain("Credentials")
    expect(wrapper.text()).toContain("Tech Stack")
    expect(wrapper.text()).toContain("Projects")
    expect(wrapper.text()).toContain("Contact")
    expect(wrapper.findAll('a[aria-label="GitHub"]').length).toBeGreaterThan(0)
    expect(wrapper.findAll('a[aria-label="LinkedIn"]').length).toBeGreaterThan(0)
  })
})
