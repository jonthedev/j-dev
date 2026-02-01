<template>
  <section
    id="projects"
    class="py-20 bg-gray-50 dark:bg-gray-950"
  >
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="text-center mb-16"
      >
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Engineering R&D & Case Studies
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300">
          Battle-testing agentic workflows and sovereign infrastructure.
        </p>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 100 } }"
      >
        <div
          class="bg-white dark:bg-gray-900 dark:border-gray-800 border border-gray-200 rounded-xl overflow-hidden shadow-sm"
        >
          <!-- Header Section -->
          <div class="p-6 lg:p-8 border-b border-gray-100 dark:border-gray-800">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 class="font-bold text-gray-900 dark:text-white text-2xl mb-1">
                  Agentic Platform Migration: React to Nuxt 4
                </h3>
                <p class="text-vue-600 dark:text-vue-400 font-medium">
                  Project: J Dev Online Portfolio Refactor
                </p>
              </div>
              <div class="flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-lg border border-green-100 dark:border-green-800/30">
                <Icon
                  icon="lucide:check-circle"
                  class="shrink-0"
                />
                <span class="text-sm font-bold tracking-tight">Verified Production Result</span>
              </div>
            </div>
          </div>

          <!-- Metrics Grid (Direct Sync with PageSpeed Insights & CV) -->
          <div class="grid grid-cols-2 md:grid-cols-4 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 relative group">
            <!-- Live Verification Overlay -->
            <a
              href="https://pagespeed.web.dev"
              target="_blank"
              class="absolute inset-0 z-10 flex items-center justify-center bg-white/95 dark:bg-gray-950/95 opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              <div class="flex items-center gap-2 text-vue-600 dark:text-vue-400 font-bold text-xs uppercase tracking-tighter">
                <Icon
                  icon="lucide:external-link"
                  class="w-4 h-4"
                />
                Verify via Google PageSpeed Insights
              </div>
            </a>

            <div class="p-4 text-center border-r border-gray-100 dark:border-gray-800">
              <div class="text-2xl font-bold text-green-600 dark:text-green-400">
                91+
              </div>
              <div class="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">
                Performance
              </div>
            </div>
            <div class="p-4 text-center border-r border-gray-100 dark:border-gray-800">
              <div class="text-2xl font-bold text-gray-900 dark:text-white">
                92
              </div>
              <div class="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">
                Accessibility
              </div>
            </div>
            <div class="p-4 text-center border-r border-gray-100 dark:border-gray-800">
              <div class="text-2xl font-bold text-gray-900 dark:text-white">
                100
              </div>
              <div class="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">
                Best Practices
              </div>
            </div>
            <div class="p-4 text-center">
              <div class="text-2xl font-bold text-gray-900 dark:text-white">
                100
              </div>
              <div class="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">
                SEO
              </div>
            </div>
          </div>

          <div class="p-6 lg:p-8 space-y-8">
            <!-- Velocity & Sovereignty Stats -->
            <div class="grid md:grid-cols-2 gap-4">
              <div class="flex items-center gap-4 p-4 bg-vue-50 dark:bg-vue-950/30 rounded-lg border border-vue-100 dark:border-vue-800">
                <Icon
                  icon="lucide:timer"
                  class="text-vue-600 dark:text-vue-400 w-6 h-6 shrink-0"
                />
                <div>
                  <div class="text-gray-900 dark:text-white font-bold text-sm">
                    ~75% Velocity Increase
                  </div>
                  <div class="text-[11px] text-gray-600 dark:text-gray-400">
                    40+ manual hours to 11 orchestrated hours.
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-4 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-100 dark:border-blue-800">
                <Icon
                  icon="lucide:shield-check"
                  class="text-blue-600 dark:text-blue-400 w-6 h-6 shrink-0"
                />
                <div>
                  <div class="text-gray-900 dark:text-white font-bold text-sm">
                    Total Data Sovereignty
                  </div>
                  <div class="text-[11px] text-gray-600 dark:text-gray-400">
                    Zero cloud exposure via local inference (Ollama).
                  </div>
                </div>
              </div>
            </div>

            <!-- Detailed Roadmap Breakdown -->
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <h4 class="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <span class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs">1</span>
                  Orchestration Phase
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Developed an agentic pipeline using <strong>OpenCode</strong> and <strong>Qwen2.5-Coder (32B)</strong>. Automated structural conversion of legacy React hooks into <strong>Nuxt 4 Composables</strong> while maintaining 1:1 functional parity.
                </p>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <span class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs">2</span>
                  Refinement Phase
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Engineered custom performance optimizations for the <strong>Vite</strong> build engine. Manually refined reactivity patterns and asset delivery to reach the 90+ Mobile Performance threshold.
                </p>
              </div>
            </div>

            <!-- Technology Stack -->
            <div class="pt-6 border-t border-gray-100 dark:border-gray-800 flex flex-wrap items-center justify-between gap-4">
              <div class="flex flex-wrap gap-2">
                <span class="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-[10px] font-mono rounded">QWEN-32B</span>
                <span class="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-[10px] font-mono rounded">OPENCODE</span>
                <span class="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-[10px] font-mono rounded">NUXT 4</span>
                <span class="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-[10px] font-mono rounded">OLLAMA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineOptions({ name: 'PlatformProjects' })
</script>
