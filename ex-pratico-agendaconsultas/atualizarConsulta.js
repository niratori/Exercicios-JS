function atualizarConsulta(consultas, idConsulta, novaData, novaHora, novaDescricao) {
    
    // 1. Achar a consulta
    let consultaEncontrada = consultas.find(c => c.id === idConsulta);

    // 2. Verificação
    if (!consultaEncontrada) {
        console.log(`Erro: Consulta com ID ${idConsulta} não encontrada!`);
        return; // Para a execução aqui se não encontrar
    }

    // 3. Lógica do Operador
    consultaEncontrada.data = novaData || consultaEncontrada.data;
    consultaEncontrada.hora = novaHora || consultaEncontrada.hora;
    consultaEncontrada.descricao = novaDescricao || consultaEncontrada.descricao;

    console.log(`\n Consulta com ID ${idConsulta} atualizada com sucesso!`);
}

export default atualizarConsulta;