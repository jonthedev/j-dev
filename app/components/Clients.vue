<template>
  <section class="py-20 bg-white dark:bg-gray-900">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Trusted by Leading Companies
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          I've had the privilege of working with innovative organizations across finance, media, and automotive industries.
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
        <div
          v-for="client in clients"
          :key="client.id"
          class="flex items-center justify-center p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
        >
          <img
            :src="client.img"
            :alt="client.alt"
            :width="client.width || 150"
            :height="client.height || 150"
            class="max-h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
          />
        </div>
      </div>

      <!-- Client testimonials or highlights -->
      <div class="mt-16 grid md:grid-cols-3 gap-8">
        <div class="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6">
          <div class="flex items-center mb-4">
            <span class="text-amber-600 dark:text-amber-400 mr-2">🏆</span>
            <h3 class="font-semibold text-amber-900 dark:text-amber-100">Award Recognition</h3>
          </div>
          <p class="text-amber-800 dark:text-amber-200 text-sm">
            Received innovation award for ANWB Traffic application, recognized for exceptional user experience and technical excellence.
          </p>
        </div>

        <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div class="flex items-center mb-4">
            <span class="text-blue-600 dark:text-blue-400 mr-2">📊</span>
            <h3 class="font-semibold text-blue-900 dark:text-blue-100">Millions of Users</h3>
          </div>
          <p class="text-blue-800 dark:text-blue-200 text-sm">
            Applications I've built serve millions of users across the Netherlands, including critical traffic and job-seeking platforms.
          </p>
        </div>

        <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
          <div class="flex items-center mb-4">
            <span class="text-green-600 dark:text-green-400 mr-2">🚀</span>
            <h3 class="font-semibold text-green-900 dark:text-green-100">Enterprise Scale</h3>
          </div>
          <p class="text-green-800 dark:text-green-200 text-sm">
            Experience with enterprise-level requirements including accessibility, performance, security, and scalability.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import clients from '~/db/clients'

useHead({
  title: 'Clients - Jonathan Kaonga | Freelance Vue/Nuxt Frontend Engineer'
})
</script>
