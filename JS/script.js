
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
        if (lastWatchedMovie == "" || lastWatchedMovie.length > 50 || lastWatchedMovie == null){
           alert("Попробуйте еще раз")
    }else{
        filmGrade = prompt("На сколько оцените его?", "")
        personalMovieDB.movies[lastWatchedMovie] = filmGrade
    }
}

if (personalMovieDB.count < 10){
    alert("Просмотренно довольно мало фильмов")
}else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
    alert("Вы классический зритель")
}else{
    alert("Вы киноман")
}

console.log(personalMovieDB)
