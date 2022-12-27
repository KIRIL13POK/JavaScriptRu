"use strictr";
/*Ejercicio #1
Pedir dos números y decir si son múltiplos o no.
*/

//let num1 = +prompt("Intoduce un numero:");
//let num2 = +prompt("Intoduce un numero:");

function multiplosNoMultiplos(num1, num2) {
    if (num1 % num2 === 0 || num2 % num1 === 0) {
        console.log('Los numeros son múltiplos.')
    } else {
        console.log('Los numeros NO son múltiplos.')
    }
};

//multiplosNoMultiplos(num1, num2) 

/*Ejercicio #2
Pedir dos números y decir cual es el mayor.
*/

function numeroMayor(num1, num2) {
    if (num1 > num2) {
        console.log(`De los dos numeros el mayor es ${num1}.`);
    } else {
        console.log(`De los dos numeros el mayor es ${num2}.`);

    };
};

//numeroMayor(num1, num2);

/*Ejercicio #3
Pedir un número y decir si es un número negativo, si es positivo o cero.
*/

function numeroPositivoNegativoIgual(num1) {
    if (num1 < 0) {
        console.log(`El numero es negativo.`);
    } else if (num1 > 0) {
        console.log(`El numero es positivo.`);
    } else {
        console.log(`El numero es igual a 0.`);
    }
};

//numeroPositivoNegativoIgual(num1);

/* Ejercicio #4
Pedir una calificación  de 0 a 10 y mostrar de la siguiente manera: Insuficiente, Suficiente, Bien, Excelente.
*/

let nota = +prompt("", 0)
function calificacion(nota) {
    if (nota > 0 && nota < 5) {
        console.log("Insuficiente");
    } else if (nota == 5 ) {
        console.log("Suficiente");
    } else if (nota > 5 && nota <= 8 ) {
        console.log("Bien");
    } else if (nota > 8 && nota <= 10) {
        console.log("Excelente");
    } else {
        console.log("La nota no es correcta");
    }//
};

calificacion(nota);

/*Ejercicio #5
Pedir una hora, minuto y segundo y mostrar la hora en el segundo siguiente
*/

/*Ejercicio #6
Juan tiene N dólares, David tiene la mitad de lo que posee Juan y José la mitad de lo que poseen Juan y David juntos. Mostrar el promedio de la cantidad de dinero que tienen entre los tres y redondearlo.
--Math.round()
*/

//let dolaresDeJuan = +prompt("Cuanto dinero tine David?", 0);

function losDineros(dolaresDeJuan) {
    let dolaresDeDavid = dolaresDeJuan * 0.5;
    let dolaresDeJose = (dolaresDeJuan + dolaresDeDavid) * 0.5;
    let promedioDeTodo = (dolaresDeJuan + dolaresDeDavid + dolaresDeJose) / 3;

    console.log(`Juan tiene ${dolaresDeJuan}$.`)
    console.log(`David tiene ${dolaresDeDavid}$.`)
    console.log(`Jose tiene ${dolaresDeJose}$.`)
    console.log(`El promedio es ${Math.round(promedioDeTodo)}$`);
};

//losDineros(dolaresDeJuan)

/*Ejercicio #7
Pedir un String y mostrar true si tiene 5 caracteres o mas, caso contrario, mostrar false utilizar el operador ternario.
*/

let str1 = "Bioparc";
let str2 = "pipa";
let str3 = "Hola Mundo";

function caracteresString(mainString) {
    let long = mainString.length
    long >= 5 ? console.log(true) : console.log(false)
    //mainString.length >= 5 ? console.log(true) : console.log(false)--- esta opcion seria la mejor.
    console.log(long);
};

//caracteresString(str1);
//caracteresString(str2);
//caracteresString(str3);

/*Ejercicio #8
Pedir tres números enteros con un valor del 1 al 10, sacar el promedio de los tres números y mostrar true si el promedio es mayor a 5 caso contrario mostrar false, utilizar el operador ternario.
*/

//let num1 = +prompt("Intoduce un numero de 1 a 10:", 0);
//let num2 = +prompt("Intoduce un numero de 1 a 10:", 0);
//let num3 = +prompt("Intoduce un numero de 1 a 10:", 0);

function elPromedioDeLosTres(num1, num2, num3) {
    let promedio = (((num1 + num2 + num3) / 3) > 5) ? true : false;//--- esta opcion la mejor.
    console.log(promedio);

    //let promedio = (num1 + num2 + num3) / 3;
    //promedio > 5 ? console.log(true) : console.log(false);
};

//elPromedioDeLosTres(num1, num2, num3);

/*Ejercicio #9
Pedir una str de texto si al menos tiene una letra mayúscula mostrar false si todas son minúsculas mostrar true, utilizar el operador ternario.
*/

function lasLetras(cadena) {
    let comparacion = cadena;
    const respuesta = (comparacion.toLowerCase() === cadena) ? true : false;
    console.log(respuesta)
};

//lasLetras(str1);
//lasLetras(str2);
//lasLetras(str3);

/*Ejercicio #10
Crear un número aleatorio entre el 1 y 20, si es par mostrar true seguido el número si es impar mostrar  false seguido del número, utilizar el operador ternario.
--Math.ceil
--(Math.random() * 20);-asi el numero es un numero inrtero de 1 a 20.
*/

let aleatorio = Math.ceil(Math.random() * 20);
function parImpar(num){
    const respuesta = (num % 2 === 0) ? true : false
    console.log(`EL numero es par?${num}---${respuesta}.`)
};

//parImpar(aleatorio);










