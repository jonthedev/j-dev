<template>
  <section
    id="about"
    class="py-20 bg-gray-50 dark:bg-gray-950"
  >
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="text-center mb-16"
      >
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          AI & frontend
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300">
          Learning AI engineering via <a
            href="https://bytebyteai.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-vue-600 dark:text-vue-400 hover:underline"
          >ByteByteAI</a> — and using AI to build better frontends
        </p>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 100 } }"
        class="space-y-6"
      >
        <div class="prose prose-lg dark:prose-invert max-w-none">
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm a <strong>Senior Frontend Engineer</strong> with years of experience in Vue, Nuxt, and modern web apps.
            I'm learning <strong>AI engineering</strong> via <a
              href="https://bytebyteai.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-vue-600 dark:text-vue-400 hover:underline"
            >ByteByteAI</a> (LLMs, RAGs, agents) and I like using AI to help me build frontends — better DX, faster iteration, smarter tooling.
          </p>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
            <strong>In my workflow right now:</strong> Ollama, Qwen, and OpenCode for local AI and coding.
          </p>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm also learning about setting up <strong>homelabs</strong> (e.g. Proxmox) so I can run more of this on my own hardware.
          </p>
        </div>

        <div class="bg-vue-50 dark:bg-vue-950/30 dark:border-vue-800 border border-vue-200 rounded-lg p-6">
          <h3 class="font-semibold text-vue-900 dark:text-vue-100 mb-4 flex items-center">
            <Icon
              icon="lucide:compass"
              width="1.25rem"
              height="1.25rem"
              class="mr-2 shrink-0 text-vue-600 dark:text-vue-400"
            />
            Current focus
          </h3>
          <ul class="space-y-2 text-sm text-vue-800 dark:text-vue-200">
            <li class="flex items-center">
              <Icon
                icon="lucide:check"
                width="1rem"
                height="1rem"
                class="mr-2 shrink-0 text-vue-600 dark:text-vue-400"
              />
              ByteByteAI: LLMs, RAGs, agents
            </li>
            <li class="flex items-center">
              <Icon
                icon="lucide:check"
                width="1rem"
                height="1rem"
                class="mr-2 shrink-0 text-vue-600 dark:text-vue-400"
              />
              Using AI (Ollama, Qwen, OpenCode) in my frontend dev workflow
            </li>
            <li class="flex items-center">
              <Icon
                icon="lucide:check"
                width="1rem"
                height="1rem"
                class="mr-2 shrink-0 text-vue-600 dark:text-vue-400"
              />
              Setting up homelabs (Proxmox)
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineOptions({ name: 'PlatformAbout' })
</script>
