const prompt = require('readline-sync');

let pacote = {
    empresa: "Tech Corp",
    orcamentoTotal: 2000.00,
    openBarFechado: false,
    consumoExtras: []
};

let b1 = prompt.question("Bebida 1: ");
let b2 = prompt.question("Bebida 2: ");
let valorGasto = prompt.questionFloat("Total das duas bebidas: ");

pacote.consumoExtras.push(b1, b2);
pacote.orcamentoTotal -= valorGasto;

if (pacote.orcamentoTotal < 0) {
    pacote.openBarFechado = true;
    pacote["Multa Excedente"] = 500.00;
}

console.log(pacote);