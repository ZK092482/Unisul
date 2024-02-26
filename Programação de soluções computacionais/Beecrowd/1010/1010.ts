// 12 1 5.30 - 16 2 5.10
let codP1: number | null = null;
let codP2: number | null = null;
let numP1: number | null = null;
let numP2: number | null = null;
let vuP1: number | null = null;
let vuP2: number | null = null;
let total: number | null = null;

codP1 = 12;
codP2 = 16;
numP1 = 1;
numP2 = 2;
vuP1 = 5.30;
vuP2 = 5.10;

total = ((numP1 * vuP1) + (numP2 * vuP2));

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);