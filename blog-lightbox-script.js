setTimeout(() => {
/// gallery lightbox ///
const galleryImages = document.querySelectorAll(".lightboxable");
const lightboxContainer = document.querySelector(".lightbox-container");
const lightboxImage = document.querySelector(".lightbox-image");
const lightbox = document.querySelector(".lightbox");
const closeButton = document.querySelector(".close-button");
let openLightbox = false;

galleryImages.forEach(image => {
  image.addEventListener("click", () => {
    lightboxImage.src = image.src;
    openLightbox = true;
    lightboxContainer.classList.add("open");
  });
});

const closeLightbox = () => {
  lightboxContainer.classList.remove("open");
  openLightbox = false;
};

document.addEventListener("keydown", (e) => {
  if (openLightbox) {
    if (e.key === "Escape") {
      lightboxContainer.classList.remove("open");
      openLightbox = false;
    };
  };
});

lightbox.addEventListener("click", closeLightbox);
closeButton.addEventListener("click", closeLightbox);
}, 750)