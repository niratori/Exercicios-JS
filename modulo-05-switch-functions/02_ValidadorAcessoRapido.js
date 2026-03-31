const prompt = require('readline-sync');

const validarAcesso = (nome, cracha) => nome.length > 5 && cracha > 1000;

let n = prompt.question("Nome de usuario: ");
let c = prompt.questionInt("Codigo do cracha: ");

if (validarAcesso(n, c)) {
    console.log("Acesso Concedido");
} else {
    console.log("Acesso Negado");
}