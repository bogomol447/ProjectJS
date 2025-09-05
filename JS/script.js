//1)
let answer = prompt("Сколько фильмов вы уже просмотрели?", "")

let numberOfFilms = answer
console.log(numberOfFilms)

//3)
let lastWatchedMovie = prompt("Один из последних просмотренных фильмов?", "")
let filmGrade = prompt("На сколько оцените его?", "")

//2)
const personalMovieDB = {
    count: numberOfFilms,
    movies: {
        lastWatchedMovie: filmGrade
    },
    actors: {},
    genres: [], 
    privat: false
}