<template>
  <div
    ref="target"
    :class="['reveal', `direction-${direction}`, { 'is-visible': isVisible }]"
    :style="{ '--delay': delay + 'ms' }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  delay?: number
  direction?: "up" | "left" | "right" | "none"
}

withDefaults(defineProps<Props>(), {
  delay: 0,
  direction: "up"
})

const { target, isVisible } = useInView()
</script>

<style scoped>
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.5s ease, transform 0.5s ease;
  transition-delay: var(--delay);
}

.reveal.direction-left {
  transform: translateX(-24px);
}

.reveal.direction-right {
  transform: translateX(24px);
}

.reveal.direction-none {
  transform: none;
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0) translateX(0);
}
</style>
