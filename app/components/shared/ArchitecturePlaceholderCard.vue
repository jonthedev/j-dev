<template>
  <UCard
    v-motion="animation"
    class="group border-dashed border-amber-200 dark:border-amber-800/60 bg-amber-50/30 dark:bg-amber-950/20 hover:border-amber-300 dark:hover:border-amber-700/60 transition-all duration-300"
    :ui="{
      root: 'rounded-xl overflow-hidden'
    }"
  >
    <template #header>
      <div class="aspect-video flex items-center justify-center bg-amber-100/50 dark:bg-amber-900/20">
        <Icon
          icon="lucide:construction"
          width="4rem"
          height="4rem"
          class="text-amber-500 dark:text-amber-600 opacity-60"
        />
      </div>
    </template>

    <div class="flex items-center gap-2 mb-3">
      <span
        class="inline-flex items-center gap-1.5 rounded-full border border-amber-300 dark:border-amber-700 bg-amber-100 dark:bg-amber-900/40 px-2.5 py-0.5 text-xs font-medium text-amber-800 dark:text-amber-200"
      >
        <Icon
          icon="lucide:hammer"
          width="0.875rem"
          height="0.875rem"
        />
        In Progress
      </span>
    </div>

    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
      {{ placeholder.title }}
    </h3>

    <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
      {{ placeholder.description }}
    </p>

    <div class="flex flex-wrap gap-2">
      <span
        v-for="tech in placeholder.tech"
        :key="tech"
        class="rounded-full border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/40 px-3 py-1 text-xs font-medium text-amber-800 dark:text-amber-200"
      >
        {{ tech }}
      </span>
    </div>
  </UCard>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue"
import type { ArchitecturePlaceholder } from "~/data/projects"

interface Props {
  placeholder: ArchitecturePlaceholder
  index: number
}

const props = defineProps<Props>()

const { staggeredAnimation } = useAnimation()
const animation = computed(() =>
  staggeredAnimation(100, 50)(props.index)
)
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
