import './sass/main.scss';


import './js/fetchAPI';

// import ApiService from './js/fetchAPI';
// const apiService = new ApiService();
// import './js/fetchAPI';
import cardTemp from './templates/cardTemplate.hbs';
const refs = {
  cardContainer: document.querySelector('.collection'),
  homeBtn: document.querySelector('.js-button__home'),
  libraryBtn: document.querySelector('.js-button__library'),
  libraryContainer:document.querySelector('.js-library'),
  watchedBtn: document.querySelector('.js-library__watched'),
  queueBtn: document.querySelector('.js-library__queue'),
  searchForm:document.querySelector(".js-search__form"),
  searchBtn:document.querySelector('.js-search__button'),
};
// console.log(refs.libraryContainer);
fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=9aaadf590dc90bb88adc9b4200a95438')
  .then(response => {
    return response.json();
  })
  .then(item => {
    console.log(item);
    const markup = cardTemp(item.results);
    refs.cardContainer.innerHTML = markup;
  })
  .catch(err => {
    console.log(err);
  });

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