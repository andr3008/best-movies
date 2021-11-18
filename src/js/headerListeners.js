 const refs = {
  homeBtn: document.querySelector('.js-button__home'),
  libraryBtn: document.querySelector('.js-button__library'),
  libraryContainer:document.querySelector('.js-library'),
  watchedBtn: document.querySelector('.js-library__watched'),
  queueBtn: document.querySelector('.js-library__queue'),
  searchForm:document.querySelector(".js-search__form"),
  searchBtn:document.querySelector('.js-search__button'),
};

refs.libraryBtn.addEventListener('click', onLibraryClick)
refs.homeBtn.addEventListener('click', onHomeClick)


function onLibraryClick() {
  refs.libraryContainer.classList.remove('hide')
  refs.searchForm.classList.add('hide')
}

function onHomeClick() {
  refs.libraryContainer.classList.add('hide')
  refs.searchForm.classList.remove('hide')
}