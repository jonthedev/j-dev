<template>
  <UCard
    v-motion="animation"
    class="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
    :ui="{
      root: 'border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden'
    }"
  >
    <template #header>
      <div class="aspect-video overflow-hidden bg-gray-100 dark:bg-gray-900">
        <img
          :src="project.img"
          :alt="project.title"
          width="800"
          height="450"
          loading="lazy"
          decoding="async"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        >
      </div>
    </template>

    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
      {{ project.title }}
    </h3>

    <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
      {{ project.text }}
    </p>

    <div class="flex flex-wrap gap-2 mb-6">
      <span
        v-for="tech in project.tech"
        :key="tech.id"
        class="flex items-center space-x-1.5 bg-gray-100 dark:bg-gray-900 rounded-full px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300"
      >
        <Icon
          :icon="tech.icon"
          class="mr-1"
        />
        {{ getTechName(tech.icon) }}
      </span>
    </div>

    <div class="flex space-x-3">
      <UButton
        :to="project.url"
        target="_blank"
        size="sm"
        color="primary"
        icon="lucide:eye"
      >
        View Live
      </UButton>

      <UButton
        v-if="project.github"
        :to="project.github"
        target="_blank"
        size="sm"
        variant="outline"
        color="neutral"
        icon="lucide:code"
      >
        Code
      </UButton>
    </div>
  </UCard>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { ProjectItem } from '~/data/projects'

interface Props {
  project: ProjectItem
  index: number
}

const props = defineProps<Props>()

// Use our composables
const { staggeredAnimation } = useAnimation()
const { getTechName } = useIcons()

// Optimized animation
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
