import fetchAPI from './fetchAPI';
import getRefs from './getRefs';

const apiService = new fetchAPI();
const refs = getRefs();
const cardContainer = document.querySelector('.collection-list');

// let currentPage = 1;
// let totalPages;
// const pageRange = 2;

// refs.searchForm.addEventListener('submit', onSearch);

// function onSearch(e) {
//   e.preventDefault();
//   clearArticlesContainer();

//   API.query = e.currentTarget.elements.query.value;
//   API.resetPage();
//   API.fetchSearchMovies().then(templateCard).catch(onFetchError);
//   searchFetchMovie()
// }

// function clearArticlesContainer() {
//   refs.cardContainer.innerHTML = '';
// }


// function templateCard(markup) {
//   cardContainer.innerHTML = cardTemp(markup);
// }

// // обработка ответа API по поиску и отрисовка страницы

// export default function searchFetchMovie() {
//   apiService
//     .searchFetch()
//     .then(data => {
//       totalPages = data.total_pages;
//       refs.lastBtn.textContent = totalPages;
//       init();
//       return data.results;
//     })    
//     .then(data => {
//       return apiService.fetchGenres().then(genresList => {
//         return data.map(movie => ({
//           ...movie,

//           genres: movie.genre_ids.map(id => genresList.filter(el => el.id === id)).flat(),
//         }));
//       });
//     }).then(templateCard);
//   refs.pageList.innerHTML = '';

// }

// //  обработка ответа API по умолчанию(популярные фильмы) и отрисовка страницы
// function fetchGall() {
//     apiService
//         .fetch()
//         .then(data => {
//             totalPages = data.total_pages;
//             refs.lastBtn.textContent = totalPages;
//             init();
//             return data.results;
//         })
//         .then(data => {
//       return apiService.fetchGenres().then(genresList => {
//         return data.map(movie => ({
//           ...movie,

//           genres: movie.genre_ids.map(id => genresList.filter(el => el.id === id)).flat(),
//         }));
//       });
//     }).then(templateCard);
//         // .catch(error => console.log(error));
// };

// refs.paginationList.addEventListener('click', onBtnClick);
//  refs.prevBtn.addEventListener('click', onPrevBtnClick);
//  refs.nextBtn.addEventListener('click', onNextBtnClick);

//   //  изменение нумерации при клике на кнопки с цифрами
// function onBtnClick(evt) {
//   evt.preventDefault();

//   if (evt.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   cardContainer.innerHTML = '';
//   refs.pageList.innerHTML = '';

//   currentPage = Number(evt.target.textContent);
//   apiService.pagination(currentPage);
    
//   if (apiService.query) {
//     searchFetchMovie();
//   } else {
//     fetchGall();
//   }
// }
// //  изменение нумерации на 1 при клике на кнопку Prev
// function onPrevBtnClick(evt) {
//   evt.preventDefault();

//   if (currentPage > 1) {
//     currentPage -= 1;
//   }

//   cardContainer.innerHTML = '';
//   refs.pageList.innerHTML = '';
//   apiService.pagination(currentPage);

//   if (apiService.query) {
//     searchFetchMovie();
//   } else {
//     fetchGall();
//   }
// }

// function onNextBtnClick(evt) {
//   evt.preventDefault();

//   if (currentPage !== totalPages) {
//     currentPage += 1;
//   }
  
//   cardContainer.innerHTML = '';
//   refs.pageList.innerHTML = '';
//   apiService.pagination(currentPage);
    
//   if (apiService.query) {
//     searchFetchMovie();
//   } else {
//     fetchGall();
//   }
// }


// //  динамически рендерится список кнопок
//   function renderPagesList() {
//     const start = currentPage - pageRange;
//     const end = currentPage + pageRange;

//     for (let i = start; i <= end; i += 1) {
//       if (i > 0 && i <= totalPages) {
//         refs.pageList.insertAdjacentHTML(
//           'beforeend',
//           `<li class="pages-item"><button type="button" class="pagination-btn">${i}</button></li>`,
//         );
//       }
//     }
//   }

//   //  скрывает и показывает первую и последнюю кнопки
//   function hideFirstLastBtn() {
//     currentPage < 4 ? (refs.firstPage.hidden = true) : (refs.firstPage.hidden = false);
//     currentPage > totalPages - 3 ? (refs.lastPage.hidden = true) : (refs.lastPage.hidden = false);
//   }

