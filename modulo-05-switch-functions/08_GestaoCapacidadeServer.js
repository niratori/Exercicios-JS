const prompt = require("readline-sync");
/*
    Criamos um objeto servidor com as propriedades nome, espacoTotal e espacoOcupado.
    Depois, criamos a função gestaoCapacidade que recebe o objeto servidor e o tamanho do arquivo a ser salvo
*/

console.log("--- Bem-vindo ao gestor de capacidade do servidor! ---");

let servidor = 
{
    nome: "Servidor Principal",
    espacoTotal: 1000, // Em GB
    espacoOcupado: 400, // Em GB
};

let tamanhoArquivo = prompt.questionInt("Digite o tamanho do arquivo a ser salvo (em GB): ");

const gestaoCapacidade = (servidor, tamanhoArquivo) => {
//  Usando o switch pra verificar o tamanho do arquivo a ser salvo e o espaço já ocupado do servidor.
    switch (true) 
    {
        case (servidor.espacoOcupado + tamanhoArquivo <= servidor.espacoTotal):
            servidor.espacoOcupado += tamanhoArquivo;
            return true;
            break;
        default:
            return false;
            break;
    };
}
// Aqui criamos a variável resultado puxando a gestaoCapacidade
let resultado = gestaoCapacidade(servidor, tamanhoArquivo);
// E finalmente, utilizamos if/else para responder se é possível salvar o arquivo ou não levando em consideração o espaço já ocupado do server.
if (resultado) 
    {
    console.log("Upload aceito! O espaço ocupado agora é de: " + servidor.espacoOcupado + " GB.");
    } else 
    {
        console.log("Upload rejeitado! O espaço ocupado permanece em: " + servidor.espacoOcupado + " GB.");
    };