<template>
  <Motion
    as="div"
    :initial="{ opacity: 0, y: 24 }"
    :while-in-view="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.5, delay: (100 + index * 50) / 1000 }"
    :in-view-options="{ once: true }"
  >
    <UCard
      class="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
      :ui="{
        root: 'border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden'
      }"
    >
      <template
        v-if="hasImage"
        #header
      >
        <div class="p-4">
          <div class="aspect-video overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900">
            <img
              :src="projectImageSrc"
              :alt="project.title"
              width="800"
              height="450"
              loading="lazy"
              decoding="async"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            >
          </div>
        </div>
      </template>

      <template
        v-else
        #header
      >
        <div class="p-4 pb-0">
          <div class="aspect-video overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
            <span class="text-5xl font-bold text-gray-300 dark:text-gray-700">
              {{ project.title.charAt(0) }}
            </span>
          </div>
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
          :class="['flex items-center space-x-1.5 rounded-full px-3 py-1 text-xs font-medium', getTechBrandClass(tech.icon)]"
        >
          <Icon
            :icon="tech.icon"
            class="mr-1 shrink-0"
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
  </Motion>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue"
import type { ProjectItem } from "~/data/projects"

interface Props {
  project: ProjectItem
  index: number
}

const props = defineProps<Props>()

const colorMode = useColorMode()
const { getTechName, getTechBrandClass } = useIcons()

const projectImageSrc = computed(() => {
  const isDark = colorMode.value === "dark"
  if (isDark && props.project.imgDark) return props.project.imgDark
  return props.project.img
})

const hasImage = computed(() => !!props.project.img)
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
