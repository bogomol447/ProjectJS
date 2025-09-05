//1)
let answer = prompt("Сколько фильмов вы уже просмотрели?", "")

let numberOfFilms = answer
console.log(numberOfFilms)

//3)
let lastWatchedMovie = prompt("Один из последних просмотренных фильмов?", "")
let filmGrade = prompt("На сколько оцените его?", "")
console.log(lastWatchedMovie)
console.log(filmGrade)
//2)
const personalMovieDB = {
    count: numberOfFilms,
    movies: {lastWatchedMovie: lastWatchedMovie, filmGrade: filmGrade},
    actors: {},
    genres: [], 
    privat: false
}
// personalMovieDB.movies.lastWatchedMovie = lastWatchedMovie
// personalMovieDB.movies.filmGrade = filmGrade
console.log(personalMovieDB)