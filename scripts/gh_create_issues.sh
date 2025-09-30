#!/usr/bin/env bash
        set -euo pipefail
        # Richiede GitHub CLI: https://cli.github.com/
        # Usage: GH_REPO=pirastechnologies/f.l.s.s. ./scripts/gh_create_issues.sh

        : "${GH_REPO:?Set GH_REPO=owner/repo}"

        create_issue() {
          local title="$1"; local body="$2"; local labels="$3"
          gh issue create             --repo "$GH_REPO"             --title "$title"             --body "$body"             --label "$labels"
        }

        create_issue "DEX: integra Orca Whirlpool (swap ix)" "*Caricare pool per mints, calcolo price/slippage, build ix.*

- [ ] load pool by mints
- [ ] tick/price
- [ ] swap ix (A->B / B->A)

File: `src/dex/orca.ts`" "enhancement,DEX,orca"

        create_issue "DEX: integra Raydium CLMM (swap ix)" "*Discovery pool id, quote/impact, build ix.*

File: `src/dex/raydium.ts`" "enhancement,DEX,raydium"

        create_issue "Marginfi: wiring flashLoan + repay" "*Configurare mint/amount corrette, concatenare swap e repay.*

File: `src/executor.ts`" "enhancement,flashloan,marginfi"

        create_issue "Jito: simulateBundle + sendBundle" "*Collegare provider (Block Engine/Helius/QuickNode), tip dinamico, retry.*

File: `src/jito.ts`" "enhancement,jito,bundles"

        create_issue "Scanner: profondità 25–50k e profit netto" "*Leggere riserve/ticks on-chain, stimare impact & fee, calcolo expProfitUsd.*

File: `src/scanner.ts`" "task,scanner,liquidity"

        create_issue "Risk/Policy: whitelist token, max slippage" "*Impostare controlli di rischio e soglie per coppia.*

File: `src/config.ts`" "task,risk"

        create_issue "Telemetry: log/metriche" "*Log strutturati e metriche base (success rate, PnL).*" "task,telemetry"

        echo "Issues create. ✅"
