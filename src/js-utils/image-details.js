// Подмена значения атрибута src элемента img.lightbox__image

import { refs } from "./refs";

export function addImageDetails(event) {

  refs.modalImage.alt = event.target.alt;

  if (refs.modal.classList.contains('is-open')) {
    refs.modalImage.src = event.target.dataset.source;
  } else {
    refs.modalImage.src = '';
  };

}