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

    theme:document.querySelector('.theme-switch__toggle'),
    body:document.querySelector('body'),

    modalOpenBtn: document.querySelector('.js-modal__dev-open-btn'),
    modalCloseBtn: document.querySelector('.js-modal__dev-close-btn'),
    modalBcdrop: document.querySelector('.js-backdrop'),

    registerForm: document.querySelector('.modal__form-registration'),
    loginForm: document.querySelector('.modal__form-login'),
    signInModal: document.querySelector('.backdrop[data-modal-signin]'),
    signUpBtn: document.querySelector('.user-box__signup'),
    signInBtn: document.querySelector('.user-box__signin'),
    logOutBtn: document.querySelector('.logout-js'),
    signUpModal: document.querySelector('.backdrop[data-modal-signup]'),
    signUpNowBtn: document.querySelector('.signup-now__button'),
    signinSpinner: document.querySelector('.signin-spinner'),
    signUpSpinner: document.querySelector('.signup-spinner'),


    paginationList: document.querySelector('.pagination-mid'),
    pageList: document.querySelector('.pages'),
    lastBtn: document.getElementById('last-page'),
    prevBtn: document.getElementById('button-prev'),
    nextBtn: document.getElementById('button-next'),
    firstPage: document.querySelector('.first'),
    lastPage: document.querySelector('.last'),
    scrollToTopBtn: document.querySelector('.scrollToTopBtn'),

  paginationList: document.querySelector('.pagination-mid'),
  pageList: document.querySelector('.pages'),
  lastBtn: document.getElementById('last-page'),
  prevBtn: document.getElementById('button-prev'),
  nextBtn: document.getElementById('button-next'),
  firstPage: document.querySelector('.first'),
  lastPage: document.querySelector('.last'),

  };
}
