import { Connection, Keypair, VersionedTransaction } from "@solana/web3.js";
import bs58 from "bs58";
import { CONFIG } from "./config";
import { WATCHLIST } from "./utils/tokens";
import { scanPairs } from "./scanner";
import { executeArb } from "./executor";
async function main() {
  const connection = new Connection(CONFIG.rpcUrl, "confirmed");
  const secret = process.env.SECRET_KEY_BASE58 ? bs58.decode(process.env.SECRET_KEY_BASE58) : undefined;
  if (!secret) throw new Error("SECRET_KEY_BASE58 non impostata");
  const kp = Keypair.fromSecretKey(secret);
  while (true) {
    console.log("Scanning opportunities…");
    const opp = await scanPairs(WATCHLIST);
    if (opp && opp.expProfitUsd >= CONFIG.minNetProfitUsd) {
      console.log("Trovata opp:", opp);
      const res = await executeArb(connection, opp, {
        publicKey: kp.publicKey,
        sign: async (tx: VersionedTransaction) => { tx.sign([kp]); }
      });
      console.log("Bundle inviato:", res);
    } else {
      console.log("Nessuna opp valida.");
    }
    await new Promise(r => setTimeout(r, CONFIG.sleepBetweenCyclesMs));
  }
}
main().catch(err => { console.error(err); process.exit(1); });
