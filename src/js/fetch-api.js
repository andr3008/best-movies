import { loader } from './loader';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '9aaadf590dc90bb88adc9b4200a95438';

export default class NewApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetch() {
    loader.start();
    return fetch(
      `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=en-US&page=${this.page}`,
    )
      .then(response => response.json())
      .finally(loader.stop);
  }

  searchFetch() {
    loader.start();
    return fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=${this.page}&query=${this.searchQuery}`,
    )
      .then(response => response.json())
      .finally(loader.stop);
  }

  fetchGenres() {
    return fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        return data.genres;
      });
  }

  fetchOneMovieInfo(movie_id) {
    loader.start();
    return fetch(`${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`)
      .then(response => response.json())
      .then(data => ({
        ...data,
        popularity: data.popularity.toFixed(1),
      }))
      .finally(loader.stop);
  }

  fetchgetFilmTrailers(id) {
    loader.start();
    try {
      const response = fetch(
        `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`,
      );
     loader.stop();
      const trailersdata = response.data.results;
      const trailer = `https://www.youtube.com/embed/${trailersdata[0].key}`;
      return trailer;
    } catch (error) {
      console.log(error);
    }
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  pagination(el) {
    this.page = el;
  }
}
