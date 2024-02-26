//5.0 - 6.0 - 7.0
let A: number | null = null;
let B: number | null = null;
let C: number | null = null;
let somaA: number | null = null;
let somaB: number | null = null;
let somaC: number | null = null;
let mediaSOMA: number | null = null;
let peso: number | null = null;
let media: number | null = null;

A = 5.0;
B = 6.0;
C = 7.0;

somaA = (A * 2);
somaB = (B * 3);
somaC = (C * 5);
mediaSOMA = (somaA + somaB + somaC);
peso = (2 + 3 + 5);
media = (mediaSOMA / peso);

console.log(`MEDIA = ${media}`);