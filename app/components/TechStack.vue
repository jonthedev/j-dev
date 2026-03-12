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
          Tech Stack
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto italic">
          A Frontend-first approach to Full-Stack development, ensuring that the Backend is architected specifically to support high-performance, type-safe user experiences.
        </p>
      </div>

      <!-- Two-column: Frontend (Core Expertise) + Backend (Architecture & Data) -->
      <div class="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">
        <!-- Block A: Frontend (Core Expertise) -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 16 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 400, delay: 100 } }"
          class="rounded-xl border border-gray-200 dark:border-gray-800 p-6 lg:p-8 bg-gray-50/50 dark:bg-gray-900/30"
        >
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Frontend (Core Expertise)
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-6">
            High-performance UIs, design systems, and real-time interfaces
          </p>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div
              v-for="(tech, index) in frontendTech"
              :key="tech.id"
              v-motion
              :initial="{ opacity: 0, y: 8 }"
              :visible-once="{ opacity: 1, y: 0, transition: { duration: 300, delay: 150 + index * 40 } }"
              class="flex flex-col items-center p-3 rounded-lg hover:bg-white dark:hover:bg-gray-800/50 transition-colors group"
            >
              <span
                :class="`inline-flex items-center justify-center gap-1 text-2xl mb-1 ${tech.iconClass} group-hover:scale-110 transition-transform`"
              >
                <Icon
                  v-if="tech.icon"
                  :icon="tech.icon"
                  width="1.5em"
                  height="1.5em"
                  class="inline-block"
                />
              </span>
              <span class="text-xs font-medium text-gray-700 dark:text-gray-300 text-center">
                {{ tech.title }}
              </span>
              <span
                v-if="tech.certified"
                class="mt-1 inline-flex items-center gap-1 rounded-full bg-vue-100 dark:bg-vue-900/50 px-2 py-0.5 text-[10px] font-semibold text-vue-700 dark:text-vue-300"
              >
                <Icon
                  icon="lucide:badge-check"
                  width="0.625rem"
                  height="0.625rem"
                />
                Certified
              </span>
            </div>
          </div>
        </div>

        <!-- Block B: Backend (Architecture & Data) -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 16 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 400, delay: 150 } }"
          class="rounded-xl border border-gray-200 dark:border-gray-800 p-6 lg:p-8 bg-gray-50/50 dark:bg-gray-900/30"
        >
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Backend (Architecture & Data)
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-6">
            Modular systems, type-safe DTOs, and RESTful API design
          </p>
          <div class="space-y-4">
            <div
              v-for="(tech, index) in backendTech"
              :key="tech.id"
              v-motion
              :initial="{ opacity: 0, x: -8 }"
              :visible-once="{ opacity: 1, x: 0, transition: { duration: 300, delay: 200 + index * 50 } }"
              class="flex items-center gap-4 rounded-lg p-3 hover:bg-white dark:hover:bg-gray-800/50 transition-colors group"
            >
              <span
                :class="`inline-flex items-center justify-center gap-0.5 w-10 h-10 rounded-lg ${tech.iconClass} bg-gray-100 dark:bg-gray-800 group-hover:scale-105 transition-transform`"
              >
                <template v-if="tech.icons">
                  <Icon
                    v-for="(iconId, i) in tech.icons"
                    :key="i"
                    :icon="iconId"
                    width="1.125em"
                    height="1.125em"
                    class="inline-block"
                  />
                </template>
                <Icon
                  v-else-if="tech.icon"
                  :icon="tech.icon"
                  width="1.5em"
                  height="1.5em"
                  class="inline-block"
                />
              </span>
              <div class="min-w-0 flex-1">
                <span class="text-sm font-medium text-gray-900 dark:text-white">
                  {{ tech.title }}
                </span>
                <span
                  v-if="tech.sublabel"
                  class="block text-xs text-gray-500 dark:text-gray-400"
                >
                  {{ tech.sublabel }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- End-to-End Type Safety Bridge -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 12 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 400, delay: 250 } }"
        class="text-center py-4 mb-12 rounded-lg border border-vue-200 dark:border-vue-800 bg-vue-50/50 dark:bg-vue-950/20"
      >
        <span class="text-sm font-medium text-vue-800 dark:text-vue-200">
          End-to-End Type Safety: Shared types from API to UI
        </span>
      </div>

      <!-- Strategic Tooling & Delivery -->
      <div>
        <h3
          v-motion
          :initial="{ opacity: 0, y: 16 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 400, delay: 100 } }"
          class="text-xl font-semibold text-gray-900 dark:text-white mb-8 text-center"
        >
          Strategic Tooling & Delivery
        </h3>
        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="(group, groupIndex) in strategicTooling"
            :key="group.title"
            v-motion
            :initial="{ opacity: 0, y: 16 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 400, delay: 150 + groupIndex * 60 } }"
            class="rounded-lg border border-gray-200 dark:border-gray-800 p-6 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
          >
            <h4 class="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
              {{ group.title }}
            </h4>
            <div class="flex flex-wrap gap-4">
              <div
                v-for="item in group.items"
                :key="item.id"
                class="flex items-center gap-2"
              >
                <span :class="`inline-flex text-xl ${item.iconClass}`">
                  <Icon
                    :icon="item.icon"
                    width="1.25em"
                    height="1.25em"
                    class="inline-block"
                  />
                </span>
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {{ item.title }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Development Philosophy -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 200 } }"
        class="mt-16 bg-vue-50 dark:bg-vue-950/30 dark:border-vue-800 border border-vue-200 rounded-xl p-8"
      >
        <h3 class="text-lg font-semibold text-vue-900 dark:text-vue-100 mb-4">
          Development Philosophy
        </h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-vue-800 dark:text-vue-200">
          <div class="flex items-start space-x-3">
            <Icon
              icon="lucide:zap"
              width="1.25rem"
              height="1.25rem"
              class="text-vue-600 dark:text-vue-400 mt-0.5 shrink-0"
            />
            <div>
              <strong>Performance First:</strong> Optimized for speed, accessibility, and user experience.
            </div>
          </div>
          <div class="flex items-start space-x-3">
            <Icon
              icon="lucide:puzzle"
              width="1.25rem"
              height="1.25rem"
              class="text-vue-600 dark:text-vue-400 mt-0.5 shrink-0"
            />
            <div>
              <strong>Component Architecture:</strong> Reusable, maintainable, and well-tested components.
            </div>
          </div>
          <div class="flex items-start space-x-3">
            <Icon
              icon="lucide:code-2"
              width="1.25rem"
              height="1.25rem"
              class="text-vue-600 dark:text-vue-400 mt-0.5 shrink-0"
            />
            <div>
              <strong>Modern Tooling:</strong> Vite, TypeScript, and the latest Vue ecosystem.
            </div>
          </div>
          <div class="flex items-start space-x-3">
            <Icon
              icon="lucide:shield-check"
              width="1.25rem"
              height="1.25rem"
              class="text-vue-600 dark:text-vue-400 mt-0.5 shrink-0"
            />
            <div>
              <strong>Quality-first:</strong> Vitest, Playwright, and Lighthouse audits ensure production-grade reliability.
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue"
import { techStack, strategicTooling } from "~/data/techStack"

const frontendTech = computed(() => techStack.filter(item => item.category === "frontend"))
const backendTech = computed(() => techStack.filter(item => item.category === "backend"))
</script>
