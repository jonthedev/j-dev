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
          class="mb-8 flex justify-center font-normal"
        >
          <span
            class="inline-flex items-center gap-2 rounded-full border border-vue-200/90 bg-vue-50/80 px-5 py-2.5 dark:border-vue-800 dark:bg-vue-950/35"
          >
            <span class="text-2xl font-bold tabular-nums text-vue-700 dark:text-vue-300">6+</span>
            <span class="text-xs font-semibold uppercase tracking-wider text-vue-600 dark:text-vue-400">years · frontend-first</span>
          </span>
        </p>
        <p
          class="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300"
        >
          British AI Product Engineer based in Amsterdam. Nuxt 4 and Agentic AI ecosystems, with prior years in React and Next.js.
        </p>
      </SharedReveal>

      <div class="grid items-start gap-12 md:grid-cols-2">
        <!-- Left: What I Deliver -->
        <SharedReveal
          :delay="100"
          direction="left"
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

          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mt-8">
            Your Advantage
          </h3>
          <ul class="list-none space-y-2 text-gray-700 dark:text-gray-300">
            <li class="flex gap-2">
              <span
                class="text-vue-600 dark:text-vue-400 shrink-0"
                aria-hidden="true"
              >→</span>
              <span><strong>Senior intuition cuts AI waste.</strong> 6+ years of architecture experience directs AI to exact solutions, avoiding hallucination loops and ensuring enterprise-grade security, performance, and scalability.</span>
            </li>
            <li class="flex gap-2">
              <span
                class="text-vue-600 dark:text-vue-400 shrink-0"
                aria-hidden="true"
              >→</span>
              <span><strong>GDPR-compliant AI workflows.</strong> ALL client code stays on local LLMs (Ollama) — Claude used ONLY for reasoning tasks, never proprietary code. AI homelab reduces API costs and ensures enterprise-grade security. <button
                class="text-vue-600 dark:text-vue-400 hover:underline font-medium"
                @click="portfolioMode.setMode('platform')"
              >Explore the Lab →</button></span>
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

const portfolioMode = usePortfolioMode()

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
