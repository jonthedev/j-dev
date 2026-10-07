<template>
  <footer
    class="border-t border-blueprint bg-gray-50 dark:bg-black"
  >
    <UContainer class="py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ SITE_AVAILABILITY_SHORT }}
          </p>
          <div class="space-y-2 flex flex-col">
            <a
              :href="`mailto:${contactInfo.email}`"
              class="blueprint-link inline-flex w-fit items-center text-gray-600 transition-colors hover:text-vue-600 dark:text-gray-300 dark:hover:text-vue-400"
            >
              <Icon
                icon="lucide:mail"
                width="1.25rem"
                height="1.25rem"
                class="mr-2 shrink-0"
              />
              {{ contactInfo.email }}
            </a>
            <a
              :href="contactInfo.kvkUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="blueprint-link inline-flex w-fit items-center text-gray-600 transition-colors hover:text-vue-600 dark:text-gray-300 dark:hover:text-vue-400"
            >
              <Icon
                icon="lucide:building-2"
                width="1.25rem"
                height="1.25rem"
                class="mr-2 shrink-0"
              />
              KVK: {{ contactInfo.kvk }}
            </a>
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
              class="blueprint-link inline-block w-fit font-mono text-xs tracking-wider text-gray-600 uppercase transition-colors hover:text-vue-600 dark:text-gray-300 dark:hover:text-vue-400"
            >
              {{ link.name }}
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-8 border-t border-blueprint pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="font-mono text-xs tracking-wider text-gray-500 uppercase dark:text-gray-400">
            © {{ new Date().getFullYear() }} JDev Online
          </p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://github.com/jonthedev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              class="text-gray-500 hover:text-vue-600 dark:text-gray-400 dark:hover:text-vue-400 transition-colors"
            >
              <Icon
                icon="simple-icons:github"
                width="1.25rem"
                height="1.25rem"
                class="inline-block"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/jonathan-kaonga-5a04871b5/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              class="text-gray-500 hover:text-vue-600 dark:text-gray-400 dark:hover:text-vue-400 transition-colors"
            >
              <Icon
                icon="simple-icons:linkedin"
                width="1.25rem"
                height="1.25rem"
                class="inline-block"
              />
            </a>
          </div>
        </div>
      </div>
    </UContainer>
  </footer>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue"
import { SITE_AVAILABILITY_SHORT } from "~/data/siteMeta"

defineOptions({ name: "AppFooter" })

const { contactInfo } = useContact()
const { quickLinks } = useNavigation()
</script>
