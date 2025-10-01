import "dotenv/config";
import { PublicKey } from "@solana/web3.js";
export const CONFIG = {
  rpcUrl: process.env.RPC_URL!,
  jito: {
    bundleUrl: process.env.JITO_BUNDLE_URL!,
    authHeader: process.env.JITO_AUTH_HEADER || "",
    defaultTipLamports: 200_000
  },
  minDepthUsd: 25_000,
  maxDepthUsd: 50_000,
  minNetProfitUsd: 5,
  scanPeriodMs: 10_000,
  sleepBetweenCyclesMs: 30_000,
  usdcMint: new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v")
};
