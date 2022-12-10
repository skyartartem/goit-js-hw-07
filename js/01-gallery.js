import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainerRef = document.querySelector(".gallery");
// console.dir(galleryContainerRef);
// console.log(galleryItems);

const galleryMarkup = creategalleryMarkup(galleryItems);

galleryContainerRef.insertAdjacentHTML("beforeend", galleryMarkup);

function creategalleryMarkup(items) {
  return items
    .map(({ preview, description, original }) => {
      return `
  <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
        `;
    })
    .join("");
}

galleryContainerRef.addEventListener("click", openOriginalPic);

function openOriginalPic(evt) {
  evt.preventDefault();
  //    const isImageEl = evt.target.classlist.contains(".gallery__image");
  //    if (!isImageEl) { return };
//   console.dir(evt.target.dataset.source);
  // console.log(evt.target.classlist.contains(".gallery__image"));

  const instance = basicLightbox.create(`
	<img
      class="gallery__image"
      src="${evt.target.dataset.source}"
      alt="${evt.target.alt}"
    />
`);

  instance.show();
}

