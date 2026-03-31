const prompt = require('readline-sync');

function registrarVenda(saldo, venda) {
    return saldo + venda;
}

function registrarDespesa(saldo, despesa) {
    return saldo - despesa;
}


let operacao = "";
let caixa = {
    operador: "Caixa 01",
    saldo: 100,
    historicoTransacoes: []
};


while (operacao.toLowerCase() !== "sair") {
    console.log("\n--- Sistema de Caixa ---");
    console.log("Saldo Atual: R$ " + caixa.saldo.toFixed(2));

    operacao = prompt.question("Qual operacao voce deseja realizar?\n[V] - Venda\n[D] - Despesa\n[Sair] - Fechar o Programa\nR: ");

    switch (operacao.toUpperCase()) {
        case "V":
            let venda = prompt.questionFloat("Quanto foi o valor da venda? R: ");
            caixa.saldo = registrarVenda(caixa.saldo, venda);
            caixa.historicoTransacoes.push(`Entrada: +R$ ${venda.toFixed(2)}`);
            break;
        case "D":
            let despesa = prompt.questionFloat("Quanto foi o valor da despesa? R: ");
            caixa.saldo = registrarDespesa(caixa.saldo, despesa);
            caixa.historicoTransacoes.push(`Saida: -R$ ${despesa.toFixed(2)}`);
            break;
        case "SAIR":
            console.log("Fechando o programa...");
            break;
        default:
            console.log("Opcao invalida! Tente novamente.");
            break;
    }
}

console.log("\n--- Resumo do Dia ---");
console.table(caixa);