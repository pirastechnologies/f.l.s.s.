import { TransactionInstruction, PublicKey } from "@solana/web3.js";
import type { Pair } from "../utils/tokens";

// TODO: integra Raydium CLMM/AMM SDK. Placeholder.
export async function buildSwapIxRaydium(
  _pair: Pair,
  _amountIn: number,
  _aToB: boolean
): Promise<TransactionInstruction> {
  return new TransactionInstruction({
    keys: [],
    programId: new PublicKey("11111111111111111111111111111111"),
    data: Buffer.from("RAYDIUM_SWAP_PLACEHOLDER")
  });
}
