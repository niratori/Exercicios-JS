function adicionarConsulta(pacientes, medicos, consultas, nomePaciente, nomeMedico, novaData, novaHora, novaDescricao) {

    // 1. GERAR ID DA CONSULTA
    let novoId = consultas.length > 0 ? consultas[consultas.length - 1].id + 1 : 1;

    // 2. VERIFICAR OU CRIAR PACIENTE
    let pacienteEncontrado = pacientes.find(p => p.nome.toLowerCase() === nomePaciente.toLowerCase());

    if (!pacienteEncontrado) {
        console.log(`Paciente "${nomePaciente}" não encontrado. Cadastrando novo paciente...`);
        
        let novoIdPaciente = pacientes.length > 0 ? pacientes[pacientes.length - 1].id + 1 : 1;
        pacienteEncontrado = { 
            id: novoIdPaciente, 
            nome: nomePaciente,
        };
        pacientes.push(pacienteEncontrado);
    }

    // 3. VERIFICAR MÉDICO
    let medicoEncontrado = medicos.find(m => m.nome.toLowerCase() === nomeMedico.toLowerCase());

    if (!medicoEncontrado) {
        console.log(`Erro: Médico "${nomeMedico}" não encontrado! A consulta precisa de um médico cadastrado.`);
        return; 
    }

    // 4. CRIAR O OBJETO DA CONSULTA
    let novaConsulta = {
        id: novoId,
        data: novaData,
        hora: novaHora,
        idPaciente: pacienteEncontrado.id,
        idMedico: medicoEncontrado.id,
        descricao: novaDescricao
    };

    // 5. SALVAR E FINALIZAR
    consultas.push(novaConsulta);
    
    console.log("\n Agendamento realizado com sucesso!");
    console.log(`Paciente: ${pacienteEncontrado.nome} | Médico: ${medicoEncontrado.nome}`);
    console.log(`Data: ${novaData} às ${novaHora}`);
};

export default adicionarConsulta;