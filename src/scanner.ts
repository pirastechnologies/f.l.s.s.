import type { Pair } from "./utils/tokens";
import { afterFee, usd } from "./utils/math";

export type Opportunity = {
  pair: Pair;
  sizeUsd: number;
  dexBuy: "orca" | "raydium";
  dexSell: "orca" | "raydium";
  expProfitUsd: number;
};

export async function scanPairs(_pairs: Pair[]): Promise<Opportunity | undefined> {
  const fakeProfit = 0;
  if (fakeProfit > 0) {
    return {
      pair: _pairs[0],
      sizeUsd: 2_000,
      dexBuy: "orca",
      dexSell: "raydium",
      expProfitUsd: usd(afterFee(fakeProfit, 0))
    };
  }
  return undefined;
}
