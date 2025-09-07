
let numberOfFilms = prompt("Сколько фильмов вы уже просмотрели?", "")
let lastWatchedMovie,
    filmGrade

for (let i = 1; i <= numberOfFilms; i++){
    lastWatchedMovie = prompt("Один из последних просмотренных фильмов?", "")
        if (lastWatchedMovie == "" || lastWatchedMovie.length > 50 || lastWatchedMovie == null){
           alert("Попробуйте еще раз")
    }else{
        filmGrade = prompt("На сколько оцените его?", "")
    }
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [], 
    privat: false
}

if (personalMovieDB.count < 10){
    alert("Просмотренно довольно мало фильмов")
}else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
    alert("Вы классический зритель")
}else{
    alert("Вы киноман")
}


personalMovieDB.movies[lastWatchedMovie] = filmGrade

console.log(personalMovieDB)
