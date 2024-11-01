'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css'; // Додатковий імпорт стилів

const API_KEY = '46843956-48321f6890b82a65cca7319ef';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(query) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const url = `${BASE_URL}?${searchParams}`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);

      if (data.hits.length === 0) {
        form.reset();
        iziToast.info({
          title: 'No Results',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      } else {
        console.log(data);

        console.log(data.hits);
      }
      return data;
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'Failed to fetch images. Please try again later.',
        position: 'topRight',
      });
      console.error('There was a problem with the fetch operation:', error);
    });
}
