import { createGalleryCardTemplate } from './render-functions';
import { getPhotosByQuery } from './unsplash-api';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  galleryList: document.querySelector('.js-gallery'),
  loader: document.querySelector('.js-loader'),
};

const onSearchFormSubmit = event => {
  event.preventDefault();

  const { currentTarget: searchFormEl } = event;

  const searchedQuery = searchFormEl.elements.user_query.value.trim();

  if (!searchedQuery) {
    alert('Поле для пошуку має бути заповнене!');

    return;
  }

  refs.galleryList.innerHTML = '';

  refs.loader.classList.remove('is-hidden');

  getPhotosByQuery(searchedQuery)
    .then(data => {
      if (data.total === 0) {
        alert('Зображень не знайдено!');

        return;
      }

      const galleryCardsTemplate = data.results.map(img => createGalleryCardTemplate(img)).join('');

      refs.galleryList.innerHTML = galleryCardsTemplate;
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      refs.loader.classList.add('is-hidden');
    });
};

refs.searchForm.addEventListener('submit', onSearchFormSubmit);
