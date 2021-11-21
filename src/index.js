import './sass/main.scss';

import './js/changeTheme.js';

import './js/fetchCard';
import './js/headerListeners';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

import './js/fetchAPI';
import './js/navigation';
import './js/search';
import './js/headerListeners';
import './js/loader';
import './js/logoAnime';
import './js/dev-modal';

import './js/registration';
import './js/init-firebase';
const refs = {
  cardContainer: document.querySelector('.collection'),
  homeBtn: document.querySelector('.js-button__home'),
  libraryBtn: document.querySelector('.js-button__library'),
  watchedBtn: document.querySelector('.js-library__watched'),
  queueBtn: document.querySelector('.js-library__queue'),
};

import './js/pagination';
import './js/btnUp';

import './js/openMovieCard';
