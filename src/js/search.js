import getRefs from './getRefs';
const refs = getRefs();

import NewApiService from '../js/fetchAPI';
const API = new NewApiService();

import cardTemp from '../templates/cardTemplate.hbs';

// import searchFetchMovie from './pagination'

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  clearArticlesContainer();

  API.query = e.currentTarget.elements.query.value;
  API.resetPage();
  API.fetchSearchMovies().then(templateCard).catch(onFetchError);
}

function templateCard(markup) {
  refs.cardContainer.innerHTML = cardTemp(markup);
}

function onFetchError(error) {
  alert('We have a problem');
}

function clearArticlesContainer() {
  refs.cardContainer.innerHTML = '';
}
