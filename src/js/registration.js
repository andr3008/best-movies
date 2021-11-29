import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut, 
}
from 'firebase/auth';
import '@pnotify/core/dist/PNotify';
import '@pnotify/core/dist/BrightTheme.css';
import { error, success, info } from '@pnotify/core';
import getRefs from './get-refs';


const firebaseConfig = {
  apiKey: 'AIzaSyDP-8fHTx4doMcXDAuOcqy68cGBn51fiy0',
  authDomain: 'best-movies-goit-p6.firebaseapp.com',
  databaseURL: 'https://best-movies-goit-p6-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'best-movies-goit-p6',
  storageBucket: 'best-movies-goit-p6.appspot.com',
  messagingSenderId: '148206011547',
  appId: '1:148206011547:web:173c99d779451cd74bb23e',
};
const refs = getRefs();
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

refs.signUpBtn.addEventListener('click', openSignUpModal);
refs.signInBtn.addEventListener('click', openSignInModal);
refs.logOutBtn.addEventListener('click', LogOutFilmoteka);
refs.signUpNowBtn.addEventListener('click', signUpNow);
refs.loginForm.addEventListener('submit', signinEmailAndPassword);
refs.googleBtn.addEventListener('click', signInGoogleAcount);
refs.registerForm.addEventListener('sumbit', createNewUser);
refs.showPassBtn.addEventListener('click', showPass);

// создать акаунт
function createNewUser(e) {
  e.preventDefault();
  let password = '';
  const email = e.target.email.value;
  if (e.target.pass.value === e.target.secondpass.value) {
    password = e.target.pass.value;
  } else {
    error({
      title: 'Error',
      text: 'Passwords did not match',
      delay: 1000,
    });
  }
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}

// вход в систему
function signinEmailAndPassword(email, password) {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

// получить данные пользоваткля

// вход Google

function signInGoogleAcount() {
  signInWithPopup(auth, provider)
  .then(result => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    if (user) {
      refs.signUpBtn.classList.add('hide');
      refs.signInBtn.classList.add('hide');
      refs.logOutBtn.classList.remove('hide');
      window.location.reload();
    }
  })
  .catch(error => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    
  });
}

function openSignUpModal() {
  refs.signUpModal.classList.remove('hide');
  refs.signUpModal.addEventListener('click', hideSignUpModal);
  window.addEventListener('keydown', hideSignUpEsc);
  document.body.style.overflow = 'hidden';
}

function openSignInModal() {
  refs.signInModal.classList.remove('hide');
  document.body.style.overflow = 'hidden';
  refs.signInModal.addEventListener('click', hideSignInModal);
  window.addEventListener('keydown', hideSignInEsc);
}

function showPass() {
  if (refs.fieldPass.type === 'password') {
    refs.fieldPass.type = 'text';
  } else {
    refs.fieldPass.type = 'password';
  }
}

function signUpNow() {
  refs.signInModal.classList.add('hide');
  refs.signUpModal.classList.remove('hide');
  refs.signUpModal.addEventListener('click', hideSignUpModal);
  window.addEventListener('keydown', hideSignUpEsc);
}

// спрятать модалки

function hideSignInModal(e) {
  if (e.target === e.currentTarget) {
    refs.signInModal.classList.add('hide');
    document.body.style.overflow = 'visible';
  }
}

function hideSignUpModal(e) {
  if (e.target === e.currentTarget) {
    refs.signUpModal.classList.add('hide');
    document.body.style.overflow = 'visible';
  }
}

function hideSignInEsc(e) {
  if (e.key === 'Escape') {
    document.body.style.overflow = 'visible';
    refs.signInModal.classList.add('hide');
  }
}

function hideSignUpEsc(e) {
  if (e.key === 'Escape') {
    document.body.style.overflow = 'visible';
    refs.signUpModal.classList.add('hide');
  }
}

// выйти с акаунтa
function LogOutFilmoteka() {
  signOut(auth)
  .then(() => {
    info({
      text: 'You have been logged out.',
      delay: 1000,
    });
  });
}



