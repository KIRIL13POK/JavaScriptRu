
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
};
console.log("La experienci de Peter es " + personalPlanPeter.skills.exp ) 

function copyObj(mainObj) {
    let newObj = {};
    for (let key in mainObj) {
        newObj[key] = mainObj[key];
    }
    return newObj;

};




const newPersonalPlanPeter = copyObj(personalPlanPeter);
newPersonalPlanPeter.age = 30;
 console.log(Object.assign(personalPlanPeter, newPersonalPlanPeter));



console.log(newPersonalPlanPeter);
console.log(personalPlanPeter);




for (let key in personalPlanPeter) {
    if (typeof (personalPlanPeter[key]) == 'object') {
        for (let i in personalPlanPeter[key]) {
            console.log(`La llave ${key} tiene valor ${personalPlanPeter[key][i]}`)
        }
    } else {
        console.log(`La  11111 llave ${key} tiene valor ${personalPlanPeter[key]}`);

    }
}
let amountKeys = Object.keys(personalPlanPeter);
console.log(amountKeys.length);



