import getRefs from './getRefs';
const refs = getRefs();

function modalHide() {
    refs.modalBcdrop.classList.add('backdrop--is-hidden');
}

function modalShow() {
    refs.modalBcdrop.classList.remove('backdrop--is-hidden');
}

refs.modalOpenBtn.addEventListener('click', modalShow);
refs.modalCloseBtn.addEventListener('click', modalHide);
window.addEventListener('keydown', evt => {
    if (evt.key === 'Escape') modalHide();
});

