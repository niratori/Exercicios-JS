const prompt = require('readline-sync');

let projeto = {
    coordenador: "Dr. Silva",
    limiteVagas: 3,
    areaEstudo: "Tecnologia",
    mentores: [
        { nome: "Alice", areaDeAtuacao: "Tecnologia" },
        { nome: "Bob", areaDeAtuacao: "Tecnologia" }
    ]
};

let novoNome = prompt.question("Nome do voluntario: ");
let novaArea = prompt.question("Area de atuacao: ");

// Regra: Tem que ter vaga E a área tem que ser igual
if (projeto.mentores.length < projeto.limiteVagas && novaArea === projeto.areaEstudo) {
    projeto.mentores.push({ nome: novoNome, areaDeAtuacao: novaArea });
} else {
    projeto.status = "Bloqueado para Inscricoes";
}

console.log(projeto);