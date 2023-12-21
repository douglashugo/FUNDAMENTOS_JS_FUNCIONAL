/*
Ela é usada para criar um novo array a partir de outro, 
aplicando uma função a cada elemento do array original. 
Essa função é chamada para cada elemento, 
e o resultado dessa chamada é usado como elemento no novo array resultante.
*/

const numbers = [1, 2, 3, 4, 5, 6]

//função anônima
const numbersDobradoAnonima = numbers.map(function(el) {
    return el * 2;
})

//arrow function
const numbersDobradoArrow = numbers.map((el) => {
    return el * 2;
})

//arrow function reduzida
const numbersDobradoArrowReduzida = numbers.map(el => el * 2);

console.log(numbersDobradoAnonima);
console.log(numbersDobradoArrow);
console.log(numbersDobradoArrowReduzida);


//Manipulando array de objetos
const students = [
    { name: 'Joao', score: 6.4},
    { name: 'Pedro', score: 7.1},
    { name: 'Ana', score: 5.3},
    { name: 'Maria', score: 9.6},
]

const getScore = el => el.score

const result = students
        .map(getScore)
        .map(Math.floor)

console.log(result)