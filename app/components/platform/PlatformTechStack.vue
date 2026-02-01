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
        class="text-center mb-16"
      >
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Engineering Lab: Sovereign Infrastructure
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Architecting private environments for high-performance AI and secure software delivery.
        </p>
      </div>

      <div class="space-y-16">
        <div
          v-for="(group, groupIndex) in techGroups"
          :key="group.key"
          class="mb-16 last:mb-0"
        >
          <h3
            v-motion
            :initial="{ opacity: 0, y: 16 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 400, delay: 100 + groupIndex * 50 } }"
            class="text-xl font-semibold text-gray-900 dark:text-white mb-8 text-center"
          >
            {{ group.title }}
          </h3>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div
              v-for="(tech, index) in group.items"
              :key="tech.id"
              v-motion
              :initial="{ opacity: 0, y: 16 }"
              :visible-once="{ opacity: 1, y: 0, transition: { duration: 400, delay: 150 + groupIndex * 50 + index * 40 } }"
              class="flex flex-col items-center justify-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors group"
            >
              <span
                :class="`inline-flex items-center justify-center gap-1 text-3xl mb-2 ${tech.iconClass} group-hover:scale-110 transition-transform`"
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
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 200 } }"
        class="mt-16 bg-vue-50 dark:bg-vue-950/30 dark:border-vue-800 border border-vue-200 rounded-xl p-8"
      >
        <h3 class="text-lg font-semibold text-vue-900 dark:text-vue-100 mb-4">
          Core Methodology
        </h3>
        <div class="grid md:grid-cols-3 gap-6 text-sm text-vue-800 dark:text-vue-200">
          <div class="flex items-start space-x-3">
            <Icon
              icon="lucide:network"
              width="1.25rem"
              height="1.25rem"
              class="text-vue-600 dark:text-vue-400 mt-0.5 shrink-0"
            />
            <div>
              <strong>System Design:</strong> Implementing distributed patterns, RAG, and agentic workflows to build resilient, AI-native platforms.
            </div>
          </div>
          <div class="flex items-start space-x-3">
            <Icon
              icon="lucide:rocket"
              width="1.25rem"
              height="1.25rem"
              class="text-vue-600 dark:text-vue-400 mt-0.5 shrink-0"
            />
            <div>
              <strong>Engineering Velocity:</strong> Using AI-agentic workflows to compress complex refactoring and migration lifecycles (e.g., React to Nuxt 4).
            </div>
          </div>
          <div class="flex items-start space-x-3">
            <Icon
              icon="lucide:lock"
              width="1.25rem"
              height="1.25rem"
              class="text-vue-600 dark:text-vue-400 mt-0.5 shrink-0"
            />
            <div>
              <strong>Local-First:</strong> Orchestrating Ollama and Qwen locally to ensure total data sovereignty and zero cloud lock-in.
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { platformTechStack } from '~/data/platformTechStack'
import type { PlatformTechCategory } from '~/data/platformTechStack'

const groupConfig: Record<PlatformTechCategory, string> = {
  orchestration: 'AI Orchestration',
  languages: 'Platform Languages',
  infrastructure: 'Infrastructure & Virtualization',
  dx: 'Agentic Developer Experience'
}

const techGroups = computed(() =>
  (['orchestration', 'languages', 'infrastructure', 'dx'] as const).map(key => ({
    key,
    title: groupConfig[key],
    items: platformTechStack.filter(item => item.category === key)
  }))
)
</script>
