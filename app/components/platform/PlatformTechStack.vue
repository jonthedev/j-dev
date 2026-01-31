<template>
  <section
    id="tech-stack"
    class="py-20 bg-white dark:bg-black"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="text-center mb-16"
      >
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Tech & tools
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          AI tools I'm using with <a
            href="https://bytebyteai.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-vue-600 dark:text-vue-400 hover:underline"
          >ByteByteAI</a> and in my frontend workflow.
        </p>
      </div>

      <div class="mb-16">
        <h3
          v-motion
          :initial="{ opacity: 0, y: 16 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 400, delay: 100 } }"
          class="text-xl font-semibold text-gray-900 dark:text-white mb-8 text-center"
        >
          Core focus
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div
            v-for="(tech, index) in primaryTech"
            :key="tech.id"
            v-motion
            :initial="{ opacity: 0, y: 16 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 400, delay: 150 + index * 50 } }"
            class="flex flex-col items-center justify-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors group"
          >
            <span
              :class="`inline-flex items-center justify-center gap-1 text-3xl mb-2 ${tech.iconClass} group-hover:scale-110 transition-transform`"
            >
              <Icon
                v-if="tech.icon"
                :icon="tech.icon"
                width="1.5em"
                height="1.5em"
                class="inline-block"
              />
            </span>
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
              {{ tech.title }}
            </span>
          </div>
        </div>
      </div>

      <div>
        <h3
          v-motion
          :initial="{ opacity: 0, y: 16 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 400, delay: 100 } }"
          class="text-xl font-semibold text-gray-900 dark:text-white mb-8 text-center"
        >
          Also using / exploring
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div
            v-for="(tech, index) in secondaryTech"
            :key="tech.id"
            v-motion
            :initial="{ opacity: 0, y: 16 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 400, delay: 150 + index * 40 } }"
            class="flex flex-col items-center justify-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors group opacity-75"
          >
            <span
              :class="`inline-flex items-center justify-center gap-1 text-2xl mb-2 ${tech.iconClass} group-hover:scale-110 transition-transform`"
            >
              <Icon
                v-if="tech.icon"
                :icon="tech.icon"
                width="1.25em"
                height="1.25em"
                class="inline-block"
              />
            </span>
            <span class="text-sm font-medium text-gray-600 dark:text-gray-400 text-center">
              {{ tech.title }}
            </span>
          </div>
        </div>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 200 } }"
        class="mt-16 bg-vue-50 dark:bg-vue-950/30 dark:border-vue-800 border border-vue-200 rounded-xl p-8"
      >
        <h3 class="text-lg font-semibold text-vue-900 dark:text-vue-100 mb-4">
          Why AI in my workflow
        </h3>
        <div class="grid md:grid-cols-3 gap-6 text-sm text-vue-800 dark:text-vue-200">
          <div class="flex items-start space-x-3">
            <Icon
              icon="lucide:sparkles"
              width="1.25rem"
              height="1.25rem"
              class="text-vue-600 dark:text-vue-400 mt-0.5 shrink-0"
            />
            <div>
              <strong>ByteByteAI:</strong> LLMs, RAGs, agents — understanding how AI systems work.
            </div>
          </div>
          <div class="flex items-start space-x-3">
            <Icon
              icon="lucide:code-2"
              width="1.25rem"
              height="1.25rem"
              class="text-vue-600 dark:text-vue-400 mt-0.5 shrink-0"
            />
            <div>
              <strong>Better frontends:</strong> Using AI to ship faster and smarter.
            </div>
          </div>
          <div class="flex items-start space-x-3">
            <Icon
              icon="lucide:cpu"
              width="1.25rem"
              height="1.25rem"
              class="text-vue-600 dark:text-vue-400 mt-0.5 shrink-0"
            />
            <div>
              <strong>Local first:</strong> Ollama, Qwen, OpenCode — no cloud lock-in for my dev workflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { platformTechStack } from '~/data/platformTechStack'

const primaryTech = computed(() => platformTechStack.filter(item => item.category === 'primary'))
const secondaryTech = computed(() => platformTechStack.filter(item => item.category === 'secondary'))
</script>
