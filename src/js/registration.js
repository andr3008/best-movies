import getRefs from './getRefs';

const refs = getRefs();
const showPassBtn = document.querySelector('.show-pass');
const fieldPass = document.querySelector('.pass-js');
// check is signet



//Modals closing
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





