import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

import fetchAPI from './fetch-api';
import getRefs from './get-refs';
import cardTemp from '../templates/card-template.hbs';
import Pagination from './pagination';

export const refs = getRefs();

export function templateCard(markup) {
  refs.cardContainer.innerHTML = cardTemp(markup);
}

export const apiService = new fetchAPI();

export const pagination = new Pagination();

function init(data) {
  pagination.totalPages = data.total_pages;
  refs.lastBtn.textContent = pagination.totalPages;
  return pagination.init();
}

function btnPagination() {
  refs.cardContainer.innerHTML = '';
  refs.pageList.innerHTML = '';
  apiService.pagination(pagination.currentPage);
}

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
  refs.pageList.innerHTML = '';
  pagination.currentPage = 1;
  searchFetchMovie();
}

//для ошибки
function errorSwitch(hide, show, placeholder) {
  hide.classList.add('hide');
  show.classList.remove('hide');
  refs.input.placeholder = placeholder;
}

const errorParts = {
  show: function () {
    errorSwitch(refs.searchIcon, refs.error, '');
  },
  hide: function () {
    errorSwitch(refs.error, refs.searchIcon, 'Поиск фильмов');
  },
};

export function onError() {
  errorParts.show();
  setTimeout(() => {
    errorParts.hide();
  }, 3000);
}

//чистим инпут после отработки запроса
export function resetForm() {
  refs.input.value = '';
}

//  изменение нумерации при клике на кнопки с цифрами
function onBtnClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }

  pagination.currentPage = Number(evt.target.textContent);
  btnPagination();

  if (apiService.query) {
    searchFetchMovie();
  } else {
    fetchGall();
  }
}
function btnPagination() {
  refs.cardContainer.innerHTML = '';
  refs.pageList.innerHTML = '';
  apiService.pagination(pagination.currentPage);
}
//  изменение нумерации на 1 при клике на кнопку Prev
function onPrevBtnClick(evt) {
  evt.preventDefault();

  if (pagination.currentPage > 1) {
    pagination.currentPage -= 1;
  }
  btnPagination();

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
  btnPagination();

  if (apiService.query) {
    searchFetchMovie();
  } else {
    fetchGall();
  }
}

//  обработка ответа API по умолчанию(популярные фильмы) и отрисовка страницы
export function fetchGall() {
  apiService
    .fetch()
    .then(data => {
      init(data);
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

    .catch(error => {
      return errorMessage('Sorry, something is wrong here...');
    });
}

apiService.pagination(pagination.currentPage);
fetchGall();

export function searchFetchMovie() {
  apiService
    .searchFetch()
    .then(data => {
      init(data);
      return data.results;
    })
    .then(data => {
      if (data.length === 0) {
        onError();
        fetchGall();
        refs.filter.classList.remove('hide');
      } else {
        refs.filter.classList.add('hide');
        return apiService.fetchGenres().then(genresList => {
          return data.map(movie => ({
            ...movie,

            genres: movie.genre_ids.map(id => genresList.filter(el => el.id === id)).flat(),
          }));
        });
      }
    })
    .then(templateCard)
    .catch(onError)
    .finally(resetForm);
}

function errorMessage(message) {
  return error({
    text: message,
    delay: 2500,
    closer: false,
    title: 'Ooops!',
    icon: false,
    width: '250px',
    sticker: false,
    addClass: 'error-box',
  });
}
