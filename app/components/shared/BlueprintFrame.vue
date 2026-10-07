<template>
  <div class="relative border border-blueprint">
    <span
      class="pointer-events-none absolute -top-px -left-px font-mono text-[11px] leading-none text-blueprint"
      aria-hidden="true"
    >+</span>
    <span
      class="pointer-events-none absolute -right-px -bottom-px font-mono text-[11px] leading-none text-blueprint"
      aria-hidden="true"
    >+</span>
    <span
      class="pointer-events-none absolute top-2 right-3 font-mono text-xs font-medium tracking-[0.18em] text-gray-900/50 uppercase dark:text-white/50"
      aria-hidden="true"
    >{{ label }}</span>
    <div class="relative">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: "SharedBlueprintFrame" })

defineProps<{
  label: string
}>()
</script>
