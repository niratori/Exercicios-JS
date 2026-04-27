// QUESTÃO 2: Contar Números Pares
function contarPares() {
    let lista = [1, 2, 3, 4, 5, 6];
    let contador = 0;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] % 2 === 0) {
            contador++;
        }
    }
    console.log("Pares:", contador);
}
contarPares();