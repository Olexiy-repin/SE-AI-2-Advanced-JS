export const createGalleryCardTemplate = ({ alt_description, urls: { regular } }) => {
  return `
    <li class="gallery-card">
      <img class="gallery-img" src="${regular}" alt="${alt_description}" />
    </li>
  `;
};
