import getRefs from './getRefs';
import { initializeApp } from "firebase/app";
import { error, success, info } from '@pnotify/core';
import '@pnotify/core/dist/PNotify';
import '@pnotify/core/dist/BrightTheme.css';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";


const refs = getRefs();
const firebaseConfig = {
    apiKey: "AIzaSyDP-8fHTx4doMcXDAuOcqy68cGBn51fiy0",
    authDomain: "best-movies-goit-p6.firebaseapp.com",
    databaseURL: "https://best-movies-goit-p6-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "best-movies-goit-p6",
    storageBucket: "best-movies-goit-p6.appspot.com",
    messagingSenderId: "148206011547",
    appId: "1:148206011547:web:173c99d779451cd74bb23e",
};
  
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
function createNewUser () {
  e = e.preventDefault();
  let password = '';
  const email = e.target.email.value;
  console.log(email, password);
  if(e.target.pass.value === e.target.secondpass.value) {
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
    success({
      title: 'Success!',
      text: 'Your account successfully created.',
      delay: 1000,
    });
  })
  .then(() => {
    refs.signUpModal.classList.add('is-hidden');
    e.target.email.value = null;
    e.target.pass.value = null;
    e.target.secondpass.value = null;
    window.location.reload();
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    error({
      title: 'Error',
      text: errorMessage,
      delay: 1000,
    });
  });
}

// вход с паролем

function signinEmailAndPassword() {
  e = e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.pass.value;
  refs.signinSpinner.classList.remove('is-hidden');
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    document.body.style.overflow = 'visible';
    // ...
  })
  .then(() => {
    refs.signInModal.classList.add('is-hidden');
    e.target.email.value = null;
    e.target.pass.value = null;
    window.location.reload(true); 
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    error({
      title: 'Error',
      text: errorMessage,
      delay: 1000,
    })
    .finally(() => {
      refs.loginForm.classList.remove('is-hidden');
    });
  });
}

// вход Google

function signInGoogleAcount() {
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    if (user) {
      refs.signUpBtn.classList.add('is-hidden');
      refs.signInBtn.classList.add('is-hidden');
      refs.logOutBtn.classList.remove('is-hidden');
      window.location.reload();
    }
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

function openSignUpModal () {
  refs.signUpModal.classList.remove('is-hidden');
  refs.signUpModal.addEventListener('click', hideSignUpModal);
  window.addEventListener('keydown', hideSignUpEsc);
  document.body.style.overflow = 'hidden';
};

function openSignInModal() {
    refs.signInModal.classList.remove('is-hidden');
    document.body.style.overflow = 'hidden';
    refs.signInModal.addEventListener('click', hideSignInModal);
    window.addEventListener('keydown', hideSignInEsc);
};

function showPass() {
    if (refs.fieldPass.type === 'password') {
        refs.fieldPass.type = 'text';
      } else {
        refs.fieldPass.type = 'password';
    }
}

function signUpNow() {
    refs.signInModal.classList.add('is-hidden');
    refs.signUpModal.classList.remove('is-hidden');
    refs.signUpModal.addEventListener('click', hideSignUpModal);
    window.addEventListener('keydown', hideSignUpEsc);
};

// спрятать модалки
function hideSignInModal(e) {
    if (e.target === e.currentTarget) {
      refs.signInModal.classList.add('is-hidden');
      document.body.style.overflow = 'visible';
    }
}

function hideSignUpModal(e) {
    if (e.target === e.currentTarget) {
      refs.signUpModal.classList.add('is-hidden');
      document.body.style.overflow = 'visible';
    }
}

function hideSignInEsc(e) {
    if (e.key === 'Escape') {
      document.body.style.overflow = 'visible';
      refs.signInModal.classList.add('is-hidden');
    }
}

function hideSignUpEsc(e) {
    if (e.key === 'Escape') {
      document.body.style.overflow = 'visible';
      refs.signUpModal.classList.add('is-hidden');
    }
}

// выйти с акаунтa
function LogOutFilmoteka() {
  signOut(auth)
    .then(() => {
    // Sign-out successful.
    info({
      text: 'You have been logged out.',
      delay: 1000,
    })
    }).catch((error) => {
    // An error happened.
  });
}


