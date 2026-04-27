// QUESTÃO 3: Encontrar o Maior Número
function acharMaior() {
    let lista = [5, 12, 8, 99, 23];
    let maior = lista[0];
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > maior) {
            maior = lista[i];
        }
    }
    console.log("Maior:", maior);
}
acharMaior();