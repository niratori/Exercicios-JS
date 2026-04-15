function adicionarConsulta(pacientes, medicos, consultas, novoPaciente, novaData, novaHora, novaDescricao) {

    // Gerar um novo ID para a consulta de forma automática
    let novoId;
    if (consultas.length > 0) {
        let ultimaConsulta = consultas[consultas.length - 1];
        novoId = ultimaConsulta.id + 1;
    }
    else 
        {
        novoId = 1; // Se for a primeira consulta, vai começar com o ID 1
    }

    // Criar um novo objeto de consulta com os dados fornecidos
    let novaConsulta = {
        id: novoId,
        data: novaData,
        hora: novaHora,
        descricao: novaDescricao
    };

    // Fazer uma verificação para ver se o paciente existe na lista de pacientes
    let pacienteEncontrado = pacientes.find(p => p.nome.toLowerCase() === novoPaciente.toLowerCase());
    if (!pacienteEncontrado) {
        console.log(`Erro: Paciente "${novoPaciente}" não encontrado! Consulta não agendada.`);
        return;
    }

    // Também o mesmo processo de verificação para o médico
    let medicoEncontrado = medicos.find(m => m.nome.toLowerCase() === novaDescricao.toLowerCase());
    if (!medicoEncontrado) {
        console.log(`Erro: Médico "${novaDescricao}" não encontrado! Consulta não agendada.`);
        return;
    }

    // Se tanto o paciente quanto o médico forem encontrados no sistema de verificação, associaremos seus respectivos IDs à nova consulta
    novaConsulta.idPaciente = pacienteEncontrado.id;
    novaConsulta.idMedico = medicoEncontrado.id;

    // Adicionar a nova consulta à lista de consultas
    consultas.push(novaConsulta);
    console.log(`Consulta agendada com sucesso para o paciente "${novoPaciente}" com o médico "${medicoEncontrado.nome}" na data ${novaDData} às ${novaHora}. Descrição: ${novaDescricao}`);
}

export default adicionarConsulta;