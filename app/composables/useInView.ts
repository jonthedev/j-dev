export function useInView() {
  const target = ref<HTMLElement | null>(null)
  const isVisible = ref(false)

  onMounted(() => {
    const el = target.value
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry?.isIntersecting) {
          // Defer state update to avoid forced reflow during layout
          requestIdleCallback(() => {
            isVisible.value = true
            observer.disconnect()
          })
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
  })

  return { target, isVisible }
}
