import { describe, it, expect, beforeEach } from "vitest"
import { usePortfolioMode } from "../../../app/composables/usePortfolioMode"

const getModeRef = () =>
  (globalThis as unknown as { __portfolioModeRef: { value: "frontend" | "platform" } }).__portfolioModeRef

describe("usePortfolioMode", () => {
  beforeEach(() => {
    getModeRef().value = "frontend"
  })

  it("returns mode ref defaulting to frontend", () => {
    const { mode } = usePortfolioMode()
    expect(mode.value).toBe("frontend")
  })

  it("toggleMode flips frontend to platform", () => {
    const { mode, toggleMode } = usePortfolioMode()
    expect(mode.value).toBe("frontend")
    toggleMode()
    expect(mode.value).toBe("platform")
  })

  it("toggleMode flips platform to frontend", () => {
    const { mode, toggleMode } = usePortfolioMode()
    mode.value = "platform"
    toggleMode()
    expect(mode.value).toBe("frontend")
  })

  it("setMode updates mode to platform", () => {
    const { mode, setMode } = usePortfolioMode()
    setMode("platform")
    expect(mode.value).toBe("platform")
  })

  it("setMode updates mode to frontend", () => {
    const { mode, setMode } = usePortfolioMode()
    mode.value = "platform"
    setMode("frontend")
    expect(mode.value).toBe("frontend")
  })
})
