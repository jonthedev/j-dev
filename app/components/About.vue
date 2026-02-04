<template>
  <section
    id="about"
    class="bg-gray-50 py-20 dark:bg-gray-950"
  >
    <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="mb-16 text-center"
      >
        <h2
          class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white"
        >
          About Me
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300">
          Vue-focused frontend engineer with a passion for exceptional user
          experiences
        </p>
      </div>

      <div class="grid items-center gap-12 md:grid-cols-2">
        <!-- Text content -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -24 }"
          :visible-once="{
            opacity: 1,
            x: 0,
            transition: { duration: 500, delay: 100 }
          }"
          class="space-y-6"
        >
          <div class="prose prose-lg dark:prose-invert max-w-none">
            <p class="leading-relaxed text-gray-700 dark:text-gray-300">
              I'm a <strong>Senior Frontend Engineer</strong> with 6+ years of
              experience building web applications. While I have broad
              experience across the frontend landscape, I now
              <strong>focus on Vue and its ecosystem</strong>—particularly Vue
              3, Nuxt, and modern Vue tooling.
            </p>
            <br>
            <p class="leading-relaxed text-gray-700 dark:text-gray-300">
              Currently working on
              <strong> derivatives trading platforms</strong> at Thalex using
              Vue/Nuxt with real-time data visualization, I've also contributed
              to products at
              <strong>ANWB, Van Lanschot Kempen, and DPG Media</strong>. My work
              has been recognized with an ANWB Website van het Jaar
              award—Populairste Website (Most Popular Website), 2022.
            </p>
            <br>
            <p class="leading-relaxed text-gray-700 dark:text-gray-300">
              I focus on
              <strong>performance, accessibility, and maintainable code </strong>. Whether building component libraries, migrating legacy
              applications, or creating new products from scratch, I bring
              strong technical expertise and a user-centered approach to every
              project.
            </p>
          </div>
        </div>

        <!-- Visual/Stats -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 24 }"
          :visible-once="{
            opacity: 1,
            x: 0,
            transition: { duration: 500, delay: 150 }
          }"
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
              class="h-48 w-48 rounded-2xl border-2 border-gray-200 object-cover shadow-lg md:h-56 md:w-56 dark:border-gray-800"
            >
          </div>
          <!-- Experience stats -->
          <div class="grid grid-cols-2 gap-4">
            <div
              class="rounded-lg border border-gray-200 bg-white p-6 text-center dark:border-gray-800 dark:bg-black"
            >
              <div
                class="text-vue-600 dark:text-vue-400 mb-2 text-3xl font-bold"
              >
                6+
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-400">
                Years Experience
              </div>
            </div>
            <div
              class="rounded-lg border border-gray-200 bg-white p-6 text-center dark:border-gray-800 dark:bg-black"
            >
              <div
                class="text-vue-600 dark:text-vue-400 mb-2 text-3xl font-bold"
              >
                4+
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-400">
                Enterprise clients
              </div>
            </div>
          </div>

          <!-- Key focus areas -->
          <div
            class="bg-vue-50 dark:bg-vue-950/30 dark:border-vue-800 border-vue-200 rounded-lg border p-6"
          >
            <h3
              class="text-vue-900 dark:text-vue-100 mb-4 flex items-center font-semibold"
            >
              <Icon
                icon="lucide:star"
                width="1.25rem"
                height="1.25rem"
                class="text-vue-600 dark:text-vue-400 mr-2 shrink-0"
              />
              Key Focus Areas
            </h3>
            <ul class="text-vue-800 dark:text-vue-200 space-y-2 text-sm">
              <li class="flex items-center">
                <Icon
                  icon="lucide:check"
                  width="1rem"
                  height="1rem"
                  class="text-vue-600 dark:text-vue-400 mr-2 shrink-0"
                />
                Vue 3 & Nuxt applications
              </li>
              <li class="flex items-center">
                <Icon
                  icon="lucide:check"
                  width="1rem"
                  height="1rem"
                  class="text-vue-600 dark:text-vue-400 mr-2 shrink-0"
                />
                Performance optimization
              </li>
              <li class="flex items-center">
                <Icon
                  icon="lucide:check"
                  width="1rem"
                  height="1rem"
                  class="text-vue-600 dark:text-vue-400 mr-2 shrink-0"
                />
                Component library development
              </li>
              <li class="flex items-center">
                <Icon
                  icon="lucide:check"
                  width="1rem"
                  height="1rem"
                  class="text-vue-600 dark:text-vue-400 mr-2 shrink-0"
                />
                Legacy app migrations
              </li>
            </ul>
          </div>

          <!-- Availability -->
          <div
            class="rounded-lg border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-800 dark:bg-emerald-950/30"
          >
            <h3
              class="mb-3 flex items-center font-semibold text-emerald-900 dark:text-emerald-100"
            >
              <Icon
                icon="lucide:calendar-check"
                width="1.25rem"
                height="1.25rem"
                class="mr-2 shrink-0 text-emerald-600 dark:text-emerald-400"
              />
              Availability
            </h3>
            <ul
              class="space-y-2 text-sm text-emerald-800 dark:text-emerald-200"
            >
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
          <div
            class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-black"
          >
            <p class="text-sm text-gray-600 italic dark:text-gray-400">
              "Beyond coding, I enjoy exploring new technologies and continuous
              learning—with a growing focus on AI platform engineering and
              running models locally."
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
