<template>
  <section
    :id="id"
    :class="['py-20', backgroundClass || 'bg-white dark:bg-black']"
  >
    <UContainer>
      <slot />
    </UContainer>
  </section>
</template>

<script setup lang="ts">
interface Props {
  id?: string
  backgroundClass?: string
}

defineProps<Props>()
</script>
