const prompt = require('readline-sync');

console.log("--- Totem de Autoatendimento ---");

let totalCompra = 0;
let continuar;

do {
    let valorItem = prompt.questionFloat("Valor do item do cardapio: R$ ");
    totalCompra = totalCompra + valorItem;

    continuar = prompt.question("Deseja adicionar mais algum item? (sim/nao): ");

} while (continuar === "sim"); // Se responder 'sim', ele volta pro 'do'

console.log("----------------------------");
console.log("Valor total a ser pago: R$ " + totalCompra.toFixed(2));