// QUESTÃO 5: Inverter uma Palavra
function inverterPalavra() {
    let palavra = "cyber";
    let invertida = "";
    for (let i = palavra.length - 1; i >= 0; i--) {
        invertida += palavra[i];
    }
    console.log("Invertida:", invertida);
}
inverterPalavra();