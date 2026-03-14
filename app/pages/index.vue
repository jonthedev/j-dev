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
    ? "JDev Online | Senior Full-Stack Engineer | Vue 3 · Nuxt 4 · NestJS | Scalable Web Applications"
    : "JDev Online - 100% Data Sovereignty | AI-Augmented Development without Cloud Risk"
)
const pageDescription = computed(() =>
  portfolioMode.mode.value === "frontend"
    ? "Senior Full-Stack Engineer. Vue 3, Nuxt 4, NestJS. Scalable, maintainable web applications. UK/EU/remote. KVK registered, Outside IR35."
    : "Your enterprise codebase never leaves my local infrastructure. Air-gapped Ollama LLMs for 100% GDPR and IP compliance. Up to 72% faster migrations to Nuxt 4."
)

useHead(() => ({
  title: pageTitle.value,
  meta: [
    { name: "description", content: pageDescription.value }
  ]
}))
</script>
