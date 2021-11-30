import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import NewApiService from './fetch-api';
const ApiInfo = new NewApiService();

const cardTreiler = document.querySelector('.trailer-btn');
cardTreiler.addEventListener('click', openTrailer);

function openTrailer(e) {
  e.preventDefault();
  ApiInfo.fetchgetFilmTrailers(e.target.dataset.results).then(data => {
    if (e.target.nodeName !== 'BUTTON') return;
    const id = data.results;
    const instance = basicLightbox.create(`
  <iframe src='https://www.youtube.com/embed/${id}'></iframe>
`);
    instance.show();
  });
}
