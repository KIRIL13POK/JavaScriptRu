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
const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi',  ]

const formarEquipos = (mainArray) => {
const eq1 = [];
const eq2 = [];
const eq3 = [];
const eqResto = [];
    mainArray.sort();
    for (let i = 0; i < mainArray.length; i++) {
        if(i < 3){
            eq1.push(mainArray[i]);
        }else if (i < 6){
            eq2.push(mainArray[i]);
        }else if(i < 9){
            eq3.push(mainArray[i]);
        }else {
             eqResto.push(mainArray[i]);
        }
    }
    console.log(eq1,eq2,eq3);
    eqResto.length === 0 ? console.log('YA no queda mas jugadores para formar equipos') : console.log(`Resto de jugadores son: ${eqResto}`)
    

};
formarEquipos(students)
