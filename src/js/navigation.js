import getRefs from './getRefs';
const refs = getRefs();
import Pagination from './pagination';
import fetchAPI from './fetchAPI';

import playLogo from './logoAnime';

import { resetError } from './home';
import { fetchGall } from './home';

const apiService = new fetchAPI();

const pagination = new Pagination();

refs.libraryBtn.addEventListener('click', onLibraryBtnOpen);
refs.homeBtn.addEventListener('click', onHomeBtnOpen);
refs.logo.addEventListener('click', onHomeBtnOpen);


function onLibraryBtnOpen() {
  changeWorkplace(refs.searchForm, refs.libraryContainer);
  changeBtnActive(refs.libraryBtn, refs.homeBtn);
  changeOverlay('library-overlay', 'overlay');
  playLogo();

  // alert('нужна отрисовка контейнера');
  refs.error.classList.add('hide');

  // resetError();
  // alert('нужна отрисовка контейнера');
}

function onHomeBtnOpen() {
  changeWorkplace(refs.libraryContainer, refs.searchForm);
  changeBtnActive(refs.homeBtn, refs.libraryBtn);
  changeOverlay('overlay', 'library-overlay');
  playLogo();
  resetError();
//   fetchGall();
//   refs.pageList.innerHTML = '';
// apiService.resetPage;
//   refs.cardContainer.innerHTML = '';
//   apiService.pagination(pagination.currentPage);
  window.location.reload();
  
  
}

//меняем оверлей
function changeOverlay(add, remove) {
  refs.header.classList.add(add);
  refs.header.classList.remove(remove);
}

//меняем подчеркивание активной кнопки
function changeBtnActive(active, inactive) {
  active.classList.add('navigation__button--active');
  inactive.classList.remove('navigation__button--active');
}

//прячем-показываем форму и кнопки

function changeWorkplace(hide, show) {
  hide.classList.add('hide');
  show.classList.remove('hide');
}
