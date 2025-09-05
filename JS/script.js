//1)
let answer = prompt("Сколько фильмов вы уже просмотрели?", "")

let numberOfFilms = answer
console.log(numberOfFilms)

//3)
let lastWatchedMovie = prompt("Один из последних просмотренных фильмов?", ""),
    filmGrade = prompt("На сколько оцените его?", ""),
    lastWatchedMovie2 = prompt("Один из последних просмотренных фильмов?", ""),
    filmGrade2 = prompt("На сколько оцените его?", "")
console.log(lastWatchedMovie),
            (filmGrade),
            (lastWatchedMovie2),
            (filmGrade2)
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