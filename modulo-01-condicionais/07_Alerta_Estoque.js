const prompt = require('readline-sync');

console.log("--- Controle de Inventario E=commerce ---");

let estoqueAtual = prompt.questionInt("Quantidade atual em estoque': ");
let estoqueMinimo = prompt.questionInt("Quantidade minima de seguranca: ");

if (estoqueAtual < estoqueMinimo) {
    let diferenca = estoqueMinimo - estoqueAtual;
    console.log("Alerta: Estoque baixo! E necessario solicitar a compra de " + diferenca + " unidades");
} else {
    console.log("Estoque regularizado.");
}