<template>
  <section class="min-h-screen flex items-center justify-center pb-20 bg-linear-to-br from-gray-50 to-gray-100 dark:from-black dark:to-gray-950 relative overflow-hidden">
    <div class="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" />

    <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } }"
        class="space-y-8"
      >
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold">
          <span class="text-gray-900 dark:text-white">The Engineering </span>
          <br>
          <span
            class="text-transparent bg-clip-text bg-linear-to-r from-vue-600 to-vue-400 dark:from-vue-400 dark:to-vue-300"
          >
            Lab
          </span>
        </h1>

        <p
          class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          AI-Augmented Development & Infrastructure
        </p>

        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto italic">
          "I leverage a local-first AI stack to amplify engineering velocity and
          ensure data privacy while building high-performance web systems."
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <UButton
            to="#contact"
            size="lg"
            color="primary"
            icon="lucide:arrow-right"
            class="shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get in touch
          </UButton>
        </div>
      </div>
    </div>

    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
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

defineOptions({ name: "PlatformHero" })

// Use animation composable
const { fadeInUp } = useAnimation()

// Apply optimized animation
const _animation = fadeInUp(600, 0)
</script>

<style scoped>
.bg-grid-pattern {
  background-image:
    linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
}
</style>
