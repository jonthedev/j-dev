<template>
  <SharedReveal :delay="100 + index * 50">
    <UCard
      class="group border-dashed border-amber-200 dark:border-amber-800/60 bg-amber-50/30 dark:bg-amber-950/20 hover:border-amber-300 dark:hover:border-amber-700/60 transition-all duration-300 hover:shadow-xl h-full"
      :ui="{
        root: 'border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden flex flex-col'
      }"
    >
      <div class="aspect-video overflow-hidden bg-amber-100/50 dark:bg-amber-900/20 relative flex items-center justify-center">
        <div
          class="absolute inset-0 opacity-[0.07] dark:opacity-[0.12]"
          aria-hidden="true"
        >
          <div class="absolute inset-0 blueprint-grid" />
        </div>
        <Icon
          icon="lucide:layers"
          width="4rem"
          height="4rem"
          class="relative z-10 text-amber-600 dark:text-amber-500 opacity-80"
        />
        <span
          class="absolute bottom-2 right-2 rounded border border-amber-300/80 bg-amber-50/90 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-amber-800 dark:border-amber-600 dark:bg-amber-900/80 dark:text-amber-200"
        >
          Technical Blueprint
        </span>
      </div>

      <div class="px-4 sm:px-6 pt-4 sm:pt-6">
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
          {{ placeholder.title }}
        </h3>

        <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {{ placeholder.description }}
        </p>

        <ul class="space-y-2 mb-6">
          <li
            v-for="feature in placeholder.keyFeatures"
            :key="feature"
            class="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
          >
            <Icon
              icon="lucide:check-circle"
              width="1rem"
              height="1rem"
              class="text-amber-500 dark:text-amber-400 mt-0.5 shrink-0"
            />
            {{ feature }}
          </li>
        </ul>
      </div>

      <div class="flex flex-wrap items-center gap-2 mt-auto px-4 sm:px-6 pb-4 sm:pb-6">
        <UButton
          size="sm"
          color="primary"
          icon="lucide:file-code"
          disabled
          class="demo-coming-soon"
        >
          View Swagger Docs
        </UButton>
        <UButton
          size="sm"
          variant="outline"
          color="neutral"
          icon="lucide:code"
          disabled
          class="demo-coming-soon"
        >
          View GitHub
        </UButton>
        <span
          class="ml-1 inline-flex items-center gap-1 rounded-full border border-amber-200 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/50 px-2 py-0.5 text-xs font-medium text-amber-700 dark:text-amber-300"
        >
          <Icon
            icon="lucide:clock"
            width="0.75rem"
            height="0.75rem"
          />
          Coming Soon
        </span>
      </div>
    </UCard>
  </SharedReveal>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue"
import type { ArchitecturePlaceholder } from "~/data/projects"

interface Props {
  placeholder: ArchitecturePlaceholder
  index: number
}

defineProps<Props>()
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.blueprint-grid {
  background-image:
    linear-gradient(to right, currentColor 1px, transparent 1px),
    linear-gradient(to bottom, currentColor 1px, transparent 1px);
  background-size: 20px 20px;
}

.demo-coming-soon {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
