function atualizarConsulta(idConsulta, novaData, novaHora, novaDescricao) {
    // Achar a consulta com base no ID fornecido
    let consultaEncontrada = consultas.find(c => c.id === idConsulta && !c.cancelada);

    // Fazer verificação para ver se a consulta foi encontrada
    if (!consultaEncontrada) {
        console.log(`Erro: Consulta com ID ${idConsulta} não encontrada ou já está cancelada!`);
    }
        return;

    /* Permita que o usuário altere apenas a data e a descrição da consulta. Use a
    regra do operador lógico || ensinada em aula para manter o dado antigo caso o usuário
    deixe o campo em branco. Não permita alterar o médico ou o paciente (se errar isso, a
    regra de negócio diz que a consulta deve ser cancelada e refeita */
    consultaEncontrada.data = novaData || consultaEncontrada.data;
    consultaEncontrada.hora = novaHora || consultaEncontrada.hora;
    consultaEncontrada.descricao = novaDescricao || consultaEncontrada.descricao;

    console.log(`Consulta com ID ${idConsulta} atualizada com sucesso!`);
}

export default atualizarConsulta;