<template>
  <section
    id="projects"
    class="py-20 bg-gray-50 dark:bg-gray-950"
  >
    <UContainer>
      <div
        v-motion="sectionRevealAnimation"
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
        <SharedProjectCard
          v-for="(project, index) in projects"
          :key="project.id"
          :project="project"
          :index="index"
        />
      </div>

      <!-- Call to action -->
      <div class="mt-16 text-center">
        <div
          v-motion="sectionRevealAnimation"
          class="bg-vue-50 dark:bg-vue-950/30 dark:border-vue-800 border border-vue-200 rounded-xl p-8"
        >
          <h3 class="text-xl font-semibold text-vue-900 dark:text-vue-100 mb-4">
            Interested in collaborating?
          </h3>
          <p class="text-vue-800 dark:text-vue-200 mb-6 max-w-2xl mx-auto">
            I'm always excited to work on challenging projects that push the boundaries of what's possible with modern web technologies.
          </p>
          <UButton
            to="#contact"
            size="lg"
            color="primary"
            icon="lucide:arrow-right"
            trailing
          >
            Start a conversation
          </UButton>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { projects } from '~/data/projects'

defineOptions({ name: 'ProjectsSection' })

// Use our composables
const { fadeInUp } = useAnimation()

// Section animation
const sectionRevealAnimation = fadeInUp(500, 0)

useHead({
  title: 'Projects - Jonathan Kaonga | Freelance Vue/Nuxt Frontend Engineer'
})
</script>
