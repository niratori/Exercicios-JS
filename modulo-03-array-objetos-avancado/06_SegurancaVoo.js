const prompt = require('readline-sync');

let turbina = {
    lado: "Motor Esquerdo",
    status: "Desligado",
    leituras: [0, 0, 0] // [temp, pressao, combustivel]
};

turbina.leituras[0] = prompt.questionFloat("Nova Temperatura (C): ");
turbina.leituras[1] = prompt.questionFloat("Nova Pressao Oleo (PSI): ");
turbina.leituras[2] = prompt.questionInt("Novo Nivel Combustivel (%): ");

let [temp, pressao, comb] = turbina.leituras;

if (comb > 20 && pressao > 50 && temp >= 20 && temp <= 90) {
    turbina.status = "Ligado";
} else {
    turbina.status = "Falha Critica";
    turbina.bloqueioAtivado = true;
}

console.log(turbina);