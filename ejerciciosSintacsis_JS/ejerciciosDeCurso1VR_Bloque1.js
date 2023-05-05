'use strict';
/*
Utilizando un bucle, mostrar la suma y la media de los introducidos hasta introducir un numero negativo y ahi mostrar un resultado.
*/

//1)
let contador = 0;
let suma = 0;
let laMedia = 0;
let numero = parseInt(prompt("introduce un numero"));

while (numero >= 0) {
    suma += numero;
    numero = parseInt(prompt("introduce un numero", 0));
    contador++;
}
laMedia = suma / contador;

alert("La media es " + laMedia);

//2)
/*Sería hacer un programa que muestre todos los números que hay entre dos números introducidos por el usuario.
*/
let numero2_1 = +prompt("Introduce un numero:");
let numero2_2 = +prompt("Introduce otro numero:");
for (let i = numero2_1 + 1; i < numero2_2; i++) {
    console.log(`Los numeros que estan entre ${numero2_1} y ${numero2_2} --> ${i}\n`)
};

//3)
/*Este ejercicio va a consistir en mostrar todos los números impares que estén entre dos números introducido.
*/

let numero3_1 = +prompt("Introduce un numero:");
let numero3_2 = +prompt("Introduce otro numero:");
for (let i = numero3_1 + 1; i < numero3_2; i++) {
    if (i % 2 !== 0) {
        console.log(`los numeros impares es: ${i}`)
    }
};

//4)
/*Vamos a hacer un programa que muestre todos los números divisores de un número introducido en un prompt.
Un número es divisor de otro número cuando al dividirlo entre sí te da como resto 0.(%)
*/

let numero4 = +prompt("Introduce un numero:");

for (let i = 1; i <= numero4; i++) {
    if (numero4 % i == 0) {
        console.log(`el Numero divisor de ${numero4} es ${i}.`)
    }
};

//5)
/* Hacer un programa que nos diga si un número es par o impar.
Tiene que comprobar si cuando metemos un número no es válido que nos vuelva a pedir el número.
*/

let numero5 = prompt("Introduce un numero:");
while (isNaN(numero5)) {
    numero5 = +prompt("Introduce un numero:");
}
if (numero5 % 2 == 0) {
    console.log("El numero introducido es par:")
} else {
    console.log("El numero introducido es impar.")
};

//6)
/*Hacer simplemente es la tabla de multiplicar de un número introducido por pantalla ver
tabla de multiplicar de un número introducido por pantalla.
*/

let numero6 = +prompt("Introduce un numero de 1 a 10:");
for (let i = 1; i <= 10; i++) {
    console.log(`${numero6} * ${i} = ${numero6 * i}.`)
};

//7)
/*Hacer una calculadora:
-que pida dos números por pantalla. 
-que si metemos mal un número nos vuelve a pedir que lo introduzcamos.
-que nos muestree  por la consola el resultado de sumar, restar, multiplicar y dividir esas dos cifras que hemos pedido anteriormente.
*/

let numero7_1 = +prompt("Introduce un numero 1:");
let numero7_2 = +prompt("Introduce un numero 2:");

while ( numero7_1 < 0 || isNaN(numero7_1) || numero7_2 < 0 ||isNaN(numero7_2)) {
    numero7_1 = +prompt("Introduce un numero 1:");
    numero7_2 = +prompt("Introduce un numero 2:");
}
console.log(`${numero7_1} + ${numero7_2} = ${numero7_1 + numero7_2}`)
console.log(`${numero7_1} - ${numero7_2} = ${numero7_1 - numero7_2}`)
console.log(`${numero7_1} / ${numero7_2} = ${numero7_1 / numero7_2}`)
console.log(`${numero7_1} * ${numero7_2} = ${numero7_1 * numero7_2}`)








