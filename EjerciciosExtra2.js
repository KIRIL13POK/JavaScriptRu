
'use strict';

/*Ejercicio #1
Crear una función que tome como parámetro un arreglo, retornar el último elemento del arreglo.*/
const numero = [1, 2, 3, 4, 5];
const numero1 = [12, 34, 56];
const numero2 = [11, 23, 333, 43, 12, 22, 43];
const numero3 = [12, 34, -8, -17]
const palabras = ["Mesa", "Silla", "Sillón", "Ventana", "Puerta",]
const nombres = ["Alex", "Susana", "Pedro", "Fran"]

function ultimoElemento(mainArray) {
    console.log(mainArray[mainArray.length - 1]);
};
//ultimoElemento(numero);
//ultimoElemento(palabras);
//ultimoElemento(nombres);

/*Ejercicio #2
Crear una función que tome como parámetro un arreglo, retornar el primer elemento del arreglo.*/

function primerElemento(mainArray) {
    console.log(mainArray[0]);
};
//primerElemento(numero);
//primerElemento(palabras);
//primerElemento(nombres);

/*Ejercicio #3
Crear una función que tome como parámetro un arreglo y un número, retornar un nuevo arreglo con todos los elementos y el número agregado al final del arreglo.*/

function numeroAgregado(mainArray, num) {
    mainArray.push(num);
    console.log(mainArray)
};
//numeroAgregado(nombres, 5)
//numeroAgregado(numero, 5)
//numeroAgregado(palabras, 5)

/*Ejercicio #4
Crear una función que tome como parámetro un arreglo de números, retornar la suma de todos los elementos del arreglo.*/

function summaDeElementos(mainArray) {
    let resultadoDeSumar = 0;
    for (let i = 0; i < mainArray.length; i++) {
        resultadoDeSumar += mainArray[i];
    };
    console.log(`La suma de todos los elementos del arreglo es : ${resultadoDeSumar} .`);
};
//summaDeElementos(numero);

/*Ejercicio #5
Crear una función que tome como parámetro un arreglo de números, retornar el promedio de todos los elementos del arreglo.
Promedio Esta es la media aritmética y se calcula agregando un grupo de números y dividiendo por el recuento de esos números. Por ejemplo, el promedio de 2, 3, 3, 5, 7 y 10 es 30 dividido por 6, que es 5. Mediana Es el número medio de un grupo de números.*/
function promedioDeArray(mainArray) {
    let resultadoDeSumar = 0;
    let recuento = 0;
    for (let i = 0; i < mainArray.length; i++) {
        resultadoDeSumar += mainArray[i];
        recuento++
    };
    console.log(`La suma de todos los elementos del arreglo es : ${resultadoDeSumar} .`);
    console.log(`El recuento de los números de array es ${recuento}.`);
    let promedio = resultadoDeSumar / recuento;
    console.log(`El promedio de todos los elementos del arreglo:--- ${promedio}.`);

};
//promedioDeArray(numero);
//promedioDeArray(numero1);
//promedioDeArray(numero2);

/* Ejercicio #6
Crear una función que tome como parámetro un arreglo de números, retornar el número mas mayor.(...array)---LOs tres puntos forman parte de la sintaxis, sin puntos es NaN.
*/
function numMayor(mainArray) {
    console.log(Math.max(...mainArray))

};
//numMayor(numero);
//numMayor(numero1);
//numMayor(numero2);

/* Ejercicio #7
Crear una función que tome como parámetro un arreglo de números, retornar el número mas menor, si es un número negativo mostrar su valor absoluto.
--Math.abs()
*/
function numMenor(mainArray) {
    let elMenor = Math.min(...mainArray);
    if (elMenor < 0) {
        elMenor = Math.abs(elMenor);
    }
    console.log(`El número  menor es : ${elMenor} .`);
};
//numMenor(numero3);
//numMenor(numero);

/* Ejercicio #8
Crear una función que tome como parámetro un arreglo de Strings, retornar un valor de tipo --String con todos los elementos del arreglo separados por un espacio.
 arreglo.join(' ');
*/
function soloUnValor(mainArray) {
    let resultado = mainArray.join(' ');
    console.log(mainArray);
    console.log(resultado);

};
//soloUnValor(palabras);
//soloUnValor(nombres);

/*Ejercicio #9
Crear una función que tome como parámetro un arreglo de números, retornar nuevo arreglo invertido los elementos ej. [1,2,3] => [3,2,1].
--reverse(); tmb se podria usar structuredClone(array)- para creear una array independiente.
Solo utilizando reverse() simpre cambiamos (midificamos) en el array original.
*/
function arrInvertido(mainArray) {
    let elInvertido = structuredClone(mainArray).reverse();
    console.log(`La inversión de ${mainArray} es ${elInvertido}.`)
};
//arrInvertido(numero);
//arrInvertido(numero1);
//arrInvertido(numero2);
//arrInvertido(numero3);

/*Ejercicio #10
Crear una función que tome como parámetro un arreglo de números, retornar un dato de tipo número con la suma de todos los números pares.
--.filter(number =>  los elementos que deseamos (segun ciertos criterios)) Lo probe para crear un nuevo array solo de numeros pares de mainArray.
*/
function sumaDeNumerosPares(mainArray) {
    let sumaPares = 0
    let numerosPares = mainArray.filter(number => number % 2 == 0 );
    
    for (let i = 0; i < mainArray.length; i++) {
        if (mainArray[i] % 2 == 0) {
            sumaPares += mainArray[i]
        }
    }
    console.log(mainArray);
    console.log(numerosPares);
    console.log(`Los numeros pares del array son ${numerosPares}.`)
    console.log(`La suma de todos los números pares es: ${sumaPares}.`)

};
sumaDeNumerosPares(numero);
sumaDeNumerosPares(numero1);
sumaDeNumerosPares(numero2);
sumaDeNumerosPares(numero2);


