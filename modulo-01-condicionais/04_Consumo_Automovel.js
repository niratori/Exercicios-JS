const prompt = require('readline-sync');

console.log("--- Monitoramento de Consumo (170 TSI) ---");

let distancia = prompt.questionFloat("Distancia percorrida (km): ");
let litros = prompt.questionFloat("Combustivel consumido (litros): ");

let media = distancia / litros;

if (media < 10) {
    console.log("Alerta: Veiculo consumindo muito combustivel. Necessario agendar revisao mecanica.");
} else {
    console.log("Consumo dentro do padrao.");
}