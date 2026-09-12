<template>
  <a
    ref="target"
    :href="PAGE_SPEED_REPORT_URL"
    target="_blank"
    rel="noopener noreferrer"
    class="group flex flex-col gap-5 rounded-xl border border-gray-200 bg-gray-50/70 px-4 py-5 transition-colors hover:border-vue-300 hover:bg-white sm:flex-row sm:items-center sm:gap-10 sm:px-6 dark:border-gray-800 dark:bg-gray-950/50 dark:hover:border-vue-700 dark:hover:bg-gray-950"
    :class="{ 'is-filled': isFilled }"
    :aria-label="ariaLabel"
  >
    <span
      class="text-center text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 sm:w-36 sm:shrink-0 sm:text-left"
    >
      This site
    </span>
    <span class="grid flex-1 grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-6">
      <span
        v-for="(category, index) in pageSpeedCategories"
        :key="category.id"
        class="flex flex-col items-center text-center"
      >
        <span class="relative flex h-16 w-16 items-center justify-center">
          <svg
            viewBox="0 0 36 36"
            class="h-16 w-16 -rotate-90"
            aria-hidden="true"
          >
            <circle
              cx="18"
              cy="18"
              :r="GAUGE_RADIUS"
              fill="none"
              class="stroke-gray-200 dark:stroke-gray-700"
              stroke-width="2.75"
            />
            <circle
              cx="18"
              cy="18"
              :r="GAUGE_RADIUS"
              fill="none"
              class="pagespeed-progress stroke-[#0cce6b]"
              stroke-width="2.75"
              stroke-linecap="round"
              :stroke-dasharray="GAUGE_CIRCUMFERENCE"
              :style="{
                '--ring-offset': String(dashOffset(category.score)),
                '--stagger': `${index * 140}ms`
              }"
            />
          </svg>
          <span class="absolute text-sm font-bold tabular-nums text-[#0cce6b]">
            {{ displayedScores[index] }}
          </span>
        </span>
        <span class="mt-1.5 text-[11px] font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
          {{ category.label }}
        </span>
      </span>
    </span>
    <span
      class="text-center text-[11px] font-medium uppercase tracking-wider text-vue-600 group-hover:text-vue-700 sm:w-28 sm:shrink-0 sm:text-right dark:text-vue-400 dark:group-hover:text-vue-300"
    >
      PageSpeed · {{ PAGE_SPEED_FORM_FACTOR }}
    </span>
  </a>
</template>

<script setup lang="ts">
import {
  PAGE_SPEED_FORM_FACTOR,
  PAGE_SPEED_REPORT_URL,
  pageSpeedCategories
} from "~/data/pageSpeed"

defineOptions({ name: "SharedPageSpeedBar" })

const GAUGE_RADIUS = 15.5
const GAUGE_CIRCUMFERENCE = 2 * Math.PI * GAUGE_RADIUS
const COUNT_DURATION_MS = 2200
const STAGGER_MS = 140

const { target, isVisible } = useInView()
const displayedScores = reactive(pageSpeedCategories.map(() => 0))
const reduceMotion = ref(false)
const hasAnimated = ref(false)

const isFilled = computed(() => reduceMotion.value || isVisible.value)

const dashOffset = (score: number) => GAUGE_CIRCUMFERENCE * (1 - score / 100)

const ariaLabel = computed(() => {
  const scores = pageSpeedCategories
    .map(category => `${category.label} ${category.score}`)
    .join(", ")
  return `PageSpeed Insights, ${PAGE_SPEED_FORM_FACTOR}: ${scores}. Opens the public report.`
})

const snapToFinal = () => {
  pageSpeedCategories.forEach((category, index) => {
    displayedScores[index] = category.score
  })
}

const countUp = () => {
  if (hasAnimated.value) return
  hasAnimated.value = true
  pageSpeedCategories.forEach((category, index) => {
    const startAt = performance.now() + index * STAGGER_MS
    const tick = (now: number) => {
      const elapsed = now - startAt
      if (elapsed < 0) {
        requestAnimationFrame(tick)
        return
      }
      const t = Math.min(elapsed / COUNT_DURATION_MS, 1)
      const eased = 1 - (1 - t) ** 3
      displayedScores[index] = Math.round(category.score * eased)
      if (t < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  })
}

onMounted(() => {
  reduceMotion.value = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  if (reduceMotion.value) {
    hasAnimated.value = true
    snapToFinal()
  }
})

watch(isVisible, (visible) => {
  if (!visible || reduceMotion.value) return
  countUp()
})
</script>

<style scoped>
.pagespeed-progress {
  stroke-dashoffset: v-bind(GAUGE_CIRCUMFERENCE);
  transition: stroke-dashoffset 2.2s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: var(--stagger, 0ms);
}

.is-filled .pagespeed-progress {
  stroke-dashoffset: var(--ring-offset);
}

@media (prefers-reduced-motion: reduce) {
  .pagespeed-progress {
    transition: none;
  }
}
</style>
