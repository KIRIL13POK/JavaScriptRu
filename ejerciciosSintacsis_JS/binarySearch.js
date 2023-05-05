"use strict";
const arrayS = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17.18, 19, 20];

let count = 0;
function binarySearch(array, item) {
    let start = 0;
    let end = array.length;
    let middle;
    let found = false;
    let position = -1;

    while (found === false && start <= end) {
        count += 1;
        middle = Math.floor((start + end) / 2);
        console.log("second "+middle);
        if (array[middle] === item) {
            found = true;
            position = middle;
            return position;
        }
        if (item < array[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return position;
}
console.log(count);
console.log("HI");
 console.log(binarySearch(arrayS, 10));
/*
let array = [-1, 0, 3, 5, 7, 9, 12];
let search = function (nums, target) {

    let left = 0;
    let right = nums.leght - 1;
    let mid;
    while (left <= right) {
        mid = Math.round((right - left) / 2) + left;
        if (target === nums[mid]) {
            return mid;
        } else if (target < nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;

};
console.log(search(array, 9));

/*
const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['russian', 'english'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `;

        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });

        return str;
    }
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}

showExperience(personalPlanPeter);

function showProgrammingLangs(plan) {
    let str = '';
    const {programmingLangs} = plan.skills;
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
    }

    return str;
}
console.log(showProgrammingLangs(personalPlanPeter));
showProgrammingLangs(personalPlanPeter);
console.log(personalPlanPeter);
*******/