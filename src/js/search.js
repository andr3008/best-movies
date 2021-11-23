import getRefs from './getRefs';
const refs = getRefs();

import NewApiService from '../js/fetchAPI';
const API = new NewApiService();

import cardTemp from '../templates/cardTemplate.hbs';
import { render } from './fetchCard';

// import searchFetchMovie from './pagination'

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  API.query = e.currentTarget.elements.query.value.trim();
  API.resetPage();
  resetError();
  if (API.query.length !== 0) {
    API.insertGenresToSearch().then(renderFilmOnSeasch).catch(onError).finally(resetForm);
  } else onError();
  render();
}

function renderFilmOnSeasch(films) {
  let filmList = films.length;
  if (filmList >= 1) {
    refs.cardContainer.innerHTML = cardTemp(films);
  } else onError();
}

function onError() {
  refs.searchIcon.classList.add('hide');
  refs.error.classList.remove('hide');
  refs.input.placeholder = '';
}

export function resetError() {
  refs.searchIcon.classList.remove('hide');
  refs.error.classList.add('hide');
  refs.input.placeholder = 'Поиск фильмов';
}
//чистим инпут после отработки запроса
function resetForm() {
  refs.input.value = '';
}
