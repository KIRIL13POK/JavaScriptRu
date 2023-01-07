'use strict';
const btns = document.querySelectorAll("button");
const overlay = document.querySelector(".overlay");

const deletElement = (e) =>{
   console.log(e.currentTarget);
   console.log(e.type);
 };
//btn.addEventListener('click', deletElement);
//overlay.addEventListener('click', deletElement);
btns.forEach(btn => {
    btn.addEventListener('click',deletElement,{once:true});
});

//Para aunular el link:
const link = document.querySelector('a');
link.addEventListener('click',(event) => {
    event.preventDefault();
    console.log(event.target);
});