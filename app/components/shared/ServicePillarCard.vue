<template>
  <UCard
    v-motion="animation"
    class="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    :ui="{
      root: 'border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden bg-white dark:bg-gray-900'
    }"
  >
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

    <p class="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">
      {{ pillar.body }}
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
