const prompt = require('readline-sync');

console.log("--- Calibragem de Sensores Termicos ---");

let tempInicial = prompt.questionFloat("Informe a temperatura inicial: ");

console.log("Iniciando sequencia de 5 calibragens...");

// O loop começa em 1 e vai até 5 (i++ faz ele contar de 1 em 1)
for (let i = 1; i <= 5; i++) {
    tempInicial = tempInicial + 2; // Incrementa 2 graus
    console.log("Passo " + i + ": Temperatura calibrada em " + tempInicial + " graus.");
}