import dados from "./dados.js";
import listarConsultas from "./listarConsultas.js";
import adicionarConsulta from "./adicionarConsulta.js";
import atualizarConsulta from "./atualizarConsulta.js";
import cancelarConsulta from "./cancelarConsulta.js";

function mainMenu() {
    console.log("\n=== Menu de Consultas ===");
    console.log("1. Listar Consultas (READ)");
    console.log("2. Agendar Consulta (CREATE)");
    console.log("3. Atualizar Consulta (UPDATE)");
    console.log("4. Cancelar Consulta (DELETE)");
    console.log("5. Sair");
}

while (opcao != "5") {
    mainMenu();
    let opcao = prompt.question("Escolha uma opção: ");

    switch (opcao) {
        case "1":
            // Operação: READ
            listarConsultas(dados);
            break;
        case "2":
            // Operação: CREATE
            let paciente = prompt.question("Nome do Paciente: ");
            let data = prompt.question("Data da Consulta (dd-mm-yyyy): ");
            let hora = prompt.question("Hora da Consulta (hh:mm): ");
            let descricao = prompt.question("Descrição da Consulta: ");

            adicionarConsulta(dados.pacientes, dados.medicos, dados.consultas, paciente, data, hora, descricao);
            break;
        case "3":
            // Operação: UPDATE
            let idAtualizar = prompt.questionInt("ID da consulta a ser atualizada: ");
            let novaData = prompt.question("Nova Data (dd-mm-yyyy): ");
            let novaHora = prompt.question("Nova Hora (hh:mm): ");
            let novaDescricao = prompt.question("Nova Descrição; ");

            atualizarConsulta(dados.consultas, idAtualizar, novaData, novaHora, novaDescricao);
            break;
        case "4":
            // Operação; DELETE
            let idCancelar = prompt.questionInt("ID da consulta a ser cancelada: ");
            cancelarConsulta(dados.consultas, idCancelar);
            break;
        case "5":
            console.log("Saindo do sistema de agendamento de consultas...");
            break;
        default:
            console.log("Opção inválida! Por favor, escolha uma opção entre 1 e 5.");
    }
}