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
    ? "Jonathan Kaonga | AI & Vue Engineer | RAG, Nuxt 4, Local LLMs"
    : "Jonathan Kaonga | Private AI Development | Local LLMs, No Cloud Exposure"
)
const pageDescription = computed(() =>
  portfolioMode.mode.value === "frontend"
    ? "Vue, Nuxt 4, and RAG systems. PostgreSQL, Claude, Ollama, NestJS. Built for ANWB, Thalex, DPG Media. KVK registered."
    : "Code stays on local infrastructure. Ollama for inference. GDPR and IP compliance by architecture. Nuxt 4 migrations that ship fast."
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
