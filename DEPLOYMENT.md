# Cloudflare Pages deployment

This repository is deployed as a static Vite site using Cloudflare Pages Direct Upload.

## Hosting configuration

- Cloudflare Pages project: `my-website`
- Pages domain: `my-website-9ca.pages.dev`
- Production domain: `alexoliynyk.me`
- Production branch: `main`
- Build output: `dist/`
- Minimum Node.js version: `20.19.0`
- Wrangler version: locked in `yarn.lock`

The Pages project has no Git provider. Pushing to GitHub does not deploy the site.

## Production deployment

Before deploying, ensure the intended commit is checked out on `main`, committed, and pushed. Then run:

```sh
corepack yarn deploy:cloudflare
```

The deployment script refuses to continue unless:

1. The current branch is `main`.
2. The working tree is clean, including untracked files.
3. `HEAD` matches the locally known `origin/main` reference.

It then creates an isolated temporary copy, installs exactly `yarn.lock` with `--frozen-lockfile`, builds the Vite application, and uploads `dist/` using the locked Wrangler dependency.

Local `.env` files, generated output, Git metadata, and existing dependencies are excluded from the staging copy.

## Verification

List recent deployments and confirm the newest entry is marked `Production`:

```sh
corepack yarn deploy:list
```

Then verify both public URLs:

```sh
curl -fsSI https://my-website-9ca.pages.dev
curl -fsSI https://alexoliynyk.me
```

Also confirm that the production response includes the security headers defined in `static/_headers` and that no `.map` files exist in `dist/`.

## Rollback

Open Cloudflare Dashboard → Workers & Pages → `my-website` → Deployments, select the last known-good production deployment, and choose **Rollback to this deployment**. Verify both public URLs after rollback.
