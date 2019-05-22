const home = 
  document.getElementById('home') || 
  document.getElementById('meet-hens') || 
  document.getElementById("blog") ||
  document.getElementById('contact-page');
const meet = document.getElementById('meet');
const contact = document.getElementById('contact');

const navHome = document.getElementById('nav-home');
const navMeet = document.getElementById('nav-meet');
const navBlog = document.getElementById('nav-blog');
const navContact = document.getElementById('nav-contact');

const linkToHome = (e) => {
  e.preventDefault();
  home.classList.add('slide-out');
  setTimeout(() => {
    window.location.href = navHome.href;
  }, 1000);
};

const linkToMeet = (e) => {
  e.preventDefault();
  home.classList.add('slide-out');
  setTimeout(() => {
    window.location.href = navMeet.href;
  }, 1000);
};

const linkToBlog = e => {
  console.log("to the blog")
  e.preventDefault();
  home.classList.add("slide-out");
  setTimeout(() => {
    console.log("to the blog")
    window.location.href = navBlog.href;
  }, 1000);
};

const linkToContact = (e) => {
  e.preventDefault();
  home.classList.add('slide-out');
  setTimeout(() => {
    window.location.href = navContact.href;
  }, 1000);
};

navHome.addEventListener('click', linkToHome);

navMeet.addEventListener('click', linkToMeet);

navBlog.addEventListener("click", linkToBlog);

navContact.addEventListener('click', linkToContact);

//// mobile navigation ////
const mobNavHome = document.querySelector("#mob-nav-home");
const mobNavMeet = document.querySelector("#mob-nav-meet");
const mobNavBlog = document.querySelector('#mob-nav-blog');
const mobNavContact = document.querySelector("#mob-nav-contact");

const mobileToggle = document.querySelector('.mobile-nav-burger');
const mobileNav = document.querySelector('.mobile-nav');
const closeNav = document.querySelector('.close-nav');
const mobileNavLinks = document.querySelectorAll('.mob-nav');

mobileNavLinks.forEach((mobNav) => {
  mobNav.addEventListener('click', (e)=>{
    e.preventDefault();
    mobileNav.classList.toggle('open-nav');
    setTimeout(() => {
      if(mobNav.id === 'mob-nav-meet') {
        window.location.href = 'hens.html';
      } else if (mobNav.id === 'mob-nav-home') {
        window.location.href = 'index.html';
      } else if (mobNav.id === 'mob-nav-contact') {
        window.location.href = 'contact.html';
      } else if (mobNav.id = "mob-nav-blog") {
        window.location.href = "blog.html";
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