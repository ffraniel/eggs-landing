const home = document.getElementById('home') || document.getElementById('meet-hens') || document.getElementById('contact-page');
const meet = document.getElementById('meet');
const contact = document.getElementById('contact');
const meetButton = document.getElementById('meet-button')
const findOutBuy = document.getElementById('buy-button');

const navHome = document.getElementById('nav-home');
const navMeet = document.getElementById('nav-meet');
const navContact = document.getElementById('nav-contact');

const linkToHome = (e) => {
  e.preventDefault();
  home.classList.add('slide-out');
  setTimeout(() => {
    window.location.href = navHome.href;
  }, 1000);
};

navHome.addEventListener('click', linkToHome);

const linkToMeet = (e) => {
  e.preventDefault();
  home.classList.add('slide-out');
  setTimeout(() => {
    window.location.href = navMeet.href;
  }, 1000);
};

navMeet.addEventListener('click', linkToMeet);
meetButton.addEventListener('click', linkToMeet);

const linkToContact = (e) => {
  e.preventDefault();
  home.classList.add('slide-out');
  setTimeout(() => {
    window.location.href = navContact.href;
  }, 1000);
};

navContact.addEventListener('click', linkToContact);
findOutBuy.addEventListener('click', linkToContact);

const galleryImages = document.querySelectorAll('.gallery-image');
const lightboxContainer = document.querySelector('.lightbox-container');
const lightboxImage = document.querySelector('.lightbox-image');

galleryImages.forEach((image)=>{
  image.addEventListener('click', () => {
    lightboxImage.src = image.src;
    lightboxContainer.classList.add('open');
  });
});

lightboxContainer.addEventListener('click', () => {
    lightboxContainer.classList.remove('open');
});