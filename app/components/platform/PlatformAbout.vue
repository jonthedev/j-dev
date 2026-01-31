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
          AI in my workflow
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300">
          Integrating AI into my frontend practice—and learning how it all works with <a
            href="https://bytebyteai.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-vue-600 dark:text-vue-400 hover:underline"
          >ByteByteAI</a>.
        </p>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 100 } }"
        class="space-y-8"
      >
        <div class="prose prose-lg dark:prose-invert max-w-none">
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm a <strong>Senior Frontend Engineer</strong> bringing AI into my daily workflow—from local inference (Ollama, Qwen) to AI-augmented development (Cursor, OpenCode). I'm also deepening my understanding of how AI systems work through the <a
              href="https://bytebyteai.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-vue-600 dark:text-vue-400 hover:underline"
            >ByteByteAI</a> course.
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
            Current Specialization & Research
          </h3>
          <ul class="space-y-4 text-sm text-vue-800 dark:text-vue-200">
            <li class="flex items-start gap-3">
              <Icon
                icon="lucide:check"
                width="1rem"
                height="1rem"
                class="mt-0.5 shrink-0 text-vue-600 dark:text-vue-400"
              />
              <span><strong>System Design:</strong> Implementing high-scale patterns (RAG, Load Balancing, Distributed Systems) via the <a
                href="https://bytebyteai.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-vue-600 dark:text-vue-400 hover:underline"
              >ByteByteAI</a> curriculum.</span>
            </li>
            <li class="flex items-start gap-3">
              <Icon
                icon="lucide:check"
                width="1rem"
                height="1rem"
                class="mt-0.5 shrink-0 text-vue-600 dark:text-vue-400"
              />
              <span><strong>Local Inference:</strong> Engineering private AI environments using <strong>Ollama</strong> and <strong>Qwen</strong> to ensure data sovereignty and low-latency execution.</span>
            </li>
            <li class="flex items-start gap-3">
              <Icon
                icon="lucide:check"
                width="1rem"
                height="1rem"
                class="mt-0.5 shrink-0 text-vue-600 dark:text-vue-400"
              />
              <span><strong>Sovereign Infrastructure:</strong> Architecting a dedicated <strong>Homelab (Proxmox)</strong> to host local LLMs, automated CI/CD pipelines, and private documentation agents.</span>
            </li>
            <li class="flex items-start gap-3">
              <Icon
                icon="lucide:check"
                width="1rem"
                height="1rem"
                class="mt-0.5 shrink-0 text-vue-600 dark:text-vue-400"
              />
              <span><strong>AI-Augmented DX:</strong> Optimizing the development lifecycle using <strong>Cursor</strong> and <strong>OpenCode</strong> to achieve high-velocity iteration.</span>
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
