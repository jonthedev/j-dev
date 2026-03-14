import { ref, computed } from "vue"
import { vi } from "vitest"

vi.stubGlobal("computed", computed)

// Shared ref for portfolio-mode so tests can reset it in beforeEach
const portfolioModeRef = ref<"frontend" | "platform">("frontend")
;(globalThis as unknown as { __portfolioModeRef: typeof portfolioModeRef }).__portfolioModeRef = portfolioModeRef

vi.stubGlobal(
  "useState",
  <T>(key: string, init?: () => T) => {
    if (key === "portfolio-mode") return portfolioModeRef as unknown as { value: T }
    return ref(init ? init() : undefined) as { value: T }
  }
)

vi.stubGlobal("onMounted", (fn: () => void) => fn())

vi.stubGlobal("localStorage", {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
  length: 0,
  key: vi.fn()
})
