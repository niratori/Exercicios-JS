const prompt = require("readline-sync");

// Arrow Function pra calcular a pontuação total e classificar o jogador
const calcularPontuacaoTotal = (pontuacoes) => {
    // Aqui usamos o reduce pra somar todas as pontuações da lista e obter o total
    const pontuacaoTotal = pontuacoes.reduce((total, pontuacao) => total + pontuacao, 0);

    if (pontuacaoTotal > 200 || pontuacoes[pontuacoes.length - 1] > 90) {
        return "Veterano";
    } else {
        return "Iniciante";
    }
};

// Aqui capturamos as pontuações do usuário
const pontuacoes = [];
for (let i = 1; i <= 3; i++) {
    const pontuacao = prompt.questionInt("Digite a pontuação da partida " + i + ": ");
    pontuacoes.push(pontuacao);
}
// Agora calculamos a pontuação total e classificamos o jogador usando a função que criamos anteriormente
const classificacao = calcularPontuacaoTotal(pontuacoes);
console.log("Classificação do jogador: " + classificacao);