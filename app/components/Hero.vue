<template>
  <section class="min-h-screen flex items-center justify-center pb-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-black dark:to-gray-950 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" />

    <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div
        v-motion="animation"
        class="space-y-8"
      >
        <!-- Main headline -->
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold">
          <span class="text-gray-900 dark:text-white">Freelance Senior</span><br>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-vue-600 to-vue-400 dark:from-vue-400 dark:to-vue-300">
            Frontend Engineer
          </span>
        </h1>

        <!-- Subtitle -->
        <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Vue & Nuxt specialist · Contract & project work<br>
          <span class="text-vue-600 dark:text-vue-400">Turning ideas into interactive reality</span>
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <UButton
            to="#contact"
            size="lg"
            color="primary"
            icon="lucide:arrow-right"
            class="shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Work with me
          </UButton>

          <UButton
            to="#projects"
            size="lg"
            variant="outline"
            color="neutral"
            icon="lucide:eye"
          >
            View projects
          </UButton>
        </div>

        <!-- Availability indicator -->
        <div class="flex items-center justify-center pt-6 space-x-2">
          <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          <span class="text-gray-600 dark:text-gray-300 font-medium">
            Available for projects starting March 2026
          </span>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
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
import { Icon } from '@iconify/vue'

defineOptions({ name: 'AppHero' })

// Use our new composables
const { fadeInUp } = useAnimation()

// Apply optimized animation
const animation = fadeInUp(600, 0)

// Use SEO composable
usePageSeo('Home', 'Freelance Vue/Nuxt Frontend Engineer specializing in modern web applications, component architecture, and performance optimization.')
</script>

<style scoped>
.bg-grid-pattern {
  background-image:
    linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
}
</style>
