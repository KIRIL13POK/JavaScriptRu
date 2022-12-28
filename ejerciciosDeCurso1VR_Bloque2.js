"use strict";
/*
 -Pida seis números por pantalla y los meta en una raíz.
 -Lo segundo tiene que mostrar el array entero.
 -Tenemos que ordenarlo y mostrarlo.
 -Invertir su orden y mostrarlo.
 -Mostrar cuántos elementos tiene el array .
 -Hacer una búsqueda de un valor introducido por el usuario. Que nos diga si está en el array y su posición (su índice).
*/
let mainArray = [];

for( let i = 0; i < 6; i++){
    //mainArray[i] = +prompt("introduce un numero.",0);
    mainArray.push(+prompt("introduce un numero.",0));
 //return mainArray
}
console.log(mainArray);
mainArray.sort(function(a, b){return a - b});
console.log(mainArray)
console.log(`El array tiene ${mainArray.length} elementos.`)
