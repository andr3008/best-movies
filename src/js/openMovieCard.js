import modalFilmCard from '../templates/modalCardTemp.hbs';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const apiKey = '9aaadf590dc90bb88adc9b4200a95438';

const cardFilm = document.querySelector('.js-card');

cardFilm.addEventListener('click', openModal);

function fetchOneMovieInfo(movie_id) {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}`;
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      return data;
    });
}

function openModal(e) {
  e.preventDefault();
  console.log(e.target);
  fetchOneMovieInfo(e.target.dataset.action).then(data => {
    if (e.target.nodeName !== 'IMG') return;
    const markup = modalFilmCard(data);
    const modal = basicLightbox.create(markup);
    modal.show();
  });
}
