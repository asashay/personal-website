# Cloudflare Pages deployment

This repository is deployed as a static Gatsby site using Cloudflare Pages Direct Upload.

## Hosting configuration

- Cloudflare Pages project: `my-website`
- Pages domain: `my-website-9ca.pages.dev`
- Production domain: `alexoliynyk.me`
- Production branch metadata: `main`
- Local production build: Gatsby runs from a temporary directory on the Mac filesystem
- Build output: `public/`
- Build runtime: Node.js `20.20.2`
- Wrangler version: `4.123.0`

The Pages project has no Git provider. Pushing to GitHub does not deploy the site. A production deployment must be uploaded explicitly with Wrangler.

## Prerequisites

1. Have npm/npx available. The production script executes Gatsby with the pinned Node.js `20.20.2` runtime so it does not depend on the workstation's active Node version.
2. Ensure the intended source changes are committed to `main` and pushed to GitHub.
3. Confirm Wrangler is authenticated to the Cloudflare account that owns `my-website`:

   ```sh
   npx --yes wrangler@4.123.0 whoami
   ```

## Production deployment

From the repository root, run:

```sh
npm run deploy:cloudflare
```

The script performs these steps:

1. Creates a fresh staging directory under the Mac's local temporary filesystem.
2. Copies the repository source there, excluding generated files, Git metadata, and `node_modules`.
3. Reuses the repository's installed dependencies through a symlink.
4. Runs `gatsby build` with Node.js `20.20.2` in CI mode inside the local staging directory.
5. Uploads the generated `public/` to the `my-website` Pages project as a production deployment associated with the current Git commit and `main`.

The local staging step is required because Gatsby 5 loses temporary worker query files when it builds directly on VirtualBuddy's shared filesystem. See `scripts/deploy-cloudflare.sh` for the complete executable flow.

## Verification

List recent deployments and confirm the newest entry is marked `Production`:

```sh
npm run deploy:list
```

Then verify both public URLs:

```sh
curl -fsSI https://my-website-9ca.pages.dev
curl -fsSI https://alexoliynyk.me
```

Cloudflare can take a short time to update the custom domain after the deployment URL is ready. Test the generated deployment URL first, followed by the Pages domain and custom domain.

## Rollback

Open Cloudflare Dashboard → Workers & Pages → `my-website` → Deployments, select the last known-good production deployment, and choose **Rollback to this deployment**. Verify both public URLs again after rollback.

## Important distinction

GitHub stores the source history. Cloudflare Pages serves the generated static files. For this Direct Upload project, `git push` and `npm run deploy:cloudflare` are separate required operations.
