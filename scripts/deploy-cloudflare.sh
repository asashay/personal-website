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

current_branch="$(git -C "$repository_root" branch --show-current)"
if [ "$current_branch" != "main" ]; then
  echo "Production deployments must run from main; current branch is $current_branch." >&2
  exit 1
fi

working_tree_changes="$(
  git -C "$repository_root" status --porcelain --untracked-files=all -- \
    . \
    ':(exclude).DS_Store' \
    ':(exclude,glob)**/.DS_Store'
)"
if [ -n "$working_tree_changes" ]; then
  echo "The working tree is not clean. Commit or stash changes before deploying." >&2
  exit 1
fi

commit_hash="$(git -C "$repository_root" rev-parse HEAD)"
remote_main="$(git -C "$repository_root" rev-parse --verify origin/main)"
if [ "$commit_hash" != "$remote_main" ]; then
  echo "HEAD does not match origin/main. Push the intended commit before deploying." >&2
  exit 1
fi

commit_message="$(git -C "$repository_root" log -1 --pretty=%s)"

rsync -a \
  --exclude '.codegraph' \
  --exclude '.DS_Store' \
  --exclude '.env' \
  --exclude '.env.*' \
  --exclude '.git/' \
  --exclude 'dist/' \
  --exclude 'node_modules/' \
  --exclude 'public/' \
  "$repository_root/" "$staging_directory/"

cd "$staging_directory"

echo "Installing the locked dependency graph"
corepack yarn install --frozen-lockfile --non-interactive

echo "Building commit $commit_hash in $staging_directory"
CI=1 corepack yarn build

echo "Deploying dist/ to Cloudflare Pages project my-website"
corepack yarn wrangler pages deploy dist \
  --project-name my-website \
  --branch main \
  --commit-hash "$commit_hash" \
  --commit-message "$commit_message" \
  --commit-dirty=false
