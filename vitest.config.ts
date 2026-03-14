import { defineConfig } from "vitest/config"
import vue from "@vitejs/plugin-vue"

// Nuxt environment currently fails with "Cannot find module nuxt" (pnpm/hoisting).
// Run unit tests only until Nuxt test env is fixed; then add test/nuxt/* and defineVitestConfig.
export default defineConfig({
  plugins: [vue()],
  test: {
    environment: "node",
    include: ["test/unit/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    setupFiles: ["test/unit/vitest.setup.ts"]
  }
})
