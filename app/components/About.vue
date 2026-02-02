<template>
  <section
    id="about"
    class="py-20 bg-gray-50 dark:bg-gray-950"
  >
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="text-center mb-16"
      >
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          About Me
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300">
          Vue-focused frontend engineer with a passion for exceptional user experiences
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Text content -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -24 }"
          :visible-once="{ opacity: 1, x: 0, transition: { duration: 500, delay: 100 } }"
          class="space-y-6"
        >
          <div class="prose prose-lg dark:prose-invert max-w-none">
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a <strong>Senior Frontend Engineer</strong> with 6+ years of experience building web applications.
              While I have broad experience across the frontend landscape, I now <strong>focus on Vue and its ecosystem</strong>—particularly Vue 3, Nuxt, and modern Vue tooling.
            </p>
            <br>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              Currently working on <strong>derivatives trading platforms</strong> at Thalex using Vue/Nuxt with real-time data visualization,
              I've also contributed to products at <strong>ANWB, Van Lanschot Kempen, and DPG Media</strong>.
              My work has been recognized with an ANWB Website van het Jaar award—Populairste Website (Most Popular Website), 2022.
            </p>
            <br>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              I focus on <strong>performance, accessibility, and maintainable code</strong>.
              Whether building component libraries, migrating legacy applications, or creating new products from scratch,
              I bring strong technical expertise and a user-centered approach to every project.
            </p>
          </div>
        </div>

        <!-- Visual/Stats -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 24 }"
          :visible-once="{ opacity: 1, x: 0, transition: { duration: 500, delay: 150 } }"
          class="space-y-6"
        >
          <!-- Photo: plain img so images work in dev and production -->
          <div class="flex justify-center">
            <img
              src="/jdk-portfolio-2024.jpeg"
              alt="Jonathan Kaonga"
              width="224"
              height="224"
              loading="lazy"
              decoding="async"
              class="w-48 h-48 md:w-56 md:h-56 rounded-2xl object-cover border-2 border-gray-200 dark:border-gray-800 shadow-lg"
            >
          </div>
          <!-- Experience stats -->
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white dark:bg-black rounded-lg p-6 text-center border border-gray-200 dark:border-gray-800">
              <div class="text-3xl font-bold text-vue-600 dark:text-vue-400 mb-2">
                6+
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-400">
                Years Experience
              </div>
            </div>
            <div class="bg-white dark:bg-black rounded-lg p-6 text-center border border-gray-200 dark:border-gray-800">
              <div class="text-3xl font-bold text-vue-600 dark:text-vue-400 mb-2">
                4+
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-400">
                Enterprise clients
              </div>
            </div>
          </div>

          <!-- Key focus areas -->
          <div class="bg-vue-50 dark:bg-vue-950/30 dark:border-vue-800 border border-vue-200 rounded-lg p-6">
            <h3 class="font-semibold text-vue-900 dark:text-vue-100 mb-4 flex items-center">
              <Icon
                icon="lucide:star"
                width="1.25rem"
                height="1.25rem"
                class="mr-2 shrink-0 text-vue-600 dark:text-vue-400"
              />
              Key Focus Areas
            </h3>
            <ul class="space-y-2 text-sm text-vue-800 dark:text-vue-200">
              <li class="flex items-center">
                <Icon
                  icon="lucide:check"
                  width="1rem"
                  height="1rem"
                  class="mr-2 shrink-0 text-vue-600 dark:text-vue-400"
                />
                Vue 3 & Nuxt applications
              </li>
              <li class="flex items-center">
                <Icon
                  icon="lucide:check"
                  width="1rem"
                  height="1rem"
                  class="mr-2 shrink-0 text-vue-600 dark:text-vue-400"
                />
                Performance optimization
              </li>
              <li class="flex items-center">
                <Icon
                  icon="lucide:check"
                  width="1rem"
                  height="1rem"
                  class="mr-2 shrink-0 text-vue-600 dark:text-vue-400"
                />
                Component library development
              </li>
              <li class="flex items-center">
                <Icon
                  icon="lucide:check"
                  width="1rem"
                  height="1rem"
                  class="mr-2 shrink-0 text-vue-600 dark:text-vue-400"
                />
                Legacy app migrations
              </li>
            </ul>
          </div>

          <!-- Availability -->
          <div class="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-lg p-6">
            <h3 class="font-semibold text-emerald-900 dark:text-emerald-100 mb-3 flex items-center">
              <Icon
                icon="lucide:calendar-check"
                width="1.25rem"
                height="1.25rem"
                class="mr-2 shrink-0 text-emerald-600 dark:text-emerald-400"
              />
              Availability
            </h3>
            <ul class="space-y-2 text-sm text-emerald-800 dark:text-emerald-200">
              <li class="flex items-center">
                <Icon
                  icon="lucide:briefcase"
                  width="1rem"
                  height="1rem"
                  class="mr-2 shrink-0 text-emerald-600 dark:text-emerald-400"
                />
                Remote B2B contracts and project work.
              </li>
              <li class="flex items-center">
                <Icon
                  icon="lucide:globe"
                  width="1rem"
                  height="1rem"
                  class="mr-2 shrink-0 text-emerald-600 dark:text-emerald-400"
                />
                UK-born, Amsterdam-based • UK & EU rights • Dutch entity (KVK).
              </li>
              <li class="flex items-center">
                <Icon
                  icon="lucide:receipt"
                  width="1rem"
                  height="1rem"
                  class="mr-2 shrink-0 text-emerald-600 dark:text-emerald-400"
                />
                Cross-border billing—no visa or admin overhead.
              </li>
            </ul>
          </div>

          <!-- Personal touch -->
          <div class="bg-white dark:bg-black rounded-lg p-6 border border-gray-200 dark:border-gray-800">
            <p class="text-gray-600 dark:text-gray-400 text-sm italic">
              "Beyond coding, I enjoy exploring new technologies and continuous learning—with a growing focus on AI platform engineering and running models locally."
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineOptions({ name: 'AppAbout' })
</script>
