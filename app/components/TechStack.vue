<template>
  <section
    id="tech-stack"
    class="py-20 bg-white dark:bg-black"
  >
    <UContainer>
      <SharedReveal class="text-center mb-12">
        <h2
          class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
        >
          Tech Stack
        </h2>
      </SharedReveal>

      <div class="max-w-4xl mx-auto">
        <SharedReveal
          v-for="(cluster, clusterIndex) in techClusters"
          :key="cluster.id"
          :delay="80 + clusterIndex * 50"
          class="flex flex-col gap-4 py-6 sm:flex-row sm:items-start sm:gap-10 sm:py-7"
          :class="clusterIndex > 0 ? 'border-t border-gray-200 dark:border-gray-800' : ''"
        >
          <h3
            class="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 sm:w-36 sm:shrink-0 sm:pt-2"
          >
            {{ cluster.title }}
          </h3>
          <ul class="m-0 flex list-none flex-wrap justify-center gap-x-5 gap-y-5 p-0 sm:justify-start sm:gap-x-7 sm:gap-y-6">
            <li
              v-for="item in cluster.items"
              :key="item.id"
              class="group flex w-18 flex-col items-center text-center sm:w-20"
            >
              <span
                :class="`inline-flex text-2xl ${item.iconClass} transition-transform group-hover:scale-110`"
              >
                <Icon
                  :icon="item.icon"
                  width="1.5em"
                  height="1.5em"
                  class="inline-block"
                />
              </span>
              <span class="mt-1.5 text-[11px] font-medium leading-tight text-gray-700 dark:text-gray-300 sm:text-xs">
                {{ item.title }}
              </span>
            </li>
          </ul>
        </SharedReveal>
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
import { techClusters } from "~/data/techStack"

defineOptions({ name: "AppTechStack" })
</script>
