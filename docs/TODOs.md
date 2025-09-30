# Roadmap FLSS

## 0. Bootstrap
- [x] Scaffold progetto TS
- [x] Playground single-file

## 1. Integrazione DEX
- [ ] Orca Whirlpool SDK — `src/dex/orca.ts`
  - [ ] load pool by token mints
  - [ ] calcolo tick/current price & slippage
  - [ ] build `swap` ix (A->B / B->A)
- [ ] Raydium CLMM — `src/dex/raydium.ts`
  - [ ] discovery pool id
  - [ ] quote con impact
  - [ ] build `swap` ix

## 2. Flash loan Marginfi
- [ ] configurare asset (es. USDC) & scaling (decimali)
- [ ] comporre `flashLoan({ amount, instructions })`
- [ ] repay atomico in tx

## 3. Jito Bundles
- [ ] `simulateBundle` provider
- [ ] `sendBundle` + tip dinamico
- [ ] retry/backoff e result parsing

## 4. Scanner/Profondità
- [ ] lettura riserve/ticks on-chain
- [ ] filtro depth 25–50k
- [ ] stima profitti netti (fee DEX + tip + priority fees)

## 5. Risk/Policy
- [ ] whitelist token
- [ ] max slippage per coppia
- [ ] cool-down e rate-limit

## 6. Telemetry
- [ ] log strutturati
- [ ] export metriche (p50/p95 latenza, success rate, PnL)

## 7. Release
- [ ] README con istruzioni prod
- [ ] esempio .env sicuro
