const prompt = require('readline-sync');

const avaliarTemperaturas = (lista) => {

    let media = (lista[0] + lista[1] + lista[2]) / 3;
    
    console.log(`Média registrada: ${media.toFixed(2)}°C`);
    
    return media > 30 ? "Alerta de Aquecimento" : "Clima Estavel";
};

let temperaturas = [
    prompt.questionFloat("Informe a Temperatura 1: "),
    prompt.questionFloat("Informe a Temperatura 2: "),
    prompt.questionFloat("Informe a Temperatura 3: ")
];

console.log(avaliarTemperaturas(temperaturas));