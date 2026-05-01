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
          Senior AI &amp; Vue Ecosystem Architect
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300">
          RAG on PostgreSQL. Hybrid Claude and Ollama stacks. Vue 3 Composition API and Nuxt 4.
        </p>
      </div>

      <div class="grid items-center gap-12 md:grid-cols-2">
        <!-- Text content -->
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
          <div class="prose prose-lg dark:prose-invert max-w-none">
            <p class="leading-relaxed text-gray-700 dark:text-gray-300">
              I've spent six years building platforms that handle real traffic. ANWB, Thalex, DPG Media. Since 2024 I've focused on RAG systems, local LLM inference, and Vue architectures that don't fall apart under load.
            </p>

            <h3
              class="mt-8 text-lg font-semibold text-gray-900 dark:text-white"
            >
              How I Work
            </h3>
            <ul class="mt-3 list-none space-y-2 text-gray-700 dark:text-gray-300">
              <li class="flex gap-2">
                <span
                  class="text-vue-600 dark:text-vue-400 shrink-0"
                  aria-hidden="true"
                >→</span>
                <span>I handle the full stack. RAG pipeline to shipped UI. No handoffs.</span>
              </li>
              <li class="flex gap-2">
                <span
                  class="text-vue-600 dark:text-vue-400 shrink-0"
                  aria-hidden="true"
                >→</span>
                <span>Nuxt 4 and Vue 3 migrations target Lighthouse 90+. I measure before and after.</span>
              </li>
              <li class="flex gap-2">
                <span
                  class="text-vue-600 dark:text-vue-400 shrink-0"
                  aria-hidden="true"
                >→</span>
                <span>AI-generated components go through the same review as hand-written code. Same bar.</span>
              </li>
            </ul>

            <h3
              class="mt-8 text-lg font-semibold text-gray-900 dark:text-white"
            >
              Selected Work
            </h3>
            <ul class="mt-3 list-none space-y-2 text-gray-700 dark:text-gray-300">
              <li class="flex gap-2">
                <span
                  class="text-vue-600 dark:text-vue-400 shrink-0"
                  aria-hidden="true"
                >→</span>
                <span><strong class="font-semibold text-gray-900 dark:text-white">ANWB</strong> — anwb.nl/verkeer. Won Website van het Jaar 2022.</span>
              </li>
              <li class="flex gap-2">
                <span
                  class="text-vue-600 dark:text-vue-400 shrink-0"
                  aria-hidden="true"
                >→</span>
                <span><strong class="font-semibold text-gray-900 dark:text-white">Thalex</strong> — derivatives trading dashboards. Vue 3 and Nuxt with real-time data via D3 and TradingView.</span>
              </li>
              <li class="flex gap-2">
                <span
                  class="text-vue-600 dark:text-vue-400 shrink-0"
                  aria-hidden="true"
                >→</span>
                <span><strong class="font-semibold text-gray-900 dark:text-white">DPG Media</strong> — national-scale traffic with a centralized Tailwind design system. <strong class="font-semibold text-gray-900 dark:text-white">iO</strong> — Van Lanschot Kempen platform work.</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Visual/Stats -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 24 }"
          :visible-once="{
            opacity: 1,
            x: 0,
            transition: { duration: 500, delay: 150 }
          }"
          class="space-y-6"
        >
          <!-- Photo: plain img so images work in dev and production -->
          <div class="flex justify-center">
            <img
              src="/jdk-portfolio-comp.webp"
              alt="Jonathan Kaonga"
              width="224"
              height="224"
              loading="lazy"
              decoding="async"
              class="h-48 w-48 rounded-2xl border-2 border-gray-200 object-cover shadow-lg md:h-56 md:w-56 dark:border-gray-800"
            >
          </div>
          <!-- Experience stats -->
          <div class="grid grid-cols-2 gap-4">
            <div
              class="rounded-lg border border-gray-200 bg-white p-6 text-center dark:border-gray-800 dark:bg-black"
            >
              <div
                class="text-vue-600 dark:text-vue-400 mb-2 text-3xl font-bold"
              >
                6+
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-400">
                Years Experience
              </div>
            </div>
            <div
              class="rounded-lg border border-gray-200 bg-white p-6 text-center dark:border-gray-800 dark:bg-black"
            >
              <div
                class="text-vue-600 dark:text-vue-400 mb-2 text-3xl font-bold"
              >
                4+
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-400">
                Enterprise Clients
              </div>
            </div>
          </div>

          <!-- Core Services -->
          <div
            class="bg-vue-50 dark:bg-vue-950/30 dark:border-vue-800 border-vue-200 rounded-lg border p-6"
          >
            <h3
              class="text-vue-900 dark:text-vue-100 mb-4 flex items-center font-semibold"
            >
              <Icon
                icon="lucide:briefcase"
                width="1.25rem"
                height="1.25rem"
                class="text-vue-600 dark:text-vue-400 mr-2 shrink-0"
              />
              Core Services
            </h3>
            <div class="text-vue-800 dark:text-vue-200 space-y-4 text-sm">
              <div>
                <div class="font-semibold text-vue-900 dark:text-vue-100">
                  RAG &amp; Private AI
                </div>
                <p class="mt-1 leading-relaxed">
                  NestJS and PostgreSQL for retrieval-augmented generation. Code stays on local infrastructure. GDPR compliant by default.
                </p>
              </div>
              <div>
                <div class="font-semibold text-vue-900 dark:text-vue-100">
                  AI-Augmented Interfaces
                </div>
                <p class="mt-1 leading-relaxed">
                  Agent-driven workflows with deterministic output. The UI stays predictable when the backend uses LLMs.
                </p>
              </div>
              <div>
                <div class="font-semibold text-vue-900 dark:text-vue-100">
                  Vue Ecosystem &amp; Nuxt 4
                </div>
                <p class="mt-1 leading-relaxed">
                  Large-scale migrations, Pinia and Composition API patterns. Performance audits targeting Lighthouse 90+.
                </p>
              </div>
              <div>
                <div class="font-semibold text-vue-900 dark:text-vue-100">
                  Contracting
                </div>
                <p class="mt-1 leading-relaxed">
                  KVK registered. Outside IR35. W-8BEN-E on file. Built for EU and UK engagements.
                </p>
              </div>
            </div>
          </div>

          <!-- Contracting Readiness -->
          <div
            class="rounded-lg border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-800 dark:bg-emerald-950/30"
          >
            <h3
              class="mb-2 flex items-center font-semibold text-emerald-900 dark:text-emerald-100"
            >
              <Icon
                icon="lucide:file-check"
                width="1.25rem"
                height="1.25rem"
                class="mr-2 shrink-0 text-emerald-600 dark:text-emerald-400"
              />
              Contracting
            </h3>
            <p
              class="mb-4 text-sm font-medium text-emerald-800 dark:text-emerald-200"
            >
              Standard freelance setup. No procurement friction.
            </p>
            <ul
              class="space-y-3 text-sm text-emerald-800 dark:text-emerald-200"
            >
              <li class="flex items-start gap-2">
                <Icon
                  icon="lucide:check"
                  width="1rem"
                  height="1rem"
                  class="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400"
                />
                Kamer van Koophandel | KVK Registered
              </li>
              <li class="flex items-start gap-2">
                <Icon
                  icon="lucide:check"
                  width="1rem"
                  height="1rem"
                  class="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400"
                />
                A1 Certificate available for on-site UK/EU sprints
              </li>
              <li class="flex items-start gap-2">
                <Icon
                  icon="lucide:check"
                  width="1rem"
                  height="1rem"
                  class="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400"
                />
                Fully compliant for "Outside IR35" engagements
              </li>
              <li class="flex items-start gap-2">
                <Icon
                  icon="lucide:check"
                  width="1rem"
                  height="1rem"
                  class="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400"
                />
                W-8BEN-E documented for zero-withholding US contracts
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue"

defineOptions({ name: "AppAbout" })
</script>

<style scoped>
.about-section-grid {
  background-image:
    linear-gradient(to right, currentColor 1px, transparent 1px),
    linear-gradient(to bottom, currentColor 1px, transparent 1px);
  background-size: 40px 40px;
}
</style>
