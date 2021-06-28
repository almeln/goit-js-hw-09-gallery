// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения

import { refs } from "./refs";
import { addImageDetails } from './image-details';

refs.gallery.addEventListener('click', onOpenModal)

// Открытие модального окна по клику на элементе галереи

export function onOpenModal(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  event.preventDefault();

  refs.modal.classList.add('is-open');

  addImageDetails(event);
}