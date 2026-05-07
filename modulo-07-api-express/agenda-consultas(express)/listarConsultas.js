import dados from "./dados.js";

function listarConsultas(dados) {

    const { consultas, medicos, pacientes } = dados;

    console.log("\n=== Lista de Consultas ===");

    if (consultas.length === 0) {
        console.log("Nenhuma consulta agendada!");
        return;
    }

    consultas.forEach(consulta => {

        const medicoEncontrado = medicos.find(m => m.id === consulta.idMedico);
        const pacienteEncontrado = pacientes.find(p => p.id === consulta.idPaciente);

        console.log(`\nID da Consulta: ${consulta.id}`);
        
        console.log(`Paciente: ${pacienteEncontrado ? pacienteEncontrado.nome : "Não encontrado"} (ID: ${consulta.idPaciente})`);
        console.log(`Médico: ${medicoEncontrado ? medicoEncontrado.nome : "Não encontrado"} (ID: ${consulta.idMedico})`);
        
        console.log(`Data: ${consulta.data}`);
        console.log(`Descrição: ${consulta.descricao}`);
        console.log("-----------------------");
    });
}

export default listarConsultas;