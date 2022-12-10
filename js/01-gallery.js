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
  const isImageEl = evt.target.classList.contains("gallery__image");
  if (!isImageEl) {
    console.log("1111");
    return;
  }

  const instance = basicLightbox.create(
    `
        <img
        class="gallery__image"
        src="${evt.target.dataset.source}"
        alt="${evt.target.alt}"
        />
    `,
    {
      onShow: () => document.addEventListener("keydown", closeWindow),
      onClose: () => document.removeEventListener("keydown", closeWindow),
    }
  );

  instance.show();

  const instanceRef = instance;
  console.dir(instanceRef);

  function closeWindow(evt) {
    // console.log(evt.code)
    if (evt.code == "Escape") {
      instance.close();
    }
  }
}
