<template>
  <SharedReveal
    :delay="delay"
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
  </SharedReveal>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description?: string
  delay?: number
}

withDefaults(defineProps<Props>(), {
  delay: 100
})
</script>
