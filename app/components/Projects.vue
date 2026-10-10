<template>
  <section
    id="projects"
    class="scroll-mt-20 border-b border-blueprint bg-gray-50 py-16 dark:bg-gray-950"
  >
    <UContainer>
      <SharedBlueprintFrame label="02 / WORK">
        <div class="px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
          <h2 class="mb-10 text-left text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            Production Work
          </h2>

          <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <SharedProjectCard
              v-for="(project, index) in enterpriseProjects"
              :key="project.id"
              :project="project"
              :index="index"
            />
          </div>

          <div class="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <SharedProjectCard
              v-for="(project, index) in supportingProjects"
              :key="project.id"
              :project="project"
              :index="index + enterpriseProjects.length"
            />
          </div>

          <SharedReveal
            :delay="200"
            class="mt-12"
          >
            <SharedBrandChannelBar triple-wide />
          </SharedReveal>
        </div>
      </SharedBlueprintFrame>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { enterpriseProjects, supportingProjects } from "~/data/projects"

defineOptions({ name: "ProjectsSection" })
</script>
