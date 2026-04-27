//  QUESTÃO 10: Diferença Entre Maior e Menor
function amplitude() {
    let lista = [10, 5, 20, 1];
    let maior = lista[0];
    let menor = lista[0];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] > maior) maior = lista[i];
        if (lista[i] < menor) menor = lista[i];
    }
    console.log("Diferença:", maior - menor);
}
amplitude();