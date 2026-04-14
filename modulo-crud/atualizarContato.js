function atualizarContato(contatos, id, novosDados) {

    const indice = contatos.findIndex(contato => contato.id === id);

    if (indice === -1) {
        console.log(`Erro: Contato com ID ${id} não encontrado!`);
        return;
    }

    // Validação de e-mail na atualização
    if (novosDados.email) {
        let emailExistente = false;
        for (let i = 0; i < contatos.length; i++) {
            let contatoAtual = contatos[i];
            // Verifica se o e-mail é igual ao digitado E Se não é o próprio usuário atualizando
            if (contatoAtual.email === novosDados.email && contatoAtual.id !== id) {
                emailExistente = true;
                break;
            }
        }

        if (emailExistente) {
            console.log("Erro: E-mail já está em uso por outro usuário! Contato não atualizado.");
            return;
        }
    }

    // Atualiza apenas os campos preenchidos
    contatos[indice].nome = novosDados.nome || contatos[indice].nome;
    contatos[indice].email = novosDados.email || contatos[indice].email;
    // Se o usuário digitou novos telefones (o array é maior que zero), nós substituímos os telefones antigos pelos novos
    if (novosDados.telefones.length > 0) {
        contatos[indice].telefones = novosDados.telefones;
    }

    console.log(`Contato com ID ${id} atualizado com sucesso!`);

    return
}

export default atualizarContato;