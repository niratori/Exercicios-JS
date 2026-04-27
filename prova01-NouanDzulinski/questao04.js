// QUESTÃO 4: Contar Vogais em uma String
function contarVogais() {
    let texto = "javascript";
    let vogais = "aeiou";
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (vogais.includes(texto[i])) {
            contador++;
        }
    }
    console.log("Vogais:", contador);
}
contarVogais();