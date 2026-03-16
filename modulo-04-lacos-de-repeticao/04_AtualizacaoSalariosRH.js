console.log("--- Atualizacao Salarial (Reajuste 10%) ---");

let salarios = [2500, 3200, 4100, 5000, 6200];

console.log("Salarios antigos: " + salarios);

// Percorrendo cada salario do array
salarios.forEach((valorAntigo, indice) => {
    let aumento = valorAntigo * 0.10;
    salarios[indice] = valorAntigo + aumento;
});

console.log("Novos salarios atualizados: ");
console.log(salarios);