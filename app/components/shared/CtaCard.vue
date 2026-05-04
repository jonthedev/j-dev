<template>
  <SharedReveal
    :delay="delay"
    class="text-center"
  >
    <div class="bg-vue-50 dark:bg-vue-950/30 dark:border-vue-800 border border-vue-200 rounded-xl p-8">
      <h3 class="text-xl font-semibold text-vue-900 dark:text-vue-100 mb-4">
        {{ title }}
      </h3>
      <p class="text-vue-800 dark:text-vue-200 mb-6 max-w-2xl mx-auto">
        {{ description }}
      </p>
      <UButton
        :to="to"
        size="lg"
        color="primary"
        icon="lucide:arrow-right"
        trailing
      >
        {{ buttonText }}
      </UButton>
    </div>
  </SharedReveal>
</template>

<script setup lang="ts">
defineOptions({ name: "CtaCard" })

interface Props {
  title?: string
  description?: string
  buttonText?: string
  /** NuxtLink / route target for the primary button */
  to?: string
  delay?: number
}

withDefaults(defineProps<Props>(), {
  title: "Have a project in mind?",
  description: "Tell me what you're building. I'll tell you if I can help.",
  buttonText: "Start a Conversation",
  to: "#contact",
  delay: 100
})
</script>
