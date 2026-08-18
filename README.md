# Alex Oliynyk — personal website

A one-page React portfolio built with Vite, Theme UI, and React Spring. The production site is hosted on Cloudflare Pages at [alexoliynyk.me](https://alexoliynyk.me).

## Requirements

- Node.js 20.19 or newer (`.nvmrc` pins the deployment baseline)
- Corepack, using Yarn 1.22.22 from the `packageManager` declaration

## Local development

```sh
corepack yarn install --frozen-lockfile
corepack yarn develop
```

Vite prints the local URL when the development server starts.

## Validation

```sh
corepack yarn typecheck
corepack yarn build
corepack yarn audit
```

The production output is written to `dist/`. Source maps are disabled for production builds.

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md). Production deployment is intentionally restricted to a clean, pushed `main` branch.

## Project structure

- `index.html` — document metadata and Vite entry point
- `src/app.tsx` — responsive page composition
- `src/components/` — portfolio sections and interactive components
- `src/theme.ts` — Theme UI tokens and color modes
- `static/` — public assets and Cloudflare security headers
- `scripts/deploy-cloudflare.sh` — reproducible Cloudflare Pages deployment
