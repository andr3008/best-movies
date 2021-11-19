export default function getRefs() {
  return {
    homeBtn: document.querySelector('.js-button__home'),
    libraryBtn: document.querySelector('.js-button__library'),
    libraryContainer: document.querySelector('.js-library'),
    watchedBtn: document.querySelector('.js-library__watched'),
    queueBtn: document.querySelector('.js-library__queue'),
    searchForm: document.querySelector('.js-search__form'),
    searchBtn: document.querySelector('.js-search__button'),
    header: document.querySelector('.js-header'),
    logo: document.querySelector('.navigation__logo'),
  };
}
