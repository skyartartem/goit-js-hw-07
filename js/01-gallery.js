import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainerRef = document.querySelector(".gallery");

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
    // перевірка не працює (замість true і false видає пустий рядок)
  //    const isImageEl = evt.target.classlist.contains(".gallery__image");
  //    if (!isImageEl) { return };
 
  const instance = basicLightbox.create(`
        <img
        class="gallery__image"
        src="${evt.target.dataset.source}"
        alt="${evt.target.alt}"
        />
    `);

    instance.show();

    const instanceRef = instance
    console.dir(instanceRef)

    window.addEventListener("keydown", closeWindow);

    function closeWindow(evt) {
        console.log(evt.code)
        if (evt.code == "Escape") {
            instance.close(window.removeEventListener("keydown", closeWindow));
            
        }
    }
}
