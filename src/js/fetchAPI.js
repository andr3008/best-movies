const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '9aaadf590dc90bb88adc9b4200a95438';
import cardTemp from '../templates/cardTemplate.hbs';
const refs = {
  cardContainer: document.querySelector('.collection-list'),
};

function fetchTempMovies() {
  return fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(item => {
      const markup = cardTemp(item.results);
      refs.cardContainer.innerHTML = markup;
    })
    .catch(error => {
      console.log(error);
    });
}
fetchTempMovies();
