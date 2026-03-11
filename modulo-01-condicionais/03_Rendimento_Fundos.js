const prompt = require('readline-sync');

console.log("--- Simulador de Reinvestimento de Fundos Im. ---");

let cotas = prompt.questionInt("Quantas cotas voce possui? ");
let rendimentoCota = prompt.questionFloat("Valor do rendimento por cota: ");

let rendimentoTotal = cotas * rendimentoCota;

if (rendimentoTotal >= 100) {
    console.log("Voce ja tem saldo suficiente para comprar uma nova cota e reinvestir!");
} else {
    console.log("Rendimento recebido: R$ " + rendimentoTotal.toFixed(2) + ". Acumule mais para reinvestir.");
}