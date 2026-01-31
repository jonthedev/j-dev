import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  scrollBehavior(to, _from, _savedPosition) {
    if (to.hash) {
      return new Promise((resolve) => {
        const start = Date.now()
        const maxWait = 1500
        const tryScroll = () => {
          const el = document.querySelector(to.hash)
          if (el) {
            resolve({ el: to.hash, behavior: 'smooth' })
          } else if (Date.now() - start < maxWait) {
            requestAnimationFrame(tryScroll)
          } else {
            resolve({ top: 0 })
          }
        }
        setTimeout(tryScroll, 0)
      })
    }
    return { top: 0 }
  }
}
