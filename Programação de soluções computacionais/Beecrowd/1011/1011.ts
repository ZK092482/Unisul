const pi: number = 3.14159;
let raio: number | null = null;
let volume: number | null = null;

// Atribuindo o valor do raio como 3
raio = 3;

// Calculando o volume
volume = ((4 * pi) * (Math.pow(raio, 3))) / 3;

// Imprimindo o resultado
console.log(`VOLUME = ${volume.toFixed(3)}`);