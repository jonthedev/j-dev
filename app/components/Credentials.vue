<!-- eslint-disable vue/multi-word-component-names -- section nouns match About / Projects -->
<template>
  <section
    id="credentials"
    class="scroll-mt-20 bg-white py-20 dark:bg-black"
  >
    <UContainer>
      <SharedSectionHeader title="Credentials">
        <p>Certificates earned to verify the systems skills beside six years of product UI.</p>
        <p>Each one opens on Boot.dev.</p>
      </SharedSectionHeader>

      <UCarousel
        v-slot="{ item }"
        arrows
        dots
        loop
        :autoplay="carouselAutoplay"
        :items="bootdevCredentials"
        :prev="{ variant: 'outline' }"
        :next="{ variant: 'outline' }"
        :ui="{ dots: 'relative inset-x-0 bottom-auto mt-6' }"
        class="mx-auto w-full max-w-2xl pb-4"
      >
        <article
          class="overflow-hidden rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950"
        >
          <img
            :src="item.imageSrc"
            :alt="item.alt"
            width="450"
            height="253"
            loading="lazy"
            class="mx-auto h-auto w-full"
          >
          <p
            class="border-t border-gray-200 px-4 py-3 text-center text-sm text-gray-600 dark:border-gray-800 dark:text-gray-400"
          >
            {{ item.title }}
            <a
              :href="item.href"
              class="mt-0.5 block text-xs text-vue-700 underline-offset-2 hover:underline dark:text-vue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Verify on Boot.dev
            </a>
          </p>
        </article>
      </UCarousel>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { bootdevCredentials } from "~/data/credentials"

// Four slides are easy to click through. Autoplay only earns its keep once
// the list is long enough that paging by hand is tedious.
const AUTOPLAY_FROM = 5
const carouselAutoplay
  = bootdevCredentials.length >= AUTOPLAY_FROM
    ? { delay: 4000, stopOnMouseEnter: true }
    : false
</script>
