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
  = "Jonathan Kaonga | Senior Full-Stack Engineer | Vue 3 · Nuxt 4 · NestJS | Web Applications"

const description
  = "Senior Full-Stack Engineer building scalable, maintainable web applications with Vue 3, Nuxt 4, and NestJS. B2B engagements, UK/EU/remote. High performance, enterprise-ready. KVK registered, Outside IR35."

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

<style lang="postcss">
@import "~/assets/css/main.css";
</style>
