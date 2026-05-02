<template>
  <div>
    <Transition
      name="fade"
      mode="out-in"
    >
      <div :key="portfolioMode.mode.value">
        <!-- Frontend portfolio: Lazy* code-splits below-the-fold to cut main-thread work -->
        <template v-if="portfolioMode.mode.value === 'frontend'">
          <Hero />
          <LazyTechStack hydrate-on-visible />
          <LazyAbout hydrate-on-visible />
          <LazyClients hydrate-on-visible />
          <LazyProjects hydrate-on-visible />
          <LazyContact hydrate-on-visible />
        </template>
        <!-- Platform engineering view -->
        <template v-else>
          <PlatformHero />
          <LazyPlatformAbout hydrate-on-visible />
          <LazyPlatformTechStack hydrate-on-visible />
          <LazyPlatformProjects hydrate-on-visible />
          <LazyContact hydrate-on-visible />
        </template>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import PlatformHero from "~/components/platform/PlatformHero.vue"

const portfolioMode = usePortfolioMode()

const pageTitle = computed(() =>
  portfolioMode.mode.value === "frontend"
    ? "Jonathan Kaonga | Vue Frontend Engineer | Amsterdam"
    : "Jonathan Kaonga | Lab: AI Workflows, NestJS, PostgreSQL (In Development)"
)
const pageDescription = computed(() =>
  portfolioMode.mode.value === "frontend"
    ? "Six years of frontend engineering across traffic, trading, media, and finance. Vue 3 and Nuxt 4. ANWB, Thalex, DPG Media. KVK registered."
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
