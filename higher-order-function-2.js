// Exemplo de higher order function
// Que atende a pelo menos um dos seguintes critérios:
// Aceita um ou mais funções como argumentos
// Retorna uma função como resultado

function finalPrice(tax) {
    return function(price) {
        return price * (1 + tax) 
    }
}

const newValue = finalPrice(0.0875)

console.log(newValue(22.1))
console.log(newValue(21.7))
console.log(newValue(105.9))