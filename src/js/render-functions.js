'use strict';

// Оголошуємо змінну 'gallery' та отримуємо доступ до DOM-елемента з класом 'gallery'.
// Цей елемент буде використовуватися для динамічного відображення зображень у вигляді списку <ul class="gallery"></ul>.
const gallery = document.querySelector('.gallery');

// Створюємо функцію 'createMarkup', яку можна експортувати з модуля.
// Функція приймає один параметр 'arrImages' (data.hits в файлі main.js), який є масивом об'єктів з інформацією про зображення.
// Функція 'createMarkup' буде імпортуватись і використовуватись в файлі main.js
export function createMarkup(arrImages) {
  // Оголошуємо змінну 'markup', в якій будемо зберігати згенеровану HTML-розмітку.
  const markup = arrImages
    // Використовуємо метод 'map' для перебору масиву об'єктів 'arrImages'.
    // 'image' є параметром колбека, що представляє кожен об'єкт з масиву.
    .map(image => {
      // Створюємо і повертаємо HTML-розмітку.
      // В шаблонних рядках використовуємо властивості об'єкта image
      return `<li class="gallery-item">
	  <a class="gallery-link" href="${image.largeImageURL}">
		<img 
			class="gallery-image" 
			src="${image.webformatURL}" 
			alt="${image.tags}" 
			/>
        <div class="gallery-info">
        <p class="gallery-likes"><span>Likes:</span> ${image.likes}</p>
        <p class="gallery-views"><span>Views:</span> ${image.views}</p>
        <p class="gallery-comments"><span>Comments:</span> ${image.comments}</p>
        <p class="gallery-downloads"><span>Downloads:</span> ${image.downloads}</p>
      </div>    
	  </a>
    </li>
    `;
    })
    // // Об'єднуємо масив рядків в один рядок HTML (метод join()), щоб його можна було вставити в DOM.
    .join('');

  // Очищення наповнення галереї видаляючи всі наявні елементи списку <ul class="gallery"></ul>.
  gallery.innerHTML = '';

  // Вставляємо сформовану HTML-розмітку (яка зберігається у змінній markup) на початок (всередину) елемента <ul class="gallery">
  gallery.insertAdjacentHTML('afterbegin', markup);
}
