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
            <span><strong>Agentic AI workflows (local + cloud).</strong> Practical systems for research, automation, and product delivery.</span>
          </li>
          <li class="flex gap-3">
            <span class="text-vue-600 dark:text-vue-400 shrink-0 mt-0.5">•</span>
            <span><strong>Backend architecture &amp; data.</strong> Type-safe APIs, data modeling, and reliable foundations for real products.</span>
          </li>
          <li class="flex gap-3">
            <span class="text-vue-600 dark:text-vue-400 shrink-0 mt-0.5">•</span>
            <span><strong>RAG systems.</strong> Retrieval patterns for search, knowledge bases, and internal tools.</span>
          </li>
          <li class="flex gap-3">
            <span class="text-vue-600 dark:text-vue-400 shrink-0 mt-0.5">•</span>
            <span><strong>Blueprints &amp; reuse.</strong> Modular architecture patterns I carry across projects.</span>
          </li>
        </ul>
      </SharedReveal>
    </div>
  </section>
</template>

<script setup lang="ts">
defineOptions({ name: "PlatformAbout" })
</script>
