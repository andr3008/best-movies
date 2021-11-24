import modalFilmCard from '../templates/modalCardTemp.hbs';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import getRefs from './getRefs';
const refs = getRefs();
// import onAddWatchedClick  from "./addToLocalStorage.js";
import Library from './addToLocalStorage';

import NewApiService from '../js/fetchAPI';
const ApiInfo = new NewApiService();
const library = new Library();
const cardFilm = document.querySelector('.js-card');

cardFilm.addEventListener('click', openModal);

function openModal(e) {
  e.preventDefault();

  ApiInfo.fetchOneMovieInfo(e.target.dataset.action).then(data => {
    if (e.target.nodeName !== 'IMG') return;
    const markup = modalFilmCard(data);
    const modal = basicLightbox.create(markup);
    modal.show();
    // document.body.style.overflow = 'hidden';  // --------------отключение скролла (можно попробовать если дописать)

    const modalAddWatched = document.querySelector('.js-addWatched');
    modalAddWatched.addEventListener('click', library.onAddWatchedClick(modalAddWatched));

    const modalDeleteWatched = document.querySelector('.js-deleteWatched');
    modalDeleteWatched.addEventListener('click', library.onAddWatchedClick);

    const modalAddQueue = document.querySelector('.js-addQueue');
    modalAddQueue.addEventListener('click', library.onAddQueueClick);

     const modalDeleteQueue = document.querySelector('.js-deleteQueue');
    modalDeleteQueue.addEventListener('click', library.onAddQueueClick);

    //Function to close modalCard
    const closeBtn = document.querySelector('.js-modal__close-btn');
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('keydown', closeModalHandler);

    function closeModalHandler(e) {
      if (e.code === 'Escape') {
        modal.close();
        window.removeEventListener('keydown', closeModalHandler);
      }
    }

    function closeModal() {
      modal.close();
      window.removeEventListener('keydown', closeModalHandler);
    }
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
