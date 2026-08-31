# JDev Online · Senior Full-Stack Engineer

Personal portfolio. Vue, Nuxt, Pinia, TypeScript. Built with Nuxt 4, Nuxt UI, and TypeScript.

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

## Scripts

| Command            | Description                    |
|--------------------|--------------------------------|
| `pnpm dev`         | Start dev server (recommended) |
| `pnpm build`       | Production build               |
| `pnpm generate`    | Static export                  |
| `pnpm preview`     | Preview production build       |
| `pnpm lint`        | Run ESLint                     |
| `pnpm test`        | Run Vitest                     |

---

## Project structure

```
app/
├── app.vue           # Root layout, SEO, favicon
├── assets/css/       # Global styles (Vue green + Lab yellow themes)
├── components/
│   ├── platform/     # Lab view components (AI workflows, backend experiments)
│   └── shared/       # Reusable UI components
├── composables/       # Portfolio mode toggle, icons, contact info
├── data/             # Static content (projects, techStack, careerTimeline)
├── layouts/
│   └── default.vue   # Navbar + main + Footer
├── pages/
│   └── index.vue     # Home (Portfolio / Lab view toggle)
└── plugins/          # Theme switcher (Vue green ↔ Lab yellow)

public/               # Static assets (favicon, images, _redirects)
nuxt.config.ts        # Nuxt config (srcDir: app, static preset)
netlify.toml          # Netlify build + publish + SPA redirect
```

Content (projects, tech stack, clients) lives in `app/data/`

---

## Site structure

Single portfolio view (Lab / AI track parked until claims are real):

- Hero, About, Projects, Tech Stack, Contact
- Positioning: Senior Full-Stack Engineer · Vue · Nuxt · TypeScript · permanent or selective B2B

---

## Deployment

The site is deployed to **Netlify** from the `main` branch. Build uses:

- **Build command:** `pnpm run build`
- **Publish directory:** `.output/public`
- **SPA redirect:** `/*` → `/index.html` (via `netlify.toml` and `public/_redirects`)

---

## Metrics

**Portfolio refactor: React → Nuxt 4**

| | |
|---|---|
| **Baseline** | ~40–50 manual engineering hours. |
| **Actual** | ~11 hours total (4h Agentic Refactor + 7h Human Refinement). |
| **Efficiency gain** | ~72–80% reduction in migration latency. |
| **Stack** | Ollama, Qwen2.5-Coder 32B, OpenCode. |

---

## License

Private. © Jonathan Kaonga / JDev Online.
