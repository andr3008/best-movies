const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '9aaadf590dc90bb88adc9b4200a95438';

export default class NewApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

 fetch() {
    return fetch(
      `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=en-US&page=${this.page}`,
    ).then(response => response.json());
  }

  searchFetch() {
    return fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=${this.page}&query=${this.searchQuery}`,
    ).then(response => response.json());
  }

   fetchGenres() {
    return fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        return data.genres;
      });
  }

  

  fetchOneMovieInfo(movie_id) {
    return fetch(`${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`)
      .then(response => response.json())
      .then(data => {
        return data;
      });
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
