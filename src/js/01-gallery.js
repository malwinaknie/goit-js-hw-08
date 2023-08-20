import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector('.gallery');

galleryItems.forEach(picture => {
  gallery.insertAdjacentHTML(
    'beforeend',
    `<div class="gallery__item">
    <a class="gallery__link" href="${picture.original}">
      <img
        class="gallery__image"
        src="${picture.preview}"
        data-source="${picture.original}"
        alt="${picture.description}"
      />
    </a>
  </div>`
  );
});

const lightbox = new SimpleLightbox('.gallery a', {
  scrollZoom: false,
  captionsData: 'alt',
  captionDelay: 250,
});
