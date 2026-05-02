<template>
  <UCard
    v-motion="animation"
    class="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative"
    :ui="{
      root: [
        'rounded-xl overflow-hidden bg-white dark:bg-gray-900',
        pillar.featured
          ? 'border-2 border-vue-400 dark:border-vue-500'
          : 'border border-gray-200 dark:border-gray-800'
      ]
    }"
  >
    <span
      v-if="pillar.featured"
      class="absolute top-4 right-4 rounded-full bg-vue-100 dark:bg-vue-950/80 px-2.5 py-0.5 text-xs font-semibold text-vue-700 dark:text-vue-300"
    >
      Primary
    </span>
    <div class="flex items-center justify-center w-12 h-12 rounded-lg bg-vue-100 dark:bg-vue-950/50 mb-4">
      <Icon
        :icon="pillar.icon"
        width="1.5rem"
        height="1.5rem"
        class="text-vue-600 dark:text-vue-400"
      />
    </div>

    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
      {{ pillar.headline }}
    </h3>

    <p class="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
      {{ pillar.body }}
    </p>

    <p
      v-if="pillar.metric"
      class="text-xs font-medium text-vue-600 dark:text-vue-400 mb-4"
    >
      {{ pillar.metric }}
    </p>

    <div class="flex flex-wrap gap-2">
      <span
        v-for="tag in pillar.tags"
        :key="tag"
        class="rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300"
      >
        {{ tag }}
      </span>
    </div>
  </UCard>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue"
import type { ServicePillar } from "~/data/platformPillars"

interface Props {
  pillar: ServicePillar
  index: number
}

const props = defineProps<Props>()

const { staggeredAnimation } = useAnimation()
const animation = computed(() =>
  staggeredAnimation(100, 80)(props.index)
)
</script>
