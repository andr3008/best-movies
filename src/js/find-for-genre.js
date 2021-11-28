import fetchAPI from './fetch-api';
import cardTemp from '../templates/card-template.hbs';
import Pagination from './pagination';
import getRefs from './get-refs';
const refs = getRefs();
export const apiService = new fetchAPI();
const pagination = new Pagination();
const reservImg='https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-';
let genreValue = '';
refs.filterInput.forEach(item => {
      item.addEventListener('change', event => {
      apiService. resetPage();
      refs.searchInput.value = '';
      genreValue = refs.genrePicker.value;
      createCard(genreValue);
    });
  });
  function createCard(genre){
    apiService.fetchForGenre(genre).then(res => {
      refs.gallery.innerHTML = cardTemp(createMovieObject(res.results));
      
    
  })
}
  
   function  createMovieObject(movies) {
    movies.forEach(elem => {
      if (elem.title.length > 0) {
       elem.poster_path
        ? (elem.poster_path = `https://image.tmdb.org/t/p/w500/${elem.poster_path}`)
        : (elem.poster_path = reservImg);
      elem.release_date
        ? (elem.release_date = elem.release_date.slice(0, 4))
        : (elem.release_date = 'Unknown');
      }
      else {
        elem.genre_ids = 'Unknown';
      }
    });
    return movies;
    }