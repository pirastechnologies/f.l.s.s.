#!/usr/bin/env bash
set -euo pipefail

cd /workspaces/"${localWorkspaceFolderBasename}"/flss

echo "[postCreate] Node: $(node -v) | npm: $(npm -v || true)"
corepack enable || true

if [ -f pnpm-lock.yaml ]; then
  corepack prepare pnpm@latest --activate
  echo "[postCreate] Installing with pnpm"
  pnpm i
else
  echo "[postCreate] Installing with npm"
  npm i
fi

# Copia .env se manca
if [ -f .env.example ] && [ ! -f .env ]; then
  cp .env.example .env
  echo "[postCreate] Created flss/.env from flss/.env.example (puoi anche usare Codespaces Secrets)"
fi

echo "[postCreate] Done."
