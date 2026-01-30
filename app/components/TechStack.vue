<template>
  <section
    id="tech-stack"
    class="py-20 bg-white dark:bg-gray-900"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Tech Stack
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Vue-first with modern development tools. I focus on the Vue ecosystem while maintaining broad experience across frontend technologies.
        </p>
      </div>

      <!-- Primary Technologies -->
      <div class="mb-16">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
          Core Expertise
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div
            v-for="tech in primaryTech"
            :key="tech.id"
            class="flex flex-col items-center justify-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
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
              <template v-else-if="tech.icons">
                <Icon
                  v-for="(iconId, i) in tech.icons"
                  :key="i"
                  :icon="iconId"
                  width="1.25em"
                  height="1.25em"
                  class="inline-block"
                />
              </template>
            </span>
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
              {{ tech.title }}
            </span>
          </div>
        </div>
      </div>

      <!-- Secondary Technologies -->
      <div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
          Also Experienced With
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div
            v-for="tech in secondaryTech"
            :key="tech.id"
            class="flex flex-col items-center justify-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group opacity-75"
          >
            <span
              :class="`inline-flex items-center justify-center gap-1 text-2xl mb-2 ${tech.iconClass} group-hover:scale-110 transition-transform group-hover:opacity-100`"
            >
              <Icon
                v-if="tech.icon"
                :icon="tech.icon"
                width="1.25em"
                height="1.25em"
                class="inline-block"
              />
              <template v-else-if="tech.icons">
                <Icon
                  v-for="(iconId, i) in tech.icons"
                  :key="i"
                  :icon="iconId"
                  width="1em"
                  height="1em"
                  class="inline-block"
                />
              </template>
            </span>
            <span class="text-sm font-medium text-gray-600 dark:text-gray-400 text-center">
              {{ tech.title }}
            </span>
          </div>
        </div>
      </div>

      <!-- Development Philosophy -->
      <div class="mt-16 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-8">
        <h3 class="text-lg font-semibold text-amber-900 dark:text-amber-100 mb-4">
          Development Philosophy
        </h3>
        <div class="grid md:grid-cols-3 gap-6 text-sm text-amber-800 dark:text-amber-200">
          <div class="flex items-start space-x-3">
            <span class="text-amber-600 dark:text-amber-400 mt-0.5 shrink-0">⚡</span>
            <div>
              <strong>Performance First:</strong> Optimized for speed, accessibility, and user experience.
            </div>
          </div>
          <div class="flex items-start space-x-3">
            <span class="text-amber-600 dark:text-amber-400 mt-0.5 shrink-0">🧩</span>
            <div>
              <strong>Component Architecture:</strong> Reusable, maintainable, and well-tested components.
            </div>
          </div>
          <div class="flex items-start space-x-3">
            <span class="text-amber-600 dark:text-amber-400 mt-0.5 shrink-0">&lt;/&gt;</span>
            <div>
              <strong>Modern Tooling:</strong> Vite, TypeScript, and the latest Vue ecosystem.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { techStack } from '~/db/techStack'

const primaryTech = computed(() => techStack.filter(item => item.category === 'primary'))
const secondaryTech = computed(() => techStack.filter(item => item.category === 'secondary'))
</script>
