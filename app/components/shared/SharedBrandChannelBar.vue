<template>
  <div
    class="terminal-brand-channel relative flex min-h-22 items-center justify-center overflow-hidden rounded-xl border border-vue-200/90 bg-vue-50/45 md:min-h-26 dark:border-vue-800 dark:bg-vue-950/25"
  >
    <div
      class="pointer-events-none absolute inset-0 text-gray-900 opacity-[0.07] dark:text-gray-200 dark:opacity-[0.1]"
      aria-hidden="true"
    >
      <div class="absolute inset-0 terminal-brand-grid-bg" />
    </div>
    <div
      class="pointer-events-none absolute left-0 top-0 w-full terminal-brand-scan will-change-transform"
      aria-hidden="true"
    />

    <!-- Single-row label -->
    <div
      v-if="!tripleWide"
      class="relative z-10 px-6 sm:px-8"
    >
      <p
        class="terminal-brand-label text-center font-mono text-xs font-semibold uppercase tracking-[0.32em] text-vue-800/95 sm:text-sm dark:text-vue-300/95"
      >
        {{ SITE_BRAND }}
      </p>
    </div>

    <!-- Triple on lg+, single below (Tech Stack) -->
    <div
      v-else
      class="relative z-10 flex w-full flex-col items-center px-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-12 xl:px-16"
    >
      <p
        class="terminal-brand-label text-center font-mono text-xs font-semibold uppercase tracking-[0.32em] text-vue-800/95 sm:text-sm lg:hidden dark:text-vue-300/95"
      >
        {{ SITE_BRAND }}
      </p>
      <p
        class="terminal-brand-label hidden min-w-0 flex-1 font-mono text-xs font-semibold uppercase tracking-[0.32em] text-vue-800/95 sm:text-sm lg:block lg:text-left dark:text-vue-300/95"
        aria-hidden="true"
      >
        {{ SITE_BRAND }}
      </p>
      <p
        class="terminal-brand-label hidden min-w-0 flex-1 font-mono text-xs font-semibold uppercase tracking-[0.32em] text-vue-800/95 sm:text-sm lg:block lg:text-center dark:text-vue-300/95"
      >
        {{ SITE_BRAND }}
      </p>
      <p
        class="terminal-brand-label hidden min-w-0 flex-1 font-mono text-xs font-semibold uppercase tracking-[0.32em] text-vue-800/95 sm:text-sm lg:block lg:text-right dark:text-vue-300/95"
        aria-hidden="true"
      >
        {{ SITE_BRAND }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SITE_BRAND } from "~/data/siteMeta"

defineOptions({ name: "SharedBrandChannelBar" })

withDefaults(
  defineProps<{
    /** Three labels left / center / right from `lg` (same as Tech Stack strip) */
    tripleWide?: boolean
  }>(),
  {
    tripleWide: false
  }
)
</script>

<style scoped>
.terminal-brand-channel {
  position: relative;
}

.terminal-brand-grid-bg {
  background-image:
    linear-gradient(to right, currentColor 1px, transparent 1px),
    linear-gradient(to bottom, currentColor 1px, transparent 1px);
  background-size: 28px 28px;
}

.terminal-brand-scan {
  height: 48%;
  transform: translateY(-100%);
  background: linear-gradient(
    to bottom,
    transparent 0%,
    color-mix(in srgb, var(--color-vue-400) 12%, transparent) 42%,
    color-mix(in srgb, var(--color-vue-500) 22%, transparent) 50%,
    color-mix(in srgb, var(--color-vue-400) 12%, transparent) 58%,
    transparent 100%
  );
  animation: terminal-brand-scan 5.2s linear infinite;
}

@keyframes terminal-brand-scan {
  to {
    transform: translateY(260%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .terminal-brand-scan {
    animation: none;
    transform: translateY(35%);
    opacity: 0.35;
  }
}

.terminal-brand-label {
  text-shadow:
    0 0 22px color-mix(in srgb, var(--color-vue-400) 22%, transparent),
    0 0 1px color-mix(in srgb, var(--color-vue-600) 35%, transparent);
}

.dark .terminal-brand-label {
  text-shadow:
    0 0 20px color-mix(in srgb, var(--color-vue-400) 28%, transparent),
    0 0 1px color-mix(in srgb, var(--color-vue-300) 40%, transparent);
}
</style>
