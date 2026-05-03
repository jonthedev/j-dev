<script setup>
import { OG_IMAGE, SITE_DESCRIPTION, SITE_TITLE } from "~/data/siteMeta"

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

const title = SITE_TITLE
const description = SITE_DESCRIPTION

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: OG_IMAGE,
  twitterImage: OG_IMAGE,
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
