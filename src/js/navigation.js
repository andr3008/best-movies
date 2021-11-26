import getRefs from './getRefs';
const refs = getRefs();

import playLogo from './logoAnime';
import { fetchGall } from './home';
import { resetError } from './home';

refs.libraryBtn.addEventListener('click', onLibraryBtnOpen);
refs.homeBtn.addEventListener('click', onHomeBtnOpen);
refs.logo.addEventListener('click', onHomeBtnOpen);

function onLibraryBtnOpen() {
  changeWorkplace(refs.searchForm, refs.libraryContainer);
  changeBtnActive(refs.libraryBtn, refs.homeBtn);
  changeOverlay('library-overlay', 'overlay');
  playLogo();
}

function onHomeBtnOpen() {
  fetchGall();
  changeWorkplace(refs.libraryContainer, refs.searchForm);
  changeBtnActive(refs.homeBtn, refs.libraryBtn);
  changeOverlay('overlay', 'library-overlay');
  playLogo();
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
