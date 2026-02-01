<template>
  <section
    :id="id"
    v-motion="animation"
    :class="['py-20', backgroundClass || 'bg-white dark:bg-black']"
  >
    <UContainer>
      <slot />
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { useAnimation } from '~/composables/useAnimation'

interface Props {
  id?: string
  backgroundClass?: string
}

defineProps<Props>()

const animation = useAnimation()
</script>
