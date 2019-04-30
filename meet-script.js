const home = document.getElementById('home') || document.getElementById('meet-hens') || document.getElementById('contact-page');
const meet = document.getElementById('meet');
const contact = document.getElementById('contact');

const navHome = document.getElementById('nav-home');
const navMeet = document.getElementById('nav-meet');
const navContact = document.getElementById('nav-contact');

home.classList.remove('container-offscreen');

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

const linkToContact = (e) => {
  e.preventDefault();
  home.classList.add('slide-out');
  setTimeout(() => {
    window.location.href = navContact.href;
  }, 1000);
};

navContact.addEventListener('click', linkToContact);

//// mobile navigation ////

const mobileToggle = document.querySelector('.mobile-nav-burger');
const mobileNav = document.querySelector('.mobile-nav');
const closeNav = document.querySelector('.close-nav');
const mobileNavLinks = document.querySelectorAll('.mob-nav');

mobileNavLinks.forEach((mobNav) => {
  mobNav.addEventListener('click', (e)=>{
    e.preventDefault();
    mobileNav.classList.toggle('open-nav');
    setTimeout(() => {
      if(mobNav.id === 'nav-meet') {
        window.location.href = 'hens.html';
      } else if (mobNav.id === 'nav-home') {
        window.location.href = 'index.html';
      } else if (mobNav.id === 'nav-contact') {
        window.location.href = 'contact.html';
      };
    }, 500);
  });
});

closeNav.addEventListener('click', ()=> {
  mobileNav.classList.toggle('open-nav');
})

mobileToggle.addEventListener('click', () => {
  mobileNav.classList.toggle('open-nav');
});