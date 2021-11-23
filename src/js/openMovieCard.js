import modalFilmCard from '../templates/modalCardTemp.hbs';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import NewApiService from '../js/fetchAPI';
const ApiInfo = new NewApiService();

const cardFilm = document.querySelector('.js-card');

cardFilm.addEventListener('click', openModal);

function openModal(e) {
  e.preventDefault();
  console.log(e.target);
  ApiInfo.fetchOneMovieInfo(e.target.dataset.action).then(data => {
    if (e.target.nodeName !== 'IMG') return;
    const markup = modalFilmCard(data);
    const modal = basicLightbox.create(markup);
    modal.show();
  });
}

// function openModal(e) {
//   e.preventDefault();
//   const li = document.querySelector('.card')
//   if (li.dataset.action) {
//     fetchOneMovieInfo(+e.target.dataset.action).then(onOpenCard);
//     console.log(li.dataset.action)
//   }
// }

// function onOpenCard(oneMarkup) {
//   const markup = modalFilmCard(oneMarkup);
//     const modal = basicLightbox.create(markup);
//     modal.show();
// }

function modalHide() {
    refs.modalBcdrop.classList.add('backdrop--is-hidden');
    document.body.style.overflow = 'visible';
}

function modalShow() {
    refs.modalBcdrop.classList.remove('backdrop--is-hidden');
    document.body.style.overflow = 'hidden';
}