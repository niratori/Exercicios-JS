// Conversor de moedas
// Puxando a lib
const prompt = require("readline-sync");

/*  Aqui criamos a arrow function que recebe o valor em reais e a moeda de destino
    depois, dentro da função, vamos usar o switch pra verificar qual é a moeda de destino e fazer a conversão de acordo com a cotação atual
    Se não reconhecer a moeda de destino inserida, vai retornar o valor em reais sem conversão.
*/

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