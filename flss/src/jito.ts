import { VersionedTransaction } from "@solana/web3.js";
import { CONFIG } from "./config";

// Wrapper minimi — sostituisci con le chiamate ai tuoi endpoint.
export async function simulateBundle(_txs: VersionedTransaction[]) {
  return { ok: true, logs: [] as string[] };
}

export async function sendBundle(_txs: VersionedTransaction[], _tipLamports?: number) {
  return { ok: true, signature: "MOCK_SIGNATURE" };
}

export function chooseTipLamports(): number {
  return CONFIG.jito.defaultTipLamports;
}
