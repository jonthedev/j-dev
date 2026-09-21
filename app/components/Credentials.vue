<!-- eslint-disable vue/multi-word-component-names -- section nouns match About / Projects -->
<template>
  <section
    id="credentials"
    class="scroll-mt-20 bg-white py-20 dark:bg-black"
  >
    <UContainer>
      <SharedSectionHeader title="Credentials">
        <p>
          Boot.dev foundations, all visible at once. Backend and computer science, verified.
        </p>
      </SharedSectionHeader>

      <ul class="m-0 grid list-none grid-cols-2 gap-4 p-0 md:grid-cols-3 lg:grid-cols-4">
        <li
          v-for="item in bootdevCredentials"
          :key="item.id"
          class="min-w-0"
        >
          <article
            class="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950"
          >
            <img
              :src="item.imageSrc"
              :alt="item.alt"
              width="450"
              height="253"
              loading="lazy"
              class="h-24 w-full object-cover object-top sm:h-28"
            >
            <div class="flex flex-1 flex-col px-3 py-3 sm:px-4">
              <UBadge
                color="primary"
                variant="subtle"
                size="sm"
                class="w-fit"
              >
                Boot.dev
              </UBadge>
              <h3 class="mt-2 text-sm font-semibold leading-snug text-gray-900 dark:text-white">
                {{ item.title }}
              </h3>
              <ul class="m-0 mt-3 flex list-none flex-wrap gap-1.5 p-0">
                <li
                  v-for="skill in item.skills"
                  :key="skill"
                >
                  <span
                    class="inline-flex rounded-full border border-gray-200 bg-white px-2 py-0.5 text-[11px] font-medium leading-snug text-gray-700 dark:border-gray-700 dark:bg-black dark:text-gray-300"
                  >
                    {{ skill }}
                  </span>
                </li>
              </ul>
              <a
                :href="item.href"
                class="mt-auto pt-3 text-xs font-medium text-vue-700 underline-offset-2 hover:underline dark:text-vue-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Verify
              </a>
            </div>
          </article>
        </li>
      </ul>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { bootdevCredentials } from "~/data/credentials"
</script>
