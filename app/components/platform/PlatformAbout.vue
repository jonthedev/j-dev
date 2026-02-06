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
        <!-- Current AI Workflow (Mac-Native) -->
        <div class="space-y-4">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
            Current AI Workflow (Mac-Native)
          </h2>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
            I currently leverage a local-first AI stack to amplify engineering
            velocity while ensuring total code privacy.
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

        <!-- Infrastructure Roadmap (Sovereign Lab) -->
        <div class="space-y-4">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
            Infrastructure Roadmap (Sovereign Lab)
          </h2>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
            I am currently architecting a dedicated hardware node to migrate my
            local inference off-device, focusing on:
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
                <span><strong>Networking:</strong> Tailscale for secure, encrypted remote access to my local LLM stack while on-site with clients.</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon
                  icon="lucide:check"
                  width="1rem"
                  height="1rem"
                  class="mt-0.5 shrink-0 text-vue-600 dark:text-vue-400"
                />
                <span><strong>System Design:</strong> Implementing distributed patterns to bridge my frontend expertise with AI-native backend infrastructure.</span>
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
