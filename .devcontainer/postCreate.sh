#!/usr/bin/env bash
set -euo pipefail

echo "[postCreate] Node: $(node -v) | NPM: $(npm -v)"
corepack enable || true

# If pnpm-lock.yaml exists, use pnpm; otherwise npm
if [ -f pnpm-lock.yaml ]; then
  corepack prepare pnpm@latest --activate
  echo "[postCreate] Installing with pnpm"
  pnpm i
else
  echo "[postCreate] Installing with npm"
  npm i
fi

# Copy env example if .env is missing
if [ -f .env.example ] && [ ! -f .env ]; then
  cp .env.example .env
  echo "[postCreate] Created .env from .env.example (edit secrets or use Codespaces Secrets)"
fi

# Build (optional)
if [ -f tsconfig.json ]; then
  echo "[postCreate] Building TypeScript"
  npx tsc -v || true
fi

echo "[postCreate] Done."
