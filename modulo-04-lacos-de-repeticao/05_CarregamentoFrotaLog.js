const prompt = require('readline-sync');

console.log("--- Sistema de Carga Logistica (Limite 1000kg) ---");

let pesoTotal = 0;
let totalCaixas = 0;
const LIMITE_MAXIMO = 1000;
let continuar = true; // controle do loop

while (continuar) {
    let pesoCaixa = prompt.questionFloat("Informe o peso da caixa (kg): ");

    if (pesoTotal + pesoCaixa > LIMITE_MAXIMO) {
        console.log("ALERTA: Carga maxima atingida! Esta caixa nao pode ser carregada.");
        continuar = false; // se passar do peso maximo, encerra aqui
    } else {
        pesoTotal += pesoCaixa;
        totalCaixas++;
        console.log("Carga atual: " + pesoTotal.toFixed(2) + "kg. Caixas no caminhao: " + totalCaixas);

        // aqui pergunta se o usuario quer adicionar mais
        let resposta = prompt.question("Deseja adicionar outra caixa? (s/n): ").toLowerCase();
        
        if (resposta !== 's') {
            continuar = false;
        }
    }
}

console.log("\n------------------------------------------");
console.log("Carregamento finalizado.");
console.log("Total carregado: " + pesoTotal.toFixed(2) + "kg.");
console.log("Quantidade de caixas alocadas: " + totalCaixas);