//   //  делает неактивными кнопки-стрелки
//   function checkBtnOpacity() {
//     currentPage === 1 ? (refs.prevBtn.disabled = true) : (refs.prevBtn.disabled = false);
//     currentPage === totalPages ? (refs.nextBtn.disabled = true) : (refs.nextBtn.disabled = false);
//   }

//   //  делает активную кнопку
//   function makeActiveBtn() {
//     let pagesMenu = refs.pageList.querySelectorAll('button');
//     for (let i = 0; i < pagesMenu.length; i += 1) {
//       if (Number(pagesMenu[i].textContent) === currentPage) {
//         pagesMenu[i].classList.add('active-btn');
//       }
//     }
//   }

//   function init() {
//     checkBtnOpacity();
//     hideFirstLastBtn();
//     renderPagesList();
//     makeActiveBtn();
//   }

//   apiService.pagination(currentPage);
// fetchGall();


export default class Pagination {
  constructor() {
this.currentPage = 1;
this.totalPages;
this.pageRange = 2;
  }
    //  изменение нумерации при клике на кнопки с цифрами
// onBtnClick(evt) {
//   evt.preventDefault();

//   if (evt.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   cardContainer.innerHTML = '';
//   refs.pageList.innerHTML = '';

//   this.currentPage = Number(evt.target.textContent);
//   apiService.pagination(this.currentPage);
    
//   // if (apiService.query) {
//   //   searchFetchMovie();
//   // } else {
//   //   fetchGall();
//   // }
// }
// //  изменение нумерации на 1 при клике на кнопку Prev
// onPrevBtnClick(evt) {
//   evt.preventDefault();

//   if (this.currentPage > 1) {
//     this.currentPage -= 1;
//   }

//   cardContainer.innerHTML = '';
//   refs.pageList.innerHTML = '';
//   apiService.pagination(this.currentPage);

//   // if (apiService.query) {
//   //   searchFetchMovie();
//   // } else {
//   //   fetchGall();
//   // }
// }

// onNextBtnClick(evt) {
//   evt.preventDefault();

//   if (this.currentPage !== this.totalPages) {
//     this.currentPage += 1;
//   }
  
//   cardContainer.innerHTML = '';
//   refs.pageList.innerHTML = '';
//   apiService.pagination(this.currentPage);
    
//   // if (apiService.query) {
//   //   searchFetchMovie();
//   // } else {
//   //   fetchGall();
//   // }
// }


//  динамически рендерится список кнопок
  renderPagesList() {
    const start = this.currentPage - this.pageRange;
    const end = this.currentPage + this.pageRange;

    for (let i = start; i <= end; i += 1) {
      if (i > 0 && i <= this.totalPages) {
        refs.pageList.insertAdjacentHTML(
          'beforeend',
          `<li class="pages-item"><button type="button" class="pagination-btn">${i}</button></li>`,
        );
      }
    }
  }

  //  скрывает и показывает первую и последнюю кнопки
 hideFirstLastBtn() {
    this.currentPage < 4 ? (refs.firstPage.hidden = true) : (refs.firstPage.hidden = false);
    this.currentPage > this.totalPages - 3 ? (refs.lastPage.hidden = true) : (refs.lastPage.hidden = false);
  }

  //  делает неактивными кнопки-стрелки
  checkBtnOpacity() {
    this.currentPage === 1 ? (refs.prevBtn.disabled = true) : (refs.prevBtn.disabled = false);
    this.currentPage === this.totalPages ? (refs.nextBtn.disabled = true) : (refs.nextBtn.disabled = false);
  }

  //  делает активную кнопку
  makeActiveBtn() {
    let pagesMenu = refs.pageList.querySelectorAll('button');
    for (let i = 0; i < pagesMenu.length; i += 1) {
      if (Number(pagesMenu[i].textContent) === this.currentPage) {
        pagesMenu[i].classList.add('active-btn');
      }
    }
  }

  init() {
    this.checkBtnOpacity();
    this.hideFirstLastBtn();
    this.renderPagesList();
    this.makeActiveBtn();
  }

}

