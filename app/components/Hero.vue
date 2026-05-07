<template>
  <section
    class="min-h-screen flex items-center justify-center pb-20 bg-linear-to-br from-gray-50 to-gray-100 dark:from-black dark:to-gray-950 relative overflow-hidden"
  >
    <div
      class="absolute inset-0 text-gray-900 dark:text-gray-200 opacity-[0.06] dark:opacity-[0.08]"
      aria-hidden="true"
    >
      <div class="absolute inset-0 hero-grid" />
    </div>

    <div
      class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
    >
      <div class="space-y-8">
        <!-- Main headline: professional title -->
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold">
          <span
            class="text-transparent bg-clip-text bg-linear-to-r from-vue-600 to-vue-400 dark:from-vue-400 dark:to-vue-300"
          >
            AI Product Engineer
          </span>
        </h1>

        <!-- Subheader -->
        <p
          class="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          <span class="block">
            Frontend-first product engineering with Nuxt 4 and Agentic AI.
          </span>
          <span class="block">
            GDPR-compliant: Local LLMs for ALL client code, Claude ONLY for reasoning.
          </span>
        </p>
        <p
          class="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          British National. Amsterdam-based. KVK registered. Remote (UK/CET timezone). IR35 compliant.
        </p>
      </div>
    </div>

    <div
      class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
    >
      <Icon
        icon="lucide:chevron-down"
        width="2rem"
        height="2rem"
        class="text-gray-400 dark:text-gray-400"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue"

defineOptions({ name: "AppHero" })
</script>

<style scoped>
.hero-grid {
  background-image: linear-gradient(to right, currentColor 1px, transparent 1px),
    linear-gradient(to bottom, currentColor 1px, transparent 1px);
  background-size: 40px 40px;
}
</style>
