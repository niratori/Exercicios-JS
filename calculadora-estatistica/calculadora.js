import prompt from "readline-sync";
import numeros from "./numeros.js";
import adicionarNumero from "./adicionarNumero.js";
import removerNumero from "./removerNumero.js";
import calcularMedia from "./media.js";
import calcularMediana from "./mediana.js";

let operacao = 1;

while (operacao != 0) {
    console.log("\nQual operacao voce deseja realizar?\n[1] - Adicionar Numero\n[2] - Remover Numero\n[3] - Listar Numeros\n[4] - Calcular Media\n[5] - Calcular Mediana\n[0] - Sair da Calculadora");
    operacao = prompt.questionInt("R: ");

    switch (operacao) {
        case 1:
            let num = prompt.questionFloat("Qual numero voce deseja adicionar a lista? ");
            adicionarNumero(num);
            break;
        case 2:
            removerNumero();
            break;
        case 3:
            console.log("Lista atual:", numeros);
            break;
        case 4:
            calcularMedia();
            break;
        case 5:
            // Ordena antes de calcular a mediana para o cálculo ser correto
            numeros.sort((a, b) => a - b);
            calcularMediana();
            break;
        case 0:
            console.log("Programa fechando...");
            break;
        default:
            console.log("Opção inválida!");
            break;
    }
}