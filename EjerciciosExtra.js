/* 
Ejercicio #1
Crea una función llamada numeroMayor() que toma tres números como entrada y retornar el numero mayor de ellos, si son iguales devolver un String «son iguales».
Ejercicio #2
Escriba una función con el nombre de esVocal() que tome un carácter , devuelva True si es vocal (no importa si es mayúscula o minúscula), y devuelva False en caso contrario.
Ejercicio #3
Crea una función llamada generar_caracteres() que tome como parámetro un número entero (n) y un carácter, retornar el carácter multiplicado por n. Por ejemplo, generar_caracteres(5,x), debería retornar «xxxxx».
Ejercicio #4
Crear una función inversa() que calcule la inversión de una cadena y lo retorne. Por ejemplo, la cadena «Hola Mundo» debería retornar la cadena «odnum aloh» (retornar todo el String en minúsculas).
Ejercicio #5
Crear una función sumaArreglo() que tome como parámetro un arreglo de números, retornar la longitud del arreglo + la suma de todos los números del arreglo. 
Ejercicio #6
Crear una función multiplicarArreglo() que tome como parámetro un arreglo de números, retornar la multiplicación del número menor del arreglo y el número mayor del arreglo.
Ejercicio #7
Crear una función con el nombre de booleanoArray() que tome dos arreglos de números como parámetro y que retorne un booleano, unir los dos arreglos en uno solo, si la longitud de el nuevo arreglo es mayor o igual a 10 que retorne true si es menor a 10 que retorne false.
Ejercicio #8
Crear una función con el nombre de funcionArray() que tome dos arreglos de números enteros como parámetro y retornar un único arreglo, cada elemento del arreglo debe estar multiplicado por dos. ej: [2,5,2][1,5,3] -> [4,10,4,2,10,6].

*/
'use strict';
//Ejercicio #1.
//let n1 = +prompt(`Introduce un numero`);
//let n2 = +prompt(`Introduce un numero`);
//let n3 = +prompt(`Introduce un numero`);

function numeroMayor(n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
        console.log(`EL mayor numero de ${n1}, ${n2}, ${n3}  es : ${n1}.`);
    } else if (n2 > n1 && n2 && n3) {
        console.log(`EL mayor numero de ${n1}, ${n2}, ${n3}  es: ${n2}.`)
    } else if (n3 > n1 && n3 > n2) {
        console.log(`EL mayor numero de ${n1}, ${n2}, ${n3}  es: ${n3}.`)
    } else
        console.log(`Los numeros son iguales.`)

};
//numeroMayor(n1, n2, n3);

//Ejercicio #2
//let letra = prompt("INTRODUZE UNA LETRA:")
function esVocal(letra) {
    let resultado;
    if (letra === 'e' || letra === 'y' || letra === 'u' || letra === 'o' || letra === 'a') {
        resultado = true;
    } else if (letra === 'E' || letra === 'Y' || letra === 'U' || letra === 'O' || letra === 'A') {
        resultado = true;
    } else {
        resultado = false;
    }
    console.log(`La letra es vocal?---${resultado}---`)
    return resultado;
};
//esVocal(letra);
// Ejercicio #3
//let num = prompt("Introduce el numero: ")
//let caracter = prompt("Introduce el caracter: ")
function generarCaracteres(num, caracter) {
    let resultado = "";

    //if (typeof (num) !== 'number' || num < 0 || Number.isInteger(num)) {
    // console.log(`Error ${num} no es un numero`)
    //}

    for (let i = 0; i < num; i++) {
        resultado += caracter;
    }
    console.log(`---${resultado}---`);
};
//generarCaracteres(num, caracter);
//Ejercicio #4

//let frase = prompt("Introcue una frase:")
function inversa(frase) {
    console.log(frase.split(""));
    let fraseInversa = (frase).toLowerCase().split('').reverse().join('');;
    console.log(`${fraseInversa}`);
};
//inversa(frase);
//Ejercicio #5
/*Crear una función sumaArreglo() que tome como parámetro un arreglo de números, retornar la longitud del arreglo + la suma de todos los números del arreglo. */


//Ejercicio #6

const numeros = [1, 2, 3, 4, 5]
const numeros2 = [12, 34, 45, 65, 2324]
function multiplicarArreglo(mainArreglo) {
    let numMayor = Math.max(...mainArreglo);
    let numMenor = Math.min(...mainArreglo);
    console.log(`El numero mayor de arreglo es: ${numMayor}.`)
    console.log(`El numero menor de arreglo es : ${numMenor}.`)
    let resultadoFinal = numMayor * numMenor;
    console.log(`La multiplicación del número menor y el número mayor del arreglo es : ${resultadoFinal}.`)
};
//multiplicarArreglo(numeros);
//multiplicarArreglo(numeros2);

//Ejercicio #7  1)Array.prototype.concat()

 
const elN1 = [1, 2, 3, 4, 43, 32, 21];
const elN2 = [23, 34,5, 4, 3,];
const elN3 = [3, 13, 31];


function booleanoArray(arr1, arr2){
    let union = arr1.concat(arr2);
    console.log(`El resultado de la union es: ${union}.`);
    console.log(union);
    let respuesta;
    union.length >= 10 ? respuesta = true : respuesta = false;
    console.log(`La longitud de el nuevo arreglo es mayor o igual a 10.---${respuesta}.`)

};
//booleanoArray(elN1, elN2);
//booleanoArray(elN2, elN3);
//booleanoArray(elN1, elN3);

  //*Ejercicio #8 
  /*1)map() El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos*/
  
function funcionArray(arr1, arr2){
    let arrGrande = arr1.concat(arr2);
    console.log(arrGrande);
    for(let i = 0; i < arrGrande.length; i++){
        console.log( arrGrande[i]*2);
    }
     arrGrande = arrGrande.map((elemento) => {
        return elemento * 2
    });
    console.log("El resultado es : " + arrGrande);
  

};
funcionArray(elN1, elN2);
funcionArray(elN1, elN3);
funcionArray(elN3, elN2);














