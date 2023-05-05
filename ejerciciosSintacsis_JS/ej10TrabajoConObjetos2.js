/*  
Задачи:

1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.

Пример:

showExperience(personalPlanPeter) => '1 month'

P.S. желательно использовать деструктуризацию, но не обязательно

2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.

Пример:

showProgrammingLangs(personalPlanPeter)  =>

"Язык js изучен на 20% Язык php изучен на 10%"

Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.

P.S. Для переноса строки используется \n в конце строки.

3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.

Пример:

personalPlanPeter.showAgeAndLangs(personalPlanPeter)
=> 'Мне 29 и я владею языками: RU ENG'

Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами). Если данные в объекте поменяются, то и сообщение тоже изменится.

**********************************/
"use strict";


const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    //3)
    showAgeAndLangs: function (mainObj) {
        const { age } = mainObj;
        const { languages } = mainObj.skills;
        let outerLineAgeAndLangs = `Мне ${age} лет, я владею языками:`

        languages.forEach(function (lang) {
            outerLineAgeAndLangs += ` ${lang}`
        });
        console.log(outerLineAgeAndLangs);
        return outerLineAgeAndLangs;
    },
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);
//objeto dentro de un objeto. en este caso es un array[] y con un ForEach me muesta sus  eslementtos.
//1)
function showExperience(mainObj) {
    const { exp } = mainObj.skills;
    let outerLineExp = `с опытом ${exp}`

    /*outerLineAgeAndLangs += `с опытом ${exp}`; NO FUNCCIONA.
    En funcion showAgeAndLangs al final acabe con un return outerLineAgeAndLangs;  deberia  poder verlo ( ¿con un return esta внешняя зона видимости?) y yo poder trabajar con outerLineAgeAndLangs dentro de otra funcion.
    */
    console.log(outerLineExp);
    return outerLineExp;
};
showExperience(personalPlanPeter);



function showProgrammingLangs(mainObj) {
    const {programmingLangs} = mainObj.skills;
    let outerLineProgrammingLangs = "";
    for( let key in programmingLangs){
        outerLineProgrammingLangs +=`Язык ${key} изучен на ${programmingLangs[key]}\n`
    }
    console.log(outerLineProgrammingLangs);
    return outerLineProgrammingLangs;
};
showProgrammingLangs(personalPlanPeter);
// objeto dentro de un objeto, con un for in me permite ver llaves  y tmb valores)))













