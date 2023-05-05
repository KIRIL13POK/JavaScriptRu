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
const publicidadImg = document.querySelectorAll('.promo__adv img'),
    publicidadTitle = document.querySelector('.promo__adv-title'),
    genero = document.querySelector('.promo__genre'),
    poster = document.querySelector('.promo__bg'),
    listaPeliculas = document.querySelector('.promo__interactive-list');//para poder trabajar despues con innerHTML tiene que ser querySelector. El querySelectorAll devuelve pseudoarray que no tiene metodo innerHTML.
//1) + fuera el titulo de la publicidad.
          /***************** 
console.log(publicidadImg);//NodeList(3) [img, img, img]
console.log(publicidadTitle);//<div class="promo__adv-title">Реклама от спонсоров</div>
         ********************/
publicidadTitle.innerHTML = '';
publicidadImg.forEach(img => {
    img.remove()
});

//2)
genero.textContent = "драма";
//3)
poster.style.backgroundImage = 'url("img/bg.jpg")';
//4-5)
//console.log(listaPeliculas.innerHTML);//Devuelve contenido te HTML como un gran string.
listaPeliculas.innerHTML = "";
movieDB.movies.sort();
movieDB.movies.forEach((film, item) => {
    listaPeliculas.innerHTML += `
    <li class="promo__interactive-item">${item +1}- ${film} 
        <div class="delete"></div>
    </li>
    `;
});










