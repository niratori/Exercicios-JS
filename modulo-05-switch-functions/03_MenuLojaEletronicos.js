const prompt = require('readline-sync');

let pedido = 
{ cliente: prompt.question("Nome do cliente: ") };

console.log("1 - Fone | 2 - Teclado | 3 - Mouse");
let codigo = prompt.questionInt("Codigo de escolha: ");

switch (codigo) {
    case 1:
        pedido.produto = "Fone";
    pedido.preco = 50.00;
        break;
    case 2:
        pedido.produto = "Teclado";
    pedido.preco = 150.00;
        break;
    case 3:
        pedido.produto = "Mouse";
    pedido.preco = 80.00;
        break;
    default:
        pedido.produto = "Desconhecido";
    pedido.preco = 0;
}
console.log(pedido);