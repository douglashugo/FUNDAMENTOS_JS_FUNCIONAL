function operacaoMatematica(x, y, operacao) {
    return operacao(x, y);
}

function multiplicacao(x, y) {
    return x * y;
}

function divisao(x, y) {
    return x / y;
}

console.log(operacaoMatematica(4, 5, divisao))