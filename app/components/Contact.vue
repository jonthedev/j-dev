<template>
  <section
    id="contact"
    class="py-20 bg-white dark:bg-black"
  >
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
          A free introductory call to explore your goals—no obligation. Available for
          Vue/Nuxt projects, contract work, and consulting. Let's discuss how JDev
          Online can help build, scale, and modernize your web applications.
        </p>
      </div>

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
            Whether you need a Nuxt 4 migration, a type-safe NestJS backbone, or an
            AI-augmented architect to scale your web systems, I'm here to deliver
            enterprise-grade results.
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
</script>
