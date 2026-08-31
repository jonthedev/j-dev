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
      <SharedReveal class="mb-16 text-center">
        <h2
          class="mb-6 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white"
        >
          About
        </h2>
        <p
          class="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300"
        >
          Full-stack product experience across DPG Media, ANWB, and Thalex.
        </p>
        <p
          class="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300"
        >
          Vue, Nuxt, and TypeScript in production, plus Linux and Python for
          systems work.
        </p>
      </SharedReveal>

      <div class="grid items-start gap-12 md:grid-cols-2">
        <!-- Left: Advantage -->
        <SharedReveal
          :delay="100"
          direction="left"
          class="space-y-6"
        >
          <div class="flex items-center justify-center gap-4">
            <img
              src="/jdk-portfolio-comp.webp"
              alt="Jonathan Kaonga"
              width="144"
              height="144"
              loading="lazy"
              class="h-28 w-28 rounded-full object-cover ring-2 ring-gray-200 shadow-sm dark:ring-gray-800"
            >
            <span
              class="inline-flex items-center gap-2 rounded-full border border-vue-200/90 bg-vue-50/80 px-5 py-2.5 font-normal dark:border-vue-800 dark:bg-vue-950/35"
            >
              <span
                class="text-2xl font-bold tabular-nums text-vue-700 dark:text-vue-300"
              >
                6+
              </span>
              <span
                class="text-xs font-semibold uppercase tracking-wider text-vue-600 dark:text-vue-400"
              >
                years · Vue & product UI
              </span>
            </span>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Your Advantage
          </h3>
          <ul class="list-none space-y-2 text-gray-700 dark:text-gray-300">
            <li class="flex gap-2">
              <span
                class="text-vue-600 dark:text-vue-400 shrink-0"
                aria-hidden="true"
              >→</span>
              <span><strong>Senior judgment.</strong> 6+ years shipping production
                frontends. I pick the right approach fast and skip expensive
                detours.</span>
            </li>
            <li class="flex gap-2">
              <span
                class="text-vue-600 dark:text-vue-400 shrink-0"
                aria-hidden="true"
              >→</span>
              <span>
                <strong>Vue ecosystem focus.</strong> Vue, Nuxt, Pinia, and
                TypeScript for product UI, migrations, and maintainable systems.
              </span>
            </li>
            <li class="flex gap-2">
              <span
                class="text-vue-600 dark:text-vue-400 shrink-0"
                aria-hidden="true"
              >→</span>
              <span>
                <strong>Systems depth.</strong> Linux and Python for the command
                line, permissions, and the systems behind the product.
              </span>
            </li>
          </ul>

          <!-- Compliance -->
          <div
            class="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-black"
          >
            <h3
              class="mb-3 flex items-center text-sm font-semibold text-gray-900 dark:text-white"
            >
              <Icon
                name="lucide:file-check"
                class="mr-2 shrink-0 text-emerald-600 dark:text-emerald-400"
                size="1rem"
              />
              How I engage
            </h3>
            <ul class="space-y-1.5 text-xs text-gray-600 dark:text-gray-400">
              <li class="flex items-center gap-1.5">
                <Icon
                  name="lucide:check"
                  class="shrink-0 text-emerald-600 dark:text-emerald-400"
                  size="0.75rem"
                />
                Permanent roles or selective B2B
              </li>
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
                Outside IR35
              </li>
            </ul>
          </div>
        </SharedReveal>

        <!-- Right: Timeline -->
        <SharedReveal
          :delay="150"
          direction="right"
          class="rounded-xl border border-gray-200 bg-white/80 p-6 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/80"
        >
          <UTimeline
            :items="timelineItems"
            size="sm"
            :ui="{
              indicator: 'text-vue-600 dark:text-vue-400',
              date: 'text-vue-600 dark:text-vue-400 font-semibold',
              title: 'text-gray-900 dark:text-white font-medium',
              description: 'text-gray-600 dark:text-gray-400'
            }"
          />
        </SharedReveal>
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
