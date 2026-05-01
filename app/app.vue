<script setup>
const { app } = useRuntimeConfig()
const base = app?.baseURL ?? "/"

useHead({
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
  link: [
    { rel: "icon", href: `${base}favicon.ico` },
    { rel: "manifest", href: `${base}site.webmanifest` }
  ],
  htmlAttrs: {
    lang: "en"
  }
})

const title
  = "Jonathan Kaonga | Senior AI & Vue Ecosystem Architect | Sovereign AI · Vue · Nuxt 4"

const description
  = "Sovereign AI and the Vue ecosystem: RAG, NestJS, PostgreSQL, hybrid Claude + Ollama. Website of the Year 2022 · Thalex trading dashboards. KVK B2B, UK/EU."

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: "https://j-dev.online/og-image.png",
  twitterImage: "https://j-dev.online/og-image.png",
  twitterCard: "summary_large_image"
})
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
