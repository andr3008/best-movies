import getRefs from './get-refs';
import NewApi from './fetch-api';
import cardTemp from '../templates/library-template.hbs';

const newApi = new NewApi();
const refs = getRefs();


class LibraryPaint {
  constructor() {}

  eventListeners = () => {
    refs.libraryBtn.addEventListener('click', this.renderLibrary);
    refs.watchedBtn.addEventListener('click', this.renderWatchedContainer);
    refs.queueBtn.addEventListener('click', this.renderQueueContainer);
  };

  renderLibrary = () => {
    refs.paginationContainer.classList.add('hide');
    refs.filter.classList.add('hide');
    refs.propos.innerHTML = `<h2 class ='hidden__title'> Choose a section </h2>`;
    refs.cardContainer.innerHTML = '';
  }

  renderWatchedContainer = () => {
    this.btnActiv(refs.watchedBtn,refs.queueBtn);
    
    if (localStorage.getItem('moviesWatched') === null) {
      refs.propos.innerHTML = `<h2 class ='hidden__title'> There are no films in the library </h2>`;
      refs.cardContainer.innerHTML = ''
      return
    }
    refs.propos.innerHTML = '';
    const movies = JSON.parse(localStorage.getItem('moviesWatched'));
    return Promise.all(movies.map(id => newApi.fetchOneMovieInfo(id))).then(this.cardRender);
  };
  
  renderQueueContainer = () => {
    this.btnActiv(refs.queueBtn, refs.watchedBtn);

    if (localStorage.getItem('movieQueue') === null) {
      refs.propos.innerHTML = `<h2 class ='hidden__title'> There are no films in the library </h2>`;
      refs.cardContainer.innerHTML = ''
      return
    }

    refs.propos.innerHTML = '';
    const movies = JSON.parse(localStorage.getItem('movieQueue'));
    return Promise.all(movies.map(id => newApi.fetchOneMovieInfo(id))).then(this.cardRender);
  };

  cardRender = results => {
    refs.cardContainer.innerHTML = cardTemp(results);
  };

  btnActiv = (active, hide) => {
    active.classList.add('library__btn--active');
    hide.classList.remove('library__btn--active');
    refs.paginationContainer.classList.add('hide');
  }

  init = () => {
    this.eventListeners();
  };
}

const libraryPaint = new LibraryPaint();
libraryPaint.init();
