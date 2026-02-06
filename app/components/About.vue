<template>
  <section
    id="about"
    class="bg-gray-50 py-20 dark:bg-gray-950"
  >
    <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="mb-16 text-center"
      >
        <h2
          class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white"
        >
          About JDev Online
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300">
          Lead Frontend Specialist · Vue & Nuxt Engineering
        </p>
      </div>

      <div class="grid items-center gap-12 md:grid-cols-2">
        <!-- Text content -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -24 }"
          :visible-once="{
            opacity: 1,
            x: 0,
            transition: { duration: 500, delay: 100 }
          }"
          class="space-y-6"
        >
          <div class="prose prose-lg dark:prose-invert max-w-none">
            <p class="leading-relaxed text-gray-700 dark:text-gray-300">
              I am a <strong>Senior Frontend Engineer</strong> and the Lead at
              JDev Online. With 6+ years of experience in the frontend
              landscape, I specialize in the Vue ecosystem—architecting
              resilient, high-performance systems using Vue 3, Nuxt, and
              TypeScript.
            </p>

            <h3
              class="mt-8 text-lg font-semibold text-gray-900 dark:text-white"
            >
              The JDev Advantage
            </h3>
            <p class="leading-relaxed text-gray-700 dark:text-gray-300">
              I don't just write code; I engineer velocity. By leveraging a
              sovereign AI-augmented workflow, I compress development lifecycles
              and handle complex refactors with a speed that traditional
              workflows can't match—all while ensuring your data remains private
              and secure.
            </p>

            <h3
              class="mt-8 text-lg font-semibold text-gray-900 dark:text-white"
            >
              Proven Track Record
            </h3>
            <p class="leading-relaxed text-gray-700 dark:text-gray-300">
              Currently, I am engineering real-time data visualizations for
              Thalex (a derivatives trading platform). My previous work includes
              scaling products for major Dutch enterprises such as
              <strong>ANWB, Van Lanschot Kempen, and DPG Media</strong>. In
              2022, my contributions at ANWB were recognized with the Website
              van het Jaar (Most Popular Website) award.
            </p>
          </div>
        </div>

        <!-- Visual/Stats -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 24 }"
          :visible-once="{
            opacity: 1,
            x: 0,
            transition: { duration: 500, delay: 150 }
          }"
          class="space-y-6"
        >
          <!-- Photo: plain img so images work in dev and production -->
          <div class="flex justify-center">
            <img
              src="/jdk-portfolio-2024.jpeg"
              alt="Jonathan Kaonga"
              width="224"
              height="224"
              loading="lazy"
              decoding="async"
              class="h-48 w-48 rounded-2xl border-2 border-gray-200 object-cover shadow-lg md:h-56 md:w-56 dark:border-gray-800"
            >
          </div>
          <!-- Experience stats -->
          <div class="grid grid-cols-2 gap-4">
            <div
              class="rounded-lg border border-gray-200 bg-white p-6 text-center dark:border-gray-800 dark:bg-black"
            >
              <div
                class="text-vue-600 dark:text-vue-400 mb-2 text-3xl font-bold"
              >
                6+
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-400">
                Years Experience
              </div>
            </div>
            <div
              class="rounded-lg border border-gray-200 bg-white p-6 text-center dark:border-gray-800 dark:bg-black"
            >
              <div
                class="text-vue-600 dark:text-vue-400 mb-2 text-3xl font-bold"
              >
                4+
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-400">
                Enterprise clients
              </div>
            </div>
          </div>

          <!-- Core Services -->
          <div
            class="bg-vue-50 dark:bg-vue-950/30 dark:border-vue-800 border-vue-200 rounded-lg border p-6"
          >
            <h3
              class="text-vue-900 dark:text-vue-100 mb-4 flex items-center font-semibold"
            >
              <Icon
                icon="lucide:briefcase"
                width="1.25rem"
                height="1.25rem"
                class="text-vue-600 dark:text-vue-400 mr-2 shrink-0"
              />
              Core Services
            </h3>
            <div class="text-vue-800 dark:text-vue-200 space-y-4 text-sm">
              <div>
                <div class="font-semibold text-vue-900 dark:text-vue-100">
                  Enterprise Modernization
                </div>
                <p class="mt-1 leading-relaxed">
                  Leading the transition from legacy architectures to resilient
                  Nuxt 4 systems using an AI-augmented refactoring workflow.
                </p>
              </div>
              <div>
                <div class="font-semibold text-vue-900 dark:text-vue-100">
                  Performance Engineering
                </div>
                <p class="mt-1 leading-relaxed">
                  Optimizing real-time data streaming and high-traffic
                  interfaces for speed, accessibility, and sub-second
                  reactivity.
                </p>
              </div>
              <div>
                <div class="font-semibold text-vue-900 dark:text-vue-100">
                  Scalable Architecture
                </div>
                <p class="mt-1 leading-relaxed">
                  Engineering "source of truth" component libraries and scaling
                  products from MVP to enterprise-grade production.
                </p>
              </div>
            </div>
          </div>

          <!-- Availability & Logistics -->
          <div
            class="rounded-lg border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-800 dark:bg-emerald-950/30"
          >
            <h3
              class="mb-2 flex items-center font-semibold text-emerald-900 dark:text-emerald-100"
            >
              <Icon
                icon="lucide:calendar-check"
                width="1.25rem"
                height="1.25rem"
                class="mr-2 shrink-0 text-emerald-600 dark:text-emerald-400"
              />
              Availability & Logistics
            </h3>
            <p
              class="mb-4 text-sm font-medium text-emerald-800 dark:text-emerald-200"
            >
              Strategic Partnership
            </p>
            <div
              class="space-y-4 text-sm text-emerald-800 dark:text-emerald-200"
            >
              <div>
                <div
                  class="font-semibold text-emerald-900 dark:text-emerald-100"
                >
                  Global Reach
                </div>
                <p class="mt-1 leading-relaxed">
                  Remote B2B contracts for UK, EU, and International markets
                  (Dubai, US, Asia).
                </p>
              </div>
              <div>
                <div
                  class="font-semibold text-emerald-900 dark:text-emerald-100"
                >
                  Zero Friction
                </div>
                <p class="mt-1 leading-relaxed">
                  UK-born, Amsterdam-based with full UK/EU residency and work
                  rights.
                </p>
              </div>
              <div>
                <div
                  class="font-semibold text-emerald-900 dark:text-emerald-100"
                >
                  Professional Entity
                </div>
                <p class="mt-1 leading-relaxed">
                  Operating via a Dutch KVK (ZZP) with cross-border billing—no
                  visa sponsorship or administrative overhead required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue"

defineOptions({ name: "AppAbout" })
</script>
