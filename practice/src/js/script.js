
"use strict";

let numberOfFilms;

// Функція старту
function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}
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
    const a = prompt("Один из последних просмотренных фильмов?"),
      b = prompt("На сколько оцените его?");
    
    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done');
    } else {
      i--;
      console.log('error');
    }
  }
}
rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('Так бачу ти не зовсім любиш дивитися фільми');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Ти стандартний глядач фільмів');
  } else if (personalMovieDB.count >= 30) {
    console.log('Та ти справжній кіноман!!!');
  } else {
    console.log('Ой якась помилка');
  }
}
detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat)


function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш улюблений жанр під номером ${i}`);
  }
}

writeYourGenres();


