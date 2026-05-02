<template>
  <Motion
    as="div"
    :initial="{ opacity: 0, y: 20 }"
    :while-in-view="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.4, delay: (150 + index * 50) / 1000 }"
    :viewport="{ once: true }"
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
  </Motion>
</template>

<script setup lang="ts">
interface Props {
  icon?: string
  icons?: string[]
  title: string
  index?: number
  isPrimary?: boolean
  iconClass?: string
  badgeColor?: "primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral"
}

withDefaults(defineProps<Props>(), {
  isPrimary: true,
  index: 0,
  badgeColor: "neutral"
})
</script>
