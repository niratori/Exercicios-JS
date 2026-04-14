import numeros from "./numeros.js"

// let numeros = [10, 20, 30, 40, 50];

function calcularMedia() {

    let soma = 0

    if (numeros.length === 0) {

        console.log("Lista de numeros esta vazia!")
        return 0
    }

    /*
    for(let i = 0; i < numeros.length; i = i++){

        soma = soma + numeros[i]
    }
    */

    numeros.forEach((num) => {
        soma += num
    })

    const media = soma / numeros.length

    console.log(`A média é: ${media}`);
    return media;
}

export default calcularMedia