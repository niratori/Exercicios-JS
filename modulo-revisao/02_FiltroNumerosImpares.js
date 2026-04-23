import promptSync from "prompt-sync";
const prompt = promptSync();

function filtrarImpares() {
    let numeros = []
    let contador = 0;

    console.log("--- Ferramenta Filtradora de Números Ímpares ---")
    let qtd = parseInt(prompt("Quantos números? "));

    for (let i = 0; i < qtd; i++) {
        let num = parseInt(prompt(`Numero ${i + 1}: `));
        numeros.push(num);
    }

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 !== 0) {
            contador++;
        }
    }

    console.log(`\nTotal de ímpares: ${contador}`);
}

filtrarImpares();