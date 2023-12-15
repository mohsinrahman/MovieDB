
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCTWaZmq6aIO4isACmPA84MRXuaFSFlLxo",
  authDomain: "movies-9ea2e.firebaseapp.com",
  projectId: "movies-9ea2e",
  storageBucket: "movies-9ea2e.appspot.com",
  messagingSenderId: "109833692633",
  appId: "1:109833692633:web:04f7be3979feaa16f6e5c8"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }






