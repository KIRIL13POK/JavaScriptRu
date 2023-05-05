'use strict';
 const btns = document.querySelectorAll('button'),
       btnsPapa = document.querySelector('.btn-block');

 console.log(btnsPapa);    
 //Trabajamos con el elemento padre
 btnsPapa.addEventListener( 'click', (evt) =>{
    //console.dir(evt.target);
    let target = evt.target;
    if( target && target.tagName === 'BUTTON'){
        console.log('HELLO');
    }
 });

 const newBTN = document.createElement('BUTTON');
 newBTN.classList.add('fuchsia');
 btnsPapa.append(newBTN);
 //El nuevo elemento tmb actua como resto de los botones al hacer click

 const newBTN_2 = document.createElement('BUTTON');
 newBTN_2.classList.add('teal');
 btnsPapa.append(newBTN_2);
 //El nuevo elemento tmb actua como resto de los botones al hacer click