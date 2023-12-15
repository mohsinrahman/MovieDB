import {getMovies, addMovie, removeMovie, updateMovie } from "./modules/firestore.js";



const cartMovieElem = document.querySelector('#movielist');


/* -------- */
document.getElementById("movieForm").addEventListener("submit", submitForm);

async function submitForm(e) {
  e.preventDefault();
  var movieTitle = getElementVal("movieName");
  var genre = getElementVal("genre");
  var releaseDate = getElementVal("releaseDate");

  const newMovie = {
    title : movieTitle,
    genre : genre,
    releaseDate : releaseDate,
    watched : "Did't watched"
  }
   await addMovie(newMovie);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("movieForm").reset();
  updateAndDisplayMovie()
}

/* -------- */

async function init() {
    const movies = await getMovies();    
    displayMovies(movies);
}
init() // initalize the project

// Function to display all movies
async function displayMovies(movies) {
    for(const movie of movies) {
        creatMovieElement(movie);
    }
}

// Function to update & display all movies

async function updateAndDisplayMovie() {
    const movies = await getMovies();

    cartMovieElem.innerHTML = '' 
    // Tar bort alla element i vår HTML för att ersätta med nytt från databasen

    for(const movie of movies) {
        creatMovieElement(movie);
    }
}

// Function to render list elements in DOM

async function creatMovieElement(movie) {
    const li1 = document.createElement('li');
    li1.classList.add('movieTitle');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    const li4 = document.createElement('li');
    const li5 = document.createElement('li');
    const li6 = document.createElement('li');
    const DelButton = document.createElement('button');
    DelButton.innerText = 'Remove';
    const EditButton = document.createElement('button');
    EditButton.innerText = 'Edit';
    const ul = document.getElementById("movielist");
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    ul.appendChild(li5);
    ul.appendChild(li6);
    li5.appendChild(DelButton);
    
    li1.innerText = movie.info.title;
    li2.innerText = movie.info.genre;
    li3.innerText = movie.info.releaseDate;
    li4.innerText = movie.info.watched;
     li6.appendChild(EditButton);
   
   // Delete button to delete the movie from list

    DelButton.classList.add(movie.id);

    DelButton.addEventListener('click', () => {
        removeMovie(movie.id);
        updateAndDisplayMovie();
    });

// Edit button to edit the list item

    EditButton.classList.add(movie.id);

    EditButton.addEventListener('click', () => {
        updateMovie(movie.id);
        li6.appendChild(EditButton);
       
        updateAndDisplayMovie();
    });
}



/* -------- */
// Function to target the dom
const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
