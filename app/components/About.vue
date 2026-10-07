<template>
  <section
    id="about"
    class="relative scroll-mt-20 overflow-hidden border-b border-blueprint bg-gray-50 py-16 dark:bg-gray-950"
  >
    <!-- Background: line grid (matches frontend hero) -->
    <div
      class="absolute inset-0 text-gray-900 dark:text-gray-200 opacity-[0.05] dark:opacity-[0.07]"
      aria-hidden="true"
    >
      <div class="absolute inset-0 about-section-grid" />
    </div>
    <div class="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <SharedBlueprintFrame label="01 / ABOUT">
        <div class="grid items-start gap-10 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,7fr)_minmax(16rem,3fr)] lg:gap-12 lg:px-8 lg:py-10">
          <div>
            <h2 class="mb-6 text-left text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
              About
            </h2>
            <div class="space-y-4 text-left text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              <p
                v-for="para in aboutLead"
                :key="para"
              >
                {{ para }}
              </p>
            </div>

            <figure class="m-0 mt-8 max-w-md overflow-hidden rounded-sm border border-blueprint">
              <NuxtImg
                src="/jdev-toekomsttech.webp"
                alt="Jonathan at ToekomstTech pointing a foam dart at the AI block on a whiteboard map of a PC build labeled CPU, GPU, RAM, SSD, and Cloud"
                sizes="sm:100vw md:448px"
                loading="lazy"
                decoding="async"
                class="aspect-video w-full object-cover object-[center_42%]"
              />
              <figcaption class="mt-3 px-3 pb-3 text-left font-mono text-xs leading-relaxed text-gray-600 dark:text-gray-400">
                Identifying the problem, and the solution
                <a
                  href="https://tech.toekomst.org/"
                  class="blueprint-link text-vue-700 dark:text-vue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >@ ToekomstTech</a>
              </figcaption>
            </figure>
          </div>

          <div>
            <div class="rounded-sm border border-blueprint bg-white/80 p-4 backdrop-blur-sm dark:bg-gray-950/80">
              <UTimeline
                :items="timelineItems"
                size="sm"
                :ui="{
                  indicator: 'text-vue-600 dark:text-vue-400',
                  date: 'font-mono text-vue-600 dark:text-vue-400 font-medium',
                  title: 'text-gray-900 dark:text-white font-medium',
                  description: 'text-gray-600 dark:text-gray-400'
                }"
              />
            </div>
          </div>
        </div>
      </SharedBlueprintFrame>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { TimelineItem } from "@nuxt/ui"
import { careerTimeline } from "~/data/careerTimeline"
import { aboutLeadParagraphs } from "~/data/siteMeta"

defineOptions({ name: "AppAbout" })

const aboutLead = aboutLeadParagraphs()

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
