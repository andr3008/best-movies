// const BASE_URL = 'https://api.themoviedb.org/3';
// const API_KEY = '9aaadf590dc90bb88adc9b4200a95438';
// import cardTemp from '../templates/cardTemplate.hbs';
// const refs = {
//   cardContainer: document.querySelector('.card_container'),
// };
// fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`)
//   .then(r => {
//     return r.json();
//   })
//   .then(item => {
//     console.log(item);
//     const markup = cardTemp(item);
//     refs.cardContainer.innerHTML = markup;
//     console.log(markup);
//   })
//   .catch(error => {
//     console.log(error);
//   });
