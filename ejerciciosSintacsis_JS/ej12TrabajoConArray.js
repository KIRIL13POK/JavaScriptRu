/*
Задачи на работу с массивами, часть 2

3) Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.

Пример:
const someString = 'This is some strange string';
reverse(someString) => 'gnirts egnarts emos si sihT'

Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение "Ошибка!"

4) Представьте такую реальную ситуацию. У вас есть банкомат, который выдает деньги из двух разных банков в разных валютах. Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: первый - это массив со всеми доступными валютами из двух банков сразу (сейчас представим, что они не могут повторяться), второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'. Функция возвращает строку в нужном виде.

Пример:

availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
Вернет строку:

Доступные валюты:
UAH
RUB
Заметьте:

- CNY (юань) исчез из списка валют, значит такая валюта закончилась

- После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов

- Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies, потом additionalCurrencies по порядку

Ответ с кодом этих задач можно найти тут: ссылка

Если у вас получилось немного по другому, но решение засчитывается - то все в порядке. Помните, что вариантов решения всегда несколько.


****************************/
"use strict";
//3)
const someString = 'This is some strange string';
const maneras = " Maneras de invertir una cadena en JavaScript";
const num = [4, 3, 6, 8];

function reverse(line) {
    if (typeof (line) !== 'string') {
        console.log("Ошибка!");
    } else {
        console.log(`${line}`);
        console.log(`${line.split("").reverse().join("")}`)

    }

    /* 1)El método split() separa un objeto de cadena en un arreglo de cadena al separar la cadena en subcadenas.("")
       2)El método reverse() invierte un arreglo. El primer elemento del arreglo 
    se convierte en el último y el último se convierte en el primero. 
       3)El método join() une todos los elementos de un arreglo en una cadena.("")
    *************************************************************/

};
reverse(someString);
reverse(maneras);
reverse(num);


function reverseArr(mainArray) {
    console.log(`${mainArray}`);
    console.log(`${mainArray.reverse()}`)
    //En el caso para invertir elementos de un array es suficiente solo el metodo reverse().

};
reverseArr(num);

function reverseConBucle(line) {
    if (typeof (line) !== 'string') {
        console.log("Ошибка!");
    } else {
        let reverceLine = "";
        for (let i = line.length - 1; i >= 0; i--) {
            reverceLine += line[i];
        }
        console.log(line);
        console.log(reverceLine);

    }

    // Paso 1. Crear una cadena vacía que almacenará la nueva cadena creada
    // Paso 2. Crear el bucle FOR
    /* El punto de partida del bucle será (argumeto.length - 1) que corresponde al último caracter de la cadena.
       Mientras i sea mayor que o igual a 0, el bucle se ejecutará
       Decrementamos i después de cada iteración */
    //nuevaCadena = nuevaCadena + argumento[i];
};

reverseConBucle(someString);
reverseConBucle(maneras);
reverseConBucle(num);


//4) Copiado/falta repasar.(por no entender de que se trata)
const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    arr.forEach(function(curr, i) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });

    // Или
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === missingCurr) {
    //         continue;
    //     }
    //     str += `${arr[i]}\n`;
    // }

    return str;
}

availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY')


