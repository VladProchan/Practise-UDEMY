
"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

// const a = prompt("Один из последних просмотренных фильмов?"),
//   b = prompt("На сколько оцените его?"),
//   c = prompt("Один из последних просмотренных фильмов?"),
//   d = prompt("На сколько оцените его?");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

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

if (personalMovieDB.count < 10) {
  console.log('Так бачу ти не зовсім любиш дивитися фільми');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log('Ти стандартний глядач фільмів');
} else if (personalMovieDB.count >= 30) {
  console.log('Та ти справжній кіноман!!!');
} else {
  console.log('Ой якась помилка');
}

console.log(personalMovieDB);
