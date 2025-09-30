#!/usr/bin/env bash
set -euo pipefail
: "${GH_REPO:?Set GH_REPO=owner/repo}"
gh label create enhancement -c "#a2eeef" --repo "$GH_REPO" || true
gh label create bug         -c "#d73a4a" --repo "$GH_REPO" || true
gh label create task        -c "#0e8a16" --repo "$GH_REPO" || true
gh label create DEX         -c "#5319e7" --repo "$GH_REPO" || true
gh label create orca        -c "#1d76db" --repo "$GH_REPO" || true
gh label create raydium     -c "#fbca04" --repo "$GH_REPO" || true
gh label create flashloan   -c "#0052cc" --repo "$GH_REPO" || true
gh label create marginfi    -c "#0b7285" --repo "$GH_REPO" || true
gh label create jito        -c "#5319e7" --repo "$GH_REPO" || true
gh label create bundles     -c "#b60205" --repo "$GH_REPO" || true
gh label create scanner     -c "#c2e0c6" --repo "$GH_REPO" || true
gh label create liquidity   -c "#bfd4f2" --repo "$GH_REPO" || true
gh label create telemetry   -c "#c5def5" --repo "$GH_REPO" || true
