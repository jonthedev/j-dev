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

**Portfolio Refactor and Performance Enhancement**

Migrated my freelance portfolio from React to Nuxt 4, Nuxt UI, and TypeScript. Implemented features including a Vue green theme, dark mode, Iconify icons, scroll/stagger animations, and Netlify deployment. Completed the project in approximately 6 hours with AI assistance, significantly reducing the estimated manual development time of 2–4 weeks.

---

## License

Private — © Jonathan Kaonga / J-Dev.Online.
