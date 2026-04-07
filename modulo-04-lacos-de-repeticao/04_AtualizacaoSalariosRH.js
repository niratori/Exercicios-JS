const prompt = require('readline-sync');

console.log("--- Atualizacao Salarial (Reajuste 10%) ---");

// array pra armazenar os valores
let salarios = [];
let continuar = true;

// loop para pegar varios salarios
while (continuar) {
    let valor = prompt.questionFloat("Digite um salario (ou 0 para encerrar): ");
    
    if (valor === 0) {
        continuar = false;
    } else {
        salarios.push(valor);
    }
}

console.log("\nSalarios antigos: " + salarios);

// outro array com os reajustes usando .map pra ficar mais bonito que foreach
let salariosAtualizados = salarios.map((valorAntigo) => {
    let aumento = valorAntigo * 0.10;
    return valorAntigo + aumento;
});

console.log("Novos salarios atualizados: ");
console.log(salariosAtualizados);