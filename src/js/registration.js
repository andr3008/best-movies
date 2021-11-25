import getRefs from './getRefs';
const refs = getRefs();
import { PNotify } from '../../node_modules/@pnotify/core/dist/PNotify';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const showPassBtn = document.querySelector('.show-pass');
const fieldPass = document.querySelector('.pass-js');

// реестрация новых пользователей
refs.registerForm.addEventListener('submit', e => {
    e.preventDefault();
    let password = '';
    const email = e.target.email.value;
    if (e.target.pass.value === e.target.secondpass.value) {
        password = e.target.pass.value;
      } else { 
        PNotify.error({
          title: 'Error',
          text: 'Passwords did not match',
          delay: 1000,
        });
    }
    getAuth();
    createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
        // Signed in
      const user = userCredential.user;
      document.body.style.overflow = 'visible';
      document.querySelector('.signup-wpapper').classList.remove('load');
      // clearLokalStorage();
      PNotify.success({
        title: 'Success!',
        text: 'Your account successfully created.',
        delay: 1000,
        });
    })
    .then(() => {
        refs.signUpSpinner.classList.add('is-hidden');
        refs.signUpModal.classList.add('is-hidden');
        e.target.email.value = null;
        e.target.pass.value = null;
        e.target.secondpass.value = null;
        window.location.reload(); //!
    })
    .catch(error => {
        document.querySelector('.signup-wpapper').classList.remove('load');
        refs.signUpSpinner.classList.add('is-hidden');
        const errorCode = error.code;
        const errorMessage = error.message;
        PNotify.error({
          title: 'Error',
          text: errorMessage,
          delay: 1000,
        });
    });
});

// Singin
refs.loginForm.addEventListener('submit', e => {
    e.preventDefault();
  
    const email = e.target.email.value;
    const password = e.target.pass.value;
    refs.signinSpinner.classList.remove('is-hidden');
    document.querySelector('.signin-wpapper').classList.add('load');
    getAuth();
    signInWithEmailAndPassword(email, password)
    .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        document.body.style.overflow = 'visible';
        document.querySelector('.signin-wpapper').classList.remove('load');
    })
    .then(() => {
        refs.signInModal.classList.add('is-hidden');
        e.target.email.value = null;
        e.target.pass.value = null;
        window.location.reload(true); //!
    })
    .catch(e => {
        const errorCode = e.code;
        const errorMessage = e.message;
        PNotify.error({
          title: 'Error',
          text: errorMessage,
          delay: 1000,
        });
        console.log(PNotify);
        document.querySelector('.signin-wpapper').classList.remove('load');
    })
    .finally(() => {
        refs.signinSpinner.classList.add('is-hidden');
        refs.loginForm.classList.remove('is-hidden');
    });
});

//закрытие модалок
refs.signUpBtn.addEventListener('click', () => {
refs.signUpModal.classList.remove('is-hidden');
refs.signUpModal.addEventListener('click', hideSignUpModal);
window.addEventListener('keydown', hideSignUpEsc);
document.body.style.overflow = 'hidden';
});

refs.signInBtn.addEventListener('click', () => {
showPassBtn.addEventListener('click', () => {
    if (fieldPass.type === 'password') {
    fieldPass.type = 'text';
    } else {
    fieldPass.type = 'password';
    }
});

refs.signInModal.classList.remove('is-hidden');
document.body.style.overflow = 'hidden';
refs.signUpNowBtn.addEventListener('click', () => {
    refs.signInModal.classList.add('is-hidden');
    refs.signUpModal.classList.remove('is-hidden');
    refs.signUpModal.addEventListener('click', hideSignUpModal);
    window.addEventListener('keydown', hideSignUpEsc);
});

refs.signInModal.addEventListener('click', hideSignInModal);
window.addEventListener('keydown', hideSignInEsc);
});
  
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


  

