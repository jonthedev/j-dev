<template>
  <section
    id="projects"
    class="py-20 bg-gray-50 dark:bg-gray-950"
  >
    <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      >
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Projects
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300">
          AI and homelab projects coming soon. Still learning and building.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineOptions({ name: 'PlatformProjects' })
</script>
