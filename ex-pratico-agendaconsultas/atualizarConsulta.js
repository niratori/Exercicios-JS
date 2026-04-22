function atualizarConsulta(consultas, idConsulta, novaData, novaHora, novaDescricao) {
    
    // 1. Achar a consulta (Lembre-se: o array 'consultas' deve vir como 1º argumento)
    let consultaEncontrada = consultas.find(c => c.id === idConsulta);

    // 2. Verificação (O return DEVE estar dentro das chaves do if)
    if (!consultaEncontrada) {
        console.log(`Erro: Consulta com ID ${idConsulta} não encontrada!`);
        return; // Para a execução aqui se não encontrar
    }

    // 3. Lógica do Operador || (Short-circuit)
    // Se 'novaData' for uma string vazia "", o JS entende como 'false' 
    // e mantém o valor antigo (consultaEncontrada.data)
    consultaEncontrada.data = novaData || consultaEncontrada.data;
    consultaEncontrada.hora = novaHora || consultaEncontrada.hora;
    consultaEncontrada.descricao = novaDescricao || consultaEncontrada.descricao;

    console.log(`\n Consulta com ID ${idConsulta} atualizada com sucesso!`);
}

export default atualizarConsulta;