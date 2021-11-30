import modalFilmCard from '../templates/modalcard-template.hbs';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import 'animate.css';

import NewApiService from './fetch-api';
const ApiInfo = new NewApiService();

const cardFilm = document.querySelector('.js-card');
cardFilm.addEventListener('click', openModal);

const moviesWatched = [];
const movieQueue = [];

function openModal(e) {
  e.preventDefault();

  ApiInfo.fetchOneMovieInfo(e.target.dataset.action).then(data => {
    if (e.target.nodeName !== 'IMG') return;
    const markup = modalFilmCard(data);
    const modal = basicLightbox.create(markup);
    modal.show();

    const element = document.querySelector('.modal-card');
    element.classList.add('animate__animated', 'animate__zoomInDown');

    // Кнопки =>>

    const modalAddWatched = document.querySelector('.js-addWatched');
    const modalDeleteWatched = document.querySelector('.js-deleteWatched');
    const modalAddQueue = document.querySelector('.js-addQueue');
    const modalDeleteQueue = document.querySelector('.js-deleteQueue');

    // Кнопки <<=
    const modalImageRef = document.querySelector('.js-image');
    const idElem = modalImageRef.dataset.action;

    // Условие включения кнопок=>>

    if (moviesWatched.includes(idElem)) {
      hideBtn(modalAddWatched, modalDeleteWatched);
    }

    if (movieQueue.includes(idElem)) {
      hideBtn(modalAddQueue, modalDeleteQueue);
    }
    // Условие включения кнопок <<=

    // Слушатели =>>
    modalAddWatched.addEventListener('click', onClickToAddWathedMovie);
    modalDeleteWatched.addEventListener('click', onClickToDeleteWathedMovie);
    modalAddQueue.addEventListener('click', onClickToAddQueueMovie);
    modalDeleteQueue.addEventListener('click', onClickToDeleteQueueMovie);
    // Слушатели <<=

    function hideBtn(hide, show) {
      hide.classList.add('hide');
      show.classList.remove('hide');
    }

    // Функции слушателей =>>
    function onClickToAddWathedMovie() {
      if (moviesWatched.includes(idElem)) return;
      hideBtn(modalAddWatched, modalDeleteWatched);

      moviesWatched.push(idElem);
      localStorage.setItem('moviesWatched', JSON.stringify(moviesWatched));
    }

    function onClickToDeleteWathedMovie() {
      hideBtn(modalDeleteWatched, modalAddWatched);

      moviesWatched.splice(moviesWatched.indexOf(idElem), 1);
      localStorage.removeItem('moviesWatched');
      localStorage.setItem('moviesWatched', JSON.stringify(moviesWatched));
    }

    function onClickToAddQueueMovie() {
      if (movieQueue.includes(idElem)) return;
      hideBtn(modalAddQueue, modalDeleteQueue);

      movieQueue.push(idElem);
      localStorage.setItem('movieQueue', JSON.stringify(movieQueue));
    }

    function onClickToDeleteQueueMovie() {
      hideBtn(modalDeleteQueue, modalAddQueue);

      movieQueue.splice(movieQueue.indexOf(idElem), 1);
      localStorage.removeItem('movieQueue');
      localStorage.setItem('movieQueue', JSON.stringify(movieQueue));
    }

    // Функции слушателей <<=

    //Function to close modalCard

    const closeBtn = document.querySelector('.js-modal__close-btn');
    closeBtn.addEventListener('click', closeModal);

    window.addEventListener('keydown', closeModalHandler);

    const closeBackdrop = document.querySelector('.basicLightbox');
    closeBackdrop.addEventListener('click', onBackdropClick);

    function closeModalHandler(e) {
      if (e.code === 'Escape') {
        removeListenerFromModalClose();
      }
    }
    function onBackdropClick(e) {
      if (e.currentTarget === e.target) {
        removeListenerFromModalClose();
      }
    }
    function closeModal() {
      removeListenerFromModalClose();
    }
    function removeListenerFromModalClose() {
      modal.close();
      window.removeEventListener('keydown', closeModalHandler);
      element.classList.add('animate__animated', 'animate__slideOutUp');
    }
  });
}
