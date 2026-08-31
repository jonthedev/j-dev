# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project uses [Semantic Versioning](https://semver.org/). Each release section is `## [VERSION] - YYYY-MM-DD`.

## [Unreleased]

### Changed

- **Positioning**: Hero and SEO lead with **Senior Full-Stack Engineer** instead of Freelance. Availability covers permanent roles or selective B2B.
- **Tech Stack**: Python and Linux listed under Systems with CI/CD and auditing. No study-mode labels.
- **About**: Systems-depth bullet. Engagement box lists both doors plus KVK / IR35.

## [1.1.0] - 2026-05-13

### Added

- **Headshot**: About section now includes a photo with experience pill.
- **Theme-aware screenshots**: Case study assets in `projects.ts` support light/dark variants.
- **Shared components**: `SharedCtaCard` and shared terminal brand channel (`SharedBrandChannelBar`) for Tech Stack and Projects sections.
- **E2E tests**: Playwright visual snapshot regression tests for the homepage.
- **Client projects**: Added Thalex, ANWB, DPG Media, and Van Lanschot Kempen case studies with screenshots.
- **Industry context**: Career timeline entries now reference industry/sector.

### Changed

- **Brand pivot**: "AI" tab renamed to **Lab** with hazard yellow theme (was purple). Lab hero title updated to "The Lab".
- **Positioning**: Site-wide rebrand to **AI Product Engineer** from Vue Frontend Engineer. Hero subtitle now "Senior Vue & Nuxt Consultant | UK-Native | Dutch B2B Entity".
- **Hero**: Cleaned up copy; simplified text and removed redundant messaging.
- **Projects**: Featured Thalex as primary case study; added ANWB, DPG Media, VLK screenshots; removed non-Vue projects.
- **Tech Stack**: Tightened layout and copy; removed React/Next.js references.
- **Navigation**: Reordered to match page flow; section order aligned across portfolio and lab views.
- **Footer**: Contact blurb tightened; links sourced from `useNavigation` composable.
- **Animation engine**: Replaced `@vueuse/motion` with native IntersectionObserver + CSS transitions.
- **Lazy hydration**: Added `hydrate-on-visible` for all below-fold sections.
- **Fonts**: Added font-display swap to reduce LCP delay.
- **Core Web Vitals**: Optimised LCP and fixed reflow issues.
- **SEO**: Meta tags embedded in static HTML for crawler visibility; updated for both portfolio modes.
- **Copy**: Stripped marketing fluff; honest framing of NestJS/PostgreSQL as personal projects; corrected experience claims.
- **EU/UK market**: Added KVK, A1, Outside IR35, W-8BEN-E contracting signals; Website van het Jaar 2022 badge.
- **Tooling**: Prettier `arrowParens` config; `simple-git` pnpm override (CVE); happy-dom upgraded to ^20.0.0.
- **README**: Updated to reflect AI Product Engineer repositioning.

### Fixed

- Grammar: "IR35 compliant" corrected to "Outside IR35" across all files.
- Card layouts: Unified heights and standardised placeholder card layout.
- Nav section order: Portfolio and lab views now share consistent ordering.
- Project descriptions: Line clamp expanded to 4 lines; descriptions shortened.
- Mode switch: Scroll-to-top + fade transition on portfolio/lab toggle.
- TS errors: Resolved type and linting issues after motion-v migration.

### Removed

- **Clients logo section** from portfolio view.
- **Redundant copy**: Em-dashes, duplicate text, marketing fluff across the site.
- **`@vueuse/motion` dependency**: Replaced entirely with native CSS transitions and IntersectionObserver.

## [1.0.3] - 2026-03-10

### Added

- **Pre-push checks**: Husky pre-push hook runs `pnpm run check` (lint, typecheck, unit tests) before push. New `check` script in package.json.
- **`usePortfolioMode` tests**: Vitest unit tests for toggle and setMode.
- **ContactCard tests**: Renders title, content, and correctly switches between link and span based on href prop.
- **Test setup**: Mocks Nuxt globals (useState, onMounted, localStorage) and Vue (computed). ContactCard tests use happy-dom with v-motion warnings suppressed.

### Changed

- **Code style**: ESLint and Prettier enforce single quotes; applied across codebase. Workspace Prettier setting `prettier.singleQuote: true` in .vscode/settings.json.
- **Calendly booking integration**: Replaced mailto CTAs with Calendly link (https://calendly.com/jdev-online/new-meeting). Hero "Book a Consultation" and PlatformHero "Get in touch" now open Calendly in new tab. Contact section primary CTA is "Book a Call" with "Send Email" as secondary.
- **Hero positioning**: Subtitle now "Senior Vue & Nuxt Consultant | UK-Native | Dutch B2B Entity" with Randstad/UK on-site availability. Added Website van het Jaar 2022 badge.
- **Contracting Readiness**: Replaced Availability & Logistics card with KVK, A1, Outside IR35, W-8BEN-E signals.
- **AI page**: Sovereignty headline, 72% velocity claim with case study, Nuxt 4 migration value prop, Enterprise-Grade Remote Infrastructure reframe.
- **Clients section**: Award Recognition replaced with Proven at Scale (Lighthouse 90+).
- **SEO**: Updated meta for both portfolio modes.

## [1.0.2] - 2026-01-31

### Changed

- Replaced custom Frontend/AI segmented control in the navbar with Nuxt UI `UTabs` (pill variant, toggle-only) for consistency and maintainability.

## [1.0.1] - 2026-01-30

### Fixed

- Favicon and static assets (favicon.ico, robots.txt, _nuxt/*, etc.) now load in production by listing them in `public/_redirects` before the SPA catch-all so Netlify serves the files instead of index.html.
