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
          <LazyAbout hydrate-on-visible />
          <LazyProjects hydrate-on-visible />
          <LazyTechStack hydrate-on-visible />
          <LazyContact hydrate-on-visible />
        </template>
        <!-- Platform engineering view -->
        <template v-else>
          <PlatformHero />
          <LazyPlatformAbout hydrate-on-visible />
          <LazyPlatformProjects />
          <LazyPlatformTechStack hydrate-on-visible />
          <LazyContact hydrate-on-visible />
        </template>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import PlatformHero from "~/components/platform/PlatformHero.vue"
import {
  PLATFORM_DESCRIPTION,
  PLATFORM_TITLE,
  SITE_DESCRIPTION,
  SITE_TITLE
} from "~/data/siteMeta"

const portfolioMode = usePortfolioMode()

const pageTitle = computed(() =>
  portfolioMode.mode.value === "frontend" ? SITE_TITLE : PLATFORM_TITLE
)
const pageDescription = computed(() =>
  portfolioMode.mode.value === "frontend"
    ? SITE_DESCRIPTION
    : PLATFORM_DESCRIPTION
)

useHead(() => ({
  title: pageTitle.value,
  meta: [{ name: "description", content: pageDescription.value }]
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
