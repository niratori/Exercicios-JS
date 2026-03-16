// Puxando a lib
const prompt = require('readline-sync');

console.log("--- Sistema de Seguranca Bancaria ---");

const senhaCorreta = 9876;
let tentativa = prompt.questionInt("Digite a senha numerica do cofre: ");

// Enquanto a tentativa for diferente da certa, ele entra no loop
while (tentativa !== senhaCorreta) {
    console.log("Acesso negado: Senha incorreta");
    tentativa = prompt.questionInt("Tente novamente: ");
}

console.log("Cofre liberado com sucesso!");