import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import 'animate.css';
import NewApiService from './fetch-api';
const ApiTrailer = new NewApiService();
export const addEventLisBtnTra = () => {
  const cardTreiler = document.querySelector('.trailer-btn');
  cardTreiler.addEventListener('click', openTrailer);
};

function openTrailer(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'BUTTON') return;
  ApiTrailer.fetchgetFilmTrailers(e.target.dataset.id).then(data => {
    const id = data.results[0].key;
    const instance = basicLightbox.create(`
  <iframe src='https://www.youtube.com/embed/${id}'></iframe>
`);
    instance.show();
  });
}

export const remEventLisBtnTra = () => {
  const cardTreiler = document.querySelector('.trailer-btn');
  cardTreiler.removeEventListener('click', closeTrailer);
  window.addEventListener('keydown', onBackdropClick);
};

function closeTrailer(e) {
  if (e.code === 'Escape') {
    removeListenerFromTrailer();
  }
}
function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    removeListenerFromTrailer();
  }
}
function closeModal() {
  removeListenerFromTrailer();
}
function removeListenerFromTrailer() {
  instance.close();
  window.removeEventListener('keydown', closeTrailer);
}
