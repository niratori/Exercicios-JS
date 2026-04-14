import contatos from './contatos.js';
import listarContatos from './listarContatos.js';
import adicionarContato from './adicionarContato.js';
import atualizarContato from './atualizarContato.js';
import removerContato from './removerContato.js';

function mainMenu() {
    console.log("\n=== Menu de Contatos ===");
    console.log("1. Listar Contatos (READ)");
    console.log("2. Adicionar Contato (CREATE)");
    console.log("3. Atualizar Contato (UPDATE)");
    console.log("4. Remover Contato (DELETE)");
    console.log("5. Sair");
}

while (opcao != "5") {
    mainMenu();
    let opcao = prompt.question("Escolha uma opção: ");

    switch (opcao) {
        case "1":
            // Operação: READ
            listarContatos();
            break;
        case "2":
            // Operação: CREATE
            let telefones = [];
            let nome = prompt.question("Nome: ");
            let email = prompt.question("E-mail: ");

            // Loop para adicionar telefones
            let adicionarMais = "s";
            while (adicionarMais.toLowerCase() === "s") {
                let telefone = prompt.question("Telefone: ");
                telefones.push(telefone);
                adicionarMais = prompt.question("Adicionar outro telefone? (s/n): ");
            }

            let novoContato = { nome, telefones, email };

            const adicionou = adicionarContato(contatos, novoContato);
            if (adicionou) {
                console.log("Contato adicionado com sucesso!");
            } else {
                console.log("Falha ao adicionar contato.");
            }
            break;
        case "3":
            // Operação: UPDATE
            let idAtualizar = prompt.questionInt("ID do contato a atualizar: ");
            
            let novosDados = {
                nome: prompt.question("Novo Nome (deixe em branco para manter o atual): "),
                email: prompt.question("Novo E-mail (ou Enter para manter): "),
                telefones: []
            };

            let atualizarTelefones = prompt.question("Deseja atualizar os telefones? (s/n): ");
            if (atualizarTelefones.toLowerCase() === "s") {
                let editMais = "s";
                while (editMais.toLowerCase() === "s") {
                    novosDados.telefones.push(prompt.question("Novo Telefone: "));
                    editMais = prompt.question("Adicionar outro telefone? (s/n): ");
                }
            }
            const atualizou = atualizarContato(contatos, idAtualizar, novosDados);
            if (atualizou) {
                console.log("Contato atualizado com sucesso!");
            } else {
                console.log("Falha ao atualizar contato.");
            }
            break;
        case "4":
            // Operação: DELETE
            let idRemover = prompt.questionInt("ID do contato a remover: ");

            // Requisito de confirmação antes de remover
            let confirmar = prompt.question(`Tem certeza que deseja remover o contato com ID ${idRemover}? (s/n): `);

            if (confirmar.toLowerCase() === "s") {
                removerContato(contatos, idRemover);
                console.log("Contato removido com sucesso!");
            } else {
                console.log("Operação cancelada.");
            }
            break;
        case "5":
            // Operação: QUIT
            console.log("Saindo do programa...");
            break;
        default:
            console.log("Opção inválida! Tente novamente.");
    }
}