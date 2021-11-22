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
