// QUESTÃO 6: Somar Números Pares
function somarPares() {
    let lista = [1, 2, 3, 4, 5, 6];
    let soma = 0;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] % 2 === 0) {
            soma += lista[i];
        }
    }
    console.log("Soma Pares:", soma);
}
somarPares();