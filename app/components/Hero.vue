<template>
  <section
    class="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-gray-100 dark:from-black dark:to-gray-950 relative overflow-hidden"
  >
    <div
      class="absolute inset-0 z-0 text-gray-900 dark:text-gray-200 opacity-[0.06] dark:opacity-[0.08]"
      aria-hidden="true"
    >
      <div class="absolute inset-0 hero-grid" />
    </div>

    <div
      class="hero-cursor-layer pointer-events-none absolute inset-0 z-[1] overflow-hidden"
      aria-hidden="true"
    >
      <div class="hero-cursor" />
    </div>

    <div
      class="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center text-vue-600 dark:text-vue-400"
      aria-hidden="true"
    >
      <svg
        class="h-[min(72vmin,28rem)] w-[min(72vmin,28rem)] opacity-[0.11] dark:opacity-[0.16]"
        viewBox="0 0 400 400"
        fill="none"
      >
        <rect
          class="hero-geometry-square"
          x="70"
          y="70"
          width="220"
          height="220"
          stroke="currentColor"
          stroke-width="1.25"
        />
        <circle
          cx="240"
          cy="200"
          r="118"
          stroke="currentColor"
          stroke-width="1.25"
        />
      </svg>
    </div>

    <div
      class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
    >
      <div class="space-y-8">
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold">
          <span
            class="text-transparent bg-clip-text bg-linear-to-r from-vue-600 to-vue-400 dark:from-vue-400 dark:to-vue-300"
          >
            {{ SITE_HEADLINE }}
          </span>
        </h1>

        <p
          class="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          <span class="block">{{ SITE_AVAILABILITY }}</span>
          <span class="block">{{ SITE_LOCATION }}</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { SITE_AVAILABILITY, SITE_HEADLINE, SITE_LOCATION } from "~/data/siteMeta"

defineOptions({ name: "AppHero" })
</script>

<style scoped>
.hero-grid {
  background-image:
    linear-gradient(to right, currentColor 1px, transparent 1px),
    linear-gradient(to bottom, currentColor 1px, transparent 1px);
  background-size: 40px 40px;
}

.hero-cursor {
  position: absolute;
  width: 40px;
  height: 40px;
  border: 1px solid color-mix(in srgb, var(--color-vue-400) 50%, transparent);
  background: color-mix(in srgb, var(--color-vue-500) 18%, transparent);
  animation: hero-cursor-patrol 32s linear infinite;
}

.hero-geometry-square {
  transform-origin: 180px 180px;
  animation: hero-geometry-spin 48s linear infinite;
}

@keyframes hero-cursor-patrol {
  0% {
    transform: translate(8vw, 16vh);
  }
  25% {
    transform: translate(82vw, 16vh);
  }
  50% {
    transform: translate(82vw, 74vh);
  }
  75% {
    transform: translate(8vw, 74vh);
  }
  100% {
    transform: translate(8vw, 16vh);
  }
}

@keyframes hero-geometry-spin {
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-cursor,
  .hero-geometry-square {
    animation: none;
  }

  .hero-cursor {
    transform: translate(18vw, 28vh);
  }
}
</style>
