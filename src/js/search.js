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
  API.insertGenresToSearch().then(templateCard).catch(onError).finally(resetForm);
}

function templateCard(markup) {
  refs.cardContainer.innerHTML = cardTemp(markup);
}

function onError() {
  refs.searchIcon.classList.add('hide');
  refs.error.classList.remove('hide');
  refs.input.placeholder = '';
}

function clearArticlesContainer() {
  refs.cardContainer.innerHTML = '';
}

//чистим инпут после отработки запроса
function resetForm() {
  refs.input.value = '';
}
