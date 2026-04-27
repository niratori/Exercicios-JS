// QUESTÃO 1: Média de uma Lista
function calcularMedia() {
    let lista = [10, 20, 30, 40, 50];
    let soma = 0;
    for (let i = 0; i < lista.length; i++) {
        soma += lista[i];
    }
    console.log("Média:", soma / lista.length);
}
calcularMedia();