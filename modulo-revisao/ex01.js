// Somatório de Carrinho de Compras
// Dada uma lista com 5 valores representando preços de produtos em um carrinho de compras, percorra todos os elementos, calcule a soma total e, ao final, exiba o valor médio gasto por produto.

const carrinhoCompras = [29.99, 49.99, 19.99, 9.99, 39.99];

let somaTotal = 0;

for (let i = 0; i < carrinhoCompras.length; i++) {
    somaTotal += carrinhoCompras[i];
}

const valorMedio = somaTotal / carrinhoCompras.length;

console.log("Valor total do carrinho: R$ " + somaTotal.toFixed(2));
console.log("Valor médio gasto por produto: R$ " + valorMedio.toFixed(2));
