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

// calculo o imc 
function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    return imc.toFixed(2);
}

console.log(calcularIMC(70, 1.75));

// função para verificar se um número é par ou ímpar
function parOuImpar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}

console.log(parOuImpar(10));
console.log(parOuImpar(7));
