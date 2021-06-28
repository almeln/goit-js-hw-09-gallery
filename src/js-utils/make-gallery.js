import { galleryItems } from "./gallery-items";
import { refs } from "./refs";

export const makeGallery = ({ preview, original, description }, index) => {

    const galleryImg = document.createElement('img');
    galleryImg.src = preview;
    galleryImg.dataset.source = original;
    galleryImg.alt = description;
    galleryImg.classList.add('gallery__image');
  
    const galleryLink = document.createElement('a');
    galleryLink.classList.add('gallery__link');
    galleryLink.href = galleryImg.dataset.source;
    galleryLink.appendChild(galleryImg);
  
    const galleryItem = document.createElement('li');
    galleryItem.classList.add('gallery__item');
    galleryItem.appendChild(galleryLink);
    galleryItem.dataset.index = index;
  
    return galleryItem;
};

const images = galleryItems.map(makeGallery);
refs.gallery.append(...images);