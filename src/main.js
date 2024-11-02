'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

let lightbox;

const form = document.querySelector('.form');
const input = document.querySelector('.input');
const loader = document.querySelector('.loader');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const query = input.value.trim();

  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query...',
      position: 'topRight',
    });
    return;
  }

  loader.style.display = 'block';

  fetchImages(query)
    .then(data => {
      loader.style.display = 'none';

      if (data.hits.length === 0) {
        iziToast.info({
          title: 'No Results',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        form.reset();
        return;
      }

      createMarkup(data.hits);

      if (lightbox) {
        lightbox.refresh();
      } else {
        lightbox = new SimpleLightbox('.gallery a', {
          captions: true,
          captionSelector: 'img',
          captionType: 'attr',
          captionsData: 'alt',
          captionDelay: 250,
        });
      }
    })
    .catch(error => {
      loader.style.display = 'none';
      console.error(error);
    });
}
