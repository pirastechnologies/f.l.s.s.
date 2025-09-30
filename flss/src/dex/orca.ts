import { TransactionInstruction, PublicKey } from "@solana/web3.js";
import type { Pair } from "../utils/tokens";

// TODO: integra Orca Whirlpool SDK/CLMM. Qui mettiamo un placeholder.
export async function buildSwapIxOrca(
  _pair: Pair,
  _amountIn: number,
  _aToB: boolean
): Promise<TransactionInstruction> {
  return new TransactionInstruction({
    keys: [],
    programId: new PublicKey("11111111111111111111111111111111"),
    data: Buffer.from("ORCA_SWAP_PLACEHOLDER")
  });
}
