'use strict';
const btn = document.querySelectorAll("button");
// console.log(btn);
// btn.onclick = function(){
//     alert('Hola mundo!!!')
// };---> Este metodo funciona, pero no es la mejor manera para trabajar.
const overlay = document.querySelector(".overlay");
//let i = 0;
const deletElement = (e) =>{
   //console.log(e.target);
   console.log(e.currentTarget);
   console.log(e.type);
//    i++
//    if( i == 1){
//     btn.removeEventListener('click',deletElement);
//    } 
 };
btn.addEventListener('click', deletElement);
overlay.addEventListener('click', deletElement);


//Para aunular el link:
const link = document.querySelector('a');
link.addEventListener('click',(event) => {
    event.preventDefault();
    console.log(event.target);
});


