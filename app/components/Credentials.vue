<!-- eslint-disable vue/multi-word-component-names -- section nouns match About / Projects -->
<template>
  <section
    id="credentials"
    class="scroll-mt-20 bg-white py-20 dark:bg-black"
  >
    <UContainer>
      <SharedSectionHeader
        title="Credentials"
        :description="credentialsLeadText"
      />

      <ul
        class="m-0 mx-auto grid list-none gap-4 p-0"
        :class="handshakeCredentials.length === 1 ? 'max-w-sm grid-cols-1' : 'grid-cols-2 md:grid-cols-3'"
      >
        <li
          v-for="item in handshakeCredentials"
          :key="item.id"
          class="min-w-0"
        >
          <article
            class="flex h-full flex-col overflow-hidden rounded-xl border border-dashed border-amber-300 bg-amber-50/40 dark:border-amber-800/70 dark:bg-amber-950/20"
          >
            <div
              class="relative flex h-24 items-center justify-center overflow-hidden bg-amber-100/70 sm:h-28 dark:bg-amber-900/30"
              aria-hidden="true"
            >
              <div class="absolute inset-0 opacity-[0.12] dark:opacity-[0.18]">
                <div class="credential-site-grid h-full w-full" />
              </div>
              <Icon
                icon="lucide:hard-hat"
                class="relative z-10 size-10 text-amber-700 dark:text-amber-400"
              />
            </div>
            <div class="flex flex-1 flex-col px-3 py-3 sm:px-4">
              <UBadge
                color="warning"
                variant="subtle"
                size="sm"
                class="w-fit"
              >
                In progress
              </UBadge>
              <p class="mt-2 text-[11px] font-medium uppercase tracking-wide text-amber-800 dark:text-amber-300">
                {{ item.issuer }}
              </p>
              <h3 class="mt-1 text-sm font-semibold leading-snug text-gray-900 dark:text-white">
                {{ item.title }}
              </h3>
              <ul class="m-0 mt-3 flex list-none flex-wrap gap-1.5 p-0">
                <li
                  v-for="skill in item.skills"
                  :key="skill"
                >
                  <span
                    class="inline-flex rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-[11px] font-medium leading-snug text-amber-900 dark:border-amber-800 dark:bg-amber-950/60 dark:text-amber-200"
                  >
                    {{ skill }}
                  </span>
                </li>
              </ul>
            </div>
          </article>
        </li>
      </ul>

      <div class="mt-10 flex justify-center">
        <UModal
          v-model:open="earnedOpen"
          title="Earned course certificates"
          scrollable
          :ui="{ content: 'sm:max-w-6xl' }"
        >
          <button
            type="button"
            class="group flex flex-col items-center gap-3 rounded-xl px-2 py-1 text-center"
          >
            <span
              class="flex items-center -space-x-5"
              aria-hidden="true"
            >
              <img
                v-for="item in bootdevCredentials"
                :key="item.id"
                :src="item.imageSrc"
                alt=""
                width="96"
                height="48"
                class="h-10 w-18 rounded-md border border-gray-200 object-cover object-top shadow-sm ring-1 ring-black/5 dark:border-gray-700 dark:ring-white/10 sm:h-12 sm:w-24"
              >
            </span>
            <span
              class="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white"
            >
              View {{ bootdevCredentials.length }} earned certificates
              <Icon
                icon="lucide:chevron-down"
                class="size-4 text-gray-500 transition-transform group-aria-expanded:rotate-180 dark:text-gray-400"
                :class="{ 'rotate-180': earnedOpen }"
              />
            </span>
          </button>

          <template #body>
            <ul class="m-0 grid list-none grid-cols-2 gap-3 p-0 md:grid-cols-3 lg:grid-cols-4">
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
                      class="w-fit bg-vue-50 text-vue-800 ring-vue-800/30 dark:bg-vue-950 dark:text-vue-200 dark:ring-vue-200/40"
                    >
                      {{ item.issuer }}
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
          </template>
        </UModal>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue"
import { credentialsLead } from "~/data/siteMeta"
import { bootdevCredentials, handshakeCredentials } from "~/data/credentials"

const credentialsLeadText = credentialsLead()
const earnedOpen = ref(false)
</script>

<style scoped>
.credential-site-grid {
  background-image:
    linear-gradient(to right, currentColor 1px, transparent 1px),
    linear-gradient(to bottom, currentColor 1px, transparent 1px);
  background-size: 16px 16px;
  color: #b45309;
}
</style>
