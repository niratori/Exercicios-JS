const prompt = require('readline-sync');

console.log("--- Analise de Margem de Lucro ---");

let custo = prompt.questionFloat("Digite o custo de producao: ");
let venda = prompt.questionFloat("Digite o valor de venda: ");

let lucroBruto = venda - custo;

if (lucroBruto < 500) {
    console.log("Atencao: Margem de lucro perigosamente baixa");
} else {
    console.log("Margem de lucro saudavel: R$ " + lucroBruto.toFixed(2));
}