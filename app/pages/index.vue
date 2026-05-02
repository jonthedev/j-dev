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
    ? "Jonathan Kaonga | Vue & React Frontend Engineer | Amsterdam"
    : "Jonathan Kaonga | Lab — AI Workflows, NestJS, PostgreSQL (In Development)"
)
const pageDescription = computed(() =>
  portfolioMode.mode.value === "frontend"
    ? "Six years of frontend engineering. Five years with React, now Vue 3 and Nuxt 4. ANWB, Thalex, DPG Media. KVK registered."
    : "My active learning environment. Local AI workflows, NestJS, PostgreSQL. Working through Unlearn.dev courses. Not production services yet."
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
