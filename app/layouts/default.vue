<template>
  <div class="min-h-screen bg-white dark:bg-black transition-colors">
    <Navbar />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
// Color mode is handled by Nuxt UI automatically
</script>
