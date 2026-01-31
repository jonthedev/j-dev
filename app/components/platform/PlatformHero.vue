<template>
  <section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-black dark:to-gray-950 relative overflow-hidden">
    <div class="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" />

    <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } }"
        class="space-y-8"
      >
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold">
          <span class="text-gray-900 dark:text-white">Learning</span><br>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-vue-600 to-vue-400 dark:from-vue-400 dark:to-vue-300">
            AI Platform Engineering
          </span>
        </h1>

        <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          <a
            href="https://bytebyteai.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-vue-600 dark:text-vue-400 hover:underline"
          >ByteByteAI</a> · Containers, CI/CD, and cloud-native tooling<br>
          <span class="text-vue-600 dark:text-vue-400">Building toward infrastructure and developer experience</span>
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <a
            href="#contact"
            class="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-vue-600 hover:bg-vue-700 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            <Icon
              icon="lucide:arrow-right"
              width="1.25rem"
              height="1.25rem"
              class="mr-2 shrink-0 inline-block"
            />
            Get in touch
          </a>
          <a
            href="#tech-stack"
            class="inline-flex items-center px-8 py-4 text-lg font-semibold text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-lg transition-all duration-200"
          >
            <Icon
              icon="lucide:layers"
              width="1.25rem"
              height="1.25rem"
              class="mr-2 shrink-0 inline-block"
            />
            Tech & tools
          </a>
        </div>

        <div class="flex items-center justify-center pt-6 space-x-2">
          <div class="w-3 h-3 bg-amber-500 rounded-full animate-pulse" />
          <span class="text-gray-600 dark:text-gray-300 font-medium">
            In progress — <a
              href="https://bytebyteai.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-vue-600 dark:text-vue-400 hover:underline"
            >ByteByteAI</a> AI Engineering track
          </span>
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
import { Icon } from '@iconify/vue'

defineOptions({ name: 'PlatformHero' })
</script>

<style scoped>
.bg-grid-pattern {
  background-image:
    linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
}
</style>
