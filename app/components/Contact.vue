<template>
  <section
    id="contact"
    class="relative scroll-mt-20 overflow-hidden border-b border-blueprint bg-white py-16 dark:bg-black"
  >
    <!-- Background: line grid (frontend) or dot grid (platform), theme-aware -->
    <div
      v-if="!isPlatformMode"
      class="absolute inset-0 text-gray-900 dark:text-gray-200 opacity-[0.05] dark:opacity-[0.07]"
      aria-hidden="true"
    >
      <div class="absolute inset-0 contact-section-grid" />
    </div>
    <div
      v-else
      class="absolute inset-0 text-gray-900 dark:text-gray-200 opacity-[0.06] dark:opacity-[0.09]"
      aria-hidden="true"
    >
      <div class="absolute inset-0 contact-section-dots" />
    </div>
    <div class="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <SharedBlueprintFrame label="05 / CONTACT">
        <div class="px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
          <h2 class="mb-10 text-left text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            Project Discovery
          </h2>

          <h3
            v-if="isPlatformMode"
            class="mb-6 text-left text-xl font-semibold text-gray-900 dark:text-white"
          >
            Contact & Engagement
          </h3>
          <div class="mb-10 grid gap-8 md:grid-cols-3">
            <SharedContactCard
              icon="lucide:mail"
              title="Email"
              :content="contactInfo.email"
              :href="`mailto:${contactInfo.email}`"
              :copy-value="contactInfo.email"
              :delay="100"
              @copy="copyEmail"
            />
            <SharedContactCard
              icon="lucide:building-2"
              title="Business"
              :content="`KVK: ${contactInfo.kvk}`"
              :href="contactInfo.kvkUrl"
              :delay="180"
            />
            <SharedContactCard
              icon="lucide:map-pin"
              title="Location"
              :content="contactInfo.location"
              :delay="260"
            />
          </div>

          <div class="mb-10 rounded-sm border border-blueprint bg-white p-4 dark:bg-black">
            <h3 class="mb-3 flex items-center text-sm font-semibold text-gray-900 dark:text-white">
              <Icon
                icon="lucide:file-check"
                width="1rem"
                height="1rem"
                class="mr-2 shrink-0 text-emerald-600 dark:text-emerald-400"
              />
              How I engage
            </h3>
            <ul class="grid gap-1.5 text-xs text-gray-600 sm:grid-cols-2 dark:text-gray-400">
              <li class="flex items-center gap-1.5">
                <Icon
                  icon="lucide:check"
                  width="0.75rem"
                  height="0.75rem"
                  class="shrink-0 text-emerald-600 dark:text-emerald-400"
                />
                Full-time roles or selective B2B via JDev Online
              </li>
              <li class="flex items-center gap-1.5">
                <Icon
                  icon="lucide:check"
                  width="0.75rem"
                  height="0.75rem"
                  class="shrink-0 text-emerald-600 dark:text-emerald-400"
                />
                KVK Registered (93792670)
              </li>
              <li class="flex items-center gap-1.5">
                <Icon
                  icon="lucide:check"
                  width="0.75rem"
                  height="0.75rem"
                  class="shrink-0 text-emerald-600 dark:text-emerald-400"
                />
                Outside IR35 (UK) / W-8BEN Compliant (US)
              </li>
              <li class="flex items-center gap-1.5">
                <Icon
                  icon="lucide:check"
                  width="0.75rem"
                  height="0.75rem"
                  class="shrink-0 text-emerald-600 dark:text-emerald-400"
                />
                {{ SITE_RESIDENCY }}
              </li>
            </ul>
          </div>

          <SharedReveal
            :delay="150"
            class="rounded-sm border border-blueprint bg-linear-to-r from-vue-50 to-vue-100 p-8 dark:from-vue-950/30 dark:to-vue-900/30"
          >
            <div class="text-left">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Let's Talk
              </h3>
              <p class="mb-6 max-w-xl text-sm text-gray-500 dark:text-gray-400">
                {{ SITE_AVAILABILITY_SHORT }}
              </p>

              <div class="flex flex-col gap-4 sm:flex-row">
                <UButton
                  :to="contactInfo.bookingUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  color="primary"
                  icon="lucide:calendar"
                  class="rounded-sm bg-vue-700! text-white! shadow-lg shadow-vue-700/20 hover:bg-vue-800!"
                >
                  Book a Call
                </UButton>

                <UButton
                  :to="`mailto:${contactInfo.email}`"
                  size="lg"
                  variant="outline"
                  color="neutral"
                  icon="lucide:send"
                  class="rounded-sm"
                >
                  Send Email
                </UButton>
              </div>
            </div>
          </SharedReveal>

          <div class="mt-12 flex space-x-6">
            <a
              v-for="social in contactMethods.filter((m) => m.name !== 'Email')"
              :key="social.name"
              :href="social.href"
              :aria-label="social.name"
              target="_blank"
              rel="noopener noreferrer"
              class="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-sm border border-blueprint bg-gray-100 text-gray-600 transition-colors hover:text-vue-600 dark:bg-gray-900 dark:text-gray-400 dark:hover:text-vue-400"
            >
              <span
                class="blueprint-scan"
                aria-hidden="true"
              />
              <Icon
                :icon="social.icon"
                width="1.25rem"
                height="1.25rem"
                class="relative z-10 shrink-0"
              />
            </a>
          </div>
        </div>
      </SharedBlueprintFrame>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue"
import { SITE_AVAILABILITY_SHORT, SITE_RESIDENCY } from "~/data/siteMeta"

defineOptions({ name: "AppContact" })

const { contactInfo, contactMethods } = useContact()
const portfolioMode = usePortfolioMode()
const isPlatformMode = computed(() => portfolioMode.mode.value !== "frontend")
const toast = useToast()

async function copyEmail(value: string) {
  if (!import.meta.client) {
    return
  }

  try {
    await navigator.clipboard.writeText(value)
    toast.add({
      title: "Email copied",
      description: value,
      icon: "i-lucide-check",
      color: "success"
    })
  } catch {
    toast.add({
      title: "Could not copy email",
      description: "Select the address and copy it manually.",
      icon: "i-lucide-circle-alert",
      color: "error"
    })
  }
}
</script>

<style scoped>
.contact-section-grid {
  background-image:
    linear-gradient(to right, currentColor 1px, transparent 1px),
    linear-gradient(to bottom, currentColor 1px, transparent 1px);
  background-size: 40px 40px;
}
.contact-section-dots {
  background-image: radial-gradient(
    circle,
    currentColor 1.5px,
    transparent 1.5px
  );
  background-size: 28px 28px;
}
</style>
