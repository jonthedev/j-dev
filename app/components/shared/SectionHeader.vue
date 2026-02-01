<template>
  <div
    v-motion="animation"
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
  </div>
</template>

<script setup lang="ts">
import { useAnimation } from '~/composables/useAnimation'

interface Props {
  title: string
  description?: string
  delay?: number
}

const props = withDefaults(defineProps<Props>(), {
  delay: 100
})

// Use fadeInUp animation with configurable delay
const { fadeInUp } = useAnimation()
const animation = fadeInUp(500, props.delay)
</script>
