import getRefs from './get-refs';
const refs = getRefs();

function modalHide() {
  refs.modalBcdrop.classList.add('backdrop--is-hidden');
  document.body.style.overflow = 'visible';
}

function modalShow() {
  refs.modalBcdrop.classList.remove('backdrop--is-hidden');
  document.body.style.overflow = 'hidden';
}

refs.modalOpenBtn.addEventListener('click', modalShow);

// close the modal window by 'X' btn
refs.modalCloseBtn.addEventListener('click', modalHide);

// close the modal window by escape
window.addEventListener('keydown', evt => {
  if (evt.key === 'Escape') modalHide();
});

// close the modal window by backdrop click
refs.modalBcdrop.addEventListener('click', evt => {
  if (evt.target === evt.currentTarget) modalHide();
});
