# AGENTS.md

## Cursor Cloud specific instructions

This is a **Nuxt 4 static portfolio SPA** (no backend, no database, no API). All content is hardcoded in `app/data/*.ts`.

### Quick reference

| Task | Command |
|------|---------|
| Install deps | `pnpm install` |
| Dev server | `pnpm dev` (serves at `localhost:3000`) |
| Lint | `pnpm lint` |
| Tests | `pnpm test` |
| Build | `pnpm build` |
| Typecheck | `pnpm typecheck` |

See `README.md` → **Scripts** table for the full list.

### Non-obvious notes

- **Node version**: must be 20.19.0 (see `.nvmrc`). Use `nvm use` before running commands.
- **pnpm build scripts**: pnpm v10 blocks native build scripts by default. The `pnpm.onlyBuiltDependencies` field in `package.json` allowlists `esbuild`, `@parcel/watcher`, `sharp`, `unrs-resolver`, and `vue-demi`. If a new native dependency is added, it must be added to this list or `pnpm install` will silently skip its postinstall and the binary won't be available.
- **SSR is disabled** (`ssr: false` in `nuxt.config.ts`); the site is a purely client-rendered SPA with `nitro.preset: 'static'`.
- **Image provider**: configured for Netlify (`image.provider: 'netlify'`). Images may show console warnings locally because the Netlify Image CDN is unavailable in dev — this is expected and harmless.
- **Pre-existing lint errors**: `pnpm lint` reports ~700+ quote-style errors (single vs double quotes). These are pre-existing in the codebase and all auto-fixable with `pnpm lint -- --fix`. The lint infrastructure itself works correctly.
- **Husky hooks**: `pre-commit` runs lint-staged (eslint --fix on staged files), `commit-msg` runs commitlint (conventional commits required), `pre-push` runs `git pull -r`.
- **Test scope**: only one unit smoke test exists (`test/unit/smoke.spec.ts`). A Nuxt component test in `test/nuxt/` is excluded from the default test run.
