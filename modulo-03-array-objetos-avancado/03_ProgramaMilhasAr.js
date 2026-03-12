const prompt = require('readline-sync');

let passageiro = {
    nome: "Ricardo",
    historico: [
        { destino: "Curitiba", milhas: 1000 },
        { destino: "Sao Paulo", milhas: 1500 }
    ]
};

let novoDestino = prompt.question("Novo destino: ");
let novasMilhas = prompt.questionInt("Milhas dessa viagem: ");

passageiro.historico.push({ destino: novoDestino, milhas: novasMilhas });

let somaMilhas = 0;
// Aqui a gente soma as milhas de cada objeto da lista
somaMilhas += passageiro.historico[0].milhas;
somaMilhas += passageiro.historico[1].milhas;
somaMilhas += passageiro.historico[2].milhas;

if (somaMilhas > 5000) {
    somaMilhas -= 5000;
    passageiro.categoria = "Platinum";
    console.log("Parabens! Voce agora e Platinum.");
} else {
    passageiro.categoria = "Gold";
    console.log("Faltam " + (5000 - somaMilhas) + " milhas para o upgrade.");
}

passageiro.saldoAtual = somaMilhas;
console.log(passageiro);