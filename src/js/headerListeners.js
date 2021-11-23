import getRefs from './getRefs';
const refs = getRefs();

const modalAddWatched = document.querySelector('.js-addWatched')
   console.log(modalAddWatched)
modalAddWatched.addEventListener('click', () => {
    console.log('click')
})