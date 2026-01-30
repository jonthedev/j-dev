# J-Dev.Online Vue & Freelance Revamp Plan

Revamp j-dev.online from a 4-year-old React portfolio into a Vue/Nuxt freelance (ZZP) site that positions you as a Freelance Senior Frontend Engineer with a clear Vue-first focus, reusing content and structure where appropriate.

**Decisions:** Nuxt 4, Nuxt UI, same repo with a separate branch, light and dark theme.

---

## Current state

- **Stack:** React 18, Vite 5, TypeScript, Tailwind, PostHog, react-ga4.
- **Sections:** Navbar → Hero → TechStack → About → Clients → Projects → Contact (single-page).
- **Messaging:** Generic “Web Developer | Front End Specialist”; tech list mixes React and Vue; no explicit freelance/ZZP positioning.
- **Content:** ANWB, Van Lanschot Kempen, DPG Media (Vacaturebank); KVK in footer.
- **README:** Already notes a “2026 rebrand with Vue/Nuxt”.

Your CV and GitHub profile position you as **Freelance Senior Frontend Engineer (ZZP)** with **Vue 3, Nuxt 4, VueUse, Pinia**, Thalex (Vue/Nuxt), DPG Media, ANWB, and tooling like Playwright, Vitest, Vite.

---

## Goals

1. **Rebuild with Vue and its ecosystem** — Nuxt 4 for a freelance/portfolio site (SEO, SSG, DX, credibility).
2. **Freelance/ZZP positioning** — Site clearly presents you as available for contract and project work (KVK present; add clear “Freelance” and CTA).
3. **Vue-first messaging** — Hero, About, and Tech lead with Vue/Nuxt; React/Next as “also experienced”.
4. **Content refresh** — Copy aligned with CV (Thalex, Vue/Nuxt focus, performance, DX); optional “Services” or “How I work” for freelancers.
5. **Light and dark theme** — User can switch; Nuxt UI supports color mode out of the box.

---

## Tech stack

| Layer       | Choice              | Notes                                                |
|------------|---------------------|------------------------------------------------------|
| Framework  | **Nuxt 4**          | Vue 3, SSG/SSR, file-based routing.                  |
| UI         | **Nuxt UI**         | Component set, theming, and color mode (light/dark). |
| Build      | Vite (built into Nuxt) | Same DX as current Vite setup.                    |
| Styling    | Tailwind CSS        | Via Nuxt UI / Nuxt Tailwind; keep utility approach.  |
| Language   | TypeScript          | Align with CV and current project.                   |
| State      | Pinia (if needed)   | Minimal for one-pager; add for forms/filters later.  |
| Testing    | Vitest + Playwright | Unit/component and E2E.                              |
| Analytics  | PostHog             | Nuxt plugin or `useHead`; optional GA4 if desired.  |

---

## Repo and branch strategy

- **Same repo** — Keep a single repository for j-dev.online.
- **Separate branch** — Do the revamp on a dedicated branch (e.g. `vue-revamp` or `nuxt-revamp`).
- **Launch** — When ready, merge into `main` (or replace `main`) and deploy; history stays in one place.

---

## Theme: light and dark

- Implement **light and dark** color mode.
- Use **Nuxt UI** color mode (e.g. `useColorMode()`, toggle in Navbar).
- Define light/dark tokens so the existing neutral/amber feel can carry over; Nuxt UI themes can be extended to match.
- Default: either system preference or your choice (e.g. dark as default, with a visible toggle).

---

## Content and messaging strategy

- **Hero**
  - Headline: e.g. “Freelance Senior Frontend Engineer” or “Jonathan — Freelance Frontend (Vue)”.
  - Subline: Vue/Nuxt focus, e.g. “Vue & Nuxt specialist · Contract & project work” and “Turning ideas into interactive reality” if kept.
  - CTA: “Work with me” / “Start a project” linking to #contact or a short contact form.
- **About**
  - Reframe around **Vue and Nuxt**: 6+ years frontend, now focused on Vue/Nuxt; Thalex (Vue/Nuxt migration, trading UI), DPG Media, ANWB.
  - Keep: ANWB award, work rights (UK/NL), remote/open to visa where relevant; optionally shorten “dance/travel” to one line.
  - One clear line: “I focus on Vue and its ecosystem going forward; I also have broad experience with React and TypeScript.”
- **Tech stack**
  - **Order:** Vue 3, Nuxt, TypeScript, Vite, Pinia, VueUse, Tailwind, Playwright, Vitest, then “Also experienced: React, Next.js, Cypress, …”.
