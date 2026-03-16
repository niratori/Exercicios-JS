const prompt = require('readline-sync');

console.log("--- Sistema de Carga Logistica (Limite 1000kg) ---");

let pesoTotal = 0;
let totalCaixas = 0;
const LIMITE_MAXIMO = 1000;

while (true) {
    let pesoCaixa = prompt.questionFloat("Informe o peso da caixa (kg): ");

    // Verifica se a nova caixa estoura o limite antes de adicionar
    if (pesoTotal + pesoCaixa > LIMITE_MAXIMO) {
        console.log("ALERTA: Carga maxima atingida! Esta caixa nao pode ser carregada.");
        break; // Interrompe o loop imediatamente
    }

    pesoTotal += pesoCaixa;
    totalCaixas++;
    console.log("Carga atual: " + pesoTotal.toFixed(2) + "kg. Caixas no caminhao: " + totalCaixas);
}

console.log("------------------------------------------");
console.log("Carregamento finalizado.");
console.log("Total carregado: " + pesoTotal.toFixed(2) + "kg.");
console.log("Quantidade de caixas alocadas: " + totalCaixas);