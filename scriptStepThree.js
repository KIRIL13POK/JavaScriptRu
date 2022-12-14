/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/


// Код возьмите из предыдущего домашнего задания
"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", 0);
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", 0);
    }
};
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lastMovieQuestion = prompt("Один из последних просмотренных фильмов");
        const lastMoviePunctuation = prompt("На сколько оцените его?");

        if (lastMovieQuestion != null && lastMoviePunctuation != null && lastMovieQuestion != "" && lastMoviePunctuation != "" && lastMovieQuestion.length < 50) {
            personalMovieDB.movies[lastMovieQuestion] = lastMoviePunctuation;
            console.log("done");
        } else {
            console.log("error");
            i--;
        }
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }

}
detectPersonalLevel();
/*
function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);
********************************/


function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);

    }
}
showMyDB();


function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        let favoriteGenres = prompt(`Ваш любимый жанр? ${i}`);
        personalMovieDB.genres[i - 1] = favoriteGenres;
        /*personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр? ${i}`); 
        ******************************************************************/
    }
};
writeYourGenres();