const prompt = require('readline-sync');

console.log("--- Sistema de Comisssao ---");

let vendasMes = prompt.questionFloat("Valor total de vendas no mes: ");
let valorComissao;

if (vendasMes >= 20000) {
    valorComissao = vendasMes * 0.05; // = 5%
} else {
    valorComissao = vendasMes * 0.02; // = 2%
}

console.log("O valor da sua comissao e: R$ " + valorComissao.toFixed(2));