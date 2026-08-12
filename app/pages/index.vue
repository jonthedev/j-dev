<template>
  <div>
    <Hero />
    <LazyAbout hydrate-on-visible />
    <LazyProjects hydrate-on-visible />
    <LazyTechStack hydrate-on-visible />
    <LazyContact hydrate-on-visible />
  </div>
</template>

<script setup lang="ts">
import { SITE_DESCRIPTION, SITE_TITLE } from "~/data/siteMeta"

useHead({
  title: SITE_TITLE,
  meta: [{ name: "description", content: SITE_DESCRIPTION }]
})
</script>
