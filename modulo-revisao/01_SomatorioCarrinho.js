import promptSync from "prompt-sync";
const prompt = promptSync();

function calcularCarrinho() {
    let precos = [];
    let soma = 0;

    console.log("--- Somatório do Carrinho ---");

    for (let i = 0; i < 5; i++) {
        let valor =
    parseFloat(prompt(`Digite o preço do produto ${i + 1}: `));
        precos.push(valor);
        soma += valor;
    }

    let media = soma / precos.length;

    console.log(`Soma Total: R$ ${soma.toFixed(2)}`);
    console.log(`Média: R$ ${media.toFixed(2)}`);
}

calcularCarrinho();