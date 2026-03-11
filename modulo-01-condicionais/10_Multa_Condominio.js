const prompt = require('readline-sync');

console.log("--- Calculo de Boleto Atrasado ---");

let valorOriginal = prompt.questionFloat("Valor original do condominio: ");
let diasAtraso = prompt.questionInt("'Dias de atraso: ");
let fdsFeriado = prompt.question("O vencimento caiu em feriado ou final de semana? (sim/nao): ");

// Só multar se tiver com dias de atraso e não for exceção de feriado
if (diasAtraso > 0 && fdsFeriado === "nao") {
    let multa = valorOriginal * 0.02; // 2% multa fixa
    let juros = diasAtraso * 1.00;    // R$ 1 por dia
    let totalAtualizado = valorOriginal + multa + juros;
    console.log("Valor atualizado do boleto: R$ " + totalAtualizado.toFixed(2));
} else {
    console.log("Nao ha atraso real. Valor permanece: R$ " + valorOriginal.toFixed(2));
}