const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '9aaadf590dc90bb88adc9b4200a95438';

export default class NewApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }
  fetchTempMovies() {
    return fetch(
      `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=en-US&page=${this.page}`,
    )
      .then(response => response.json())
      .then(({ results }) => {
        return results;
      });
  }
  fetchSearchMovies() {
    return fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=${this.page}&query=${this.searchQuery}`,
    )
      .then(response => response.json())
      .then(({ results }) => {
        this.incrementPage();
        return results;
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

  fetchGenres() {
    return fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        return data.genres;
      });
  }

  insertGenresToMovieList() {
    return this.fetchTempMovies().then(data => {
      return this.fetchGenres().then(genresList => {
        return data.map(movie => ({
          ...movie,

          genres: movie.genre_ids.map(id => genresList.filter(el => el.id === id)).flat(),
        }));
      });
    });
  }

  insertGenresToSearch() {
    return this.fetchSearchMovies().then(data => {
      return this.fetchGenres().then(genresList => {
        return data.map(movie => ({
          ...movie,

          genres: movie.genre_ids.map(id => genresList.filter(el => el.id === id)).flat(),
        }));
      });
    });
  }

  fetchOneMovieInfo(movie_id) {
    return fetch(`${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`)
      .then(response => response.json())
      .then(data => {
        return data;
      });
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

  pagination(el) {
    this.page = el;
  }
}
