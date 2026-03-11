const prompt = require('readline-sync');

console.log("--- Analise de Credito Bancario ---");

let salario = prompt.questionFloat("Informe o salario liquido: ");
let parcela = prompt.questionFloat("Valor da parcela desejada: ");
let temRestricao = prompt.question("Possui restricao no nome? (sim/nao): ");

let limiteSalarial = salario * 0.30;

// Só aprova se couber no orçamento e não tiver com nome sujo
if (parcela <= limiteSalarial && temRestricao === "nao") {
    console.log("Credito Aprovado!");
} else {
    console.log("Credito Negado: Parcela acima do limite ou restricao no CPF");
}