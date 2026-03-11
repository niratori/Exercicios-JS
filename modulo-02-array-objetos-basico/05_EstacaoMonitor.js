// Puxando a biblioteca
const prompt = require('readline-sync');

console.log("--- Estacao de Monitoramento Climatico ---");

// 1. Criando o objeto com um array vazio dentro
let estacao = {
    id: "Sensor-01",
    local: "Laboratorio",
    temperaturas: []
};

// 2. Coletando as três leituras
console.log("Por favor, informe as 3 leituras de temperatura:");
let t1 = prompt.questionFloat("Leitura 1: ");
let t2 = prompt.questionFloat("Leitura 2: ");
let t3 = prompt.questionFloat("Leitura 3: ");

// Adicionando as leituras ao array que tá dentro do objeto
estacao.temperaturas.push(t1, t2, t3);

// 3. Calculando a média acessando as posições do array
let soma = estacao.temperaturas[0] + estacao.temperaturas[1] + estacao.temperaturas[2];
let media = soma / 3;

// 4. Regra do negócio: Criando propriedade 'alerta' dinamicamente
if (media > 35) {
    estacao.alerta = true;
    console.log("PERIGO: Media de temperatura extrema (" + media.toFixed(1) + " graus) detectada no " + estacao.local + "!");
} else {
    estacao.alerta = false;
    console.log("Temperaturas dentro da normalidade.");
}

// 5. Imprimindo o objeto completo
console.log("---- Relatorio Final do Sensor ----");
console.log(estacao);