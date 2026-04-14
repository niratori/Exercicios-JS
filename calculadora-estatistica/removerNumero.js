import numeros from "./numeros.js"

function removerNumero() {
    if (numeros.length > 0) {
        let removido = numeros.pop();
        console.log(`Numero ${removido} removido com sucesso!`);
    } else {
        console.log("A lista já está vazia!");
    }
}

export default removerNumero;