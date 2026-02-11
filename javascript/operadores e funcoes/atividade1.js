// Mostrar hora atual
function mostrarHoraAtual() {
    let agora = new Date();
    let horas = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();

    console.log(`${horas}:${minutos}:${segundos}`);
}

mostrarHoraAtual();

// Calcular soma e média
function calcularNumeros(num1, num2) {
    let soma = num1 + num2;
    let media = soma / 2;

    console.log("Soma:", soma);
    console.log("Média:", media);
}

// Entrada do usuário
let numero1 = Number(prompt("Digite o primeiro número:"));
let numero2 = Number(prompt("Digite o segundo número:"));

calcularNumeros(numero1, numero2);

// Analisar nome
function analisarNome(nome) {
    console.log("Quantidade de letras:", nome.length);
    console.log("Nome em maiúsculo:", nome.toUpperCase());
}

let nomeUsuario = prompt("Digite seu nome:");
analisarNome(nomeUsuario);

// Verificar palavra HTML
function verificarHTML(frase) {
    if (frase.toUpperCase().includes("HTML")) {
        console.log("A frase contém a palavra HTML");
    } else {
        console.log("A frase NÃO contém a palavra HTML");
    }
}

let fraseUsuario = prompt("Digite uma frase:");
verificarHTML(fraseUsuario);
