const prompt = require('readline-sync');

let servidor = {
    nome: "Servidor Principal AWS",
    capacidadeMaximaGB: 500,
    sitesHospedados: [
        { dominio: "meusite.com", tamanhoGB: 200 }
    ]
};

let novoDom = prompt.question("Dominio do novo site: ");
let novoTam = prompt.questionInt("Tamanho em GB: ");

let ocupacaoAtual = servidor.sitesHospedados[0].tamanhoGB;

if ((ocupacaoAtual + novoTam) <= servidor.capacidadeMaximaGB) {
    servidor.sitesHospedados.push({ dominio: novoDom, tamanhoGB: novoTam });
    console.log("Upload Concluido! Sistema Operacional");
} else {
    servidor.alertaSobrecarga = true;
    console.log("Falha: Falta de Espaco Fisico. Cancele o deploy");
}

console.log(servidor);