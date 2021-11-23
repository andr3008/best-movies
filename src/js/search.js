// import getRefs from './getRefs';
// const refs = getRefs();

// import NewApiService from '../js/fetchAPI';
// const API = new NewApiService();

// import Pagination from './pagination';
// const pagination = new Pagination();

// import cardTemp from '../templates/cardTemplate.hbs';

// import searchFetchMovie from './home'

// refs.searchForm.addEventListener('submit', onSearch);

// function onSearch(e) {
//   e.preventDefault();
//   clearArticlesContainer();
//   API.query = e.currentTarget.elements.query.value;
//   API.resetPage();
//   complitFilmCard().then(templateCard).catch(onError).finally(resetForm);
//  searchFetchMovie()
// }

// function templateCard(markup) {
//   refs.cardContainer.innerHTML = cardTemp(markup);
// }

// function onError() {
//   refs.searchIcon.classList.add('hide');
//   refs.error.classList.remove('hide');
//   refs.input.placeholder = '';
// }

// function clearArticlesContainer() {
//   refs.cardContainer.innerHTML = '';
// }

// //запрос вместе з жанрами
// function complitFilmCard() {
//   return API.fetchSearchMovies().then(data => {
//     return API.fetchGenres().then(genresList => {
//       return data.map(movie => ({
//         ...movie,

//         genres: movie.genre_ids.map(id => genresList.filter(el => el.id === id)).flat(),
//       }));
//     });
//   });
// }

// //чистим инпут после отработки запроса
// function resetForm() {
//   refs.input.value = '';
// }

import getRefs from './getRefs';
const refs = getRefs();

import NewApiService from '../js/fetchAPI';
const API = new NewApiService();

import cardTemp from '../templates/cardTemplate.hbs';
import { render } from './fetchCard';

// refs.searchForm.addEventListener('submit', onSearch);

// function onSearch(e) {
//   e.preventDefault();
//   API.query = e.currentTarget.elements.query.value.trim();
//   API.resetPage();
//   resetError();
//   if (API.query.length !== 0) {
//     API.insertGenresToSearch().then(renderFilmOnSeasch).catch(onError).finally(resetForm);
//   } else {
//     onError();
//     render();
//   }
// }

// function renderFilmOnSeasch(films) {
//   let filmList = films.length;
//   if (filmList >= 1) {
//     refs.cardContainer.innerHTML = cardTemp(films);
//   } else {
//     onError();
//     render();
//   }
// }

// function onError() {
//   refs.searchIcon.classList.add('hide');
//   refs.error.classList.remove('hide');
//   refs.input.placeholder = '';
// }

// export function resetError() {
//   refs.searchIcon.classList.remove('hide');
//   refs.error.classList.add('hide');
//   refs.input.placeholder = 'Поиск фильмов';
// }
// //чистим инпут после отработки запроса
// function resetForm() {
//   refs.input.value = '';
// }
