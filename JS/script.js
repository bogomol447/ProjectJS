//1)
let answer = prompt("Сколько фильмов вы уже просмотрели?", "")

let numberOfFilms = answer
console.log(numberOfFilms)

//3)
let lastWatchedMovie = prompt("Один из последних просмотренных фильмов?", "")
let filmGrade = prompt("На сколько оцените его?", "")
let lastWatchedMovie2 = prompt("Один из последних просмотренных фильмов?", "")
let filmGrade2 = prompt("На сколько оцените его?", "")
console.log(lastWatchedMovie)
console.log(filmGrade)
console.log(lastWatchedMovie2)
console.log(filmGrade2)
//2)
const personalMovieDB = {
    count: numberOfFilms,
    movies: {lastWatchedMovie: lastWatchedMovie, filmGrade: filmGrade,
             lastWatchedMovie2: lastWatchedMovie2, filmGrade2: filmGrade2
            },
    actors: {},
    genres: [], 
    privat: false
}
// personalMovieDB.movies.lastWatchedMovie = lastWatchedMovie
// personalMovieDB.movies.filmGrade = filmGrade
console.log(personalMovieDB)