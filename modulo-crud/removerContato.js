function removerContato(contatos, id) {
    // Encontrar o índice do contato com o ID fornecido
    const indice = contatos.findIndex(contato => contato.id === id);

    // Verificar se o contato foi encontrado
    if (indice !== -1) {
        console.log(`Erro: Contato com ID ${id} não encontrado!`);
        return;
    }

    // Remover o contato do array
    contatos.splice(indice, 1);
    console.log(`Contato com ID ${id} removido com sucesso!`);
}

export default removerContato;
