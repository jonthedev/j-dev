/**
 * Resolved UI theme from @nuxtjs/color-mode (`colorMode.value` is `"light"` | `"dark"`).
 * Prefer this over Tailwind `dark:` when switching assets inside lazy-hydrated chunks.
 */
export function useIsDarkTheme() {
  const colorMode = useColorMode()
  return computed(() => colorMode.value === "dark")
}
