<template>
  <SharedReveal
    :delay="delay"
    class="mb-16 text-left"
  >
    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
      {{ title }}
    </h2>
    <p
      v-if="description"
      class="max-w-2xl text-lg text-gray-600 dark:text-gray-300"
    >
      {{ description }}
    </p>
    <div
      v-if="$slots.default"
      class="max-w-2xl space-y-2 text-lg text-gray-600 dark:text-gray-300"
    >
      <slot />
    </div>
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
