import promptSync from 'prompt-sync'; // Mesma coisa, puxa a biblioteca
const prompt = promptSync();

// Cria a função pra contar as consoantes da frase que a pessoa digitar
function contarConsoantes() {
    let frase = prompt("Digite uma frase: "); // Aqui recebe a string da pessoa
    let vogais = "aeiou";                     // Aqui vai definir quais são as vogais pra comparar
    let totalConsoantes = 0;                  // Um contador que vai começar em zero

    // Cria um loop pra percorrer a frase letra por letra
    for (let i = 0; i < frase.length; i++) {  // Vai percorrer a frase inteira, letra por letra (cada índice da string)
        let letra = frase[i].toLowerCase();   // Aí aqui transforma a letra em minúscula pra não dar erro com "A" ou "E"

        // Nessa parte, vai verificar TRÊS coisas:
        // - Se a letra é maior ou igual a 'a'
        // - Se a letra é menor ou igual a 'z' (porque vai garantir que é uma letra do alfabeto)
        // - Se a letra NÃO tá na lista de vogais (!vogais.includes)
        if (letra >= 'a' && letra <= 'z' && !vogais.includes(letra)) {
            totalConsoantes++; // Se tiver passado nas 3 regras, é uma consoante, aí soma no contador
        }
    }

    console.log(`Total de consoantes: ${totalConsoantes}`); // Aqui mostra o total.
}

contarConsoantes();
