const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '9aaadf590dc90bb88adc9b4200a95438';
import cardTemp from '../templates/cardTemplate.hbs';

const refs = {
  cardContainer: document.querySelector('.collection-list'),
};

function fetchTempMovies() {
  return fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(templateCard)
    .catch(error => {
      console.log(error);
    });
}
fetchTempMovies();

function templateCard({ results }) {
  const markup = cardTemp(results);
  refs.cardContainer.innerHTML = markup;
}
function fetchSearchMovies() {
  return fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(templateCard)
    .catch(`Search result not successful. Enter the correct movie name`)
    .finally(() => form.reset());
}

function fetchInfoCardMovies(id) {
  return fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(templateCard)
    .catch(error => {
      console.log(error);
    });
}
