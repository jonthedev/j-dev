<template>
  <section class="py-20 bg-white dark:bg-black">
    <UContainer>
      <SharedReveal class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Where I've Worked
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          ANWB, Thalex, DPG Media, and Van Lanschot Kempen. Traffic, trading, media, and finance. All production systems with real users.
        </p>
      </SharedReveal>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
        <SharedReveal
          v-for="(client, index) in clients"
          :key="client.id"
          :delay="100 + index * 80"
          class="flex items-center justify-center p-6 rounded-lg"
        >
          <img
            :src="client.img"
            :alt="client.alt"
            :width="client.width || 150"
            :height="client.height || 150"
            class="max-h-16 w-auto object-contain filter grayscale dark:invert dark:opacity-90 transition-colors duration-300 opacity-70"
          >
        </SharedReveal>
      </div>

      <!-- Client highlights -->
      <SharedReveal
        :delay="200"
        class="mt-16 grid md:grid-cols-2 gap-8"
      >
        <div class="bg-vue-50 dark:bg-vue-950/30 dark:border-vue-800 border border-vue-200 rounded-lg p-6">
          <div class="flex items-center mb-4">
            <Icon
              icon="lucide:bar-chart-2"
              width="1.5rem"
              height="1.5rem"
              class="text-vue-600 dark:text-vue-400 mr-2 shrink-0"
            />
            <h3 class="font-semibold text-vue-900 dark:text-vue-100">
              Scale
            </h3>
          </div>
          <p class="text-vue-800 dark:text-vue-200 text-sm">
            These platforms serve large user bases. Performance and uptime are not optional.
          </p>
        </div>

        <SharedReveal
          :delay="280"
          class="bg-blue-50 dark:bg-blue-950/20 dark:border-blue-800 border border-blue-200 rounded-lg p-6"
        >
          <div class="flex items-center mb-4">
            <Icon
              icon="lucide:shield-check"
              width="1.5rem"
              height="1.5rem"
              class="text-blue-600 dark:text-blue-400 mr-2 shrink-0"
            />
            <h3 class="font-semibold text-blue-900 dark:text-blue-100">
              Standards
            </h3>
          </div>
          <p class="text-blue-800 dark:text-blue-200 text-sm mb-3">
            These environments enforced strict requirements for:
          </p>
          <ul class="text-blue-800 dark:text-blue-200 text-sm list-none space-y-1">
            <li>• accessibility</li>
            <li>• performance</li>
            <li>• security</li>
            <li>• maintainability</li>
          </ul>
        </SharedReveal>
      </SharedReveal>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue"
import clients from "~/data/clients"

defineOptions({ name: "AppClients" })
</script>
