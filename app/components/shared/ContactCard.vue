<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :visible-once="visibleOnce"
    class="text-center group"
  >
    <div class="w-16 h-16 bg-vue-100 dark:bg-vue-950/40 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
      <Icon
        :icon="icon"
        width="1.75rem"
        height="1.75rem"
        class="text-vue-600 dark:text-vue-400"
      />
    </div>
    <h3 class="font-semibold text-gray-900 dark:text-white mb-2">
      {{ title }}
    </h3>
    <a
      v-if="href"
      :href="href"
      class="text-vue-600 dark:text-vue-400 hover:text-vue-700 dark:hover:text-vue-300 transition-colors"
    >
      {{ content }}
    </a>
    <span
      v-else
      class="text-gray-600 dark:text-gray-300"
    >
      {{ content }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineOptions({ name: 'ContactCard' })

interface Props {
  icon: string
  title: string
  content: string
  href?: string
  delay?: number
}

const props = withDefaults(defineProps<Props>(), {
  delay: 0
})

const visibleOnce = computed(() => ({
  opacity: 1,
  y: 0,
  transition: { duration: 450, delay: props.delay }
}))
</script>
