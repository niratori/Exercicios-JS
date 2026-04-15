function listarConsultas(consultas) {
    console.log("\n=== Lista de Consultas ===");
    if (consultas.length === 0) {
        console.log("Nenhuma consulta agendada!");
        return;
    }

    consultas.forEach(consulta => {
        console.log(`\nID: ${consulta.id}`);
        console.log(`Paciente ID: ${consulta.idPaciente}`);
        console.log(`Médico ID: ${consulta.idMedico}`);
        console.log(`Data: ${consulta.data}`);
        console.log(`Descrição: ${consulta.descricao}`);
    });
}

export default listarConsultas;