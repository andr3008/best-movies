import getRefs from './get-refs';
const refs = getRefs();

import playLogo from './logo-anime';
import { fetchGall } from './home';

import NewApiService from './fetch-api';
const apiServise = new NewApiService();

import Pagination from './pagination';
const pagination = new Pagination();

refs.libraryBtn.addEventListener('click', onLibraryBtnOpen);
refs.homeBtn.addEventListener('click', onHomeBtnOpen);
refs.logo.addEventListener('click', onHomeBtnOpen);

function onLibraryBtnOpen() {
  changeActiveElement(refs.searchForm, refs.libraryContainer, 'hide');
  changeActiveElement(refs.libraryBtn, refs.homeBtn, 'navigation__button--active');
  changeOverlay('library-overlay', 'overlay');
  playLogo();
}

function onHomeBtnOpen() {
  changeActiveElement(refs.libraryContainer, refs.searchForm, 'hide');
  changeActiveElement(refs.homeBtn, refs.libraryBtn, 'navigation__button--active');
  changeOverlay('overlay', 'library-overlay');
  playLogo();
  window.location.reload();
  fetchGall();
}

function changeOverlay(add, remove) {
  refs.header.classList.add(add);
  refs.header.classList.remove(remove);
}

function changeActiveElement(ref1, ref2, style) {
  ref1.classList.add(style);
  ref2.classList.remove(style);
}

function resetPagination() {
  refs.paginationContainer.classList.remove('hide');
  refs.pageList.innerHTML = '';
  apiServise.pagination(apiServise.resetPage());
}
