const prompt = require("readline-sync");

console.log("--- Bem-vindo ao conversor de moedas! ---");

let valorReais = prompt.questionFloat("Digite o valor em reais: ");
let moedaDestino = prompt.question("Digite a moeda de destino (USD, EUR, GBP): ").toUpperCase();

const conversorMoedas = (valorReais, moedaDestino) => {
    switch (moedaDestino) {
        case "USD":
            return valorReais / 5;
        case "EUR":
            return valorReais / 6;
        case "GBP":
            return valorReais / 7;
        default:
            return valorReais;
    }
};
let valorConvertido = conversorMoedas(valorReais, moedaDestino);
console.log(`O valor convertido é: ${valorConvertido.toFixed(2)} ${moedaDestino}`);