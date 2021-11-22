import getRefs from './getRefs';
const refs = getRefs();

import NewApiService from '../js/fetchAPI';
const API = new NewApiService();

import cardTemp from '../templates/cardTemplate.hbs';

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  clearArticlesContainer();

  API.query = e.currentTarget.elements.query.value;
  API.resetPage();
  complitFilmCard().then(templateCard).catch(onFetchError);
}

function templateCard(markup) {
  API.insertGenresToMovieList();
  refs.cardContainer.innerHTML = cardTemp(markup);
}

function onFetchError(error) {
  alert('We have a problem');
}

function clearArticlesContainer() {
  refs.cardContainer.innerHTML = '';
}

function complitFilmCard() {
  return API.fetchSearchMovies().then(data => {
    return API.fetchGenres().then(genresList => {
      return data.map(movie => ({
        ...movie,

        genres: movie.genre_ids.map(id => genresList.filter(el => el.id === id)).flat(),
      }));
    });
  });
}
