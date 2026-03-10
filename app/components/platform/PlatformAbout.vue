<template>
  <section
    id="about"
    class="py-20 bg-gray-50 dark:bg-gray-950"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Full-width intro -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="text-center mb-16"
      >
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          AI-Augmented Vue Engineering
        </h2>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
          I specialize in high-velocity development across the entire Vue ecosystem. Whether architecting new Nuxt 4 platforms, engineering complex features, or modernizing legacy stacks, I use a private AI-augmented workflow to deliver enterprise-grade results in a fraction of the standard time.
        </p>
      </div>

      <!-- Three pillars grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SharedServicePillarCard
          v-for="(pillar, index) in platformPillars"
          :key="pillar.headline"
          :pillar="pillar"
          :index="index"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { platformPillars } from "~/data/platformPillars"

defineOptions({ name: "PlatformAbout" })
</script>
