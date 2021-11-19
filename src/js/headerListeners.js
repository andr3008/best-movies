import getRefs from './gerRefs';
const refs = getRefs();

refs.libraryBtn.addEventListener('click', onLibraryClick);
refs.homeBtn.addEventListener('click', onHomeClick);

function onLibraryClick() {
  refs.libraryContainer.classList.remove('hide');
  refs.searchForm.classList.add('hide');
}

function onHomeClick() {
  refs.libraryContainer.classList.add('hide');
  refs.searchForm.classList.remove('hide');
}
