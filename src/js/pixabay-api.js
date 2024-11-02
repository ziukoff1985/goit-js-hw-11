'use strict';

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
