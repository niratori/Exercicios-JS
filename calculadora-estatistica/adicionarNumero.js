import numeros from "./numeros.js"

function adicionarNumero(num) {
    numeros.push(num);
    console.log("Numero adicionado com sucesso!");
}

export default adicionarNumero;