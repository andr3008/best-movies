import getRefs from './getRefs';
const refs = getRefs();

import NewApiService from '../js/fetchAPI';
const API = new NewApiService();

import cardTemp from '../templates/cardTemplate.hbs';

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(event) {
  event.preventDefault();
  API.query = event.currentTarget.elements.query.value;

  API.fetchSearchMovies().then(renderFilmCard).catch(onFetchError);
}

function renderFilmCard(film) {
  const markup = cardTemp(film);
  refs.cardContainer.innerHTML = markup;
}

function onFetchError(error) {
  alert('We have a problem');
}
