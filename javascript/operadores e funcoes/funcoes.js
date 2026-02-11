function saudacao() {
    console.log("Olá!,javascript!");
}
saudacao();

function nome(nome) {
    console.log("Olá, " + nome + "!");
}   
nome("sabino");

function soma(a, b) {
    console.log(a + b);
}   

console.log(soma(5, 3));

//função para calcular o IMC
function calcularIMC(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}

// Exemplo de uso
let peso = Number(prompt("Digite seu peso (kg):"));
let altura = Number(prompt("Digite sua altura (m):"));
alert("Seu IMC é: " + calcularIMC(peso, altura));


// função para verificar se um número é par ou ímpar
function parOuImpar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}

// Exemplo de uso
let numero = Number(prompt("Digite um número:"));
alert("O número é: " + parOuImpar(numero));

console.log("------funções nativas------");
let agora = new Date();
console.log(agora);
