<template>
  <Motion
    as="div"
    :initial="{ opacity: 0, y: 24 }"
    :while-in-view="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.5, delay: delay / 1000 }"
    :in-view-options="{ once: true }"
    class="text-center mb-16"
  >
    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
      {{ title }}
    </h2>
    <p
      v-if="description"
      class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
    >
      {{ description }}
    </p>
  </Motion>
</template>

<script setup lang="ts">
import { Motion } from "motion-v"

interface Props {
  title: string
  description?: string
  delay?: number
}

withDefaults(defineProps<Props>(), {
  delay: 100
})
</script>
