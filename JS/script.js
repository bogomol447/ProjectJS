
let numberOfFilms

function start(){
    numberOfFilms = prompt("Сколько фильмов вы уже просмотрели?", "")

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt("Сколько фильмов вы уже просмотрели?", "")
    }
}

start();


let lastWatchedMovie,
    filmGrade

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [], 
    privat: false
}

function rememberMyFilms() {
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
}

rememberMyFilms()

function writeYourGenres() {
    for (let i = 1; i <= 3; i++){ 
       personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, "")
    }
}

writeYourGenres()



function detectPersonalLevel() {
    if (personalMovieDB.count < 10 && personalMovieDB.count >= 1){
        alert("Просмотренно довольно мало фильмов")
    }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        alert("Вы классический зритель")
    }else if(personalMovieDB.count >= 30){
        alert("Вы киноман")
    }
}

detectPersonalLevel()

function showMyDB(){
    if (personalMovieDB.privat === false){
        console.log(personalMovieDB)
    }
}

showMyDB()






  


