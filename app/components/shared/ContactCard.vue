<template>
  <SharedReveal
    :delay="delay"
    class="text-left"
  >
    <div class="relative mb-4 flex h-16 w-16 items-center justify-center rounded-sm border border-blueprint bg-vue-100 dark:bg-vue-950/40">
      <Icon
        :icon="icon"
        width="1.75rem"
        height="1.75rem"
        class="relative z-10 text-vue-600 dark:text-vue-400"
      />
    </div>
    <h3 class="mb-2 font-mono text-xs font-medium tracking-wider text-gray-900 uppercase dark:text-white">
      {{ title }}
    </h3>
    <div class="flex flex-col items-start">
      <a
        v-if="href"
        :href="href"
        :target="isExternal ? '_blank' : undefined"
        :rel="isExternal ? 'noopener noreferrer' : undefined"
        class="blueprint-link text-vue-600 transition-colors hover:text-vue-700 dark:text-vue-400 dark:hover:text-vue-300"
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
        class="mt-3 inline-flex items-center gap-1.5 rounded-sm border border-blueprint bg-white px-3 py-1.5 font-mono text-xs font-medium text-gray-700 transition-colors hover:text-vue-700 dark:bg-gray-950 dark:text-gray-300 dark:hover:text-vue-300"
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
