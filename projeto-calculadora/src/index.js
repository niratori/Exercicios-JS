import promptSync from 'readline-sync';
const prompt = promptSync;

import subtrair from "./functions/operacoes/subtrair.js";
import somar from './functions/operacoes/somar.js';
import dividir from './functions/operacoes/dividir.js';
import multiplicar from './functions/operacoes/multiplicar.js';
import porcentagem from './functions/operacoes/porcentagem.js';

console.log("=== Calculadora Lions ===");
let n1 = prompt.questionFloat("Primeiro numero: ");
let n2 = prompt.questionFloat("Segundo numero: ");

console.log("\nEscolha a operacao (1-Sub, 2-Soma, 3-Mult, 4-Div, 5-Porcen): ");
let opcao = prompt.questionInt("Opcao: ");
let resultado;

switch (opcao) {
    case 1:
        resultado = subtrair(n1, n2);
        break;
    case 2:
        resultado = somar(n1, n2);
        break;
    case 3:
        resultado = multiplicar(n1, n2);
        break;
    case 4:
        resultado = dividir(n1, n2);
        break;
    case 5:
        resultado = porcentagem(n1, n2);
        break;
    default:
        resultado = 'Opção inválida!';
}

console.log(`\nResultado: ${resultado}`);
