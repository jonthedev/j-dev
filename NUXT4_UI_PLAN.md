# Nuxt 4 + Nuxt UI Plan (New Project from Scratch, pnpm)

Start a **new Nuxt 4 project from scratch** using the official [Nuxt 4 installation](https://nuxt.com/docs/4.x/getting-started/installation) and [Nuxt UI installation](https://ui.nuxt.com/docs/getting-started/installation/nuxt). Use **pnpm** for all package manager commands. Then bring over the current refactor content, add Vitest, SEO, and @vueuse/motion for animations.

---

## Branch and scope

- **Branch:** Create a new branch from current `vue-revamp` (e.g. `nuxt4-ui`). All work happens there.
- **New project:** Do not upgrade. Scaffold a fresh Nuxt 4 project with pnpm, add Nuxt UI per the docs, then copy that scaffold into the repo. The only thing we take from the old branch is **content** (see below).
- **Package manager:** Use **pnpm** only: `pnpm create`, `pnpm add`, `pnpm install`, `pnpm dev`, `pnpm build`, `pnpm test`.

**What comes from where**

- **From the fresh temp project (scaffold):** Everything that defines the stack: `package.json`, `pnpm-lock.yaml`, `nuxt.config.ts`, `app.vue`, `tsconfig.json`, `assets/css/main.css`, and any other root/config files the create added. This is a **fresh install** – we do not reuse the old branch’s package.json or lock file.
- **From the old branch (content only):** The actual copy and data: your About me text, Hero text, project descriptions, client list, etc. We bring that in by copying `layouts/`, `pages/index.vue`, `components/` (Hero, About, Navbar, Footer, TechStack, Projects, Clients, Contact), `db/`, and `public/` (images, favicons). So the only thing that matters from the old branch is the **content** – the updates to About me, Hero, projects, clients, and so on.

---

## 1. New branch

- From `vue-revamp`: `git checkout -b nuxt4-ui`.

---

## 2. New Nuxt 4 project from scratch (pnpm)

Follow [Nuxt 4 installation](https://nuxt.com/docs/4.x/getting-started/installation):

- **Prerequisites:** Node.js 20.x or newer. Align .nvmrc if needed (e.g. `20` or `22`).
- **Create project:** In a **temporary directory** (e.g. sibling to the repo), run:
  - `pnpm create nuxt@latest <temp-name>` (e.g. `jdev-nuxt4-temp`).
- **Prompts:** Choose Nuxt 4 when offered; use TypeScript; use pnpm. Do not add Nuxt UI in the initial create (add it in the next step).
- **Result:** A clean Nuxt 4 app (package.json, nuxt.config.ts, app.vue, pages/, etc.).

---

## 3. Add Nuxt UI (pnpm)

Follow [Nuxt UI installation for Nuxt](https://ui.nuxt.com/docs/getting-started/installation/nuxt):

- **Install:** In the new project directory: `pnpm add @nuxt/ui tailwindcss`.
- **Config:** In the new project's `nuxt.config.ts`: `modules: ['@nuxt/ui']`, `css: ['~/assets/css/main.css']`.
- **Main CSS:** In the new project's `assets/css/main.css`: `@import "tailwindcss";` then `@import "@nuxt/ui";` (add Kanit font at top if needed).
- **App wrapper:** In the new project's `app.vue`: `<template><UApp><NuxtPage /></UApp></template>` (add `<NuxtLayout><NuxtPage /></NuxtLayout>` inside `UApp` when we add layouts).
- **Verify:** Run `pnpm dev` in the temp project and confirm the Nuxt UI default page works. Then bring this scaffold into the repo.

---

## 4. Bring scaffold into repo and add content from old branch

- **Copy the fresh scaffold into the repo (from the temp project, not from the old branch):** Copy into the repo: `package.json`, `pnpm-lock.yaml`, `nuxt.config.ts`, `app.vue`, `tsconfig.json`, and any other root/config files; `assets/css/main.css`. These all come from the **temp Nuxt 4 + Nuxt UI project** – a fresh install. Do not copy package.json or lock file from the old branch.
- **Replace default content with your content (from the old branch):** Copy from the **old branch** into the repo: `layouts/default.vue`, `pages/index.vue`, `components/` (Hero, About, Navbar, Footer, TechStack, Projects, Clients, Contact), `db/`, `public/` (favicons, project images, client logos). This is the only thing we take from the old branch – the content (About me, Hero, projects, clients, etc.).
- **App.vue:** Ensure root `app.vue` is: `<template><UApp><NuxtLayout><NuxtPage /></NuxtLayout></UApp></template>`.
- **Install in repo:** Run `pnpm install` in the repo (using the new package.json). Fix any path or import issues in the components we brought over.
- **Theme toggle:** Use Nuxt UI color mode (e.g. in Navbar). Nuxt UI enables color mode by default.

---

## 5. TypeScript

- The new Nuxt 4 scaffold is TypeScript. Keep it; ensure db/ and components use `lang="ts"` and types where needed.

---

## 6. Vitest for basic testing

- **Install:** `pnpm add -D @nuxt/test-utils vitest` (and optionally `@nuxt/test-utils/module`).
- **Config:** Add `vitest.config.ts` using `defineVitestConfig` from `@nuxt/test-utils/config` with `test.environment: 'nuxt'`.
- **Scripts:** In package.json: `"test": "vitest run"`, `"test:watch": "vitest"`.
- **Tests:** Add basic tests (e.g. homepage renders, key sections or Navbar/Footer present). Place in `test/` (e.g. `test/nuxt/index.spec.ts`).

---

## 7. SEO

- Use `useSeoMeta()` and `useHead()` in layout or index page: title, description, og:title, og:description, og:image, canonical. Keep nuxt.config `app.head` for defaults.

---

## 8. Interactive animations

- **Library:** @vueuse/motion (Nuxt module: `@vueuse/motion/nuxt`). Install: `pnpm add @vueuse/motion`; add `'@vueuse/motion/nuxt'` to modules in nuxt.config.
- **Usage:** Add `v-motion` with variants (e.g. `v-motion:initial` / `v-motion:enter` with opacity and translateY) on sections (Hero, About, TechStack, Projects, Clients, Contact) and optionally Navbar/CTAs.

---

## 9. Order of operations (summary)

1. Create branch `nuxt4-ui` from `vue-revamp`.
2. In a temp directory: `pnpm create nuxt@latest <temp-name>` (Nuxt 4, TypeScript, pnpm).
3. In the new project: `pnpm add @nuxt/ui tailwindcss`; set nuxt.config and assets/css/main.css per Nuxt UI docs; wrap app with UApp; run `pnpm dev` to verify.
4. Copy **scaffold** (from temp project) into repo: package.json, pnpm-lock.yaml, nuxt.config, app.vue, tsconfig, assets/css. Copy **content only** (from old branch): layouts, pages, components, db, public. Set app.vue to UApp + NuxtLayout + NuxtPage; run `pnpm install`.
5. Add Vitest and basic tests; add @vueuse/motion and apply v-motion to sections; centralize SEO.
6. Run `pnpm dev`, `pnpm build`, `pnpm test` and fix issues.

---

## Known issues (after execution)

- **Nitro build:** `client.precomputed.mjs` ENOENT in Nuxt 4.2+ ([nuxt/nuxt#33579](https://github.com/nuxt/nuxt/issues/33579)). **Fix:** Downgrade to Nuxt **4.1.3** (per [deetz99’s comment](https://github.com/nuxt/nuxt/issues/33579)). Repo is pinned to `nuxt@4.1.3`; build and prerender complete successfully. Optional: `ssr: false` + `nitro.preset: 'static'` for a static profile site.
- **Vitest Nuxt env:** With `environment: 'nuxt'`, tests fail with "Cannot find module nuxt". Unit tests only (`test/unit/`, node env) run successfully. To add Nuxt-runtime tests later, switch to `defineVitestConfig` from `@nuxt/test-utils/config` and include `test/nuxt/**`.

## References

- [Nuxt 4 installation](https://nuxt.com/docs/4.x/getting-started/installation)
- [Nuxt UI installation (Nuxt)](https://ui.nuxt.com/docs/getting-started/installation/nuxt)
