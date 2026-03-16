const prompt = require('readline-sync');

console.log("--- Fechamento de Caixa E-commerce ---");

const carrinhos = [
    { cliente: "João", produtos: [50.0, 120.5, 15.0] },
    { cliente: "Maria", produtos: [200.0, 45.9] },
    { cliente: "Carlos", produtos: [10.0, 5.5, 32.0, 8.0] }
];

let clientesFinalizados = [];

carrinhos.forEach((carrinho) => {
    console.log("Processando pedido de: " + carrinho.cliente);
    
    // 1. Somando o total do carrinho
    let totalDevido = 0;
    carrinho.produtos.forEach(preco => totalDevido += preco);
    console.log("Total a pagar: R$ " + totalDevido.toFixed(2));

    // 2. Sistema de Pagamento
    let totalPago = 0;
    while (totalPago < totalDevido) {
        let falta = totalDevido - totalPago;
        let pagamento = prompt.questionFloat("Valor recebido (Falta R$ " + falta.toFixed(2) + "): ");
        totalPago += pagamento;
    }

    // 3. Verificando Troco
    if (totalPago > totalDevido) {
        let troco = totalPago - totalDevido;
        console.log("Pagamento concluido. Troco: R$ " + troco.toFixed(2));
    } else {
        console.log("Pagamento concluido (valor exato).");
    }

    clientesFinalizados.push(carrinho.cliente);
});

// 4. Relatório Final
console.log("==========================================");
console.log("RELATORIO DE FECHAMENTO:");
console.log("Pagamentos confirmados para: " + clientesFinalizados.join(", "));
console.log("==========================================");