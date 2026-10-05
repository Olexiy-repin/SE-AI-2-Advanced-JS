// https://unsplash.com/documentation

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  galleryList: document.querySelector('.js-gallery'),
};

const createGalleryCardTemplate = ({ alt_description, urls: { regular } }) => {
  /*
    <li class="gallery-card">
      <img class="gallery-img" src="" alt="" />
    </li>
  */
  return `
    <li class="gallery-card">
      <img class="gallery-img" src="${regular}" alt="${alt_description}" />
    </li>
  `;
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

  fetch(
    `https://api.unsplash.com/search/photos?query=${searchedQuery}&color=black_and_white&orientation=portrait&client_id=q1FZ3G3lUf_2UuiXCVry3Fo9yR8N-uicMlLcML8Lwj4`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    })
    .then(data => {
      console.log(data);

      if (data.total === 0) {
        alert('Зображень не знайдено!');

        return;
      }

      const galleryCardsTemplate = data.results.map(img => createGalleryCardTemplate(img)).join('');

      refs.galleryList.innerHTML = galleryCardsTemplate;
    })
    .catch(err => {
      console.log(err);
    });
};

refs.searchForm.addEventListener('submit', onSearchFormSubmit);
