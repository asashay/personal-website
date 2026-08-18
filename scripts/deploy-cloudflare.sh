#!/usr/bin/env bash

set -euo pipefail

repository_root="$(cd "$(dirname "$0")/.." && pwd)"
temporary_root="${TMPDIR:-/tmp}"
staging_directory="$(mktemp -d "${temporary_root%/}/personal-website-deploy.XXXXXX")"

cleanup() {
  case "$staging_directory" in
    "${temporary_root%/}"/personal-website-deploy.*)
      rm -rf -- "$staging_directory"
      ;;
  esac
}

trap cleanup EXIT

if [ ! -d "$repository_root/node_modules" ]; then
  echo "node_modules is missing. Install dependencies before deploying." >&2
  exit 1
fi

commit_hash="$(git -C "$repository_root" rev-parse HEAD)"
commit_message="$(git -C "$repository_root" log -1 --pretty=%s)"

rsync -a \
  --exclude '.cache/' \
  --exclude '.codegraph' \
  --exclude '.DS_Store' \
  --exclude '.git/' \
  --exclude 'node_modules/' \
  --exclude 'public/' \
  "$repository_root/" "$staging_directory/"

ln -s "$repository_root/node_modules" "$staging_directory/node_modules"

cd "$staging_directory"

echo "Building commit $commit_hash in $staging_directory"
CI=1 npx --yes node@20.20.2 node_modules/gatsby/cli.js build

echo "Deploying public/ to Cloudflare Pages project my-website"
npx --yes wrangler@4.123.0 pages deploy public \
  --project-name my-website \
  --branch main \
  --commit-hash "$commit_hash" \
  --commit-message "$commit_message" \
  --commit-dirty=true
