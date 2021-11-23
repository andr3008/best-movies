import cardTemp from '../templates/cardTemplate.hbs';
import NewApiService from '../js/fetchAPI';
const newApiService = new NewApiService();

const cardContainer = document.querySelector('.collection-list');

export function render() {
  newApiService.page = 1;
  newApiService
    .insertGenresToMovieList()
    .then(templateCard)
    .catch(error => {
      console.log(error);
    });
}
render();

function templateCard(markup) {
  cardContainer.innerHTML = cardTemp(markup);
}
