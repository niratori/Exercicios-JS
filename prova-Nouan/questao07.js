// QUESTÃO 7: Encontrar Números Repetidos
function acharRepetidos() {
    let lista = [1, 2, 3, 2, 4, 1];
    let repetidos = [];
    for (let i = 0; i < lista.length; i++) {
        for (let j = i + 1; j < lista.length; j++) {
            if (lista[i] === lista[j] && !repetidos.includes(lista[i])) {
                repetidos.push(lista[i]);
            }
        }
    }
    console.log("Repetidos:", repetidos);
}
acharRepetidos();