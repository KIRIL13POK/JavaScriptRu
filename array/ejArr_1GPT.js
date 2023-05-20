
let numbers = [5, 2, 8, 1, 9, 3, 7, 4, 6];
console.log(numbers.indexOf(9))
console.log(numbers.includes(10))

let arrCuadrado = numbers.map( n => n * n )

console.log(numbers.map(n => n * n));

const numbers_31 = [4, 23, 8, 17, 9, 13, 29, 1, 12, 5, 31, 18, 7, 25, 3, 16, 27, 2, 21, 10, 19, 14, 30, 6, 20, 15, 28, 11, 22, 26, 24];


let numbers_31Par = numbers_31.filter(num => num % 2 !== 0)
console.log(numbers_31Par);


const obtenerPromedio = (arrNumeros) => {
    let summa = 0;
    let contador = 0;
    arrNumeros.forEach(numero => {
        summa += numero;
        contador++

    });

    let promedio = summa / contador
    console.log(`El promedio del array es ${promedio}.`)
    return promedio
};


obtenerPromedio(numbers_31);


const palabras = ['hola', 'programación', 'javascript', 'desarrollo', 'web', 'Puedes',];
const sinPalabras = [];

const encontrarPalabrasLargas = (arrPalabras, cantidadLetras) => {

    let nuevoArray = [];

    if (arrPalabras.length === 0) {
        console.log(`El array esta bacio: ${nuevoArray}.`)
        return nuevoArray = []
    }

    arrPalabras.forEach(palabra => {



        if (palabra.length >= cantidadLetras) {
            nuevoArray.push(palabra);

        }
        return nuevoArray;
    })

    console.log(nuevoArray);


}

encontrarPalabrasLargas(palabras, 8);
encontrarPalabrasLargas(sinPalabras, 5);



const personas = [
    { nombre: 'Ana', edad: 25 },
    { nombre: 'Carlos', edad: 30 },
    { nombre: 'Carlos', edad: 28 },
    { nombre: 'Beto', edad: 20 },
    { nombre: 'Ana', edad: 22 }
];
const personas_31 = [
    { nombre: 'Ana', edad: 25 },
    { nombre: 'Carlos', edad: 30 },
    { nombre: 'Beto', edad: 20 },
    { nombre: 'David', edad: 27 },
    { nombre: 'Elena', edad: 35 },
    { nombre: 'Fernando', edad: 42 },
    { nombre: 'Gabriela', edad: 28 },
    { nombre: 'Héctor', edad: 31 },
    { nombre: 'Isabel', edad: 29 },
    { nombre: 'Juan', edad: 37 },
    { nombre: 'Karen', edad: 24 },
    { nombre: 'Luis', edad: 33 },
    { nombre: 'Mónica', edad: 39 },
    { nombre: 'Natalia', edad: 26 },
    { nombre: 'Óscar', edad: 32 },
    { nombre: 'Patricia', edad: 36 },
    { nombre: 'Quintín', edad: 23 },
    { nombre: 'Roberto', edad: 40 },
    { nombre: 'Sara', edad: 27 },
    { nombre: 'Tomás', edad: 30 },
    { nombre: 'Úrsula', edad: 34 },
    { nombre: 'Víctor', edad: 41 },
    { nombre: 'Wendy', edad: 28 },
    { nombre: 'Xavier', edad: 25 },
    { nombre: 'Yolanda', edad: 29 },
    { nombre: 'Zoe', edad: 38 },
    { nombre: 'Andrés', edad: 22 },
    { nombre: 'Beatriz', edad: 31 },
    { nombre: 'Carmen', edad: 24 },
    { nombre: 'Daniel', edad: 32 },
    { nombre: 'Estela', edad: 27 },
    { nombre: 'Felipe', edad: 33 }

];


const ordenarPersonas = (arrPersosn) => {


    arrPersosn.sort((a, b) => {

        if (a.nombre < b.nombre) {
            return -1;
        }
        if (a.nombre > b.nombre) {
            return 1;
        }
        return 0;
    });


    console.log(arrPersosn);
};

ordenarPersonas(personas)
ordenarPersonas(personas_31)


const ordenarPersonasPorEdad = (arrPersosnas) => {

    arrPersosnas.sort((a, b) => {

        if (a.edad < b.edad) {
            return -1
        }
        if (a.edad > b.edad) {
            return 1
        }
        return 0
    });
    console.log(arrPersosnas);
}

ordenarPersonasPorEdad(personas)
ordenarPersonasPorEdad(personas_31)



