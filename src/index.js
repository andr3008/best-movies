import './sass/main.scss';
// import ApiService from './js/fetchAPI';
// const apiService = new ApiService();
// import './js/fetchAPI';
import cardTemp from './templates/cardTemplate.hbs';
const refs = {
  cardContainer: document.querySelector('.collection'),
};
fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=9aaadf590dc90bb88adc9b4200a95438')
  .then(response => {
    return response.json();
  })
  .then(item => {
    console.log(item);
    const markup = cardTemp(item);
    refs.cardContainer.innerHTML = markup;
  })
  .catch(err => {
    console.log(err);
  });
