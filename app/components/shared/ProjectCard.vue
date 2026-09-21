<template>
  <SharedReveal :delay="100 + index * 50">
    <UCard
      class="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full"
      :ui="{
        root: 'border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden flex flex-col',
        body: 'p-0 flex flex-col flex-1'
      }"
    >
      <div
        v-if="hasImage"
        class="aspect-video overflow-hidden bg-gray-100 dark:bg-gray-900"
      >
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

      <div
        v-else
        class="aspect-video overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center"
      >
        <span class="text-5xl font-bold text-gray-300 dark:text-gray-700">
          {{ project.title.charAt(0) }}
        </span>
      </div>

      <ul
        v-if="project.tech.length"
        class="m-0 flex list-none flex-wrap gap-1.5 border-b border-gray-200 bg-gray-50 px-4 py-3 sm:px-6 dark:border-gray-800 dark:bg-gray-900/80"
        aria-label="Tech stack"
      >
        <li
          v-for="tech in project.tech"
          :key="tech.id"
        >
          <span
            :class="['flex items-center space-x-1.5 rounded-full px-3 py-1 text-xs font-medium', getTechBrandClass(tech.icon)]"
          >
            <Icon
              :icon="tech.icon"
              class="mr-1 shrink-0"
            />
            {{ tech.label ?? getTechName(tech.icon) }}
          </span>
        </li>
      </ul>

      <div
        class="px-4 pt-4 sm:px-6 sm:pt-6"
        :class="project.url || project.github ? 'pb-2' : 'pb-4 sm:pb-6'"
      >
        <div class="mb-3 flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white">
            {{ project.title }}
          </h3>
          <ul class="m-0 flex list-none flex-wrap gap-1.5 p-0">
            <li
              v-for="category in project.categories"
              :key="category"
            >
              <span
                class="inline-flex rounded-sm px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
                :class="categoryBadgeClass[category]"
              >
                {{ category }}
              </span>
            </li>
          </ul>
        </div>

        <p class="mb-3 text-sm text-gray-500 dark:text-gray-400">
          {{ project.intro }}
        </p>

        <ul class="mb-4 list-disc space-y-1.5 pl-5 text-gray-600 dark:text-gray-300">
          <li
            v-for="(bullet, bulletIndex) in project.bullets"
            :key="bulletIndex"
          >
            {{ bullet }}
          </li>
        </ul>
      </div>

      <div
        v-if="project.url || project.github"
        class="flex space-x-3 mt-auto px-4 sm:px-6 pb-4 sm:pb-6"
      >
        <UButton
          v-if="project.url"
          :to="project.url"
          target="_blank"
          size="sm"
          color="primary"
          icon="lucide:eye"
          class="bg-vue-700! text-white! hover:bg-vue-800!"
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
  </SharedReveal>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue"
import type { ProjectCategory, ProjectItem } from "~/data/projects"

interface Props {
  project: ProjectItem
  index: number
}

const props = defineProps<Props>()

const colorMode = useColorMode()
const { getTechName, getTechBrandClass } = useIcons()

const categoryBadgeClass: Record<ProjectCategory, string> = {
  Frontend: "border border-vue-600/50 text-vue-700 dark:border-vue-500/50 dark:text-vue-400",
  AI: "border border-amber-500/50 text-amber-800 dark:border-amber-400/50 dark:text-amber-400"
}

const projectImageSrc = computed(() => {
  const isDark = colorMode.value === "dark"
  if (isDark && props.project.imgDark) return props.project.imgDark
  return props.project.img
})

const hasImage = computed(() => !!props.project.img)
</script>
