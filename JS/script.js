//1)
let numberOfFilms = prompt("Сколько фильмов вы уже просмотрели?", "")

//3)
let lastWatchedMovie = prompt("Один из последних просмотренных фильмов?", ""),
    filmGrade = prompt("На сколько оцените его?", ""),
    lastWatchedMovie2 = prompt("Один из последних просмотренных фильмов?", ""),
    filmGrade2 = prompt("На сколько оцените его?", "")

//2)
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [], 
    privat: false
}

personalMovieDB.movies[lastWatchedMovie] = filmGrade
personalMovieDB.movies[lastWatchedMovie2] = filmGrade2

console.log(personalMovieDB)