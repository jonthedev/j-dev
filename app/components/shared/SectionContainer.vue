<template>
  <section 
    :id="id" 
    :class="[
      'py-20',
      backgroundClass || 'bg-white dark:bg-black'
    ]"
    v-motion="animation"
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

const props = defineProps<Props>()

const animation = useAnimation()
</script>