const prompt = require('readline-sync');

let pedido = {
    cliente: "Niratorii",
    valorBaseHambúrguer: 30.00,
    quantidade: prompt.questionInt("Quantos lanches? "),
    extras: []
};

let extra1 = prompt.question("Nome do extra 1: ");
let precoExtra1 = prompt.questionFloat("Preco do extra 1: ");
let extra2 = prompt.question("Nome do extra 2: ");
let precoExtra2 = prompt.questionFloat("Preco do extra 2: ");

pedido.extras.push(extra1, extra2);

let subtotal = (pedido.valorBaseHambúrguer + precoExtra1 + precoExtra2) * pedido.quantidade;

if (pedido.extras.length === 2 && pedido.quantidade > 2) {
    let totalComDesconto = subtotal * 0.80; // 20% OFF
    console.log("Desconto aplicado! Total: R$ " + totalComDesconto.toFixed(2));
} else {
    console.log("Total: R$ " + subtotal.toFixed(2));
}