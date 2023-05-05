'use strict';
 const S = document.querySelectorAll('button');

// console.log(btns);
// console.log(btns[0].classList);
// console.log(btns[0].classList.item(0));//-->blue

// btns[1].classList.add('red');//--> añade clases
// console.log(btns[0].classList);

// //btns[0].classList.remove('blue');//--> elmina clase
// console.log(btns[0].classList);

//btns[0].classList.toggle('blue')//--> se esta clase existe ignora y si no existe añade la clase.
// console.log(btns[0].classList);

// console.log(btns[1].classList.contains('red'));
// if(btns[1].classList.contains('red')){
//     console.log('red');
//  }

S[0].addEventListener('click', () => {
    if(!S[1].classList.contains('red')){
        S[1].classList.add('red');
    }else{
        S[1].classList.remove('red');
    }
    S[2].classList.toggle('green');
    S[3].classList.toggle('white');
    S[4].classList.toggle('brown');
    S[5].classList.toggle('uchsia');
    S[6].classList.toggle('salmon');
    S[7].classList.toggle('teal')
});
S[1].addEventListener('click', () => {
    if(!S[0].classList.contains('red')){
        S[0].classList.add('red');
    }else{
        S[1].classList.remove('red');
    }
    S[2].classList.toggle('green');
    S[3].classList.toggle('white');
    S[4].classList.toggle('brown');
    S[5].classList.toggle('uchsia');
    S[6].classList.toggle('salmon');
    S[7].classList.toggle('teal')
});
S[2].addEventListener('click', () => {
    if(!S[1].classList.contains('red')){
        S[1].classList.add('red');
    }else{
        S[1].classList.remove('red');
    }
    S[2].classList.toggle('green');
    S[3].classList.toggle('white');
    S[4].classList.toggle('brown');
    S[5].classList.toggle('uchsia');
    S[6].classList.toggle('salmon');
    S[7].classList.toggle('teal')
});
S[3].addEventListener('click', () => {
    if(!S[1].classList.contains('red')){
        S[1].classList.add('red');
    }else{
        S[1].classList.remove('red');
    }
    S[2].classList.toggle('green');
    S[3].classList.toggle('white');
    S[4].classList.toggle('brown');
    S[5].classList.toggle('uchsia');
    S[6].classList.toggle('salmon');
    S[7].classList.toggle('teal')
});
S[5].addEventListener('click', () => {
    if(!S[1].classList.contains('red')){
        S[1].classList.add('red');
    }else{
        S[1].classList.remove('red');
    }
    S[2].classList.toggle('green');
    S[3].classList.toggle('white');
    S[4].classList.toggle('brown');
    S[5].classList.toggle('uchsia');
    S[6].classList.toggle('salmon');
    S[7].classList.toggle('teal')
});
S[6].addEventListener('click', () => {
    if(!S[1].classList.contains('red')){
        S[1].classList.add('red');
    }else{
        S[1].classList.remove('red');
    }
    S[2].classList.toggle('green');
    S[3].classList.toggle('white');
    S[4].classList.toggle('brown');
    S[5].classList.toggle('uchsia');
    S[6].classList.toggle('salmon');
    S[7].classList.toggle('teal')
});
S[7].addEventListener('click', () => {
    if(!S[1].classList.contains('red')){
        S[1].classList.add('red');
    }else{
        S[1].classList.remove('red');
    }
    S[2].classList.toggle('green');
    S[3].classList.toggle('white');
    S[4].classList.toggle('brown');
    S[5].classList.toggle('uchsia');
    S[6].classList.toggle('salmon');
    S[7].classList.toggle('teal')
});



