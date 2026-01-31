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
          AI platform focus
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300">
          Adding AI platform engineering (<a
            href="https://bytebyteai.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-vue-600 dark:text-vue-400 hover:underline"
          >ByteByteAI</a>) and DevOps to a strong frontend base
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
            I'm now <strong>learning AI platform engineering</strong> via <a
              href="https://bytebyteai.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-vue-600 dark:text-vue-400 hover:underline"
            >ByteByteAI</a> in parallel: Python, containers (Docker), orchestration (Kubernetes),
            IaC (Terraform), CI/CD (GitHub Actions, GitLab CI), and observability.
          </p>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
            The goal is to combine <strong>frontend craft</strong> with <strong>AI platform and DevOps skills</strong>—better
            developer experience, reliable deployments, and infrastructure that supports the products I help build.
          </p>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
            <strong>Currently using in development:</strong> Ollama, Qwen, and OpenCode for local AI and coding workflows.
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
            Current learning areas
          </h3>
          <ul class="space-y-2 text-sm text-vue-800 dark:text-vue-200">
            <li class="flex items-center">
              <Icon
                icon="lucide:check"
                width="1rem"
                height="1rem"
                class="mr-2 shrink-0 text-vue-600 dark:text-vue-400"
              />
              Docker & containerization
            </li>
            <li class="flex items-center">
              <Icon
                icon="lucide:check"
                width="1rem"
                height="1rem"
                class="mr-2 shrink-0 text-vue-600 dark:text-vue-400"
              />
              Kubernetes basics & workloads
            </li>
            <li class="flex items-center">
              <Icon
                icon="lucide:check"
                width="1rem"
                height="1rem"
                class="mr-2 shrink-0 text-vue-600 dark:text-vue-400"
              />
              CI/CD pipelines (GitHub Actions, GitLab CI)
            </li>
            <li class="flex items-center">
              <Icon
                icon="lucide:check"
                width="1rem"
                height="1rem"
                class="mr-2 shrink-0 text-vue-600 dark:text-vue-400"
              />
              Terraform & infrastructure as code
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
