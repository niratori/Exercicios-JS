import numeros from "./numeros.js"

function calcularMediana() {
    let mediana = 0;

    // Se o tamanho for 0, está vazia
    if (numeros.length === 0) {
        console.log("Lista de numeros esta vazia!");
        return;
    }

    let meio = Math.floor(numeros.length / 2);

    if (numeros.length % 2 === 0) {
        // Se for par, a mediana é a média dos dois números do meio
        mediana = (numeros[meio - 1] + numeros[meio]) / 2;
    } else {
        // Se for ímpar, é o número exatamente do meio
        mediana = numeros[meio];
    }
    
    console.log(`A mediana é: ${mediana}`);
    return mediana;
}

export default calcularMediana;