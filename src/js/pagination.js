import { getPosts } from './jsonplaceholder-api';
import { createPostCardTemplate } from './render-functions';

const refs = {
  postsGallery: document.querySelector('.js-posts'),
  loadMoreBtn: document.querySelector('.js-load-more'),
};

let page = 1;

const onLoadMoreBtnClick = async event => {
  try {
    page++;

    const posts = await getPosts(page);

    if (posts.length === 0) {
      refs.loadMoreBtn.classList.add('is-hidden');
      refs.loadMoreBtn.removeEventListener('click', onLoadMoreBtnClick);

      return;
    }

    const postsTemplate = posts.map(post => createPostCardTemplate(post)).join('');

    refs.postsGallery.insertAdjacentHTML('beforeend', postsTemplate);
  } catch (err) {
    console.log(err);
  }
};

const initPostGallery = async () => {
  try {
    const posts = await getPosts(page);

    const postsTemplate = posts.map(post => createPostCardTemplate(post)).join('');

    refs.postsGallery.innerHTML = postsTemplate;

    refs.loadMoreBtn.classList.remove('is-hidden');
    refs.loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
  } catch (err) {
    console.log(err);
  }
};

initPostGallery();
