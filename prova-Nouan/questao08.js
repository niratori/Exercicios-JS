// QUESTÃO 8: Contagem de Letras
function frequenciaLetras() {
    let texto = "banana";
    let contagem = {};
    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];
        contagem[letra] = (contagem[letra] || 0) + 1;
    }
    console.log("Frequência:", contagem);
}
frequenciaLetras();