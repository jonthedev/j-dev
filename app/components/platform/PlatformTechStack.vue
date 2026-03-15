<template>
  <section
    id="tech-stack"
    class="py-20 bg-white dark:bg-black relative overflow-hidden"
  >
    <!-- Background: dot grid (matches AI hero) -->
    <div
      class="absolute inset-0 text-gray-900 dark:text-gray-200 opacity-[0.06] dark:opacity-[0.09]"
      aria-hidden="true"
    >
      <div class="absolute inset-0 lab-stack-dots" />
    </div>
    <UContainer class="relative z-10">
      <div
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      >
        <!-- The Lab Stack -->
        <div class="text-center max-w-3xl mx-auto mb-12">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            The Lab Stack
          </h2>
          <p class="text-gray-600 dark:text-gray-300">
            The tools behind the velocity.
          </p>
        </div>

        <!-- Current Local AI Stack + Infrastructure Roadmap: side by side on desktop, stacked on mobile -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <!-- Current Local AI Stack -->
          <div
            class="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-md dark:shadow-[0_4px_24px_0_rgba(255,255,255,0.06),0_0_1px_0_rgba(255,255,255,0.1)] text-left md:text-center"
          >
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Current Local AI Stack
            </h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm mb-6">
              Tools powering my private AI-augmented development workflow.
            </p>
            <ul class="space-y-3 text-gray-700 dark:text-gray-300 md:flex md:flex-col md:items-center md:space-y-3">
              <li
                v-for="item in currentStack"
                :key="item.id"
                class="flex items-center gap-3"
              >
                <span
                  :class="`inline-flex shrink-0 ${item.iconClass}`"
                >
                  <Icon
                    v-if="item.icon"
                    :icon="item.icon"
                    width="1.25em"
                    height="1.25em"
                  />
                </span>
                {{ item.title }}
              </li>
            </ul>
          </div>

          <!-- Infrastructure Roadmap -->
          <div
            class="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-md dark:shadow-[0_4px_24px_0_rgba(255,255,255,0.06),0_0_1px_0_rgba(255,255,255,0.1)] text-left md:text-center"
          >
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Infrastructure Roadmap
            </h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm mb-6">
              Planned sovereign AI infrastructure for larger orchestration workloads.
            </p>
            <ul class="space-y-3 text-gray-700 dark:text-gray-300 md:flex md:flex-col md:items-center md:space-y-3">
              <li
                v-for="item in roadmapStack"
                :key="item.id"
                class="flex items-center gap-3"
              >
                <span
                  :class="`inline-flex shrink-0 ${item.iconClass}`"
                >
                  <Icon
                    v-if="item.icon"
                    :icon="item.icon"
                    width="1.25em"
                    height="1.25em"
                  />
                </span>
                {{ item.title }}
              </li>
            </ul>
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

const currentStack = computed(() =>
  platformTechStack.filter(item => item.category === "currentLab")
)
const roadmapStack = computed(() =>
  platformTechStack.filter(item => item.category === "roadmap")
)
</script>

<style scoped>
.lab-stack-dots {
  background-image: radial-gradient(
    circle,
    currentColor 1.5px,
    transparent 1.5px
  );
  background-size: 28px 28px;
}
</style>
