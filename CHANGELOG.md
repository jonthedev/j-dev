# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project uses [Semantic Versioning](https://semver.org/). Each release section is `## [VERSION] - YYYY-MM-DD`.

## [Unreleased]

### Changed

- **UK/EU B2B messaging reframe**: Hero subtitle now positions as "Senior Vue & Nuxt Consultant | UK-Native | Dutch B2B Entity" with Randstad/UK on-site availability. Added Website van het Jaar 2022 badge to hero. Replaced Availability & Logistics with Contracting Readiness card (KVK, A1, Outside IR35, W-8BEN-E). AI page: sovereignty headline, 72% velocity claim with case study, Nuxt 4 migration value prop, Enterprise-Grade Remote Infrastructure reframe. Clients section: Award Recognition replaced with Proven at Scale (Lighthouse 90+). Updated SEO meta for both portfolio modes.

## [1.0.2] - 2026-01-31

### Changed

- Replaced custom Frontend/AI segmented control in the navbar with Nuxt UI `UTabs` (pill variant, toggle-only) for consistency and maintainability.

## [1.0.1] - 2026-01-30

### Fixed

- Favicon and static assets (favicon.ico, robots.txt, _nuxt/*, etc.) now load in production by listing them in `public/_redirects` before the SPA catch-all so Netlify serves the files instead of index.html.
