function removerConsulta(consultas, idConsulta) {
    // Encontrar o índice da consulta com base no ID inserido
    const indice = consultas.findIndex(consulta => consulta.id === idConsulta && !consulta.cancelada);

    // Verificação pra ver se a consulta foi encontrada
    if (indice === -1) {
        console.log(`Erro: Consulta com ID ${idConsulta} não encontrada ou já está cancelada!`);
        return;
    }

    // Remover a consulta do array
    consultas.splice(indice, 1);
    console.log(`Consulta com ID ${idConsulta} cancelada com sucesso!`);        
}

export default removerConsulta;