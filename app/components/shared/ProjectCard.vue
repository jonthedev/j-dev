<template>
  <SharedReveal
    :delay="100 + index * 50"
    class="h-full"
  >
    <UCard
      class="group relative h-full"
      :ui="{
        root: 'relative overflow-hidden rounded-sm border border-blueprint flex flex-col h-full',
        body: 'p-0 flex flex-col flex-1'
      }"
    >
      <div
        class="blueprint-scan"
        aria-hidden="true"
      />

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
          class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        >
      </div>

      <div
        v-else
        class="flex aspect-video items-center justify-center overflow-hidden bg-linear-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800"
      >
        <span class="text-5xl font-bold text-gray-300 dark:text-gray-700">
          {{ project.title.charAt(0) }}
        </span>
      </div>

      <div class="grid flex-1 md:auto-rows-fr md:grid-cols-[minmax(0,7fr)_minmax(9.5rem,3fr)]">
        <div class="flex h-full flex-col px-4 py-4 sm:px-6 sm:py-6">
          <h3 class="mb-3 text-xl font-bold text-gray-900 dark:text-white">
            {{ project.title }}
          </h3>

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

          <div
            v-if="project.url || project.github"
            class="mt-auto flex space-x-3 pt-2"
          >
            <UButton
              v-if="project.url"
              :to="project.url"
              target="_blank"
              size="sm"
              color="primary"
              icon="lucide:eye"
              class="rounded-sm bg-vue-700! text-white! hover:bg-vue-800!"
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
              class="rounded-sm"
            >
              Code
            </UButton>
          </div>
        </div>

        <aside
          class="border-t border-blueprint px-4 py-4 md:border-t-0 md:border-l"
          aria-label="Specifications"
        >
          <p class="mb-2 font-mono text-xs font-medium tracking-[0.18em] text-gray-900/50 uppercase dark:text-white/50">
            Spec
          </p>
          <ul class="m-0 mb-4 flex list-none flex-wrap gap-1.5 p-0">
            <li
              v-for="category in project.categories"
              :key="category"
            >
              <span
                class="inline-flex rounded-sm px-1.5 py-0.5 font-mono text-[10px] font-medium tracking-wider uppercase"
                :class="categoryBadgeClass[category]"
              >
                {{ category }}
              </span>
            </li>
          </ul>

          <ul
            v-if="project.tech.length"
            class="m-0 flex list-none flex-col gap-1.5 p-0"
            aria-label="Tech stack"
          >
            <li
              v-for="tech in project.tech"
              :key="tech.id"
            >
              <span
                :class="['flex items-center gap-2 rounded-sm px-2 py-1 font-mono text-[11px] font-medium', getTechBrandClass(tech.icon)]"
              >
                <Icon
                  :icon="tech.icon"
                  class="shrink-0"
                />
                {{ tech.label ?? getTechName(tech.icon) }}
              </span>
            </li>
          </ul>
        </aside>
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
