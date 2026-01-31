const STORAGE_KEY = 'portfolio-mode'

export type PortfolioMode = 'frontend' | 'platform'

export function usePortfolioMode() {
  const mode = useState<PortfolioMode>('portfolio-mode', () => 'frontend')

  onMounted(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as PortfolioMode | null
    if (stored === 'frontend' || stored === 'platform') mode.value = stored
  })

  function toggleMode() {
    mode.value = mode.value === 'frontend' ? 'platform' : 'frontend'
    if (import.meta.client) {
      localStorage.setItem(STORAGE_KEY, mode.value)
    }
  }

  function setMode(value: PortfolioMode) {
    mode.value = value
    if (import.meta.client) {
      localStorage.setItem(STORAGE_KEY, mode.value)
    }
  }

  return { mode, toggleMode, setMode }
}
