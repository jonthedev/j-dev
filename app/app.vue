<script setup>
const { app } = useRuntimeConfig()
const base = app?.baseURL ?? '/'

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: `${base}favicon.ico` },
    { rel: 'manifest', href: `${base}site.webmanifest` }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = 'Jonathan Kaonga - Freelance Senior Frontend Engineer | Vue & Nuxt'
const description = 'Vue & Nuxt specialist · Contract & project work · Turning ideas into interactive reality. Available for freelance and ZZP projects.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://j-dev.online/og-image.png',
  twitterImage: 'https://j-dev.online/og-image.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
