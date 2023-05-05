/*Задачи:

1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки.  Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"
Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

****************************/
'use strict';

//let minuteTotal = +prompt(" функцию принимает в себя целое число минут", 0);

function calculateHours(time) {
    if (typeof (time) !== 'number' || time < 0 || !Number.isInteger(time)) {
        alert("Ошибка, проверьте данные.");
    }
    const hours = Math.floor(time / 60);
    const minute = time % 60;

    let outcomeHoursAndMinute = "";
    if (hours == 1) {
        outcomeHoursAndMinute += `${hours} час и ${minute} минут.`
    } else if (hours == 0 || hours < 5) {
        outcomeHoursAndMinute += `${hours} часа и ${minute} минут.`
    } else {
        outcomeHoursAndMinute += `${hours} часов и ${minute} минут.`
    }
    console.log(outcomeHoursAndMinute);
};
//calculateHours(minuteTotal);


let num1 = +prompt("Напишите число");
let num2 = +prompt("Напишите число");
let num3 = +prompt("Напишите число");
let num4 = +prompt("Напишите число");

function greaterNumber(n1, n2, n3, n4) {
    if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4)) {
        console.log("error")
        return 0;
    }else{
       let outerGreatNumber = Math.max(n1, n2, n3, n4);
       console.log(`самое большее число: ${outerGreatNumber}.`)
    }
    
};
greaterNumber(num1, num2, num3, num4)