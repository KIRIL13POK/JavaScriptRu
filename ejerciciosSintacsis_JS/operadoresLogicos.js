"use strict";
//Что выведет в консоль код?

console.log( NaN || 2 || undefined );
 
console.log( NaN && 2 && undefined );
 
console.log( 1 && 2 && 3 );
 
console.log( !1 && 2 || !3  );
 
console.log( 25 || null && !3 );
 
console.log( NaN || null || !3 || undefined || 5);
 
console.log( NaN || null && !3 && undefined || 5);
 
console.log( 5 === 5 && 3 > 1 || 5);

//Выполняется ли условие?:
const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;
 
if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!')
}

let hamburgeR;
const frieS = NaN;
const colA = 0;
const nuggetS = 2;
 
if (hamburgeR || colA || frieS === 3 || nuggetS) {
   console.log('Done!')
}

let hamburgER;
const friES = NaN;
const coLA= 0;
const nuggeTS = 2;
 
if (hamburgER && coLA || friES === 3 && nuggeTS) {
   console.log('Done!')
}
console.log( friES === 3 && nuggeTS)