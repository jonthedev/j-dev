<template>
  <div class="space-y-20">
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
      <Contact />
    </template>
  </div>
</template>

<script setup lang="ts">
import PlatformHero from '~/components/platform/PlatformHero.vue'
import PlatformAbout from '~/components/platform/PlatformAbout.vue'
import PlatformTechStack from '~/components/platform/PlatformTechStack.vue'

const portfolioMode = usePortfolioMode()

const pageTitle = computed(() =>
  portfolioMode.mode.value === 'frontend'
    ? 'Jonathan Kaonga - Freelance Senior Frontend Engineer | Vue & Nuxt'
    : 'Jonathan Kaonga - AI Platform Engineering (learning, ByteByteAI)'
)
const pageDescription = computed(() =>
  portfolioMode.mode.value === 'frontend'
    ? 'Vue & Nuxt specialist · Contract & project work · Turning ideas into interactive reality'
    : 'Learning AI platform engineering (ByteByteAI) · Containers, CI/CD, cloud-native tooling'
)

useHead(() => ({
  title: pageTitle.value,
  meta: [
    { name: 'description', content: pageDescription.value }
  ]
}))
</script>
