import getRefs from './getRefs';
const refs = getRefs();

refs.libraryBtn.addEventListener('click', onLibraryBtnOpen);
refs.homeBtn.addEventListener('click', onHomeBtnOpen);
refs.logo.addEventListener('click', onHomeBtnOpen);

console.log(refs.libraryBtn);

function onLibraryBtnOpen() {
  changeWorkplace(refs.searchForm, refs.libraryContainer);
  changeBtnActive(refs.libraryBtn, refs.homeBtn);
  changeOverlay('library-overlay', 'overlay');
  alert('нужна функция для отрисовки контейнера');
}

function onHomeBtnOpen() {
  changeWorkplace(refs.libraryContainer, refs.searchForm);
  changeBtnActive(refs.homeBtn, refs.libraryBtn);
  changeOverlay('overlay', 'library-overlay');
  alert('нужна функция для отрисовки контейнера');
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
