const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '9aaadf590dc90bb88adc9b4200a95438';

export default class ApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }
  fetchPopularMovies() {
    const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${this.page}`;
    return fetch(url)
      .then(response => response.json())
      .then(({ results }) => {
        return results;
      });
  }
  fetchSearchMovies() {
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=${this.page}&query=${this.searchQuery}`;
    return fetch(url)
      .then(response => response.json())
      .then(({ results }) => {
        return results;
      });
  }
  fetchPopularMoviesPages() {
    const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${this.page}`;
    return fetch(url).then(response => response.json());
  }
  fetchSearchMoviesPages() {
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=${this.page}&query=${this.searchQuery}`;
    return fetch(url).then(response => response.json());
  }
  fetchGenres() {
    const url = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`;
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        return data.genres;
      });
  }
  insertGenresToMovieObj() {
    return this.fetchPopularArticles().then(data => {
      return this.fetchGenres().then(genresList => {
        return data.map(movie => ({
          ...movie,
          release_date: movie.release_date.split('-')[0],
          genres: movie.genre_ids.map(id => genresList.filter(el => el.id === id)).flat(),
        }));
      });
    });
  }
  insertGenresToSearchObj() {
    return this.fetchSearchArticles().then(data => {
      return this.fetchGenres().then(genresList => {
        let release_date;
        return data.map(movie => ({
          ...movie,
          release_date: movie.release_date ? movie.release_date.split('-')[0] : 'n/a',
          genres: movie.genre_ids
            ? movie.genre_ids.map(id => genresList.filter(el => el.id === id)).flat()
            : 'n/a',
        }));
      });
    });
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
  get pageNum() {
    return this.page;
  }
  set pageNum(newPage) {
    this.page = newPage;
  }
}
