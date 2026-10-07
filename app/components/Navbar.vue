<template>
  <nav class="sticky top-0 z-50 border-b border-blueprint bg-white/80 backdrop-blur-md dark:bg-black/90">
    <UContainer>
      <div class="flex justify-between items-center h-16">
        <!-- Logo/Name -->
        <div class="shrink-0">
          <NuxtLink
            to="/"
            class="font-mono text-sm font-medium tracking-[0.16em] text-gray-900 uppercase transition-colors hover:text-vue-600 dark:text-white dark:hover:text-vue-400"
            @click="setActiveHref('')"
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
              class="blueprint-link rounded-sm px-3 py-2 font-mono text-xs font-medium tracking-wider uppercase transition-colors"
              :class="linkClass(link.href)"
              :aria-current="isActive(link.href) ? 'true' : undefined"
              @click="setActiveHref(link.href)"
            >
              {{ link.name }}
            </NuxtLink>
            <a
              v-for="item in profileSocials"
              :key="item.name"
              :href="item.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="item.name"
              class="rounded-sm p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-vue-600 dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-vue-400"
            >
              <Icon
                :icon="item.icon"
                width="1.25rem"
                height="1.25rem"
                class="inline-block"
              />
            </a>
            <!-- Theme Toggle -->
            <button
              type="button"
              class="rounded-sm p-2 text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-900"
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
        <div class="md:hidden flex items-center space-x-1">
          <a
            v-for="item in profileSocials"
            :key="item.name"
            :href="item.href"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="item.name"
            class="rounded-sm p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-vue-600 dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-vue-400"
          >
            <Icon
              :icon="item.icon"
              width="1.25rem"
              height="1.25rem"
              class="inline-block"
            />
          </a>
          <!-- Theme Toggle -->
          <button
            type="button"
            class="rounded-sm p-2 text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-900"
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
            class="rounded-sm p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-200"
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
          class="blueprint-link block rounded-sm px-3 py-2 font-mono text-sm font-medium tracking-wider uppercase transition-colors"
          :class="linkClass(link.href)"
          :aria-current="isActive(link.href) ? 'true' : undefined"
          @click="onMobileNavClick(link.href)"
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

function toggleColorMode() {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark"
}

const isMobileMenuOpen = ref(false)

const { navigationLinks } = useNavigation()
const { contactInfo } = useContact()
const { isActive, setActiveHref } = useActiveSection()

const profileSocials = [
  {
    name: "GitHub",
    href: contactInfo.github,
    icon: "simple-icons:github"
  },
  {
    name: "LinkedIn",
    href: contactInfo.linkedin,
    icon: "simple-icons:linkedin"
  }
]

function linkClass(href: string) {
  return isActive(href)
    ? "text-vue-600 dark:text-vue-400"
    : "text-gray-700 dark:text-gray-300 hover:text-vue-600 dark:hover:text-vue-400"
}

function onMobileNavClick(href: string) {
  setActiveHref(href)
  isMobileMenuOpen.value = false
}
</script>
