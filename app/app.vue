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
  = "Jonathan Kaonga | Vue & React Frontend Engineer | Amsterdam"

const description
  = "Six years of frontend engineering. React for five years, now building exclusively with Vue 3 and Nuxt 4. ANWB, Thalex, DPG Media. KVK registered, Amsterdam."

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