- **Projects**
  - Keep ANWB, Van Lanschot, Vacaturebank; add **Thalex** if desired (Vue/Nuxt, TradingView, D3).
  - Describe in stack-agnostic or Vue terms where you used Vue; for older React/Next projects, use “Frontend” or “TypeScript/React” without highlighting React.
- **Clients**
  - Keep ANWB, Van Lanschot, DPG Media; add Thalex logo if available.
- **Contact**
  - Keep: email, KVK, copyright, J-Dev.Online branding.
  - Optional: “Available for projects from [date]” or “Let’s build something”.

---

## High-level implementation steps

1. **Branch and scaffold**
   - Create branch (e.g. `vue-revamp`).
   - Scaffold Nuxt 4 app (e.g. `nuxi init` in a temp dir, then bring into repo or replace relevant parts).
   - Add Nuxt UI and Tailwind; configure `nuxt.config` (site title, meta, base URL for j-dev.online).
   - Enable and configure color mode (light/dark) in Nuxt UI.

2. **Layout and pages**
   - One main layout: Navbar (with theme toggle) + slot for page content + Footer (Contact).
   - Single landing page (`app.vue` or `pages/index.vue`) composing: Hero, TechStack, About, Clients, Projects, Contact (same section order as now).

3. **Components**
   - Port section structure and styling from current components: Navbar, Hero, TechStack, About, Clients, Projects, Contact.
   - Use Vue 3 Composition API and Nuxt UI components where they fit; keep Section, Spacer, typography (Heading, Text, SectionTitle), Link.
   - Icons: replace react-icons with Nuxt UI icons or a small set of inline SVGs / icon component.

4. **Data**
   - Move `db` to data-only: `projects.ts`, `clients.ts`, `techStack.ts`, `navigationLinks.ts`. No JSX/React elements; use image paths and icon keys; components render icons and images from data.
   - Tech stack: reorder (Vue first) and optionally expand (Vue, Nuxt, TypeScript, Vite, Pinia, VueUse, Playwright, Vitest, Tailwind; then “also” React, Next.js, etc.).

5. **Copy and content**
   - Update Hero, About, and section text per “Content and messaging strategy” above.
   - Add Thalex to projects (and clients if you have a logo).
   - Meta title/description: mention “Freelance” and “Vue” (e.g. “Jonathan Kaonga — Freelance Senior Frontend Engineer | Vue & Nuxt”).

6. **Analytics and tooling**
   - PostHog via Nuxt plugin (`client-only` if using SSR).
   - Optional: GA4 via `vue-gtag` or Nuxt module.
   - ESLint + Prettier for Vue/Nuxt; optionally keep Husky/commitlint/lint-staged.

7. **Tests**
   - Vitest for component/unit tests.
   - Playwright for one or two E2E tests (e.g. homepage loads, contact section visible).

8. **Deploy**
   - Build as static (`nuxt generate`) and deploy to current host; ensure `base` and redirects match j-dev.online.

---

## What to reuse from the current project

- **Content and structure:** Section order, project descriptions, client list, KVK, email, tagline.
- **Design direction:** Neutral/amber palette, Kanit font (if kept), existing animations (reimplement in Vue/Tailwind / Nuxt UI).
- **Assets:** `public/` favicons, manifest, `src/assets` (logos, project images, about/hacker SVGs — copy into Nuxt `public/` or `assets/`).
- **Repo hygiene:** `.nvmrc` (align Node with Nuxt 4), `.gitignore`, env patterns; optional Husky/commitlint.

---

## What to drop or change

- **React, react-dom, JSX:** Remove entirely.
- **react-ga4, react-icons:** Replace with Vue-friendly analytics and Nuxt UI (or other) icons.
- **SVGR/Hacker:** Reimplement as Vue component or static SVG.
- **Project tech icons:** Reframe from React/Next-heavy to Vue-first or “Frontend” where accurate (e.g. Thalex with Vue).

---

## Optional later enhancements

- **Services block:** “What I offer” (Vue/Nuxt apps, migrations, performance, component systems) for clearer freelance positioning.
- **Blog or “Notes”:** Nuxt Content for occasional posts (Vue, freelancing, DX) for SEO and authority.

---

## Summary of decisions

- **Nuxt 4** — Framework.
- **Nuxt UI** — Components and theming.
- **Same repo, separate branch** — e.g. `vue-revamp` until launch, then merge/replace `main`.
- **Light and dark theme** — Implemented via Nuxt UI color mode with a Navbar toggle.

Once you’ve reviewed this plan, the next step is to create the branch, scaffold the Nuxt 4 + Nuxt UI app, and migrate the first section (layout + Hero + Contact + theme toggle).
