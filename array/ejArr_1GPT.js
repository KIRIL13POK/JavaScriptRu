let numbers = ['5', 2, 8, 1, 9, 3, 7, 4, 6];
console.log(numbers.indexOf (9))
console.log(numbers.includes  (10))

//let arrCuadrado = numbers.map( n => n * n )

console.log(numbers.map( n => n * n ));

const numbers_31 = [4, 23, 8, 17, 9, 13, 29, 1, 12, 5, 31, 18, 7, 25, 3, 16, 27, 2, 21, 10, 19, 14, 30, 6, 20, 15, 28, 11, 22, 26, 24];


let numbers_31Par = numbers_31.filter(num => num % 2 !== 0)
console.log(numbers_31Par);