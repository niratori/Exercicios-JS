import prompt from "readline-sync";

import dados from "./dados.js";
import listarConsultas from "./listarConsultas.js";
import adicionarConsulta from "./adicionarConsulta.js";
import atualizarConsulta from "./atualizarConsulta.js";
import cancelarConsulta from "./cancelarConsulta.js";

function mainMenu() {
    console.log("\n=== Menu de Consultas ===");
    console.log("1. Agendar Consulta (CREATE)");
    console.log("2. Listar Consultas (READ)");
    console.log("3. Atualizar Consulta (UPDATE)");
    console.log("4. Cancelar Consulta (DELETE)");
    console.log("5. Sair (QUIT)");
}

// CORREÇÃO 1: Variável declarada fora do loop
let opcao; 

while (opcao !== "5") {
    mainMenu();
    opcao = prompt.question("Escolha uma opção: ");

    switch (opcao) {
        case "1":
            // Operação: CREATE
            let paciente = prompt.question("Nome do Paciente: ");
            let medico = prompt.question("Nome do Medico: ");
            let data = prompt.question("Data da Consulta (dd-mm-yyyy): ");
            let hora = prompt.question("Hora da Consulta (hh:mm): ");
            let descricao = prompt.question("Descricao da Consulta: ");

            adicionarConsulta(
                dados.pacientes, 
                dados.medicos, 
                dados.consultas, 
                paciente, 
                medico,
                data, 
                hora, 
                descricao
            );
            break;

        case "2":
            // Operação: READ
            listarConsultas(dados);
            break;

        case "3":
            // Operação: UPDATE
            let idAtualizar = prompt.questionInt("ID da consulta a ser atualizada: ");
            let novaData = prompt.question("Nova Data (dd-mm-yyyy): ");
            let novaHora = prompt.question("Nova Hora (hh:mm): ");
            let novaDescricao = prompt.question("Nova Descricao: ");

            atualizarConsulta(dados.consultas, idAtualizar, novaData, novaHora, novaDescricao);
            break;

        case "4":
            // Operação: DELETE
            let idCancelar = prompt.questionInt("ID da consulta a ser cancelada: ");
            let confirmacao = prompt.question(`Tem certeza que deseja cancelar a consulta com ID ${idCancelar}? (s/n): `);

            if (confirmacao.toLowerCase() === "s") {
                cancelarConsulta(dados.consultas, idCancelar);
            } else {
                console.log("Cancelamento de consulta abortado.");
            }
            break;

        case "5":
            // Operação: QUIT
            console.log("Saindo do sistema de agendamento de consultas...");
            break;

        default:
            console.log("Opção invalida! Por favor, escolha entre 1 e 5.");
            break;
    }
}