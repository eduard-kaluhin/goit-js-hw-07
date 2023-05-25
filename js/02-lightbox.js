import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const galleryItemHTML = galleryItems.map(item => `
  <li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
  </li>
`);
galleryContainer.innerHTML = galleryItemHTML.join('');

const gallery = document.querySelector('.gallery');
new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});







