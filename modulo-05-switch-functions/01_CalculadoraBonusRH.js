const prompt = require('readline-sync');

function calcularBonus(cargo, salario) {
    let percentual = 0;
    switch (cargo.toLowerCase()) {
        case "estagiário":
        case "estagiario":
            percentual = 0.10;
            break;
        case "júnior":
        case "junior":
            percentual = 0.15;
            break;
        case "pleno":
            percentual = 0.20;
            break;
        case "default":
            percentual = 0;
            break;
    }
    return salario * percentual;
}
let cargo = prompt.question("Nivel do cargo; ");
let salario = prompt.questionFloat("Salario atual; ");
console.log("Valor do bonus: R$ " + calcularBonus (cargo, salario));
