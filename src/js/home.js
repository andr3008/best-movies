import fetchAPI from './fetchAPI';
import getRefs from './getRefs';
import cardTemp from '../templates/cardTemplate.hbs';
import Pagination from './pagination';
import { loader } from './loader';

const refs = getRefs();

function templateCard(markup) {
  cardContainer.innerHTML = cardTemp(markup);
}

const apiService = new fetchAPI();

const pagination = new Pagination();

const cardContainer = refs.cardContainer;
pagination.init();

refs.paginationList.addEventListener('click', onBtnClick);
refs.prevBtn.addEventListener('click', onPrevBtnClick);
refs.nextBtn.addEventListener('click', onNextBtnClick);
refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  apiService.query = e.currentTarget.elements.query.value.trim();
  apiService.resetPage();
  if (apiService.query.length === 0) {
    onError();
  }
  resetError();
  refs.pageList.innerHTML = '';
  pagination.currentPage = 1;
  searchFetchMovie();
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

//  изменение нумерации при клике на кнопки с цифрами
function onBtnClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }

  cardContainer.innerHTML = '';
  refs.pageList.innerHTML = '';

  pagination.currentPage = Number(evt.target.textContent);
  apiService.pagination(pagination.currentPage);

  if (apiService.query) {
    searchFetchMovie();
  } else {
    fetchGall();
  }
}
//  изменение нумерации на 1 при клике на кнопку Prev
function onPrevBtnClick(evt) {
  evt.preventDefault();

  if (pagination.currentPage > 1) {
    pagination.currentPage -= 1;
  }

  cardContainer.innerHTML = '';
  refs.pageList.innerHTML = '';
  apiService.pagination(pagination.currentPage);

  if (apiService.query) {
    searchFetchMovie();
  } else {
    fetchGall();
  }
}

function onNextBtnClick(evt) {
  evt.preventDefault();

  if (pagination.currentPage !== pagination.totalPages) {
    pagination.currentPage += 1;
  }

  cardContainer.innerHTML = '';
  refs.pageList.innerHTML = '';
  apiService.pagination(pagination.currentPage);

  if (apiService.query) {
    searchFetchMovie();
  } else {
    fetchGall();
  }
}

//  обработка ответа API по умолчанию(популярные фильмы) и отрисовка страницы
export function fetchGall() {
  loader.start();
  apiService
    .fetch()
    .then(data => {
      pagination.totalPages = data.total_pages;
      refs.lastBtn.textContent = pagination.totalPages;
      pagination.init();
      return data.results;
    })
    .then(data => {
      return apiService.fetchGenres().then(genresList => {
        return data.map(movie => ({
          ...movie,

          genres: movie.genre_ids.map(id => genresList.filter(el => el.id === id)).flat(),
        }));
      });
    })
    .then(templateCard)
    .catch(console.log);
  //.finally(loader.stop);
}

apiService.pagination(pagination.currentPage);
fetchGall();

// // // обработка ответа API по поиску и отрисовка страницы

function searchFetchMovie() {
  loader.start();
  apiService
    .searchFetch()
    .then(data => {
      pagination.totalPages = data.total_pages;
      refs.lastBtn.textContent = pagination.totalPages;
      pagination.init();
      return data.results;
    })
    .then(data => {
      if (data.length === 0) {
        onError();
        fetchGall();
      } else {
        return apiService.fetchGenres().then(genresList => {
          return data.map(movie => ({
            ...movie,

            genres: movie.genre_ids.map(id => genresList.filter(el => el.id === id)).flat(),
          }));
        });
      }
    })
    .then(templateCard)
    .catch(error => console.log(error))
    .finally(resetForm);
}
