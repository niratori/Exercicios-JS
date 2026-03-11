const prompt = require('readline-sync');

console.log("--- Calculo de Frete Transportadora ---");

let distancia = prompt.questionFloat("Distancia ate o cliente (km): ");
let ehUrgente = prompt.question("A entrega e urgente ou de risco? (sim/nao):; ");

let valorBase = 20 + (distancia * 1.50);

// Se for longe ou for urgente, tem que cobrar taxa extra
if (distancia > 100 || ehUrgente === "sim") {
    let valorTotal = valorBase + 15;
    console.log("Custo total do frete: R$ " + valorTotal.toFixed(2));
} else {
    console.log("Custo total do frete: R$ " + valorBase.toFixed(2));
}