import fetchAPI from './fetchAPI';
import getRefs from './getRefs';

const apiService = new fetchAPI();
const refs = getRefs();
const cardContainer = document.querySelector('.collection-list');

export default class Pagination {
  constructor() {
this.currentPage = 1;
this.totalPages;
this.pageRange = 2;
  }


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
      if (pagesMenu[i].classList.contains('active-btn')) {
        pagesMenu[i].disabled = true;
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

