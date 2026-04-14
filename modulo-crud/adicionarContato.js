function adicionarContato(contatos, novoContato) {
    
    // Validação: não permitir e-mail duplicado
    let emailExistente = false;
    for (let i = 0; i < contatos.length; i++) {
        if (contatos[i].email === novoContato.email) {
            emailExistente = true;
            // Para a busca ao encontrar um e-mail duplicado
            break;
        }
    }

    if (emailExistente) {
        console.log("Erro: E-mail já existe! Contato não adicionado.");
        return;
    };

    // Gerar ID sequencial (pega o ultimo ID e soma 1)
    if (contatos.length > 0) {
        let ultimoContato = contatos[contatos.length - 1];
        novoContato.id = ultimoContato.id + 1;
    } else {
        // Se for o primeiro contato, começa com ID 1
        novoContato.id = 1;
    }

    contatos.push(novoContato);
    console.log(`Contato ${novoContato.nome} adicionado com sucesso!`);
}

export default adicionarContato;