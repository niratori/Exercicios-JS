// Puxando a biblioteca
const prompt = require('readline-sync');

console.log("---- Sistema de Fila de Projetos ----");

// 1. Criando um array vazio
let filaProjetos = [];

// 2. Coletando os dados da empresa
let nomeEmpresa = prompt.question("Nome da empresa cliente: ");
let valorOriginal = prompt.questionFloat("Valor estimado do projeto: R$ ");

// 3. Criando o objeto e colocando no array
let novoProjeto = {
    cliente: nomeEmpresa,
    valorEstimado: valorOriginal
};
filaProjetos.push(novoProjeto);

// 4. Verificando a se é urgente
let urgente = prompt.question("O projeto possui prazo de entrega urgente? (sim/nao): ");

// Acessamos o objeto que está na posição [0] do array para analisar
if (urgente === "sim" && filaProjetos[0].valorEstimado > 3000) {
    // Adicionar os 15% de taxa extra
    filaProjetos[0].valorEstimado = filaProjetos[0].valorEstimado * 1.15;
    console.log("Taxa de urgencia aplicada com sucesso!");
}

// 5. Exibindo o resultado final
console.log("---- Fila de Projetos Atualizada ----");
console.log(filaProjetos);