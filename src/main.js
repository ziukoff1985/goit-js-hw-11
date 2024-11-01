'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css'; // Додатковий імпорт стилів
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

let lightbox;

// Знаходимо елементи форми
const form = document.querySelector('.form');
const input = document.querySelector('.input');

// Додаємо обробник події для форми
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const query = input.value.trim();
  console.log(query);

  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query...',
      position: 'topRight',
    });
    return;
  }
  fetchImages(query)
    .then(data => {
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
      console.error(error);
    });
}
