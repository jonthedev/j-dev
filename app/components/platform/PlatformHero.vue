<template>
  <section class="min-h-screen flex items-center justify-center pb-20 bg-linear-to-br from-gray-50 to-gray-100 dark:from-black dark:to-gray-950 relative overflow-hidden">
    <!-- Background: grid of circles, theme-aware -->
    <div
      class="absolute inset-0 text-gray-900 dark:text-gray-200 opacity-[0.07] dark:opacity-[0.1]"
      aria-hidden="true"
    >
      <div class="absolute inset-0 platform-hero-dots" />
    </div>

    <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <Motion
        as="div"
        :initial="{ opacity: 0, y: 24 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6, ease: 'easeOut' }"
        :in-view-options="{ once: true }"
        class="space-y-8"
      >
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold">
          <span class="text-transparent bg-clip-text bg-linear-to-r from-vue-600 to-vue-400 dark:from-vue-400 dark:to-vue-300">
            AI-Augmented Development
          </span>
        </h1>

        <p
          class="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          Local LLMs, agentic refactors, and type-safe backend patterns. Active development — not production services.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <UButton
            :to="contactInfo.bookingUrl"
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            color="primary"
            icon="lucide:arrow-right"
            class="shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get in Touch
          </UButton>
        </div>
      </Motion>
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

const { contactInfo } = useContact()
</script>

<style scoped>
.platform-hero-dots {
  background-image: radial-gradient(
    circle,
    currentColor 1.5px,
    transparent 1.5px
  );
  background-size: 28px 28px;
}
</style>
