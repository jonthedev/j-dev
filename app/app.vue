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
  = "Jonathan Kaonga | Senior Full-Stack Web Systems Architect | Vue, Nuxt & NestJS"

const description
  = "Senior Full-Stack Web Systems Architect specializing in high-performance Vue 3 / Nuxt 4 frontends and type-safe NestJS system backends. Available for B2B engagements, Outside IR35, and web systems and architecture projects."

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
