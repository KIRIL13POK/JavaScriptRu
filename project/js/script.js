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

//***************************************  1  ****************************************
const adv = document.querySelectorAll('.promo__adv img');// dentro de este class sus imagines.
//console.log(adv);
adv.forEach(item => {
    item.remove();
});

//****************************************  2  *****************************************
// const poster = document.querySelector('.promo__bg');
//Ahora el genero lo sacamos directamente de poster:
//const genre = poster.querySelector('.promo__genre');
//Para cambiar texto metodo .textContent():
const genre = document.querySelector('.promo__bg').querySelector('.promo__genre');
genre.textContent = 'драма';

//****************************************  3  *****************************************
poster.style.backgroundImage = 'url("img/bg.jpg")';

//****************************************  4/5  ****************************************
//Primer paso eliminar los elimentos que ya tiene la pagina:
const movieList = document.querySelector('.promo__interactive-list');
//Para limpiat este elemento el metodo .innerHTML:
movieList.innerHTML = "";
movieDB.movies.sort();
movieDB.movies.forEach(function (film, i) {
    movieList.innerHTML += ` 
    <li class="promo__interactive-item">${i + 1}-
    ${film}
    <div class="delete"></div>
    </li>
    `; 


});



