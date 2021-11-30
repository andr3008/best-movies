export default function getRefs() {
  return {
    homeBtn: document.querySelector('.js-button__home'),
    propos: document.querySelector('.propos'),
    filter:document.querySelector('.filter-section'),
    libraryBtn: document.querySelector('.js-button__library'),
    libraryContainer: document.querySelector('.js-library'),
    watchedBtn: document.querySelector('.js-library__watched'),
    queueBtn: document.querySelector('.js-library__queue'),
    searchForm: document.querySelector('.js-search__form'),
    searchBtn: document.querySelector('.js-search__button'),
    header: document.querySelector('.js-header'),
    logo: document.querySelector('.navigation__logo'),
    cardContainer: document.querySelector('.collection-list'),
    error: document.querySelector('.search__error'),
    searchIcon: document.querySelector('.search__svg'),
    input: document.querySelector('.search__input'),

    theme: document.querySelector('.theme-switch__toggle'),
    body: document.querySelector('body'),

    modalOpenBtn: document.querySelector('.js-modal__dev-open-btn'),
    modalCloseBtn: document.querySelector('.js-modal__dev-close-btn'),
    modalBcdrop: document.querySelector('.js-backdrop'),

    registerForm: document.querySelector('.modal__form-registration'),
    loginForm: document.querySelector('.modal__form-login'),
    signInModal: document.querySelector('.backdrop[data-modal-signin]'),
    signUpBtn: document.querySelector('.user-box__signup'),
    signInBtn: document.querySelector('.user-box__signin'),
    signIn: document.querySelector('.modal__button'),
    logOutBtn: document.querySelector('.logout-js'),
    signUpModal: document.querySelector('.backdrop[data-modal-signup]'),
    signUpNowBtn: document.querySelector('.signup-now__button'),
    googleBtn: document.querySelector('.google-signin'),
    showPassBtn: document.querySelector('.show-pass'),
    fieldPass: document.querySelector('.pass-js'),

    paginationContainer:document.querySelector('.pagination'),
    paginationList: document.querySelector('.pagination-mid'),
    pageList: document.querySelector('.pages'),
    lastBtn: document.getElementById('last-page'),
    prevBtn: document.getElementById('button-prev'),
    nextBtn: document.getElementById('button-next'),
    firstPage: document.querySelector('.first'),
    lastPage: document.querySelector('.last'),
    scrollToTopBtn: document.querySelector('.scrollToTopBtn'),

    filterInput: document.querySelectorAll('.filter-input'),
    genrePicker: document.querySelector('#genrepicker'),
    filter: document.querySelector('.filter-section'),
    searchInput: document.querySelector('.search__input'),
    gallery: document.querySelector('.collection-list'),

  };
}