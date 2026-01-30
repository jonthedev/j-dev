<template>
  <section id="contact" class="py-20 bg-white dark:bg-gray-900">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Let's Build Something Together
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Available for Vue/Nuxt freelance projects, contract work, and consulting. Let's discuss how I can help bring your ideas to life.
        </p>
      </div>

      <!-- Contact methods -->
      <div class="grid md:grid-cols-3 gap-8 mb-16">
        <div class="text-center group">
          <div class="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
            <span class="text-2xl">📧</span>
          </div>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
          <a
            href="mailto:contact@j-dev.online"
            class="text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
          >
            contact@j-dev.online
          </a>
        </div>

        <div class="text-center group">
          <div class="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
            <span class="text-2xl">🏢</span>
          </div>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Business</h3>
          <span class="text-gray-600 dark:text-gray-300">KVK: 82369423</span>
        </div>

        <div class="text-center group">
          <div class="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
            <span class="text-2xl">⏰</span>
          </div>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Availability</h3>
          <span class="text-gray-600 dark:text-gray-300">Available from March 2024</span>
        </div>
      </div>

      <!-- Quick contact form or CTA -->
      <div class="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-8">
        <div class="text-center">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Start Your Project?
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Whether you need a Vue/Nuxt application built from scratch, performance optimization,
            or expert frontend consultation, I'm here to help deliver exceptional results.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@j-dev.online"
              class="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-amber-600 hover:bg-amber-700 rounded-lg transition-colors"
            >
              <span class="mr-2">✈️</span>
              Send Email
            </a>

            <a
              href="https://linkedin.com/in/jonathankaonga"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center px-8 py-3 text-lg font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <span class="mr-2">💼</span>
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <!-- Social links -->
      <div class="mt-12 flex justify-center space-x-6">
        <a
          v-for="social in socialLinks"
          :key="social.name"
          :href="social.url"
          :aria-label="social.name"
          target="_blank"
          rel="noopener noreferrer"
          class="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors hover:scale-110 transform"
        >
          <span>{{ social.emoji }}</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/jonathankaonga', emoji: '💻' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/jonathankaonga', emoji: '💼' },
  { name: 'Twitter', url: 'https://twitter.com/jonathankaonga', emoji: '🐦' }
]

useHead({
  title: 'Contact - Jonathan Kaonga | Freelance Vue/Nuxt Frontend Engineer'
})
</script>
