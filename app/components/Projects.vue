<template>
  <section
    id="projects"
    class="py-20 bg-gray-50 dark:bg-gray-950"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="text-center mb-16"
      >
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Featured Projects
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A selection of recent work across React and Vue—performance optimization, enterprise-scale applications, and modern frontend architecture.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="project.id"
          v-motion
          :initial="{ opacity: 0, y: 24 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 100 + index * 120 } }"
          class="group bg-white dark:bg-black rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-800"
        >
          <!-- Project image -->
          <div class="aspect-video overflow-hidden bg-gray-100 dark:bg-gray-900">
            <img
              :src="project.img"
              :alt="project.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            >
          </div>

          <!-- Project content -->
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
              {{ project.title }}
            </h3>

            <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
              {{ project.text }}
            </p>

            <!-- Tech stack -->
            <div class="flex flex-wrap gap-2 mb-6">
              <div
                v-for="tech in project.tech"
                :key="tech.id"
                class="flex items-center space-x-1.5 bg-gray-100 dark:bg-gray-900 rounded-full px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300"
              >
                <Icon
                  :icon="tech.icon"
                  width="1em"
                  height="1em"
                  :class="tech.classname"
                  class="inline-block shrink-0"
                />
                <span>{{ getTechName(tech.icon) }}</span>
              </div>
            </div>

            <!-- Action buttons -->
            <div class="flex space-x-3">
              <a
                :href="project.url"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-vue-600 hover:bg-vue-700 rounded-md transition-colors"
              >
                <Icon
                  icon="lucide:eye"
                  width="1.125rem"
                  height="1.125rem"
                  class="mr-2 shrink-0"
                />
                View Live
              </a>

              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
              >
                <Icon
                  icon="lucide:code"
                  width="1.125rem"
                  height="1.125rem"
                  class="mr-2 shrink-0"
                />
                Code
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to action -->
      <div class="mt-16 text-center">
        <div
          v-motion
          :initial="{ opacity: 0, y: 24 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 200 } }"
          class="bg-vue-50 dark:bg-vue-950/30 dark:border-vue-800 border border-vue-200 rounded-xl p-8"
        >
          <h3 class="text-xl font-semibold text-vue-900 dark:text-vue-100 mb-4">
            Interested in collaborating?
          </h3>
          <p class="text-vue-800 dark:text-vue-200 mb-6 max-w-2xl mx-auto">
            I'm always excited to work on challenging projects that push the boundaries of what's possible with modern web technologies.
          </p>
          <a
            href="#contact"
            class="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-vue-600 hover:bg-vue-700 rounded-lg transition-colors"
          >
            Start a conversation
            <Icon
              icon="lucide:arrow-right"
              width="1.25rem"
              height="1.25rem"
              class="ml-2 shrink-0 inline-block"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { projects } from '~/data/projects'

defineOptions({ name: 'ProjectsSection' })

// Helper function to extract clean tech names from icon names
const getTechName = (iconName: string): string => {
  const nameMap: Record<string, string> = {
    'simple-icons:vuedotjs': 'Vue',
    'simple-icons:nuxtdotjs': 'Nuxt',
    'simple-icons:typescript': 'TypeScript',
    'simple-icons:vite': 'Vite',
    'simple-icons:tradingview': 'TradingView',
    'simple-icons:nextdotjs': 'Next.js',
    'simple-icons:styledcomponents': 'Styled Components',
    'simple-icons:chakraui': 'Chakra UI',
    'simple-icons:storybook': 'Storybook',
    'simple-icons:sass': 'Sass',
    'simple-icons:amazonaws': 'AWS'
  }
  return nameMap[iconName] || iconName.split(':').pop() || iconName
}

useHead({
  title: 'Projects - Jonathan Kaonga | Freelance Vue/Nuxt Frontend Engineer'
})
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
