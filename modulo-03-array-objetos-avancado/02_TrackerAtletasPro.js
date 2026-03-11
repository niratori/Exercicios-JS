const prompt = require('readline-sync');

let atleta = {
    nome: "Nirath",
    peso: 80,
    meta: "Emagrecimento",
    historicoMaratonas: [21, 15, 42] // Distâncias passadas
};

let corridaHoje = prompt.questionFloat("Distancia da corrida de hoje (km): ");
atleta.historicoMaratonas.push(corridaHoje);

// Calculando média dos 3 últimos (ignorando o primeiro/mais antigo)
let listaRecente = atleta.historicoMaratonas.slice(-3); 
let media = (listaRecente[0] + listaRecente[1] + listaRecente[2]) / 3;

if (media > 20 && atleta.meta === "Emagrecimento") {
    atleta.peso -= 1; // Perde 1kg
    atleta.selo = "Meta Atingida";
} else if (atleta.meta === "Performance" && corridaHoje > atleta.historicoMaratonas[atleta.historicoMaratonas.length - 2]) {
    atleta.selo = "Novo Recorde Pessoal";
}

console.log(atleta);