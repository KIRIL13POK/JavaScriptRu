'use strict';

/*Ejercicio #1
Ingrese un número y mostrar su potencia n^2, repetir este proceso hasta que se ingrese un número negativo.
¿Qué es potencia de n?Resultado de imagen de mostrar su potencia n^2
Potencia de un número natural.Potencia: es multiplicar varias veces el mismo número por sí mismo. El número que multiplicamos se llama base, y el exponente es el número de veces que se multiplica.
--- Math.pow() devuelve la base elevada al exponente.
*/

//let num = +prompt("Ingrese un número: ");

function raizCuadrada(num) {
    let cuadrado = 0;

    while (num > 0) {
        cuadrado = Math.pow(num, 2);
        console.log(`La potencia de ${num} es igual a ${cuadrado}`);
        //nueva entrada
        num = +prompt("Ingrese un número: ");
    }
    console.log('Fin del programa')

};
//raizCuadrada(num);

/*Ejercicio #2
Pedir un numero hasta que se ingrese un numero negativo, luego mostrar cuantos números se introdujeron.
*/

//let num2 = +prompt("Ingrese un número: ");

function hastaNegativo(num2) {
    let contador = 0;

    while (num2 >= 0) {

        num2 = +prompt("Ingrese un número: ");
        contador++;
    }
    console.log(` Despues de ${contador} interacciones: Fin del programa : (${num2} ) es un numero negatiovo.`)
};

//hastaNegativo(num2);

/*Ejercicio #3
Pedir un numero hasta que se ingrese el numero 0 o negativo, luego mostrar la suma de todos los números ingresados.
*/

//let num3 = +prompt("Ingrese un número: ");

function hastaCeroOrNegativo(num3) {
    let sum = 0;
    while (num3 > 0) {
        num3 = +prompt("Ingrese un número: ");
        console.log(num3) // para ver que numeros estoy metiendo y sumando.
        sum += num3
        /*if(num3 > 0) para que el ultimo numero negativo no afecte a la summa por ejemplo.
        sum += num3*/
    }
    console.log(`Fin de programma: la suma de todos los números ingresados es : ${sum}.`)
};

//hastaCeroOrNegativo(num3)

/*Ejercicio #4
Realizar un juego para poder adivinar un número, Para ello pedir un número N al principio y luego ir pidiendo más números indicando al usuario ‘ingrese un número MAYOR’ o ‘ingrese un número MENOR’ según sea mayor o menor con respecto al numero N generado, El proceso terminara cuando adivine el usuario el Numero generado por el juego.
--- Math.ceil(Math.random() -para pedir un numero aleatorrio, un numero intero.

*/

//let n = Math.ceil(Math.random() * 15);
//let num4 = +prompt("Ingrese un número de 0 a 15: ");

function adivinarNumero() {
    while (num4 !== n) {
        if (num4 < n) {
            num4 = +prompt("Ingrese un número MAYOR ");
        } else {
            num4 = +prompt("Ingrese un número MENOR ");
        }
    }
    console.log(`Correcto. El numero secreto es ${n}.`);
};

//adivinarNumero(n);

/*Ejercicio #5
Pedir números hasta que se introduzca un número negativo y calcular la media, mostrar máximo con dos decimales.
--- .toFixed(x)- x indica máximo de decimales.
*/

//let num5 = +prompt("Ingrese un número : ");
//let contador = 0;
//let suma = 0;

function pedirNumerosHacerLaMedia() {
    console.log(num5);
    while (num5 > 0) {
        suma += num5;
        contador++;
        num5 = +prompt("Ingrese otro número : ");
        console.log(num5)
    }
    console.log(`La summa es ${suma}.`)
    console.log(`El número total de valores es ${contador}.`)
    console.log("La media es : " + (suma / contador).toFixed(2) + ".");
};

//pedirNumerosHacerLaMedia(num5)










