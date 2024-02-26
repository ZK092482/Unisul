// JOAO 500.00 1230.30
let nome: string | null = null;
let salary: number | null = null;
let tv: number | null = null;
let finalSalary: number | null = null;

nome = "JOAO";
salary = 500.00;
tv = 1230.30;

finalSalary = ((tv * 0.15) + salary);

console.log(`TOTAL = R$ ${finalSalary.toFixed(2)}`);