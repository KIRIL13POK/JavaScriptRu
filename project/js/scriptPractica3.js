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

// 1)
const publicidadImg = document.querySelectorAll('.promo__adv img'),
    publicidadTexto = document.querySelector('.promo__adv-title')
//console.log(publicidadImg);
//console.log(publicidadTexto.innerHTML);
publicidadTexto.innerHTML = "";
publicidadImg.forEach(nombre => {
    nombre.remove()
});

// 2)
const genero = document.querySelector('.promo__genre');
//console.log(genero.innerHTML);
genero.innerHTML = 'драма';

// 3)

const fondo = document.querySelector('.promo__bg');
// console.log(fondo)
// console.log(fondo.style);
// console.log(fondo.style.backgroundImage);
fondo.style.backgroundImage = 'url("img/bg.jpg")';

// 4-5 )

const listaPeliculas = document.querySelector('.promo__interactive-list');
console.log(listaPeliculas.innerHTML);//-->undefined.El querySelectorAll devuelve pseudoarray que no tiene metodo innerHTML.
listaPeliculas.innerHTML = "";
movieDB.movies.sort();
//console.log(movieDB);
movieDB.movies.forEach(function(filmNombre, i){
    listaPeliculas.innerHTML += `
    <li class="promo__interactive-item">${i+1}-${filmNombre}
    <div class="delete"></div>
    </li>
    `

});

console.log(listaPeliculas.innerHTML);


