import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, getDocs, getDoc } from 'firebase/firestore';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyDP-8fHTx4doMcXDAuOcqy68cGBn51fiy0",
    authDomain: "best-movies-goit-p6.firebaseapp.com",
    databaseURL: "https://best-movies-goit-p6-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "best-movies-goit-p6",
    storageBucket: "best-movies-goit-p6.appspot.com",
    messagingSenderId: "148206011547",
    appId: "1:148206011547:web:173c99d779451cd74bb23e",
    measurementId: "G-ZB8ZN04KN0"
})

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
db.collection('todos').getDocs();
const todosCol = collection(db, 'todos');
const snapshot = await getDocs(todosCol);

auth.onAuthStateChanged(user => {

});


onAuthStateChanged(auht , user => {
    if(user == null) {
        console.log('logged in!');
    } else {
        console.log('No user');
    }
})
