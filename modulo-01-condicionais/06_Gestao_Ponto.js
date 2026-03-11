const prompt = require('readline-sync');

console.log("--- Calculo de Horas Extras ---");

let ganhoHora = prompt.questionFloat("Quanto voce ganha por hora normal? ");
let extrasTrabalhadas = prompt.questionInt("Quantas horas extras fez no mes? ");

// A hora extra vale 50% a mais ((valor * 1.5)
let valorHoraExtra = ganhoHora * 1.5;
let totalReceber = valorHoraExtra * extrasTrabalhadas;

console.log("O valor a receber de horas extras este mes e: R$ " + totalReceber.toFixed(2));