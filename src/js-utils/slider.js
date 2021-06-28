import { refs } from "./refs";
import { galleryItems } from "./gallery-items";

let currentIndex = 0;

export function onArrowRight(event) {
    if (currentIndex + 1 > galleryItems.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex += 1;
    }
    refs.modalImage.src = galleryItems[currentIndex].original;
    refs.modalImage.alt = galleryItems[currentIndex].description;
  }
  
export function onArrowLeft(event) {
    if (currentIndex - 1 < 0) {
      currentIndex = galleryItems.length - 1;
    } else {
      currentIndex -= 1;
    }
    refs.modalImage.src = galleryItems[currentIndex].original;
    refs.modalImage.alt = galleryItems[currentIndex].description;
  }