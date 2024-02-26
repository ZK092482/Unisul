const pi: number = 3.14159;
let raio: number | null = null;
let A: number | null = null;

// DEFININDO O VALOR DA VAR
raio = 100.64;

// EFETUANDO A CONTA
A = ((raio ** 2) * pi);

// IMPRIMINDO NA TELA O RESULTADO
console.log(`A=${A.toFixed(4)}`);