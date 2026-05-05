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
      </div>

      <!-- Call to action -->
      <SharedCtaCard class="mt-16" />

      <SharedReveal
        :delay="200"
        class="mt-12 text-center"
      >
        <SharedBrandChannelBar triple-wide />
      </SharedReveal>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { featuredProject, pastProjects } from "~/data/projects"

defineOptions({ name: "ProjectsSection" })
</script>
