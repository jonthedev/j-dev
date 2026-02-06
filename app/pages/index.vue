<template>
  <div>
    <!-- Frontend portfolio -->
    <template v-if="portfolioMode.mode.value === 'frontend'">
      <Hero />
      <TechStack />
      <About />
      <Clients />
      <Projects />
      <Contact />
    </template>
    <!-- Platform engineering view -->
    <template v-else>
      <PlatformHero />
      <PlatformAbout />
      <PlatformTechStack />
      <PlatformProjects />
      <Contact />
    </template>
  </div>
</template>

<script setup lang="ts">
import PlatformHero from "~/components/platform/PlatformHero.vue"
import PlatformAbout from "~/components/platform/PlatformAbout.vue"
import PlatformTechStack from "~/components/platform/PlatformTechStack.vue"
import PlatformProjects from "~/components/platform/PlatformProjects.vue"

const portfolioMode = usePortfolioMode()

const pageTitle = computed(() =>
  portfolioMode.mode.value === "frontend"
    ? "JDev Online - High-Performance Vue & Nuxt Engineering | Lead Frontend Specialist"
    : "JDev Online - The Engineering Lab | AI-Augmented Development"
)
const pageDescription = computed(() =>
  portfolioMode.mode.value === "frontend"
    ? "Lead Frontend Specialist at JDev Online. I help businesses build, scale, and modernize web applications with AI-augmented velocity."
    : "Local-first AI stack for engineering velocity and data privacy. How a Senior Vue Engineer uses Ollama, Cursor, and Proxmox to build faster."
)

useHead(() => ({
  title: pageTitle.value,
  meta: [
    { name: "description", content: pageDescription.value }
  ]
}))
</script>
