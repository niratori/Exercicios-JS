const prompt = require('readline-sync');

console.log("--- Orcamento de Sistemas Web ---");

let horasEstimadas = prompt.questionInt("Quantas horas o projeto vai levar? ");
let clienteONG = prompt.question("O cliente e uma ONG? (sim/nao): ");

let valorBase = horasEstimadas * 45;

// Regra: Mais de R$ 5000 E ser ONG para ganhar os 10% de desconto
if (valorBase > 5000 && clienteONG === "sim") {
    let desconto = valorBase * 0.10;
    let valorFinal = valorBase - desconto;
    console.log("Valor com desconto comercial: R$ " + valorFinal.toFixed(2));
} else {
    console.log("Valor total do projeto: R$ " + valorBase.toFixed(2));
}