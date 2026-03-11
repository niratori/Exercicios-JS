const prompt = require('readline-sync');

let passageiro = {
    nome: "Nirath",
    nacionalidade: prompt.question("Nacionalidade: "),
    trabalho: false,
    documentos: ["Passaporte", "Visto"]
};

let saude = prompt.question("Documento de saude: ");
passageiro.documentos.push(saude);

let permitido = false;

if (passageiro.nacionalidade !== "Brasil") {
    // Estrangeiro: Precisa de Visto na pos 1 e o 3º não vazio
    if (passageiro.documentos[1] === "Visto" && passageiro.documentos[2] !== "") {
        permitido = true;
    }
} else {
    // Brasileiro: Só precisa do Passaporte na pos 0
    if (passageiro.documentos[0] === "Passaporte") {
        permitido = true;
    }
}

passageiro["Entrada Permitida"] = permitido;
console.log(passageiro);