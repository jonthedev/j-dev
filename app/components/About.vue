<template>
  <section
    id="about"
    class="bg-gray-50 py-20 dark:bg-gray-950 relative overflow-hidden"
  >
    <!-- Background: line grid (matches frontend hero) -->
    <div
      class="absolute inset-0 text-gray-900 dark:text-gray-200 opacity-[0.05] dark:opacity-[0.07]"
      aria-hidden="true"
    >
      <div class="absolute inset-0 about-section-grid" />
    </div>
    <div class="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="mb-16 text-center"
      >
        <h2
          class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white"
        >
          Vue Frontend Engineer
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300">
          Vue 3 & Nuxt 4. Building toward full-stack.
        </p>
      </div>

      <div class="grid items-start gap-12 md:grid-cols-2">
        <!-- Left: What I Deliver -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -24 }"
          :visible-once="{
            opacity: 1,
            x: 0,
            transition: { duration: 500, delay: 100 }
          }"
          class="space-y-6"
        >
          <h3
            class="text-lg font-semibold text-gray-900 dark:text-white"
          >
            What I Deliver
          </h3>
          <ul class="list-none space-y-2 text-gray-700 dark:text-gray-300">
            <li class="flex gap-2">
              <span
                class="text-vue-600 dark:text-vue-400 shrink-0"
                aria-hidden="true"
              >→</span>
              <span>Vue 3 and Nuxt 4 applications built from scratch or migrated from legacy frameworks.</span>
            </li>
            <li class="flex gap-2">
              <span
                class="text-vue-600 dark:text-vue-400 shrink-0"
                aria-hidden="true"
              >→</span>
              <span>Performance optimization targeting high Lighthouse scores. I measure before and after.</span>
            </li>
            <li class="flex gap-2">
              <span
                class="text-vue-600 dark:text-vue-400 shrink-0"
                aria-hidden="true"
              >→</span>
              <span>Clean component architecture with TypeScript. Testable, maintainable, and documented.</span>
            </li>
            <li class="flex gap-2">
              <span
                class="text-vue-600 dark:text-vue-400 shrink-0"
                aria-hidden="true"
              >→</span>
              <span>End-to-end testing with Playwright and Cypress. Release confidence, not regressions.</span>
            </li>
          </ul>

          <!-- Compliance -->
          <div class="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-black">
            <h3 class="mb-3 flex items-center text-sm font-semibold text-gray-900 dark:text-white">
              <Icon
                name="lucide:file-check"
                class="mr-2 shrink-0 text-emerald-600 dark:text-emerald-400"
                size="1rem"
              />
              Contracting Ready
            </h3>
            <ul class="space-y-1.5 text-xs text-gray-600 dark:text-gray-400">
              <li class="flex items-center gap-1.5">
                <Icon
                  name="lucide:check"
                  class="shrink-0 text-emerald-600 dark:text-emerald-400"
                  size="0.75rem"
                />
                KVK Registered (93792670)
              </li>
              <li class="flex items-center gap-1.5">
                <Icon
                  name="lucide:check"
                  class="shrink-0 text-emerald-600 dark:text-emerald-400"
                  size="0.75rem"
                />
                Outside IR35 Compliant
              </li>
              <li class="flex items-center gap-1.5">
                <Icon
                  name="lucide:check"
                  class="shrink-0 text-emerald-600 dark:text-emerald-400"
                  size="0.75rem"
                />
                W-8BEN-E & A1 Certificate Available
              </li>
            </ul>
          </div>
        </div>

        <!-- Right: Timeline -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 24 }"
          :visible-once="{
            opacity: 1,
            x: 0,
            transition: { duration: 500, delay: 150 }
          }"
        >
          <UTimeline
            :items="timelineItems"
            size="sm"
            color="neutral"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { TimelineItem } from "@nuxt/ui"
import { careerTimeline } from "~/data/careerTimeline"

defineOptions({ name: "AppAbout" })

const timelineItems = computed<TimelineItem[]>(() =>
  careerTimeline.map(entry => ({
    date: entry.date,
    title: `${entry.title} · ${entry.company}`,
    description: entry.description,
    icon: entry.icon
  }))
)
</script>

<style scoped>
.about-section-grid {
  background-image:
    linear-gradient(to right, currentColor 1px, transparent 1px),
    linear-gradient(to bottom, currentColor 1px, transparent 1px);
  background-size: 40px 40px;
}
</style>
