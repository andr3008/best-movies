import getRefs from './get-refs';
const refs = getRefs();

import { initializeApp } from 'firebase/app';
// import firebase from 'firebase/app';
// import 'firebase/database';
// import 'firebaseui';
// import 'firebaseui/dist/firebaseui.css';
// import firebaseui from 'firebaseui';
const firebaseConfig = {
  apiKey: 'AIzaSyDP-8fHTx4doMcXDAuOcqy68cGBn51fiy0',
  authDomain: 'best-movies-goit-p6.firebaseapp.com',
  databaseURL: 'https://best-movies-goit-p6-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'best-movies-goit-p6',
  storageBucket: 'best-movies-goit-p6.appspot.com',
  messagingSenderId: '148206011547',
  appId: '1:148206011547:web:173c99d779451cd74bb23e',
};

const app = initializeApp(firebaseConfig);

refs.signUpBtn.addEventListener('click', openSignUpModal);
refs.signInBtn.addEventListener('click', openSignInModal);
refs.signUpNowBtn.addEventListener('click', signUpNow);
// refs.showPassBtn.addEventListener('click', openPass);

function openSignUpModal() {
  refs.signUpModal.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
  refs.signUpModal.addEventListener('click', hideSignUpModal);
  window.addEventListener('keydown', hideSignUpEsc);
}

function openSignInModal() {
  refs.signInModal.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
  refs.signInModal.addEventListener('click', hideSignInModal);
  window.addEventListener('keydown', hideSignInEsc);
}

// function openPass() {
//     if (fieldPass.type === 'password') {
//         fieldPass.type = 'text';
//       } else {
//         fieldPass.type = 'password';
//     }
// }

function signUpNow() {
  refs.signInModal.classList.add('is-hidden');
  refs.signUpModal.classList.remove('is-hidden');
  refs.signUpModal.addEventListener('click', hideSignUpModal);
  window.addEventListener('keydown', hideSignUpEsc);
}

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

// const ui = firebaseui.auth.AuthUI(firebase.auth());
// const uiStart = () => ui.start('#firebaseui-auth-container', uiConfig);
// new firebase.auth.PhoneAuthProvider();

// export const filmotekaDatabase = firebase.database().ref('users');
// export let currentUserId = '';

// const uiConfig = {
//     signInFlow: 'popup',
//     signInOptions: [
//       firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//       firebase.auth.EmailAuthProvider.PROVIDER_ID,
//     ],
//     callbacks: {
//       signInSuccessWithAuthResult: function (authResult) {
//         if (authResult) {
//           location.reload();

//           setUserData(firebaseUser.uid);
//           return true;
//         }
//       },
//     },
//   };
