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

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

console.log(students);

function sortStudentsByGroups(arr) {

    let sortedNames = arr.sort();
    console.log(sortedNames);
};
//sortStudentsByGroups(students);
console.log(`${students} despues de llamar la función.`);
/*En un primer vistazo, esto podría darnos a entender que se ha creado un nuevo array con el orden alfabético, pero comprobemos que tanto el nuevo array sortedNames como el original students han sido modificados.
 -structuredClone() para hacer una copia y que sea independiente:*/
console.log("******************************")
console.log(students);

function sortStudentsByGroupsClone(arr) {
    let sortedNames = structuredClone(arr).sort();
    console.log(sortedNames);
};
sortStudentsByGroupsClone(students);
console.log(`${students} despues de llamar la función con structuredClone().`);//En este caso despues de hacer  un cambio con sortStudentsByGroups(students) el array students queda modificado.
