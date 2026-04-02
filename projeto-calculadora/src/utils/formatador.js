export default function
formatarMoeda(valor) {
    // Se o valor for um numero, colocar R$ e mais duas casas decimais
    if (typeof valor === 'number') {
        return `R$ ${valor.toFixed(2)}`;
    }
    // Se for uma mensagem de erro/string, tem que retornar o texto direto
    return valor;
}