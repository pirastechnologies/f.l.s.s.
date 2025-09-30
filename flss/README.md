# FLSS — Flash-Loan Solana Scanner

Arbitraggio atomico su Solana con **flash loan marginfi** + **Jito bundles**.

## Setup rapido
```bash
cp .env.example .env   # compila RPC/Jito/chiave
npm i
npm run dev
```

## Struttura
- `src/index.ts` orchestrazione: scan → simulate → bundle
- `src/scanner.ts` discovery coppie, stima profitto (placeholder)
- `src/executor.ts` costruisce flashLoan + swap + repay
- `src/dex/*` adapter DEX (placeholder per Orca/Raydium)
- `src/jito.ts` wrapper `simulateBundle` / `sendBundle` (mock)
- `src/utils/*` util varie
- `src/config.ts` configurazione strategia

## Stato
Gli adapter DEX e i wrapper Jito sono **placeholder**: integra gli SDK e gli endpoint reali prima di usare su mainnet.

## Playground
File monolitico per **Solana Playground**: `playground-single.ts`
Copialo su playground, imposta RPC/chiave e simula.
