import { createGalleryCardTemplate } from './render-functions';
import { getPhotosByQuery } from './unsplash-api';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  galleryList: document.querySelector('.js-gallery'),
  loader: document.querySelector('.js-loader'),
  loadMoreBtn: document.querySelector('.js-load-more-btn'),
};

let page = 1;
let searchedQuery = '';
// let totalPages = 0;

const onLoadMoreBtnClick = async event => {
  try {
    page++;

    const data = await getPhotosByQuery(searchedQuery, page);

    const galleryCardsTemplate = data.results.map(img => createGalleryCardTemplate(img)).join('');

    refs.galleryList.insertAdjacentHTML('beforeend', galleryCardsTemplate);

    if (page === data.total_pages) {
      refs.loadMoreBtn.classList.add('is-hidden');
      refs.loadMoreBtn.removeEventListener('click', onLoadMoreBtnClick);
    }
  } catch (error) {
    console.log(error);
  }
};

const onSearchFormSubmit = async event => {
  try {
    event.preventDefault();

    const { currentTarget: searchFormEl } = event;

    searchedQuery = searchFormEl.elements.user_query.value.trim();

    if (!searchedQuery) {
      alert('Поле для пошуку має бути заповнене!');

      return;
    }

    refs.galleryList.innerHTML = '';

    refs.loader.classList.remove('is-hidden');

    refs.loadMoreBtn.classList.add('is-hidden');

    page = 1;

    const data = await getPhotosByQuery(searchedQuery, page);

    if (data.total === 0) {
      alert('Зображень не знайдено!');

      return;
    }

    // totalPages = Math.ceil(data.total / 12);

    if (data.total_pages > 1) {
      refs.loadMoreBtn.classList.remove('is-hidden');
      refs.loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
    }

    const galleryCardsTemplate = data.results.map(img => createGalleryCardTemplate(img)).join('');

    refs.galleryList.innerHTML = galleryCardsTemplate;
  } catch (err) {
    console.log(err);
  } finally {
    refs.loader.classList.add('is-hidden');
  }
};

refs.searchForm.addEventListener('submit', onSearchFormSubmit);
