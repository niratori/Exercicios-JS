// QUESTÃO 9: Verificar se uma Palavra é um Palíndromo
function verificarPalindromo() {
    let palavra = "arara";
    let invertida = "";
    for (let i = palavra.length - 1; i >= 0; i--) {
        invertida += palavra[i];
    }
    console.log(palavra === invertida ? "Sim" : "Não");
}
verificarPalindromo();