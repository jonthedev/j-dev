<template>
  <section
    id="projects"
    class="scroll-mt-20 py-20 bg-gray-50 dark:bg-gray-950"
  >
    <UContainer>
      <SharedReveal class="text-center mb-16">
        <h2
          class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Production Work
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          National platforms and live trading systems. I keep them stable when the traffic hits.
        </p>
      </SharedReveal>

      <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <SharedProjectCard
          v-for="(project, index) in enterpriseProjects"
          :key="project.id"
          :project="project"
          :index="index"
        />
      </div>

      <div class="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <SharedProjectCard
          v-for="(project, index) in supportingProjects"
          :key="project.id"
          :project="project"
          :index="index + enterpriseProjects.length"
        />
      </div>

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
import { enterpriseProjects, supportingProjects } from "~/data/projects"

defineOptions({ name: "ProjectsSection" })
</script>
