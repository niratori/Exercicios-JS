const prompt = require('readline-sync');

console.log("--- Bem-vindo ao sistema de triagem de chamados! ---");

let filaAtendimento = [];

const triagemChamados = (criticidade) => {
    switch (criticidade) 
    {
        case 1:
            return "Atendimento Básico";
            break;
        case 2:
            return "Equipe Especializada";
            break;
        case 3:
            return "Gestão de Crise";
            break;
        default:
            return "Nível de Criticidade inválido!";
            break;
    }
};
let criticidade = prompt.questionInt("Digite a criticidade do problema (1, 2 ou 3): ");
let setorResponsavel = triagemChamados(criticidade);

filaAtendimento.push(setorResponsavel);
console.log("Fila de Atendimento Atualizada: ", filaAtendimento);