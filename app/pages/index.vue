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
    ? "JDev Online - Senior Vue & Nuxt Consultant | UK-Native | Dutch B2B | Randstad & UK-Ready"
    : "JDev Online - 100% Data Sovereignty | AI-Augmented Development without Cloud Risk"
)
const pageDescription = computed(() =>
  portfolioMode.mode.value === "frontend"
    ? "Senior Vue & Nuxt Consultant. Remote-first with on-site availability for Randstad (Amsterdam, Rotterdam, Den Haag) and UK (London/Hybrid). KVK registered, Outside IR35 compliant."
    : "Your enterprise codebase never leaves my local infrastructure. Air-gapped Ollama LLMs for 100% GDPR and IP compliance. Up to 72% faster migrations to Nuxt 4."
)

useHead(() => ({
  title: pageTitle.value,
  meta: [
    { name: "description", content: pageDescription.value }
  ]
}))
</script>
