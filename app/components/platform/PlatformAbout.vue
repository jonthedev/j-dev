<template>
  <section
    id="about"
    class="py-20 bg-gray-50 dark:bg-gray-950"
  >
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="space-y-12"
      >
        <!-- Nuxt 4 Migration Value Proposition -->
        <div class="space-y-4">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
            Sovereign Migration Engine
          </h2>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
            I specialize in automating the migration of legacy React/Vue 2 stacks to Nuxt 4, compressing multi-month project timelines into sprint-sized deliveries.
          </p>
          <div class="rounded-lg border border-amber-200 bg-amber-50 p-6 dark:border-amber-800 dark:bg-amber-950/30">
            <p class="text-sm font-medium text-amber-900 dark:text-amber-100">
              Case study:
            </p>
            <p class="mt-1 text-sm text-amber-800 dark:text-amber-200">
              Migrated a legacy React architecture to Nuxt 4 in 11 hours (estimated 40+ manual hours) by leveraging an AI-orchestrated refactoring pipeline.
            </p>
          </div>
        </div>

        <!-- Current AI Workflow -->
        <div class="space-y-4">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
            Local-First AI Stack
          </h2>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
            I leverage a local-first AI stack to amplify engineering velocity while ensuring total code privacy.
          </p>
          <div class="bg-vue-50 dark:bg-vue-950/30 dark:border-vue-800 border border-vue-200 rounded-lg p-6">
            <ul class="space-y-4 text-sm text-vue-800 dark:text-vue-200">
              <li class="flex items-start gap-3">
                <Icon
                  icon="lucide:check"
                  width="1rem"
                  height="1rem"
                  class="mt-0.5 shrink-0 text-vue-600 dark:text-vue-400"
                />
                <span><strong>Local Inference:</strong> Ollama with private local-inference models (30B+ parameters) for high-context architectural assistance.</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon
                  icon="lucide:check"
                  width="1rem"
                  height="1rem"
                  class="mt-0.5 shrink-0 text-vue-600 dark:text-vue-400"
                />
                <span><strong>Agentic Coding:</strong> The JDev Workflow: Cursor + agentic pipelines for rapid refactoring and boilerplate compression.</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Enterprise-Grade Remote Infrastructure -->
        <div class="space-y-4">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
            Enterprise-Grade Remote Infrastructure
          </h2>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
            Proxmox and Tailscale enable secure collaboration on sensitive client systems from anywhere—your code stays on my local infrastructure while I work remotely or on-site.
          </p>
          <div class="bg-vue-50 dark:bg-vue-950/30 dark:border-vue-800 border border-vue-200 rounded-lg p-6">
            <ul class="space-y-4 text-sm text-vue-800 dark:text-vue-200">
              <li class="flex items-start gap-3">
                <Icon
                  icon="lucide:check"
                  width="1rem"
                  height="1rem"
                  class="mt-0.5 shrink-0 text-vue-600 dark:text-vue-400"
                />
                <span><strong>Virtualization:</strong> Proxmox VE for dedicated GPU-accelerated AI nodes.</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon
                  icon="lucide:check"
                  width="1rem"
                  height="1rem"
                  class="mt-0.5 shrink-0 text-vue-600 dark:text-vue-400"
                />
                <span><strong>Secure Networking:</strong> Tailscale for encrypted remote access to my local LLM stack while on-site with clients.</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon
                  icon="lucide:check"
                  width="1rem"
                  height="1rem"
                  class="mt-0.5 shrink-0 text-vue-600 dark:text-vue-400"
                />
                <span><strong>System Design:</strong> Distributed patterns to bridge frontend expertise with AI-native backend infrastructure.</span>
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

defineOptions({ name: "PlatformAbout" })
</script>
