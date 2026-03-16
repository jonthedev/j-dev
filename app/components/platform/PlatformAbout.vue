<template>
  <section
    id="about"
    class="py-20 bg-gray-50 dark:bg-gray-950"
  >
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      >
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Full-Lifecycle Modernization & Feature Engineering
        </h2>
        <ul class="space-y-4 text-gray-700 dark:text-gray-300">
          <li class="flex gap-3">
            <span class="text-vue-600 dark:text-vue-400 shrink-0 mt-0.5">•</span>
            <span><strong>Legacy Modernization:</strong> Refactor and migrate legacy frontends to modern Nuxt 4 architectures with reusable Vue components and composables.</span>
          </li>
          <li class="flex gap-3">
            <span class="text-vue-600 dark:text-vue-400 shrink-0 mt-0.5">•</span>
            <span><strong>Feature Engineering:</strong> Rapid development of complex modules with type-safe integrations across frontend and backend systems.</span>
          </li>
          <li class="flex gap-3">
            <span class="text-vue-600 dark:text-vue-400 shrink-0 mt-0.5">•</span>
            <span><strong>Accelerated Delivery:</strong> AI-assisted workflows reduce repetitive work so more time can be spent on architecture, performance, and code quality.</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineOptions({ name: "PlatformAbout" })
</script>
