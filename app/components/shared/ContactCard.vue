<template>
  <SharedReveal
    :delay="delay"
    class="text-center group"
  >
    <div class="w-16 h-16 bg-vue-100 dark:bg-vue-950/40 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
      <Icon
        :icon="icon"
        width="1.75rem"
        height="1.75rem"
        class="text-vue-600 dark:text-vue-400"
      />
    </div>
    <h3 class="font-semibold text-gray-900 dark:text-white mb-2">
      {{ title }}
    </h3>
    <div class="flex flex-col items-center">
      <a
        v-if="href"
        :href="href"
        :target="isExternal ? '_blank' : undefined"
        :rel="isExternal ? 'noopener noreferrer' : undefined"
        class="text-vue-600 dark:text-vue-400 hover:text-vue-700 dark:hover:text-vue-300 underline underline-offset-2 transition-colors"
      >
        {{ content }}
      </a>
      <span
        v-else
        class="text-gray-600 dark:text-gray-300"
      >
        {{ content }}
      </span>
      <button
        v-if="copyValue"
        type="button"
        class="mt-3 inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:border-vue-300 hover:text-vue-700 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-300 dark:hover:border-vue-700 dark:hover:text-vue-300"
        :aria-label="`Copy ${copyValue}`"
        @click="emitCopy"
      >
        <Icon
          icon="lucide:copy"
          width="0.875rem"
          height="0.875rem"
          class="shrink-0"
        />
        Copy email
      </button>
    </div>
  </SharedReveal>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { Icon } from "@iconify/vue"

defineOptions({ name: "ContactCard" })

interface Props {
  icon: string
  title: string
  content: string
  href?: string
  /** When set, shows a copy control for this value (e.g. email). */
  copyValue?: string
  delay?: number
}

const props = withDefaults(defineProps<Props>(), {
  delay: 0
})

const emit = defineEmits<{
  copy: [value: string]
}>()

const isExternal = computed(() => props.href?.startsWith("http") ?? false)

function emitCopy() {
  if (props.copyValue) {
    emit("copy", props.copyValue)
  }
}
</script>
