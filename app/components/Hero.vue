<template>
  <section
    class="min-h-screen flex items-center justify-center pb-20 bg-linear-to-br from-gray-50 to-gray-100 dark:from-black dark:to-gray-950 relative overflow-hidden"
  >
    <!-- Background decoration -->
    <div class="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" />

    <div
      class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
    >
      <div
        v-motion="animation"
        class="space-y-8"
      >
        <!-- Main headline -->
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold">
          <span class="text-gray-900 dark:text-white">High-Performance</span><br>
          <span
            class="text-transparent bg-clip-text bg-linear-to-r from-vue-600 to-vue-400 dark:from-vue-400 dark:to-vue-300"
          >
            Vue & Nuxt Engineering
          </span>
        </h1>

        <!-- Subtitle -->
        <p
          class="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          Lead Frontend Engineer at JDev Online. I help businesses build, scale,
          and modernize web applications with AI-augmented velocity.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <UButton
            to="#projects"
            size="lg"
            color="primary"
            icon="lucide:arrow-right"
            class="shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View Services / Case Studies
          </UButton>

          <UButton
            to="#contact"
            size="lg"
            variant="outline"
            color="neutral"
            icon="lucide:calendar"
          >
            Book a Consultation
          </UButton>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
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

// Use our new composables
const { fadeInUp } = useAnimation()

// Apply optimized animation
const animation = fadeInUp(600, 0)
</script>

<style scoped>
.bg-grid-pattern {
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.1) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
}
</style>
