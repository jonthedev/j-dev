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
      class="hero-cursor-layer pointer-events-none absolute inset-0 z-1 overflow-hidden"
      aria-hidden="true"
    >
      <div class="hero-cursor" />
    </div>

    <div
      class="pointer-events-none absolute inset-0 z-1 flex items-center justify-center text-vue-600 dark:text-vue-400"
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
      class="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-24 sm:px-6 md:grid-cols-2 md:gap-12 lg:px-8"
    >
      <div class="order-2 space-y-6 text-center md:order-1 md:text-left">
        <h1 class="text-4xl font-bold md:text-6xl lg:text-7xl">
          <span
            class="bg-linear-to-r from-vue-600 to-vue-400 bg-clip-text text-transparent dark:from-vue-400 dark:to-vue-300"
          >
            {{ SITE_PERSON_NAME }}
          </span>
        </h1>

        <p class="text-xl font-medium text-gray-700 md:text-2xl dark:text-gray-200">
          {{ SITE_HEADLINE }}
        </p>

        <p class="text-base text-gray-600 md:text-lg dark:text-gray-300">
          <span class="block">{{ SITE_AVAILABILITY }}</span>
          <span class="mt-1 inline-flex items-center justify-center gap-1.5 md:justify-start">
            <Icon
              name="lucide:map-pin"
              class="shrink-0 text-vue-600 dark:text-vue-400"
              size="1rem"
            />
            {{ SITE_LOCATION }}
          </span>
        </p>
      </div>

      <div class="order-1 mx-auto w-full max-w-sm md:order-2">
        <div class="relative mx-auto w-fit px-8 pt-4 pb-10 sm:px-12">
          <div class="relative">
            <img
              src="/jdk-portfolio-comp.webp"
              :alt="SITE_PERSON_NAME"
              width="320"
              height="320"
              fetchpriority="high"
              class="h-56 w-56 rounded-full object-cover ring-4 ring-white shadow-lg sm:h-72 sm:w-72 dark:ring-gray-900"
            >
            <p
              class="absolute inset-x-0 -bottom-4 mx-auto flex w-fit items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-800 shadow-sm dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100"
            >
              <span
                class="relative flex h-2.5 w-2.5"
                aria-hidden="true"
              >
                <span class="hero-status-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              {{ SITE_AVAILABLE_STATUS }}
            </p>
          </div>

          <dl
            class="pointer-events-none absolute top-8 left-0 rounded-xl border border-gray-200 bg-white/95 px-3 py-2 shadow-md dark:border-gray-700 dark:bg-gray-950/95"
          >
            <dt class="sr-only">
              Years of experience
            </dt>
            <dd class="text-center">
              <span class="block text-lg font-bold tabular-nums text-vue-700 dark:text-vue-300">{{ careerYearsLabel }}</span>
              <span class="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Years</span>
            </dd>
          </dl>

          <dl
            class="pointer-events-none absolute right-0 bottom-16 rounded-xl border border-gray-200 bg-white/95 px-3 py-2 shadow-md dark:border-gray-700 dark:bg-gray-950/95"
          >
            <dt class="sr-only">
              Production products
            </dt>
            <dd class="text-center">
              <span class="block text-lg font-bold tabular-nums text-vue-700 dark:text-vue-300">{{ PRODUCTION_PRODUCT_COUNT }}</span>
              <span class="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Products</span>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  PRODUCTION_PRODUCT_COUNT,
  SITE_AVAILABILITY,
  SITE_AVAILABLE_STATUS,
  SITE_HEADLINE,
  SITE_LOCATION,
  SITE_PERSON_NAME
} from "~/data/siteMeta"
import { yearsInCareerLabel } from "~/utils/careerYears"

defineOptions({ name: "AppHero" })

const careerYearsLabel = yearsInCareerLabel()
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
  .hero-geometry-square,
  .hero-status-ping {
    animation: none;
  }

  .hero-cursor {
    transform: translate(18vw, 28vh);
  }
}

.hero-status-ping {
  animation: hero-status-ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes hero-status-ping {
  75%,
  100% {
    transform: scale(2);
    opacity: 0;
  }
}
</style>
