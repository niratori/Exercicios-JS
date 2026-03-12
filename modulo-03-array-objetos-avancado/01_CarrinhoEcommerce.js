// Puxando a biblioteca
const prompt = require('readline-sync');

let carrinho = {
    cliente: "Nirath",
    tipoAssinatura: "Padrão", // Pode ser Prime ou Padrão
    itensPrecos: []
};

// Registrando 3 produtos
carrinho.itensPrecos.push(prompt.questionFloat("Preco do produto 1: "));
carrinho.itensPrecos.push(prompt.questionFloat("Preco do produto 2: "));
carrinho.itensPrecos.push(prompt.questionFloat("Preco do produto 3: "));

// Somando os itens
let total = carrinho.itensPrecos[0] + carrinho.itensPrecos[1] + carrinho.itensPrecos[2];

if (total > 200 || carrinho.tipoAssinatura === "Prime") {
    carrinho.freteGratis = true; // Selo criado dinamicamente
    console.log("PARABENS! Voce ganhou Frete Gratis!");
} else {
    total = total + 30; // Taxa fixa
    carrinho.freteGratis = false;
}

carrinho.valorFinal = total;
console.log(carrinho);