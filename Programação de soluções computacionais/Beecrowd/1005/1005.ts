//5.0 // 7.1
let A: number | null = null;
let B: number | null = null;
let media: number | null = null;

A = 5.0;
B = 7.1;

media = (((A * 3.5) + (B * 7.5)) / 11);

console.log(`MEDIA = ${media.toFixed(5)}`);