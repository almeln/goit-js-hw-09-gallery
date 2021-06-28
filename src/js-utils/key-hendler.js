import { refs } from "./refs";
import { addImageDetails } from './image-details';
import { onArrowLeft } from './slider';
import { onArrowRight } from './slider';

// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"]

refs.modalButton.addEventListener('click', onCloseModal);

// Закрытие модального окна по клику на div.lightbox__overlay

refs.modalOverlay.addEventListener('click', onCloseModal);

export function onCloseModal(event) {
  refs.modal.classList.remove('is-open');
  
  // Очистка значения атрибута src элемента img.lightbox__image

  addImageDetails(event);
}

// Закрытие модального окна по нажатию клавиши ESC

window.addEventListener("keydown", keyHendler)

export function keyHendler(event) {
  if (event.code === "Escape") {
    onCloseModal(event);
  } else if (event.code === "ArrowRight") {
    onArrowRight(event);
  } else if (event.code === "ArrowLeft") {
    onArrowLeft(event);
  }
}