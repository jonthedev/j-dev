<template>
  <section
    id="tech-stack"
    class="scroll-mt-20 border-b border-blueprint bg-white py-16 dark:bg-black"
  >
    <UContainer>
      <SharedBlueprintFrame label="04 / STACK">
        <div class="px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
          <h2 class="mb-10 text-left text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            Tech Stack
          </h2>

          <div>
            <SharedReveal
              v-for="(cluster, clusterIndex) in techClusters"
              :key="cluster.id"
              :delay="80 + clusterIndex * 50"
              class="flex flex-col gap-4 py-6 sm:flex-row sm:items-start sm:gap-10 sm:py-7"
              :class="clusterIndex > 0 ? 'border-t border-gray-200 dark:border-gray-800' : ''"
            >
              <h3
                class="font-mono text-xs font-medium tracking-wider text-gray-500 uppercase sm:w-36 sm:shrink-0 sm:pt-2 dark:text-gray-400"
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
                  <span class="mt-1.5 font-mono text-[11px] font-medium leading-tight text-gray-700 sm:text-xs dark:text-gray-300">
                    {{ item.title }}
                  </span>
                </li>
              </ul>
            </SharedReveal>
          </div>

          <SharedReveal
            :delay="200"
            class="mx-auto mt-4 max-w-4xl"
          >
            <SharedPageSpeedBar />
          </SharedReveal>

          <SharedReveal :delay="220">
            <SharedBrandChannelBar
              triple-wide
              class="mt-12"
            />
          </SharedReveal>
        </div>
      </SharedBlueprintFrame>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue"
import { techClusters } from "~/data/techStack"

defineOptions({ name: "AppTechStack" })
</script>
