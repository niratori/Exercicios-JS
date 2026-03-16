const prompt = require('readline-sync');

let aluno = {
    nome: "Nirath",
    pontosDeLeitura: 10,
    historicoDias: [
        { data: "01/03", paginasLidas: 20 },
        { data: "02/03", paginasLidas: 15 }
    ]
};

let hoje = {
    data: prompt.question("Data de hoje: "),
    paginasLidas: prompt.questionInt("Quantas paginas leu? ")
};

aluno.historicoDias.push(hoje);

// Focando no último registro escrito
let ultimoRegistro = aluno.historicoDias[aluno.historicoDias.length - 1];

if (ultimoRegistro.paginasLidas > 50 && aluno.pontosDeLeitura > 0) {
    aluno.pontosDeLeitura *= 2;
    ultimoRegistro.data += " - Super Leitor!";
} else if (ultimoRegistro.paginasLidas < 10) {
    aluno.pontosDeLeitura /= 2;
}

console.log(aluno);