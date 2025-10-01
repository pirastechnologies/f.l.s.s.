export function afterFee(amount: number, feeBps: number){ return amount*(1 - feeBps/10000); }
export function usd(x: number){ return Number(x.toFixed(4)); }
