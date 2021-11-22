import fetchAPI from './fetchAPI';
import getRefs from './getRefs';
import fetchCard from './fetchCard';

const refs = getRefs();

const apiService = new fetchAPI();

const cardContainer = document.querySelector('.collection');

let currentPage = 1;
let totalPages;
const pageRange = 2;

// обработка ответа API по поиску и отрисовка страницы

// console.log(searchFetch());
// function searchFetch() {
//   apiService
//     .searchFetch()
//     .then(data => {
//       totalPages = data.total_pages;
//       refs.lastBtn.textContent = totalPages;
//       // console.log(data)
//       init();
//       return data.results;
//     })
//     .then(results => {
//       fetchCard(results);
      
//     })

//     .catch(error => console.log(error));
// }


//  обработка ответа API по умолчанию(популярные фильмы) и отрисовка страницы
function fetchGall() {
    apiService
        .fetch()
        .then(data => {
            totalPages = data.total_pages;
            refs.lastBtn.textContent = totalPages;
            // console.log(data)
            init();
            return data.results;
        })
        .then(results => {

            fetchCard(results);
        })
        .catch(error => console.log(error));
};


refs.paginationList.addEventListener('click', onBtnClick);
 refs.prevBtn.addEventListener('click', onPrevBtnClick);
 refs.nextBtn.addEventListener('click', onNextBtnClick);

  //  изменение нумерации при клике на кнопки с цифрами
  function onBtnClick(evt) {
    evt.preventDefault();

    if (evt.target.nodeName !== 'BUTTON') {
      return;
    }

    // cardContainer.innerHTML = '';
    refs.pageList.innerHTML = '';

    currentPage = Number(evt.target.textContent);
    apiService.pagination(currentPage);
    
 if (apiService.query) {
    searchFetch();
  } else {
    fetchGall();
  }
}

//  изменение нумерации на 1 при клике на кнопку Prev
  function onPrevBtnClick(evt) {
    evt.preventDefault();

    if (currentPage > 1) {
      currentPage -= 1;
    }

 
    refs.pageList.innerHTML = '';
    apiService.pagination(currentPage);

    if (apiService.query) {
    searchFetch();
  } else {
    fetchGall();
  }

}

function onNextBtnClick(evt) {
    evt.preventDefault();

    if (currentPage !== totalPages) {
      currentPage += 1;
    }
  
     cardContainer.innerHTML = '';
    refs.pageList.innerHTML = '';
    apiService.pagination(currentPage);
    
if (apiService.query) {
    searchFetch();
  } else {
    fetchGall();
  }

}


//  динамически рендерится список кнопок
  function renderPagesList() {
    const start = currentPage - pageRange;
    const end = currentPage + pageRange;

    for (let i = start; i <= end; i += 1) {
      if (i > 0 && i <= totalPages) {
        refs.pageList.insertAdjacentHTML(
          'beforeend',
          `<li class="pages-item"><button type="button" class="pagination-btn">${i}</button></li>`,
        );
      }
    }
  }

  //  скрывает и показывает первую и последнюю кнопки
  function hideFirstLastBtn() {
    currentPage < 4 ? (refs.firstPage.hidden = true) : (refs.firstPage.hidden = false);
    currentPage > totalPages - 3 ? (refs.lastPage.hidden = true) : (refs.lastPage.hidden = false);
  }

  //  делает неактивными кнопки-стрелки
  function checkBtnOpacity() {
    currentPage === 1 ? (refs.prevBtn.disabled = true) : (refs.prevBtn.disabled = false);
    currentPage === totalPages ? (refs.nextBtn.disabled = true) : (refs.nextBtn.disabled = false);
  }

  //  делает активную кнопку
  function makeActiveBtn() {
    let pagesMenu = refs.pageList.querySelectorAll('button');
    for (let i = 0; i < pagesMenu.length; i += 1) {
      if (Number(pagesMenu[i].textContent) === currentPage) {
        pagesMenu[i].classList.add('active-btn');
      }
    }
  }

  function init() {
    checkBtnOpacity();
    hideFirstLastBtn();
    renderPagesList();
    makeActiveBtn();
  }
