# J-Dev.Online · Portfolio

Personal portfolio and freelance frontend engineer site — **Vue & Nuxt** focused, with a hint of AI platform engineering. Built with Nuxt 4, Nuxt UI, and TypeScript.

**Live:** [j-dev.online](https://j-dev.online)

---

## Tech stack

- **Framework:** [Nuxt 4](https://nuxt.com) (Vue 3)
- **UI:** [Nuxt UI](https://ui.nuxt.com) · [Tailwind CSS](https://tailwindcss.com) v4
- **Icons:** [Iconify](https://iconify.design) (Lucide, Simple Icons)
- **Motion:** [VueUse Motion](https://motion.vueuse.org) for scroll and stagger animations
- **Language:** TypeScript
- **Package manager:** pnpm
- **Testing:** Vitest
- **Deploy:** Netlify (static)

---

## Getting started

**Prerequisites:** Node.js 20+ · [pnpm](https://pnpm.io)

```bash
# Clone
git clone https://github.com/jonthedev/jdev.git
cd jdev

# Install
pnpm install

# Dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Scripts

| Command        | Description              |
|----------------|--------------------------|
| `pnpm dev`     | Start dev server         |
| `pnpm build`   | Production build         |
| `pnpm generate`| Static export            |
| `pnpm preview` | Preview production build |
| `pnpm lint`    | Run ESLint               |
| `pnpm test`    | Run Vitest               |

---

## Project structure

```
app/
├── app.vue           # Root layout, SEO, favicon
├── assets/css/       # Global styles (Tailwind, Vue theme)
├── components/       # Vue components (Hero, About, Projects, Contact, etc.)
├── data/             # Static content (projects, techStack, clients)
├── layouts/
│   └── default.vue   # Navbar + main + Footer
└── pages/
    └── index.vue     # Home (single-page sections)

public/               # Static assets (favicon, images, _redirects)
nuxt.config.ts        # Nuxt config (srcDir: app, static preset)
netlify.toml          # Netlify build + publish + SPA redirect
```

Content (projects, tech stack, clients) lives in `app/data/` as TypeScript; no CMS.

---

## Deployment

The site is deployed to **Netlify** from the `main` branch. Build uses:

- **Build command:** `pnpm run build`
- **Publish directory:** `.output/public`
- **SPA redirect:** `/*` → `/index.html` (via `netlify.toml` and `public/_redirects`)

---

## Metrics

Rough comparison for the **React → Nuxt 4** refactor (full migration, Vue green theme, dark mode, Iconify icons, scroll/stagger animations, content updates, Netlify deploy):

| Context | Estimate |
|--------|----------|
| **Without AI** (experienced frontend dev, same scope) | ~2–4 weeks (80–160 person-hours) |
| **With AI-assisted dev** (Cursor) | ~6 hours |

---

## License

Private — © Jonathan Kaonga / J-Dev.Online.
