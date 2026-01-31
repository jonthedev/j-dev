# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

### Fixed

- Favicon and static assets (favicon.ico, robots.txt, _nuxt/*, etc.) now load in production by excluding them from the SPA catch-all redirect in `netlify.toml`.
