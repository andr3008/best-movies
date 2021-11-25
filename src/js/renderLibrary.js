import getRefs from "./getRefs";
import NewApi from "./fetchAPI";
import cardTemp from "../templates/myLibTemp.hbs";

const newApi = new NewApi()
const refs = getRefs();

// refs.libraryBtn.addEventListener('click', renderWatchedContainer)
// refs.watchedBtn.addEventListener('click',renderWatchedContainer)

// function renderWatchedContainer() {
//     const movies = JSON.parse(localStorage.getItem('moviesWatched'))
//     return Promise.all(movies.map(id => newApi.fetchOneMovieInfo(id))).then(cardRender)   
// }

// function cardRender(results) {
//     refs.cardContainer.innerHTML = cardTemp(results)
// }

class LibraryPaint{
    constructor() {
        
    }

    eventListeners = () => {
        refs.libraryBtn.addEventListener('click', this.renderWatchedContainer);
        refs.watchedBtn.addEventListener('click', this.renderWatchedContainer);
        refs.queueBtn.addEventListener('click', this.renderQueueContainer);
    }
    
    renderWatchedContainer = () => {
        refs.watchedBtn.classList.add('library__btn--active');
        refs.queueBtn.classList.remove('library__btn--active');
        refs.paginationContainer.classList.add('hide');

        const movies = JSON.parse(localStorage.getItem('moviesWatched'));
        return Promise.all(movies.map(id => newApi.fetchOneMovieInfo(id))).then(this.cardRender);
    }
    
    renderQueueContainer = () => {
        refs.queueBtn.classList.add('library__btn--active');
        refs.watchedBtn.classList.remove('library__btn--active');
        refs.paginationContainer.classList.add('hide');

        const movies = JSON.parse(localStorage.getItem('movieQueue'));
        return Promise.all(movies.map(id => newApi.fetchOneMovieInfo(id))).then(this.cardRender);
    }

    cardRender = (results) => {
        refs.cardContainer.innerHTML = cardTemp(results);
    }

    init=()=> {
        this.eventListeners();
    }
}

const libraryPaint = new LibraryPaint()
libraryPaint.init();