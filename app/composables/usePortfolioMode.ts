export type PortfolioMode = "frontend" | "platform"

export function usePortfolioMode() {
  const mode = useState<PortfolioMode>("portfolio-mode", () => "frontend")

  function scrollToTop() {
    if (import.meta.client) {
      window.scrollTo(0, 0)
    }
  }

  function toggleMode() {
    mode.value = mode.value === "frontend" ? "platform" : "frontend"
    scrollToTop()
  }

  function setMode(value: PortfolioMode) {
    mode.value = value
    scrollToTop()
  }

  return { mode, toggleMode, setMode }
}
