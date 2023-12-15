import { collection, getDocs, addDoc, deleteDoc,doc ,updateDoc, where, query} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { db } from './firebaseConfig.js';

// function to fetch all movies from firestore
async function getMovies() {
    try {
        const movies = await getDocs(collection(db, 'movies'));
        
        const formatedMovies = [];

        movies.forEach((movie) => {
            const formatedMovie = {
                id: movie.id,
                info: movie.data()
            }
     
            formatedMovies.push(formatedMovie);
        });

        return formatedMovies;
    } catch (error) {
        console.log(`ERROR: ${error}`);
    }
}

// function to add new movie in firestore database
async function addMovie(newMovie) {

    // Logic to check dupication of movies and then add in database
    const queryMovieName = query(collection(db, 'movies'), where('title', '==', newMovie.title));
    const result = await getDocs(queryMovieName)
    var existMovie = "notExist";
    // loop through all movies in database
    result.forEach(re => {
    // checking the duplication of movies
        if(re.data().title == newMovie.title ){
                const alertMovie = document.querySelector('.alert');
                alertMovie.innerHTML = "Already exist";
                
                 existMovie = "exist";
                 
             }
            
        });

        if (existMovie == "notExist") {

            try {
                addDoc(collection(db, 'movies'), {
                   title: newMovie.title,
                   genre: newMovie.genre,
                   releaseDate : newMovie.releaseDate,
                   watched:newMovie.watched
       
               })
           } catch (error) {
               console.log(`ERROR: ${error}`);
           }

           const alertMovie = document.querySelector('.alert');
                alertMovie.innerHTML = "Movie Saved!";
            
        } else {
             //console.log("movie exist")
        } 

    }
   
   
// function to remove a movie form firestore

async function removeMovie(id) {
    try {
        await deleteDoc(doc(db, 'movies', id));
    } catch (error) {
        console.log(`ERROR: ${error}`);
    }
}

// function to update a movie in firestore

async function updateMovie(id) {
    try {
        await updateDoc(doc(db, 'movies', id), {
            watched:"watched"
        })
    } catch (error) {
        console.log(`ERROR: ${error}`);
    }
    
}

//exporting  all the above mentioned functions
export { getMovies, addMovie, removeMovie , updateMovie}


