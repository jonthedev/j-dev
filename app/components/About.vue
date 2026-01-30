<template>
  <section
    id="about"
    class="py-20 bg-gray-50 dark:bg-gray-950"
  >
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          About Me
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300">
          Vue-focused frontend engineer with a passion for exceptional user experiences
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Text content -->
        <div class="space-y-6">
          <div class="prose prose-lg dark:prose-invert max-w-none">
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a <strong>Senior Frontend Engineer</strong> with 6+ years of experience building web applications.
              While I have broad experience across the frontend landscape, I now <strong>focus on Vue and its ecosystem</strong>—particularly Vue 3, Nuxt, and modern Vue tooling.
            </p>

            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              Currently working on <strong>derivatives trading platforms</strong> at Thalex using Vue/Nuxt with real-time data visualization,
              I've also contributed to products at <strong>ANWB, Van Lanschot Kempen, and DPG Media</strong>.
              My work has been recognized with an ANWB award for innovation.
            </p>

            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              I focus on <strong>performance, accessibility, and maintainable code</strong>.
              Whether building component libraries, migrating legacy applications, or creating new products from scratch,
              I bring strong technical expertise and a user-centered approach to every project.
            </p>

            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              <em>Available for freelance contracts and project work. Based in the Netherlands with EU/UK work rights.</em>
            </p>
          </div>
        </div>

        <!-- Visual/Stats -->
        <div class="space-y-6">
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
                50+
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-400">
                Projects Delivered
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

          <!-- Personal touch -->
          <div class="bg-white dark:bg-black rounded-lg p-6 border border-gray-200 dark:border-gray-800">
            <p class="text-gray-600 dark:text-gray-400 text-sm italic">
              "Beyond coding, I enjoy exploring new technologies, contributing to open source,
              and continuous learning. Based in the Netherlands and available for remote work worldwide."
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

useHead({
  title: 'About - Jonathan Kaonga | Freelance Vue/Nuxt Frontend Engineer'
})
</script>
