/**
 * @vitest-environment happy-dom
 */
import { describe, it, expect, beforeEach, afterEach } from "vitest"
import { mount } from "@vue/test-utils"
import ContactCard from "../../../app/components/shared/ContactCard.vue"

const noopMotion = { mounted: () => {}, updated: () => {} }

// v-motion (VueUse Motion) triggers resolveDirective/withDirectives warnings in tests; harmless
function isMotionWarn(msg: unknown) {
  return typeof msg === "string" && (msg.includes("resolveDirective") || msg.includes("withDirectives"))
}

describe("ContactCard", () => {
  let warn: typeof console.warn
  beforeEach(() => {
    warn = console.warn
    console.warn = (...args: unknown[]) => {
      if (isMotionWarn(args[0])) return
      warn.apply(console, args)
    }
  })
  afterEach(() => {
    console.warn = warn
  })

  it("renders title and content", () => {
    const wrapper = mount(ContactCard, {
      props: {
        icon: "lucide:mail",
        title: "Email",
        content: "hello@example.com"
      },
      global: {
        stubs: { Icon: true, transition: false },
        directives: { motion: noopMotion }
      }
    })

    expect(wrapper.text()).toContain("Email")
    expect(wrapper.text()).toContain("hello@example.com")
  })

  it("renders content as link when href is provided", () => {
    const wrapper = mount(ContactCard, {
      props: {
        icon: "lucide:globe",
        title: "Website",
        content: "Visit site",
        href: "https://example.com"
      },
      global: {
        stubs: { Icon: true, transition: false },
        directives: { motion: noopMotion }
      }
    })

    const link = wrapper.find("a")
    expect(link.exists()).toBe(true)
    expect(link.attributes("href")).toBe("https://example.com")
    expect(link.attributes("target")).toBe("_blank")
    expect(link.attributes("rel")).toBe("noopener noreferrer")
    expect(link.text()).toBe("Visit site")
  })

  it("renders content as span when href is not provided", () => {
    const wrapper = mount(ContactCard, {
      props: {
        icon: "lucide:phone",
        title: "Phone",
        content: "+1 234 567 8900"
      },
      global: {
        stubs: { Icon: true, transition: false },
        directives: { motion: noopMotion }
      }
    })

    expect(wrapper.find("a").exists()).toBe(false)
    expect(wrapper.find("span").exists()).toBe(true)
    expect(wrapper.text()).toContain("+1 234 567 8900")
  })
})
