<template>
  <section
    id="about"
    class="scroll-mt-20 bg-gray-50 py-20 dark:bg-gray-950 relative overflow-hidden"
  >
    <!-- Background: line grid (matches frontend hero) -->
    <div
      class="absolute inset-0 text-gray-900 dark:text-gray-200 opacity-[0.05] dark:opacity-[0.07]"
      aria-hidden="true"
    >
      <div class="absolute inset-0 about-section-grid" />
    </div>
    <div class="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <SharedReveal class="mb-12 text-center">
        <h2
          class="mb-6 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white"
        >
          About
        </h2>
        <p
          class="mx-auto max-w-xl text-lg leading-relaxed text-gray-600 dark:text-gray-300"
        >
          {{ ABOUT_LEAD }}
        </p>
      </SharedReveal>

      <SharedReveal
        :delay="80"
        class="mb-12 flex flex-col items-center gap-6"
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
              years · full stack
            </span>
          </span>
        </div>

        <!-- Circular proof cards: story beats, not a second tech stack -->
        <ul
          class="m-0 flex list-none flex-wrap items-start justify-center gap-8 p-0 sm:gap-10"
        >
          <li
            v-for="(item, index) in aboutProofItems"
            :key="item.id"
            class="flex w-32 flex-col items-center text-center sm:w-36"
          >
            <SharedReveal :delay="120 + index * 60">
              <div class="about-proof-orb relative aspect-square w-32 overflow-visible sm:w-36">
                <span
                  class="about-proof-pulse pointer-events-none absolute -inset-1 rounded-full border-2 border-vue-500 dark:border-vue-400"
                  :style="{ animationDelay: `${index * 0.55}s` }"
                  aria-hidden="true"
                />
                <div
                  class="relative z-[1] flex h-full w-full flex-col items-center justify-center rounded-full border border-vue-200/90 bg-white/90 px-3 shadow-sm dark:border-vue-800 dark:bg-gray-950/90"
                >
                  <Icon
                    :name="item.icon"
                    class="mb-1.5 text-vue-600 dark:text-vue-400"
                    size="1.5rem"
                  />
                  <span
                    class="text-xs font-semibold text-gray-900 sm:text-sm dark:text-white"
                  >
                    {{ item.title }}
                  </span>
                </div>
              </div>
              <p
                class="mt-3 text-xs leading-snug text-gray-600 dark:text-gray-400"
              >
                {{ item.caption }}
              </p>
            </SharedReveal>
          </li>
        </ul>
      </SharedReveal>

      <div class="grid items-start gap-12 md:grid-cols-2">
        <SharedReveal
          :delay="200"
          direction="left"
        >
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
                Full-time roles or selective B2B via JDev Online
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
              <li class="flex items-center gap-1.5">
                <Icon
                  name="lucide:check"
                  class="shrink-0 text-emerald-600 dark:text-emerald-400"
                  size="0.75rem"
                />
                {{ SITE_RESIDENCY }}
              </li>
            </ul>
          </div>
        </SharedReveal>

        <SharedReveal
          :delay="240"
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
import { aboutProofItems } from "~/data/aboutProof"
import { careerTimeline } from "~/data/careerTimeline"
import { ABOUT_LEAD, SITE_RESIDENCY } from "~/data/siteMeta"

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

.about-proof-orb {
  overflow: visible;
}

.about-proof-pulse {
  animation: about-proof-pulse 2.4s ease-out infinite;
  will-change: transform, opacity;
}

@keyframes about-proof-pulse {
  0% {
    opacity: 0.85;
    transform: scale(1);
  }

  70% {
    opacity: 0;
    transform: scale(1.18);
  }

  100% {
    opacity: 0;
    transform: scale(1.18);
  }
}

@media (prefers-reduced-motion: reduce) {
  .about-proof-pulse {
    animation: none;
    opacity: 0.4;
    transform: scale(1.02);
  }
}
</style>
