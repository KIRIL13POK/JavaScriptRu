'use strict';

const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button');
console.log(btns);
//para poder ver solo segundo button:
console.log(btns[1]);
const btnsSegundo = document.getElementsByTagName('button')[1];
console.log(btnsSegundo);

const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll('.heart');
//Aqui ya me permite usar forEach
hearts.forEach(item => {
    console.log(item);
});
console.log(hearts);

const oneHeart = document.querySelector('.heart');
//Devuelve primer elemente de la pagina.
console.log(oneHeart);






