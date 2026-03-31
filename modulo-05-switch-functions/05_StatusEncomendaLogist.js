const prompt = require("readline-sync");

function atualizarEntrega(codigo) {
    
    switch (codigo.toUpperCase()) {
        case "P":
            return "Pendente de Envio";
        case "E":
            return "Em Rota de Entrega";
        case "C":
            return "Cancelado";
        default:
            return "Status Invalido";
    }
}


let encomenda = {
    id: "54873892826",
    status: "" 
};

console.log("--- Sistema de Logística ---");
let codigoInformado = prompt.question("Qual o codigo do status da entrega?\n[P] - Pendente de Envio\n[E] - Em rota para a entrega\n[C] - Envio Cancelado\nR: ");

encomenda.status = atualizarEntrega(codigoInformado);

console.log("\n--- Registro Final da Encomenda ---");
console.table(encomenda);