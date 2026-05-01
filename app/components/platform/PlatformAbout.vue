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
      >
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Migration, Features, and Private AI
        </h2>
        <ul class="space-y-4 text-gray-700 dark:text-gray-300">
          <li class="flex gap-3">
            <span class="text-vue-600 dark:text-vue-400 shrink-0 mt-0.5">•</span>
            <span><strong>Legacy migration.</strong> Move old frontends to Nuxt 4. Reusable Vue components and composables replace the tangled code.</span>
          </li>
          <li class="flex gap-3">
            <span class="text-vue-600 dark:text-vue-400 shrink-0 mt-0.5">•</span>
            <span><strong>Feature development.</strong> Complex modules with type-safe connections between frontend and backend. No runtime surprises.</span>
          </li>
          <li class="flex gap-3">
            <span class="text-vue-600 dark:text-vue-400 shrink-0 mt-0.5">•</span>
            <span><strong>NestJS backends for RAG.</strong> Type-safe NestJS and PostgreSQL form the foundation for private retrieval-augmented generation. Same pattern as the
              <button
                type="button"
                class="font-semibold text-vue-600 underline decoration-vue-600/40 underline-offset-2 hover:text-vue-500 dark:text-vue-400 dark:hover:text-vue-300"
                @click="goToTechnicalBlueprint"
              >
                Technical Blueprint
              </button>
              project on the Web portfolio.</span>
          </li>
          <li class="flex gap-3">
            <span class="text-vue-600 dark:text-vue-400 shrink-0 mt-0.5">•</span>
            <span><strong>AI-assisted delivery.</strong> I use local LLMs to cut through boilerplate. That frees up time for architecture decisions and performance tuning.</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineOptions({ name: "PlatformAbout" })

const { setMode } = usePortfolioMode()

function goToTechnicalBlueprint() {
  setMode("frontend")
  nextTick(() => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  })
}
</script>
