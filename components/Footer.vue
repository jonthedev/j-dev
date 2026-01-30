<template>
  <footer id="contact" class="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Let's Work Together
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Available for Vue/Nuxt freelance projects, contract work, and consulting.
          </p>
          <div class="space-y-2">
            <a 
              href="mailto:contact@j-dev.online" 
              class="flex items-center text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            >
              <span class="mr-2">📧</span>
              contact@j-dev.online
            </a>
            <div class="flex items-center text-gray-600 dark:text-gray-300">
              <span class="mr-2">🏢</span>
              KVK: 82369423
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Quick Links
          </h3>
          <div class="grid grid-cols-2 gap-4">
            <NuxtLink
              v-for="link in quickLinks"
              :key="link.name"
              :to="link.href"
              class="text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            >
              {{ link.name }}
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-600">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-500 dark:text-gray-400 text-sm">
            © {{ new Date().getFullYear() }} J-Dev.Online. All rights reserved.
          </p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a 
              href="https://github.com/jonathankaonga" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-gray-500 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400 transition-colors"
            >
              <span>💻</span>
            </a>
            <a 
              href="https://linkedin.com/in/jonathankaonga" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-gray-500 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400 transition-colors"
            >
              <span>💼</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Tech Stack', href: '#tech-stack' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
]
</script>