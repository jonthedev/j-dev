<template>
  <section
    id="about"
    class="py-20 bg-gray-50 dark:bg-gray-950"
  >
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SharedReveal>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          What I'm Building in the Lab
        </h2>
        <ul class="space-y-4 text-gray-700 dark:text-gray-300">
          <li class="flex gap-3">
            <span class="text-vue-600 dark:text-vue-400 shrink-0 mt-0.5">•</span>
            <span><strong>GDPR-compliant AI workflows.</strong> Ollama runs locally for ALL client code (never sent to third parties). Claude is used ONLY for reasoning/research tasks — never for proprietary client work. Working through Unlearn.dev courses covering reusable workflows, RAG patterns, and AI-assisted testing.</span>
          </li>
          <li class="flex gap-3">
            <span class="text-vue-600 dark:text-vue-400 shrink-0 mt-0.5">•</span>
            <span><strong>NestJS and PostgreSQL.</strong> Building type-safe backend APIs with Prisma. Still in the lab phase, not yet part of client work.</span>
          </li>
          <li class="flex gap-3">
            <span class="text-vue-600 dark:text-vue-400 shrink-0 mt-0.5">•</span>
            <span><strong>RAG exploration.</strong> Understanding retrieval-augmented generation patterns. The goal is to eventually offer this as a service for clients with privacy requirements.</span>
          </li>
          <li class="flex gap-3">
            <span class="text-vue-600 dark:text-vue-400 shrink-0 mt-0.5">•</span>
            <span><strong>The Technical Blueprint.</strong> A modular NestJS API project on the Web portfolio side. It's the same architecture I'm learning toward for real RAG systems.</span>
          </li>
        </ul>
      </SharedReveal>
    </div>
  </section>
</template>

<script setup lang="ts">
defineOptions({ name: "PlatformAbout" })
</script>
