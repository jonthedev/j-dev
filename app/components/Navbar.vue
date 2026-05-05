<template>
  <nav class="sticky top-0 z-50 bg-white/80 dark:bg-black/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
    <UContainer>
      <div class="flex justify-between items-center h-16">
        <!-- Logo/Name -->
        <div class="shrink-0">
          <NuxtLink
            to="/"
            class="text-xl font-bold text-gray-900 dark:text-white hover:text-vue-600 dark:hover:text-vue-400 transition-colors"
          >
            JDev Online
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
            <!-- Portfolio view: custom tablist (contrast + no width-animation repaint vs UTabs) -->
            <div
              class="inline-flex rounded-lg border border-gray-300 bg-gray-100 p-0.5 dark:border-gray-600 dark:bg-gray-800"
              role="tablist"
              aria-label="Portfolio view"
            >
              <button
                type="button"
                role="tab"
                tabindex="0"
                :aria-selected="portfolioTab === 'frontend'"
                class="rounded-md px-3 py-1.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lab-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950"
                :class="portfolioTab === 'frontend'
                  ? 'bg-vue-50 text-vue-700 border-vue-200 dark:bg-vue-950/50 dark:text-vue-400 dark:border-vue-800 shadow-sm'
                  : 'text-gray-800 hover:bg-gray-200/80 dark:text-gray-100 dark:hover:bg-gray-700/80'"
                @click="portfolioTab = 'frontend'"
              >
                Portfolio
              </button>
              <button
                type="button"
                role="tab"
                tabindex="0"
                :aria-selected="portfolioTab === 'platform'"
                class="rounded-md px-3 py-1.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lab-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950"
                :class="portfolioTab === 'platform'
                  ? 'bg-vue-50 text-vue-700 border-vue-200 dark:bg-vue-950/50 dark:text-vue-400 dark:border-vue-800 shadow-sm'
                  : 'text-gray-800 hover:bg-gray-200/80 dark:text-gray-100 dark:hover:bg-gray-700/80'"
                @click="portfolioTab = 'platform'"
              >
                Lab
              </button>
            </div>
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
          <div
            class="inline-flex rounded-lg border border-gray-300 bg-gray-100 p-0.5 dark:border-gray-600 dark:bg-gray-800"
            role="tablist"
            aria-label="Portfolio view"
          >
            <button
              type="button"
              role="tab"
              tabindex="0"
              :aria-selected="portfolioTab === 'frontend'"
              class="rounded-md px-2.5 py-1 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lab-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950"
              :class="portfolioTab === 'frontend'
                ? 'bg-vue-50 text-vue-700 border-vue-200 dark:bg-vue-950/50 dark:text-vue-400 dark:border-vue-800 shadow-sm'
                : 'text-gray-800 hover:bg-gray-200/80 dark:text-gray-100 dark:hover:bg-gray-700/80'"
              @click="portfolioTab = 'frontend'"
            >
              Portfolio
            </button>
            <button
              type="button"
              role="tab"
              tabindex="0"
              :aria-selected="portfolioTab === 'platform'"
              class="rounded-md px-2.5 py-1 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lab-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950"
              :class="portfolioTab === 'platform'
                ? 'bg-lab-50 text-lab-700 border-lab-200 dark:bg-lab-950/50 dark:text-lab-400 dark:border-lab-800 shadow-sm'
                : 'text-gray-800 hover:bg-gray-200/80 dark:text-gray-100 dark:hover:bg-gray-700/80'"
              @click="portfolioTab = 'platform'"
            >
              Lab
            </button>
          </div>
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
    </UContainer>

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
import { Icon } from "@iconify/vue"

defineOptions({ name: "AppNavbar" })

const colorMode = useColorMode()
const portfolioMode = usePortfolioMode()

const portfolioTab = computed({
  get: () => portfolioMode.mode.value,
  set: (v) => {
    if (v === "frontend" || v === "platform") portfolioMode.setMode(v)
  }
})

function toggleColorMode() {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark"
}

const isMobileMenuOpen = ref(false)

const { navigationLinks } = useNavigation()
</script>
