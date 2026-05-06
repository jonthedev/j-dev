<template>
  <section
    id="projects"
    class="py-20 bg-gray-50 dark:bg-gray-950"
  >
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SharedReveal>
        <!-- Case Study: React to Nuxt 4 Migration -->
        <div
          class="bg-white dark:bg-gray-900 dark:border-gray-800 border border-gray-200 rounded-xl overflow-hidden shadow-md dark:shadow-[0_4px_24px_0_rgba(255,255,255,0.06),0_0_1px_0_rgba(255,255,255,0.1)]"
        >
          <!-- Card header -->
          <div class="p-6 lg:p-8 border-b border-gray-100 dark:border-gray-800">
            <div
              class="flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div>
                <h2
                  class="font-bold text-gray-900 dark:text-white text-2xl mb-1"
                >
                  Case Study: React to Nuxt 4 Migration
                </h2>
                <p
                  class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed"
                >
                  My own portfolio site. Migrated from React to Nuxt 4 using AI
                  tools in my development workflow. Sensitive code stayed local;
                  Claude supported reasoning and research. This is the approach
                  I'm building toward for client projects.
                </p>
              </div>
              <div
                class="flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-lg border border-green-100 dark:border-green-800/30 shrink-0"
              >
                <Icon
                  icon="lucide:check-circle"
                  class="shrink-0"
                />
                <span class="text-sm font-bold tracking-tight">Production Result</span>
              </div>
            </div>
          </div>

          <!-- Metrics grid -->
          <div
            class="grid grid-cols-2 md:grid-cols-4 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 relative group"
          >
            <a
              href="https://pagespeed.web.dev"
              target="_blank"
              rel="noopener noreferrer"
              class="absolute inset-0 z-10 flex items-center justify-center bg-white/95 dark:bg-gray-950/95 opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              <div
                class="flex items-center gap-2 text-vue-600 dark:text-vue-400 font-bold text-xs uppercase tracking-tighter"
              >
                <Icon
                  icon="lucide:external-link"
                  class="w-4 h-4"
                />
                Verify via Google PageSpeed Insights
              </div>
            </a>
            <div
              class="p-4 text-center border-r border-gray-100 dark:border-gray-800"
            >
              <div class="text-2xl font-bold text-gray-900 dark:text-white">
                95
              </div>
              <div
                class="text-[10px] uppercase tracking-widest text-gray-500 font-semibold"
              >
                Performance
              </div>
            </div>
            <div
              class="p-4 text-center border-r border-gray-100 dark:border-gray-800"
            >
              <div class="text-2xl font-bold text-gray-900 dark:text-white">
                92
              </div>
              <div
                class="text-[10px] uppercase tracking-widest text-gray-500 font-semibold"
              >
                Accessibility
              </div>
            </div>
            <div
              class="p-4 text-center border-r border-gray-100 dark:border-gray-800"
            >
              <div class="text-2xl font-bold text-gray-900 dark:text-white">
                100
              </div>
              <div
                class="text-[10px] uppercase tracking-widest text-gray-500 font-semibold"
              >
                Best Practices
              </div>
            </div>
            <div class="p-4 text-center">
              <div class="text-2xl font-bold text-gray-900 dark:text-white">
                100
              </div>
              <div
                class="text-[10px] uppercase tracking-widest text-gray-500 font-semibold"
              >
                SEO
              </div>
            </div>
          </div>

          <!-- Screenshot preview -->
          <div
            class="px-6 lg:px-8 py-6 border-b border-gray-100 dark:border-gray-800 min-h-[15rem]"
          >
            <img
              v-if="!isDarkTheme"
              :src="jdevOnlineCaptureForLightUi"
              alt="JDev Online — Portfolio Screenshot"
              class="w-full rounded-lg max-h-60 object-contain"
            >
            <img
              v-else
              :src="jdevOnlineCaptureForDarkUi"
              alt="JDev Online — Portfolio Screenshot"
              class="w-full rounded-lg max-h-60 object-contain"
            >
          </div>

          <div class="p-6 lg:p-8 space-y-8">
            <!-- Velocity & Sovereignty -->
            <div class="grid md:grid-cols-2 gap-4">
              <div
                class="flex items-center gap-4 p-4 bg-vue-50 dark:bg-vue-950/30 rounded-lg border border-vue-100 dark:border-vue-800"
              >
                <Icon
                  icon="lucide:timer"
                  class="text-vue-600 dark:text-vue-400 w-6 h-6 shrink-0"
                />
                <div>
                  <div class="text-gray-900 dark:text-white font-bold text-sm">
                    Development Speed
                  </div>
                  <div class="text-[11px] text-gray-600 dark:text-gray-400">
                    AI tooling cut refactoring time significantly. The migration
                    shipped in a fraction of the estimated timeline.
                  </div>
                </div>
              </div>
              <div
                class="flex items-center gap-4 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-100 dark:border-blue-800"
              >
                <Icon
                  icon="lucide:shield-check"
                  class="text-blue-600 dark:text-blue-400 w-6 h-6 shrink-0"
                />
                <div>
                  <div class="text-gray-900 dark:text-white font-bold text-sm">
                    Hybrid Privacy Workflow
                  </div>
                  <div class="text-[11px] text-gray-600 dark:text-gray-400">
                    Local LLMs handled sensitive code paths; Claude was used
                    selectively for reasoning and research.
                  </div>
                </div>
              </div>
            </div>

            <!-- Project Phases -->
            <div>
              <h3
                class="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4"
              >
                Project Phases
              </h3>
              <div class="grid md:grid-cols-2 gap-8">
                <div>
                  <h4
                    class="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2"
                  >
                    <span
                      class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs"
                    >1</span>
                    Migration
                  </h4>
                  <p
                    class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
                  >
                    Full React to Nuxt 4 conversion. Reusable Vue components and
                    composables replaced the old React patterns. Functional
                    parity with the original site.
                  </p>
                </div>
                <div>
                  <h4
                    class="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2"
                  >
                    <span
                      class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs"
                    >2</span>
                    Optimization
                  </h4>
                  <p
                    class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
                  >
                    Vite bundle optimizations. Reactivity tuning. SEO and copy
                    review. Lighthouse 90+ across all categories.
                  </p>
                </div>
              </div>
            </div>

            <!-- Optional note -->
            <div
              class="rounded-lg border border-vue-200 dark:border-vue-800 bg-vue-50/50 dark:bg-vue-950/20 p-4"
            >
              <p class="text-sm text-vue-800 dark:text-vue-200">
                This was a full migration. The same approach works for feature
                additions, test coverage, or performance improvements on
                existing Vue and Nuxt applications.
              </p>
            </div>

            <!-- Tech stack tags -->
            <div
              class="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-wrap items-center gap-2"
            >
              <span
                class="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-[10px] font-mono rounded"
              >QWEN-32B</span>
              <span
                class="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-[10px] font-mono rounded"
              >OPENCODE</span>
              <span
                class="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-[10px] font-mono rounded"
              >NUXT 4</span>
              <span
                class="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-[10px] font-mono rounded"
              >OLLAMA</span>
            </div>
          </div>
        </div>
      </SharedReveal>

      <!-- Technical Blueprint -->
      <SharedReveal
        :delay="100"
        class="mt-8"
      >
        <div
          class="border-dashed border-amber-200 dark:border-amber-800/60 bg-amber-50/30 dark:bg-amber-950/20 hover:border-amber-300 dark:hover:border-amber-700/60 transition-all duration-300 hover:shadow-xl overflow-hidden rounded-xl relative"
        >
          <!-- Blueprint grid background -->
          <div
            class="absolute inset-0 opacity-[0.07] dark:opacity-[0.12]"
            aria-hidden="true"
          >
            <div class="absolute inset-0 blueprint-grid" />
          </div>

          <!-- Text content with background layer -->
          <div
            class="relative z-10 rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50/40 dark:bg-amber-950/40 p-6 lg:p-8"
          >
            <div class="flex items-center gap-2 mb-4">
              <span
                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-lab-50 text-lab-700 dark:bg-lab-950/50 dark:text-lab-400 border border-lab-200 dark:border-lab-800"
              >
                In Progress
              </span>
              <h2 class="font-bold text-gray-900 dark:text-white text-2xl">
                Type-Safe Modular API
              </h2>
            </div>
            <p
              class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6"
            >
              Modular NestJS API architecture with type-safe DTOs,
              Prisma-managed PostgreSQL, and Swagger/OpenAPI documentation.
            </p>
            <div class="grid md:grid-cols-2 gap-4 mb-6">
              <div
                v-for="feature in blueprintFeatures"
                :key="feature"
                class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
              >
                <Icon
                  icon="lucide:check"
                  class="text-amber-500 dark:text-amber-400 w-4 h-4 shrink-0"
                />
                {{ feature }}
              </div>
            </div>
            <div class="flex flex-wrap items-center gap-2">
              <span
                class="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-[10px] font-mono rounded"
              >NESTJS</span>
              <span
                class="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-[10px] font-mono rounded"
              >PRISMA</span>
              <span
                class="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-[10px] font-mono rounded"
              >POSTGRESQL</span>
              <span
                class="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-[10px] font-mono rounded"
              >SWAGGER</span>
            </div>
          </div>
        </div>
      </SharedReveal>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue"
import { joinURL } from "ufo"
import {
  architecturePlaceholders,
  jdevOnlineCaseStudyScreenshots
} from "~/data/projects"

defineOptions({ name: "PlatformProjects" })

const isDarkTheme = useIsDarkTheme()
const { app } = useRuntimeConfig()
const jdevOnlineCaptureForLightUi = joinURL(
  app.baseURL ?? "/",
  jdevOnlineCaseStudyScreenshots.whenThemeLight
)
const jdevOnlineCaptureForDarkUi = joinURL(
  app.baseURL ?? "/",
  jdevOnlineCaseStudyScreenshots.whenThemeDark
)

const blueprint = computed(() => architecturePlaceholders[0])
const blueprintFeatures = computed(() => blueprint.value?.keyFeatures ?? [])
</script>

<style scoped>
.blueprint-grid {
  background-image: linear-gradient(to right, currentColor 1px, transparent 1px),
    linear-gradient(to bottom, currentColor 1px, transparent 1px);
  background-size: 20px 20px;
}
</style>
