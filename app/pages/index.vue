<template>
  <div>
    <Transition
      name="fade"
      mode="out-in"
    >
      <div :key="portfolioMode.mode.value">
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
    </Transition>
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
    ? "JDev Online | Senior AI & Vue Ecosystem Architect | Sovereign AI · Vue · Nuxt 4"
    : "JDev Online - 100% Data Sovereignty | AI-Augmented Development without Cloud Risk"
)
const pageDescription = computed(() =>
  portfolioMode.mode.value === "frontend"
    ? "Sovereign AI (privacy & local LLMs) and the Vue ecosystem. RAG on PostgreSQL, Claude + Ollama, NestJS. Website of the Year 2022 · Thalex trading dashboards. KVK B2B, UK/EU."
    : "Your enterprise codebase never leaves my local infrastructure. Air-gapped Ollama LLMs for 100% GDPR and IP compliance. Up to 72% faster migrations to Nuxt 4."
)

useHead(() => ({
  title: pageTitle.value,
  meta: [
    { name: "description", content: pageDescription.value }
  ]
}))
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
