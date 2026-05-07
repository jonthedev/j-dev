<template>
  <section
    id="tech-stack"
    class="py-20 bg-white dark:bg-black"
  >
    <UContainer>
      <SharedReveal class="text-center mb-16">
        <h2
          class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Tech Stack
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Full-Stack Agentic Architecture (NestJS / PostgreSQL). Vue 3, Nuxt 4, and TypeScript.
        </p>
      </SharedReveal>

      <!-- Two-column: Frontend (Core Expertise) + Backend (Architecture & Data) -->
      <div class="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">
        <!-- Block A: Frontend (Core Expertise) -->
        <SharedReveal
          :delay="100"
          class="rounded-xl border border-gray-200 dark:border-gray-800 p-6 lg:p-8 bg-gray-50/50 dark:bg-gray-900/30 shadow-md dark:shadow-[0_4px_24px_0_rgba(255,255,255,0.06),0_0_1px_0_rgba(255,255,255,0.1)]"
        >
          <h3
            class="text-lg font-semibold text-gray-900 dark:text-white mb-6 text-center"
          >
            Frontend (Core Expertise)
          </h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <SharedReveal
              v-for="(tech, index) in frontendTech"
              :key="tech.id"
              :delay="150 + index * 40"
              class="flex flex-col items-center p-3 rounded-lg hover:bg-white dark:hover:bg-gray-800/50 transition-colors group"
              :class="{ 'opacity-50': tech.category === 'secondary' }"
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
              <span
                class="text-xs font-medium text-gray-700 dark:text-gray-300 text-center"
              >
                {{ tech.title }}
              </span>
              <span
                v-if="tech.sublabel"
                class="mt-1 inline-flex items-center gap-1 rounded-full bg-gray-100 dark:bg-gray-800/50 px-2 py-0.5 text-[10px] font-medium text-gray-500 dark:text-gray-400"
              >
                {{ tech.sublabel }}
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
            </SharedReveal>
          </div>
        </SharedReveal>

        <!-- Block B: Backend (Architecture & Data) -->
        <SharedReveal
          :delay="150"
          class="rounded-xl border border-gray-200 dark:border-gray-800 p-6 lg:p-8 bg-gray-50/50 dark:bg-gray-900/30 shadow-md dark:shadow-[0_4px_24px_0_rgba(255,255,255,0.06),0_0_1px_0_rgba(255,255,255,0.1)]"
        >
          <h3
            class="text-lg font-semibold text-gray-900 dark:text-white mb-6 text-center"
          >
            Backend (Expanding)
          </h3>
          <div class="space-y-4">
            <SharedReveal
              v-for="(tech, index) in backendTech"
              :key="tech.id"
              :delay="200 + index * 50"
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
            </SharedReveal>
          </div>
        </SharedReveal>
      </div>

      <!-- Strategic DevOps & Quality Assurance -->
      <div>
        <SharedReveal
          :delay="100"
          class="text-xl font-semibold text-gray-900 dark:text-white mb-8 text-center"
        >
          DevOps & Quality Assurance
        </SharedReveal>
        <div class="flex flex-col md:flex-row justify-center gap-8">
          <SharedReveal
            v-for="(group, groupIndex) in strategicTooling"
            :key="group.title"
            :delay="150 + groupIndex * 60"
            class="w-full md:max-w-sm rounded-lg border border-gray-200 dark:border-gray-800 p-6 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
          >
            <h4
              class="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4 text-center"
            >
              {{ group.title }}
            </h4>
            <div class="flex flex-wrap justify-center gap-6">
              <div
                v-for="item in group.items"
                :key="item.id"
                class="flex flex-col items-center text-center gap-2"
              >
                <span :class="`inline-flex text-2xl ${item.iconClass}`">
                  <Icon
                    :icon="item.icon"
                    width="1.25em"
                    height="1.25em"
                    class="inline-block"
                  />
                </span>
                <span
                  class="text-xs font-semibold text-gray-700 dark:text-gray-300"
                >
                  {{ item.title }}
                </span>
              </div>
            </div>
          </SharedReveal>
        </div>
      </div>
      <SharedReveal :delay="220">
        <SharedBrandChannelBar
          triple-wide
          class="mt-12"
        />
      </SharedReveal>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue"
import { techStack, strategicTooling } from "~/data/techStack"

const frontendTech = computed(() =>
  techStack.filter(
    item => item.category === "frontend" || item.category === "secondary"
  )
)
const backendTech = computed(() =>
  techStack.filter(item => item.category === "backend")
)
</script>
