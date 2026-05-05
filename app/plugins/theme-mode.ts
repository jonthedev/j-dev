export default defineNuxtPlugin(() => {
  const portfolioMode = usePortfolioMode()

  watch(
    () => portfolioMode.mode.value,
    (mode) => {
      if (import.meta.client) {
        const html = document.documentElement
        if (mode === "platform") {
          html.setAttribute("data-theme", "lab")
        } else {
          html.removeAttribute("data-theme")
        }
      }
    },
    { immediate: true }
  )
})
