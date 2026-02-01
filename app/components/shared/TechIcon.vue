<template>
  <div
    v-motion="animation"
    class="flex flex-col items-center justify-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors group"
  >
    <UBadge
      :color="badgeColor"
      variant="soft"
    >
      <Icon
        v-if="icon"
        :icon="icon"
        :size="'1.5em'"
        :name="icon"
        class="inline-block"
      />
      <template v-else>
        <span
          v-for="(iconId, i) in icons"
          :key="i"
          class="inline-block"
        >
          {{ iconId }}
        </span>
      </template>
    </UBadge>
    <span class="text-sm font-medium text-gray-700 dark:text-gray-300 text-center mt-2">
      {{ title }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { useAnimation } from '~/composables/useAnimation'

interface Props {
  icon?: string
  icons?: string[]
  title: string
  index?: number
  isPrimary?: boolean
  iconClass?: string
  badgeColor?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error' | 'neutral'
}

const props = withDefaults(defineProps<Props>(), {
  isPrimary: true,
  index: 0,
  badgeColor: 'neutral'
})

// Use our animation composable
const { staggeredAnimation } = useAnimation()

const animation = computed(() =>
  staggeredAnimation(150, 50)(props.index)
)
</script>
