/*Задачи на работу с массивами
В этих заданиях  работа с массивами.

Задачи:

1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.

showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'

Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'

2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.

Пример:

standardizeStrings(favoriteCities)  выведет в консоль:

lisbon
rome
milan
dublin
Это частая задача в реальности, так как от пользователя нам могут прийти ответы в самых разных форматах. В том числе и с разными буквами :) Поэтому нам нужно привести строки в один формат для правильной работы.

********************************/
"use strict";
//1)
let family = ["Peter","Ann","Alex"," Linda"];

function showFamily(mainArr){
    let familyMembers = "";
     mainArr.length === 0 ? familyMembers = "Семья пуста" : familyMembers = "Семья состоит из:";

     mainArr.forEach(function(member){
        familyMembers +=` ${member} `
     });
     console.log(familyMembers);
     return familyMembers;
  
};
showFamily(family);

//2)
let capitalCity = ["lisbon", "rome", "milan", "dublin",];

function showCapitalCity(mainArr){
    let capitalCity = "";
    mainArr.forEach(function(city){
        //Asi me permite modificar y ver city empezando con mayuscula.
        capitalCity += `${city.charAt(0).toUpperCase()}`;
        let lowercaseLetters = city.slice(1);
        capitalCity += `${lowercaseLetters}\n`;
        
       // capitalCity += ` ${city.toUpperCase() }\n`;-Este metodo modifica city y todas las letras son mayusculas.

    });
    console.log(capitalCity);
    return capitalCity;
};
showCapitalCity(capitalCity);



