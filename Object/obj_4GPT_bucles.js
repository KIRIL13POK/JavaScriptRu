/*
El ejercicio consiste en lo siguiente: tienes que escribir un programa en JavaScript que genere una serie de números y luego los imprima en la consola. Sin embargo, hay algunas reglas que debes seguir:

   -1- El programa debe generar números del 1 al 100.
   -2- Si el número es divisible por 3, en lugar de imprimirlo, debes imprimir la palabra "Fizz".
   -3- Si el número es divisible por 5, en lugar de imprimirlo, debes imprimir la palabra "Buzz".
   -4- Si el número es divisible tanto por 3 como por 5, debes imprimir la palabra "FizzBuzz".
*/


for(let i = 0 ; i<=100; i++){
    
    if(i%3===0 && i%5===0){
        console.log("FizzBuzz")
        
    }else if(i%3===0 ){
        console.log("Fizz")
        
    }else if(i%5===0){
        console.log("Buzz")

    }else{
        console.log(i)
    }
        

}

/* 
El ejercicio consiste en lo siguiente: debes escribir un programa en JavaScript que genere un número aleatorio entre 1 y 100. Luego, debes calcular la suma y el producto de los dígitos de ese número y mostrar los resultados en la consola.
-- Generar un número aleatorio entre 1 y 100
-- Convertir el número en una cadena de texto
-- Calcular la suma de los dígitos
-- Calcular el producto de los dígitos
*/
const numeroAleatorio = Math.floor(Math.random() * 100);

const numeroTexto = numeroAleatorio.toString();

let suma = 0;
for(let s = 0; s < numeroTexto.length; s++){
    suma = suma + parseInt(numeroTexto[s]) 
}

let producto = 1;
for(let p = 0; p < numeroTexto.length; p++){
    producto = producto * numeroTexto[p]
}



console.log("Número generado:", numeroAleatorio);
console.log("Suma de los dígitos:", suma);
console.log("Producto de los dígitos:", producto);