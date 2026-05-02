<template>
  <section
    id="projects"
    class="py-20 bg-gray-50 dark:bg-gray-950"
  >
    <UContainer>
      <SharedReveal class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Production Work
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          High-traffic frontends across traffic, trading, media, and finance. Here is what I've shipped.
        </p>
      </SharedReveal>

      <div class="grid md:grid-cols-2 gap-8">
        <!-- Featured project: Thalex -->
        <SharedProjectCard
          :project="featuredProject"
          :index="0"
          class="md:col-span-2"
        />

        <!-- Past projects -->
        <SharedProjectCard
          v-for="(project, index) in pastProjects"
          :key="project.id"
          :project="project"
          :index="index"
        />

        <!-- Architecture blueprint -->
        <SharedArchitecturePlaceholderCard
          v-for="(placeholder, index) in architecturePlaceholders"
          :key="placeholder.id"
          :placeholder="placeholder"
          :index="pastProjects.length + index"
        />
      </div>

      <!-- Call to action -->
      <SharedReveal
        :delay="100"
        class="mt-16 text-center"
      >
        <div class="bg-vue-50 dark:bg-vue-950/30 dark:border-vue-800 border border-vue-200 rounded-xl p-8">
          <h3 class="text-xl font-semibold text-vue-900 dark:text-vue-100 mb-4">
            Have a project in mind?
          </h3>
          <p class="text-vue-800 dark:text-vue-200 mb-6 max-w-2xl mx-auto">
            Tell me what you're building. I'll tell you if I can help.
          </p>
          <UButton
            to="#contact"
            size="lg"
            color="primary"
            icon="lucide:arrow-right"
            trailing
          >
            Start a Conversation
          </UButton>
        </div>
      </SharedReveal>

      <!-- AI & Platform plug: discover after seeing full frontend -->
      <SharedReveal
        :delay="200"
        class="mt-12 text-center"
      >
        <div class="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/50 p-6">
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            I'm building out AI and full-stack capabilities in my lab. Local LLMs, NestJS, PostgreSQL. Active development, not production services yet.
          </p>
          <UButton
            variant="outline"
            size="md"
            icon="lucide:sparkles"
            @click="portfolioMode.setMode('platform')"
          >
            See What I'm Building
          </UButton>
        </div>
      </SharedReveal>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { featuredProject, pastProjects, architecturePlaceholders } from "~/data/projects"
import SharedArchitecturePlaceholderCard from "~/components/shared/ArchitecturePlaceholderCard.vue"

defineOptions({ name: "ProjectsSection" })

const portfolioMode = usePortfolioMode()
</script>
