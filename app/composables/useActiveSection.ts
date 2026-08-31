const SECTION_IDS = ["about", "projects", "tech-stack", "contact"] as const

/**
 * Scroll-spy for the one-page nav. Tracks which section sits under the sticky bar.
 */
export function useActiveSection() {
  const activeHref = ref("")
  let cleanup: (() => void) | undefined

  const isActive = (href: string) => activeHref.value === href

  const setActiveHref = (href: string) => {
    activeHref.value = href
  }

  onMounted(() => {
    const sections = SECTION_IDS
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        const top = visible[0]
        if (top) {
          activeHref.value = `#${top.target.id}`
        }
      },
      {
        rootMargin: "-72px 0px -55% 0px",
        threshold: [0, 0.2, 0.4, 0.6]
      }
    )

    for (const section of sections) {
      observer.observe(section)
    }

    const syncFromHash = () => {
      const hash = window.location.hash
      if (SECTION_IDS.some(id => hash === `#${id}`)) {
        activeHref.value = hash
      }
      if (hash === "" || hash === "#") {
        activeHref.value = ""
      }
    }

    window.addEventListener("hashchange", syncFromHash)
    syncFromHash()

    cleanup = () => {
      observer.disconnect()
      window.removeEventListener("hashchange", syncFromHash)
    }
  })

  onUnmounted(() => {
    cleanup?.()
  })

  return { activeHref, isActive, setActiveHref }
}
