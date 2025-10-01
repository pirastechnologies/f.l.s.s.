import { Connection, PublicKey, TransactionMessage, VersionedTransaction } from "@solana/web3.js";
import { MarginfiClient, flashLoan, type FlashLoanArgs } from "@mrgnlabs/marginfi-client";
import type { Opportunity } from "./scanner";
import { buildSwapIxOrca } from "./dex/orca";
import { buildSwapIxRaydium } from "./dex/raydium";
import { chooseTipLamports, sendBundle, simulateBundle } from "./jito";
export async function executeArb(connection: Connection, opp: Opportunity, payer: { publicKey: PublicKey; sign: (tx: VersionedTransaction)=>Promise<void>; }) {
  const client = await MarginfiClient.fetch(connection);
  const buildIx = async (which:"orca"|"raydium", aToB:boolean) =>
    which==="orca" ? buildSwapIxOrca(opp.pair, opp.sizeUsd, aToB) : buildSwapIxRaydium(opp.pair, opp.sizeUsd, aToB);
  const ixBuy  = await buildIx(opp.dexBuy,  true);
  const ixSell = await buildIx(opp.dexSell, false);
  const flArgs: FlashLoanArgs = { amount: BigInt(Math.floor(opp.sizeUsd)), instructions: [ixBuy, ixSell] };
  const flIxs = await flashLoan(client, flArgs);
  const { blockhash } = await connection.getLatestBlockhash();
  const msg = new TransactionMessage({ payerKey: payer.publicKey, recentBlockhash: blockhash, instructions: flIxs }).compileToV0Message();
  const tx = new VersionedTransaction(msg);
  await payer.sign(tx);
  const sim = await simulateBundle([tx]);
  if (!sim.ok) throw new Error("Simulazione bundle fallita");
  return await sendBundle([tx], chooseTipLamports());
}
