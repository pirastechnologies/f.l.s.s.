# Codespaces / Dev Container

Questa repo include una configurazione **Dev Container** per partire subito su **GitHub Codespaces** o localmente con l'estensione "Dev Containers".

## Cosa include
- Node.js 22 (via Dev Container Feature)
- Git + GitHub CLI
- Estensioni VS Code utili (ESLint, Prettier, Solana)
- Script `postCreate.sh` che:
  - abilita Corepack
  - installa dipendenze (pnpm se c'è `pnpm-lock.yaml`, altrimenti npm)
  - crea `.env` da `.env.example` se mancante
  - (opzionale) compila TypeScript

## Avvio in Codespaces
1. Apri la repo su GitHub → **Code** → tab **Codespaces** → **Create codespace on main**
2. Attendi la build; lo script `postCreate.sh` installerà le dipendenze.
3. Configura le **Secrets** per Codespaces (Settings → Secrets and variables → Codespaces):

   - `RPC_URL` — endpoint RPC Solana (es. Helius/QuickNode)
   - `JITO_BUNDLE_URL` — URL del Block Engine
   - `JITO_AUTH_HEADER` — es. `Bearer <TOKEN>`
   - `SECRET_KEY_BASE58` — chiave di test (non usare chiavi di produzione)

   Le secrets saranno disponibili come variabili d'ambiente dentro il container. In alternativa, modifica `.env`.

## Avvio locale con Dev Containers
- Apri VS Code → `Dev Containers: Open Folder in Container...`

## Script utili
- Task: **Dev (watch)** → `npm run dev`
- Task: **Build** → `npm run build`

## Note
- Se preferisci **pnpm**, aggiungi `pnpm-lock.yaml` alla repo: lo script lo rileva e usa pnpm automaticamente.
- L'estensione `solana-labs.solana-vscode` offre snippet/hover ma non sostituisce l'SDK.
