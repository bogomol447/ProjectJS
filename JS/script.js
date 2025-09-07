
let numberOfFilms = prompt("Сколько фильмов вы уже просмотрели?", "")
let lastWatchedMovie,
    filmGrade

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [], 
    privat: false
}

for (let i = 1; i <= numberOfFilms; i++){
    lastWatchedMovie = prompt("Один из последних просмотренных фильмов?", "")
    filmGrade = prompt("На сколько оцените его?", "")
        if (lastWatchedMovie != "" && filmGrade != "" && lastWatchedMovie != null && filmGrade != null && lastWatchedMovie.length < 50){
            personalMovieDB.movies[lastWatchedMovie] = filmGrade
        }else{
            alert("Попробуйте еще раз")
            i--
    }
}

if (personalMovieDB.count < 10){
    alert("Просмотренно довольно мало фильмов")
}else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    alert("Вы классический зритель")
}else{
    alert("Вы киноман")
}

console.log(personalMovieDB)
