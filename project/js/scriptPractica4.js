/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
// //1)
// const  publicidad = document.querySelectorAll('.promo__adv img')
// // console.log(publicidad);
// publicidad.forEach( item => {
//     item.remove();
// });

// //2)
// const genero = document.querySelector('.promo__genre');
// //console.log(genero.innerText);
// genero.innerText = 'драма';

// //3)
// const fondo = document.querySelector('.promo__bg ');
// console.log(fondo.style)
// fondo.style.backgroundImage = 'url("img/bg.jpg")';

// //4-5)
// const listaPeliculas = document.querySelector('.promo__interactive-list')
// console.log(listaPeliculas.innerHTML);
// listaPeliculas.innerHTML = "";
// movieDB.movies.sort()
// movieDB.movies.forEach(function (nombre, item){
//     listaPeliculas.innerHTML  +=`
//     <li class="promo__interactive-item">${item + 1}- ${nombre}
//         <div class="delete"></div>
//     </li>
//     `;
// });

const publicidadImg = document.querySelectorAll('.promo__adv img'),
      genero = document.querySelector('.promo__genre'),
      fondo = document.querySelector('.promo__bg'),
      listaPeliculas = document.querySelector('.promo__interactive-list');
//1)      
publicidadImg.forEach( img => {
    img.remove();
});
//2)
genero.innerHTML = 'драма';
//3)
console.log(fondo.style)
fondo.style.backgroundImage = 'url("img/bg.jpg")';
//4-5)
listaPeliculas.innerHTML = "";

movieDB.movies.sort();
movieDB.movies.forEach((nombre, item) => {
    listaPeliculas.innerHTML += `
    <li class="promo__interactive-item"> ${item+1} - ${nombre}

    <div class="delete"></div>
     
    </li>
    `

});




