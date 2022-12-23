/*
(*) Продвинутая задача на работу с объектами и массивами.

Задача:

У вас есть список учеников, которые хотят поиграть в игру:

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.

Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку. Эти группы должны быть массивами. Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.

Пример:

sortStudentsByGroups(students)  =>

[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: Takesi'
]
Если убрать одно студента из списка, то результат будет:

[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: -'
]
А если добавить одного, то:

[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: Takesi, Somebody'
]
То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда.
********************************************************/
"use strict";

const student = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Kiril', 'Vladimir'];

function formarEquipos(arr) {
    arr.sort()
    console.log(arr);
    let eq1 = [];
    let eq2 = [];
    let eq3 = [];
    let resto = [];

    for (let i = 0; i < arr.length; i++){
        if (i < 3) {
            eq1.push(arr[i]);
        } else if (i < 6) {
            eq2.push(arr[i]);
        } else if (i < 9) {
            eq3.push(arr[i]);
        } else {
            resto.push(arr[i]);
        }
    }
    console.log([eq1, eq2, eq3,]);
    resto === 0 ? resto = ["YA noqueda mas alumnos."] : resto = [resto.join(', ')]
    //El método join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.
    console.log(resto);
};
formarEquipos(student)

function sortStudentsByGroups(mainArr) {
    mainArr.sort()
    console.log(mainArr);
    let equipoUno = [];
    let equipoDos = [];
    let equipoTres = [];
    let resto = [];

    for (let i = 0; i < mainArr.length; i++) {//por  poner i = mainArr.length no me daba resultado deseado, todos lod array estaban (seguian)vacios al final .
        if (i < 3) {
            equipoUno.push(mainArr[i]);
        } else if (i < 6) {
            equipoDos.push(mainArr[i]);
        } else if (i < 9) {
            equipoTres.push(mainArr[i]);
        } else {
            resto.push(mainArr[i]);
        }
    }
    console.log([ equipoUno, equipoDos, equipoTres]);
    resto === 0 ? resto = ["YA noqueda mas alumnos."] : resto = [resto.join(', ')];
    console.log(resto);
    /*console.log([equipoUno, equipoDos, equipoTres, `Оставшиеся студенты: ${resto.length === 0 ? '-' : resto.join(', ')}`]);*/

};
sortStudentsByGroups(student);
/*
const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();
    const a = [], b = [], c = [], rest = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
            c.push(arr[i]);
        } else {
            rest.push(arr[i]);
        }
    }
    console.log([a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]);
    return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]
};

sortStudentsByGroups(students); */

