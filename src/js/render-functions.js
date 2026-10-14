export const createGalleryCardTemplate = ({ alt_description, urls: { regular } }) => {
  return `
    <li class="gallery-card">
      <img class="gallery-img" src="${regular}" alt="${alt_description}" />
    </li>
  `;
};

export const createPostCardTemplate = ({ title, body, id }) => {
  return `
    <li class="posts-item">
      <h2 class="posts-title">${title}</h2>
      <p class="posts-text">${body}</p>
      <p class="posts-id">id: ${id}</p>
    </li>
  `;
};
