<template>
  <section class="py-20 bg-white dark:bg-black">
    <UContainer>
      <div
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="text-center mb-16"
      >
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Trusted by Leading Companies
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          I've had the privilege of working with innovative organizations across finance, media, and automotive industries.
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
        <div
          v-for="(client, index) in clients"
          :key="client.id"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 400, delay: 100 + index * 80 } }"
          class="flex items-center justify-center p-6 rounded-lg"
        >
          <img
            :src="client.img"
            :alt="client.alt"
            :width="client.width || 150"
            :height="client.height || 150"
            class="max-h-16 w-auto object-contain filter grayscale dark:invert dark:opacity-90 transition-colors duration-300 opacity-70"
          >
        </div>
      </div>

      <!-- Client testimonials or highlights -->
      <div class="mt-16 grid md:grid-cols-3 gap-8">
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 450, delay: 200 } }"
          class="bg-vue-50 dark:bg-vue-950/30 dark:border-vue-800 border border-vue-200 rounded-lg p-6"
        >
          <div class="flex items-center mb-4">
            <Icon
              icon="lucide:trophy"
              width="1.5rem"
              height="1.5rem"
              class="text-vue-600 dark:text-vue-400 mr-2 shrink-0"
            />
            <h3 class="font-semibold text-vue-900 dark:text-vue-100">
              Award Recognition
            </h3>
          </div>
          <p class="text-vue-800 dark:text-vue-200 text-sm">
            ANWB Traffic won Website van het Jaar 2022 – Populairste Website (Most Popular Website), recognized for exceptional reach and user engagement.
          </p>
        </div>

        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 450, delay: 280 } }"
          class="bg-blue-50 dark:bg-blue-950/20 dark:border-blue-800 border border-blue-200 rounded-lg p-6"
        >
          <div class="flex items-center mb-4">
            <Icon
              icon="lucide:bar-chart-2"
              width="1.5rem"
              height="1.5rem"
              class="text-blue-600 dark:text-blue-400 mr-2 shrink-0"
            />
            <h3 class="font-semibold text-blue-900 dark:text-blue-100">
              Millions of Users
            </h3>
          </div>
          <p class="text-blue-800 dark:text-blue-200 text-sm">
            Applications I've built serve millions of users across the Netherlands, including critical traffic and job-seeking platforms.
          </p>
        </div>

        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 450, delay: 360 } }"
          class="bg-green-50 dark:bg-green-950/20 dark:border-green-800 border border-green-200 rounded-lg p-6"
        >
          <div class="flex items-center mb-4">
            <Icon
              icon="lucide:rocket"
              width="1.5rem"
              height="1.5rem"
              class="text-green-600 dark:text-green-400 mr-2 shrink-0"
            />
            <h3 class="font-semibold text-green-900 dark:text-green-100">
              Enterprise Scale
            </h3>
          </div>
          <p class="text-green-800 dark:text-green-200 text-sm">
            Experience with enterprise-level requirements including accessibility, performance, security, and scalability.
          </p>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import clients from '~/data/clients'

defineOptions({ name: 'AppClients' })
</script>
