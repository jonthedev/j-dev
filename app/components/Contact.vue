<template>
  <section
    id="contact"
    class="py-20 bg-white dark:bg-black relative overflow-hidden"
  >
    <!-- Background: line grid (frontend) or dot grid (platform), theme-aware -->
    <div
      v-if="!isPlatformMode"
      class="absolute inset-0 text-gray-900 dark:text-gray-200 opacity-[0.05] dark:opacity-[0.07]"
      aria-hidden="true"
    >
      <div class="absolute inset-0 contact-section-grid" />
    </div>
    <div
      v-else
      class="absolute inset-0 text-gray-900 dark:text-gray-200 opacity-[0.06] dark:opacity-[0.09]"
      aria-hidden="true"
    >
      <div class="absolute inset-0 contact-section-dots" />
    </div>
    <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="text-center mb-16"
      >
        <h2
          class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Project Discovery
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          <template v-if="isPlatformMode">
            Free introductory call to explore your goals. Vue 3, Nuxt 4, NestJS: contract work, consulting, migrations, and new builds. Let's align on scope and fit.
          </template>
          <template v-else>
            A free introductory call to explore your goals—no obligation. Vue 3, Nuxt 4, NestJS:
            contract work, consulting, migrations, and new builds. Let's align on scope and fit.
          </template>
        </p>
      </div>

      <h3
        v-if="isPlatformMode"
        class="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center"
      >
        Contact & Engagement
      </h3>
      <div class="grid md:grid-cols-3 gap-8 mb-16">
        <SharedContactCard
          icon="lucide:mail"
          title="Email"
          :content="contactInfo.email"
          :href="`mailto:${contactInfo.email}`"
          :delay="100"
        />
        <SharedContactCard
          icon="lucide:building-2"
          title="Business"
          :content="`KVK: ${contactInfo.kvk}`"
          :href="contactInfo.kvkUrl"
          :delay="180"
        />
        <SharedContactCard
          icon="lucide:map-pin"
          title="Location"
          :content="contactInfo.location"
          :delay="260"
        />
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: { duration: 500, delay: 150 }
        }"
        class="bg-linear-to-r from-vue-50 to-vue-100 dark:from-vue-950/30 dark:to-vue-900/30 dark:border-vue-800 border border-vue-200 rounded-xl p-8"
      >
        <div class="text-center">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Start Your Project?
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto">
            Nuxt 4 migrations, NestJS backends, or full-stack web applications—I deliver
            scalable, maintainable, enterprise-ready results.
          </p>
          <p class="text-sm text-gray-500 dark:text-gray-400 mb-6 max-w-xl mx-auto">
            No-obligation intro—we'll align on scope and fit before any commitment.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton
              :to="contactInfo.bookingUrl"
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              color="primary"
              icon="lucide:calendar"
              class="shadow-lg shadow-vue-500/20"
            >
              Book a Free Discovery Call
            </UButton>

            <UButton
              :to="`mailto:${contactInfo.email}`"
              size="lg"
              variant="outline"
              color="neutral"
              icon="lucide:send"
            >
              Send Email
            </UButton>

            <UButton
              :to="contactInfo.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              variant="outline"
              color="neutral"
              icon="lucide:briefcase"
            >
              LinkedIn
            </UButton>
          </div>
        </div>
      </div>

      <div class="mt-12 flex justify-center space-x-6">
        <a
          v-for="social in contactMethods.filter((m) => m.name !== 'Email')"
          :key="social.name"
          :href="social.href"
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
import { Icon } from "@iconify/vue"

defineOptions({ name: "AppContact" })

const { contactInfo, contactMethods } = useContact()
const portfolioMode = usePortfolioMode()
const isPlatformMode = computed(() => portfolioMode.mode.value !== "frontend")
</script>

<style scoped>
.contact-section-grid {
  background-image:
    linear-gradient(to right, currentColor 1px, transparent 1px),
    linear-gradient(to bottom, currentColor 1px, transparent 1px);
  background-size: 40px 40px;
}
.contact-section-dots {
  background-image: radial-gradient(
    circle,
    currentColor 1.5px,
    transparent 1.5px
  );
  background-size: 28px 28px;
}
</style>
