// Mensagem inicial
console.log("Hello, JavaScript!");

// Variáveis
let a = 10;
let b = 3;

// Operações matemáticas
console.log("Soma:", a + b);
console.log("Subtração:", a - b);
console.log("Multiplicação:", a * b);
console.log("Divisão:", a / b);
console.log("Resto da divisão (módulo):", a % b);
console.log("Potência:", a ** b);

// Incremento
let contador = 5;
contador++;
console.log("Valor do contador após incremento:", contador);

// Resto da divisão
let x = 10;
let y = 3;
let resto = x % y;
console.log("Resto da divisão de x por y:", resto);

// Média de três números
let n1 = 8;
let n2 = 6;
let n3 = 10;
let media = (n1 + n2 + n3) / 3;
console.log("Média:", media);

// Comparações
let x1 = 10;
let y2 = 10;

console.log("x1 é igual a y2 (==):", x1 == y2);
console.log("x1 é estritamente igual a y2 (===):", x1 === y2);
console.log("x1 é diferente de y2 (!=):", x1 != y2);
console.log("x1 é estritamente diferente de y2 (!==):", x1 !== y2);

// exercicios1
let idade = 20;

if (idade >= 18) {
    console.log("É maior de idade");
} else {
    console.log("É menor de idade");
}
 
// exercicio 2
let c = 10;
let v = 20;

if (c > v) {
    console.log("O maior número é: " + c);
} else if (v > c) {
    console.log("O maior número é: " + v);
} else {
    console.log("Os dois números são iguais");
}
 
//operadores lógicos
let idadePessoa = 20;
let possuiCarteiraDeMotorista = true;
console.log("Pode dirigir:", idadePessoa >= 18 && possuiCarteiraDeMotorista);

let chovendo = false;
let temGuardaChuva = true;
console.log("Pode sair sem se molhar:", !chovendo || temGuardaChuva);

let ligado = true;
console.log(!ligado);
 
// frequência escolar e nota
let nota = 8;
let frequencia = 80;

if (nota >= 7 && frequencia >= 75) {
    console.log("Aluno aprovado");
} else {
    console.log("Aluno reprovado");
}
 // verificar aceesso com login e senha
let login = "admin";
let senha = "1234";
let token = "abc123";

if ((login === "admin" && senha === "1234") || token === "abc123") {
    console.log("Acesso permitido");
} else {
    console.log("Acesso negado");
}