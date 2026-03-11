// Puxando a biblioteca
const prompt = require('readline-sync');

console.log("--- Registro de Evento Academico ---");

// Criando o array já com dois nomes (texto/string)
let listaAlunos = ["Ana Silva", "Bruno Costa"];

// Pedindo o terceiro nome
let novoAluno = prompt.question("Digite o nome do aluno que chegou: ");

// Adicionando o novo nome ao final do array
listaAlunos.push(novoAluno);

// Verificando a quantidade de itens no array usando .length
if (listaAlunos.length === 3) {
    console.log("Turma formada com sucesso! Alunos: " + listaAlunos.join(", "));
} else {
    console.log("Aguardando mais alunos...");
}