import { PublicKey } from "@solana/web3.js";
export type Pair = { mintA: PublicKey; mintB: PublicKey; symbolA: string; symbolB: string };
export const WATCHLIST: Pair[] = [
  { mintA: new PublicKey("So11111111111111111111111111111111111111112"), symbolA:"SOL",
    mintB: new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"), symbolB:"USDC" }
];
