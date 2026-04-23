// Aqui a gente faz a mesma coisa dos dois outros exercícios
import promptSync from 'prompt-sync'; // Puxa a biblioteca pra ler o que a pessoa digitar no terminal
const prompt = promptSync();

// Aqui a gente cria a função que vai descobrir o menor valor da lista de números que a pessoa digitar
function descobrirMenor() {
    let numeros = []; // Aqui a gente cria um array vazio pra guardar os números que a pessoa digitar
    let qtd = parseInt(prompt("Quantos numeros na lista? ")); // Pergunta pra pessoa quantos números ela quer colocar na lista e guarda

    // Agora a gente cria um loop pra preencher a lista com os números
    for (let i = 0; i < qtd; i++) {
        numeros.push(parseInt(prompt(`Numero ${i + 1}: `))); // Aqui preenche a lista igual ao exercício 02
    }

    let menor = numeros[0]; // Aqui criamos uma varíavel. Isso é importante, porque assume que o primeiro número (índice 0) é o menor valor

    for (let i = 1; i < numeros.length; i++) { // Começa o loop do segundo elemento (índice 1) até o final da lista
        if (numeros[i] < menor) {              // Aqui meio que pergunta: "O número atual é menor do que o que eu já tenho?"
            menor = numeros[i];                // Se sim, vai atualizar a variável 'menor' com esse novo valor
        }
    }

    console.log(`O menor valor e: ${menor}`); // E aqui exibe o menor valor achado
}

descobrirMenor();
