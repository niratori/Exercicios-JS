// Puxando a biblioteca
const prompt = require('readline-sync');

console.log("--- Atualizacao de Estoque de Camisetas ---");

// Array com quantidades dos tamanhos P, M e G
let estoqueTamanhos = [10, 15, 8];

console.log("Estoque atual (P, M, G): " + estoqueTamanhos);

let vendidasP = prompt.questionInt("Quantas camisetas tamanho P foram vendidas hoje? ");

// Diminuindo da primeira posição do array (índice 0)
estoqueTamanhos[0] = estoqueTamanhos[0] - vendidasP;

// Verificando a nova quantidade na posição 0
if (estoqueTamanhos[0] < 5) {
    console.log("Alerta: Estoque de camisetas tamanho P esta critico! Restam apenas: " + estoqueTamanhos[0]);
} else {
    console.log("Estoque atualizado. Quantidade restante do tamanho P: " + estoqueTamanhos[0]);
}