# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project uses [Semantic Versioning](https://semver.org/). Each release section is `## [VERSION] - YYYY-MM-DD`.

## [Unreleased]

## [1.0.2] - 2026-01-31

### Changed

- Replaced custom Frontend/AI segmented control in the navbar with Nuxt UI `UTabs` (pill variant, toggle-only) for consistency and maintainability.

## [1.0.1] - 2026-01-30

### Fixed

- Favicon and static assets (favicon.ico, robots.txt, _nuxt/*, etc.) now load in production by listing them in `public/_redirects` before the SPA catch-all so Netlify serves the files instead of index.html.
