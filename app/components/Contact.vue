<template>
  <section
    id="contact"
    class="py-20 bg-white dark:bg-black"
  >
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
          <div class="w-16 h-16 bg-vue-100 dark:bg-vue-950/40 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
            <Icon
              icon="lucide:mail"
              width="1.75rem"
              height="1.75rem"
              class="text-vue-600 dark:text-vue-400"
            />
          </div>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-2">
            Email
          </h3>
          <a
            href="mailto:jonathan@j-dev.online"
            class="text-vue-600 dark:text-vue-400 hover:text-vue-700 dark:hover:text-vue-300 transition-colors"
          >
            jonathan@j-dev.online
          </a>
        </div>

        <div class="text-center group">
          <div class="w-16 h-16 bg-vue-100 dark:bg-vue-950/40 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
            <Icon
              icon="lucide:building-2"
              width="1.75rem"
              height="1.75rem"
              class="text-vue-600 dark:text-vue-400"
            />
          </div>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-2">
            Business
          </h3>
          <span class="text-gray-600 dark:text-gray-300">KVK: 93792670</span>
        </div>

        <div class="text-center group">
          <div class="w-16 h-16 bg-vue-100 dark:bg-vue-950/40 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
            <Icon
              icon="lucide:clock"
              width="1.75rem"
              height="1.75rem"
              class="text-vue-600 dark:text-vue-400"
            />
          </div>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-2">
            Availability
          </h3>
          <span class="text-gray-600 dark:text-gray-300">Available from March 2026</span>
        </div>
      </div>

      <!-- Quick contact form or CTA -->
      <div class="bg-gradient-to-r from-vue-50 to-vue-100 dark:from-vue-950/30 dark:to-vue-900/30 dark:border-vue-800 border border-vue-200 rounded-xl p-8">
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
              href="mailto:jonathan@j-dev.online"
              class="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-vue-600 hover:bg-vue-700 rounded-lg transition-colors"
            >
              <Icon
                icon="lucide:send"
                width="1.25rem"
                height="1.25rem"
                class="mr-2 shrink-0"
              />
              Send Email
            </a>

            <a
              href="https://www.linkedin.com/in/jonathan-kaonga-5a04871b5/"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center px-8 py-3 text-lg font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <Icon
                icon="lucide:briefcase"
                width="1.25rem"
                height="1.25rem"
                class="mr-2 shrink-0"
              />
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
          class="w-10 h-10 bg-gray-100 dark:bg-gray-900 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-vue-600 dark:hover:text-vue-400 transition-colors hover:scale-110 transform"
        >
          <Icon
            :icon="social.icon"
            width="1.25rem"
            height="1.25rem"
            class="shrink-0"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineOptions({ name: 'AppContact' })

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/jonthedev', icon: 'simple-icons:github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jonathan-kaonga-5a04871b5/', icon: 'simple-icons:linkedin' }
]

useHead({
  title: 'Contact - Jonathan Kaonga | Freelance Vue/Nuxt Frontend Engineer'
})
</script>
