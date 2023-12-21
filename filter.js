/*
Filter:
Usada para criar um novo array contendo apenas os elementos do array original que atendem a uma determinada condição. 
Ela não modifica o array original, mas retorna um novo array com os elementos filtrados.
*/


//Manipulando array de objetos
const students = [
    { name: 'Joao', score: 6.4},
    { name: 'Pedro', score: 7.1},
    { name: 'Ana', score: 5.3},
    { name: 'Maria', score: 9.6},
]

const filterNotas = el => el.score > 7

const result = students.filter(filterNotas);

console.log(result)