<template>
  <section
    id="tech-stack"
    class="py-20 bg-white dark:bg-black"
  >
    <UContainer>
      <div
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      >
        <div class="text-center max-w-3xl mx-auto mb-10">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Lab Stack & Tooling
          </h2>
          <p class="text-gray-600 dark:text-gray-300 mb-6">
            Private, high-performance AI development tools:
          </p>
          <ul class="space-y-3 text-gray-700 dark:text-gray-300 list-none">
            <li>Ollama, Qwen 32B, OpenCode, Cursor (local inference)</li>
            <li>Infrastructure: Proxmox VE, Tailscale</li>
            <li>Secure, agentic pipelines for orchestrated full-stack development</li>
          </ul>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          <div
            v-for="(tech, index) in platformTechStack"
            :key="tech.id"
            v-motion
            :initial="{ opacity: 0, y: 12 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 350, delay: 80 + index * 40 } }"
            class="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
          >
            <span
              :class="`inline-flex items-center justify-center gap-1 text-2xl mb-2 ${tech.iconClass}`"
            >
              <Icon
                v-if="tech.icon"
                :icon="tech.icon"
                width="1.5em"
                height="1.5em"
                class="inline-block"
              />
            </span>
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
              {{ tech.title }}
            </span>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue"
import { platformTechStack } from "~/data/platformTechStack"

defineOptions({ name: "PlatformTechStack" })
</script>
