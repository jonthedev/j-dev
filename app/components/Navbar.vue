<template>
  <nav class="sticky top-0 z-50 bg-white/80 dark:bg-black/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo/Name -->
        <div class="flex-shrink-0">
          <NuxtLink
            to="/"
            class="text-xl font-bold text-gray-900 dark:text-white hover:text-vue-600 dark:hover:text-vue-400 transition-colors"
          >
            J-Dev.Online
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <NuxtLink
              v-for="link in navigationLinks"
              :key="link.name"
              :to="link.href"
              class="text-gray-700 dark:text-gray-300 hover:text-vue-600 dark:hover:text-vue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              {{ link.name }}
            </NuxtLink>
            <!-- Portfolio view: Nuxt UI Tabs (toggle only) -->
            <UTabs
              v-model="portfolioTab"
              :content="false"
              :items="portfolioTabItems"
              variant="pill"
              color="primary"
              size="sm"
              class="w-auto"
              aria-label="Portfolio view"
            />
            <!-- Theme Toggle -->
            <button
              type="button"
              class="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
              :title="colorMode.value === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
              aria-label="Toggle light/dark mode"
              @click="toggleColorMode"
            >
              <Icon
                :icon="colorMode.value === 'dark' ? 'lucide:sun' : 'lucide:moon'"
                width="1.25rem"
                height="1.25rem"
                class="inline-block"
              />
            </button>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center space-x-2">
          <!-- Portfolio view: Nuxt UI Tabs (toggle only) -->
          <UTabs
            v-model="portfolioTab"
            :content="false"
            :items="portfolioTabItems"
            variant="pill"
            color="primary"
            size="xs"
            class="w-auto"
            aria-label="Portfolio view"
          />
          <!-- Theme Toggle -->
          <button
            type="button"
            class="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
            :title="colorMode.value === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
            aria-label="Toggle light/dark mode"
            @click="toggleColorMode"
          >
            <Icon
              :icon="colorMode.value === 'dark' ? 'lucide:sun' : 'lucide:moon'"
              width="1.25rem"
              height="1.25rem"
              class="inline-block"
            />
          </button>
          <button
            class="p-2 rounded-lg text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
            :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
          >
            <Icon
              :icon="isMobileMenuOpen ? 'lucide:x' : 'lucide:menu'"
              width="1.25rem"
              height="1.25rem"
              class="inline-block"
            />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div
      v-if="isMobileMenuOpen"
      class="md:hidden"
    >
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
        <NuxtLink
          v-for="link in navigationLinks"
          :key="link.name"
          :to="link.href"
          class="text-gray-700 dark:text-gray-300 hover:text-vue-600 dark:hover:text-vue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
          @click="isMobileMenuOpen = false"
        >
          {{ link.name }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineOptions({ name: 'AppNavbar' })

const colorMode = useColorMode()
const portfolioMode = usePortfolioMode()

const portfolioTabItems = [
  { label: 'Frontend', value: 'frontend' },
  { label: 'AI', value: 'platform' }
]

const portfolioTab = computed({
  get: () => portfolioMode.mode.value,
  set: (v) => {
    if (v === 'frontend' || v === 'platform') portfolioMode.setMode(v)
  }
})

function toggleColorMode() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const isMobileMenuOpen = ref(false)

const navigationLinks = [
  { name: 'About', href: '#about' },
  { name: 'Tech Stack', href: '#tech-stack' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
]
</script>
