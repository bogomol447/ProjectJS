
let numberOfFilms = prompt("Сколько фильмов вы уже просмотрели?", "")
let lastWatchedMovie,
    filmGrade

for (let i = 1; i <= numberOfFilms; i++){
    lastWatchedMovie = prompt("Один из последних просмотренных фильмов?", ""),
    filmGrade = prompt("На сколько оцените его?", "")
}

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
