// Puxando a biblioteca
const prompt = require('readline-sync');

console.log("--- Cadastro Clinica Veterinaria ---");

// Coletando os dados primeiro
let nomeDog = prompt.question("Nome do cachorro: ");
let racaDog = prompt.question("Raca do animal: ");
let idadeDog = prompt.questionInt("Idade do animal: ");

// Criando o objeto vazio
let paciente = {};

// Adicionando as propriedades pro objeto
paciente.nome = nomeDog;
paciente.raca = racaDog;
paciente.idade = idadeDog;

// Analisando a idade (Regra: maior ou igual a 8 anos)
if (paciente.idade >= 8) {
    console.log("O paciente " + paciente.nome + " ja e senior e precisa de exames de rotina.");
} else {
    console.log("Paciente na faixa de idade regular.");
}

// Exibindo o objeto completo (Ficha técnica)
console.log("---- Ficha do Paciente ----");
console.log(paciente);