import getRefs from './getRefs';
const refs = getRefs();

const moviesWatched = [];
const movieQueue = [];
// export default function onAddWatchedClick() {
//     const modalImageRef = document.querySelector('.js-image');
//     const idElem = modalImageRef.dataset.action;
//     if (moviesWatched.includes(idElem)) return;

//     moviesWatched.push(idElem);
//     localStorage.setItem('moviesWatched', JSON.stringify(moviesWatched));
// }

export default class Library{
    constructor() {
  }

    onAddWatchedClick() {
        const modalImageRef = document.querySelector('.js-image');
        const idElem = modalImageRef.dataset.action;

        if (moviesWatched.includes(idElem)) return;
        
        moviesWatched.push(idElem);
        localStorage.setItem('moviesWatched', JSON.stringify(moviesWatched));
    }

    onAddQueueClick() {
        const modalImageRef = document.querySelector('.js-image');
        const idElem = modalImageRef.dataset.action;

        if (movieQueue.includes(idElem)) return;
        movieQueue.push(idElem);
        localStorage.setItem('movieQueue', JSON.stringify(movieQueue));
    }
}