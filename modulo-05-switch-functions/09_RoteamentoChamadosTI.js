const prompt = require('readline-sync');

// Vamos criar uma rotina que atua como triagem de chamados. Ela deve receber a criticidade de um problema técnico do nível 1, 2 ou 3.
// Depois deve-se avaliar a criticidade com seleção de casos. Nível 1 retorna o setor "Atendimento Básico", o nivél 2 deve retornar "Equipe Especializada" e o nível 3 deve retornar "Gestão de Crise". Criamos uma lista vazia de "Fila de Atendimento". Peça ao usuário a criticidade de um novo problema, descubra o setor responspavel usando sua função e adicione o nome desse setor ao final da lista. Mostre a lista atualizada.

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