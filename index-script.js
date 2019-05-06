const home =
  document.getElementById("home") ||
  document.getElementById("meet-hens") ||
  document.getElementById("contact-page");
const meet = document.getElementById("meet");
const contact = document.getElementById("contact");
const meetButton = document.getElementById("meet-button");
const findOutBuy = document.getElementById("buy-button");

const navHome = document.getElementById("nav-home");
const navMeet = document.getElementById("nav-meet");
const navContact = document.getElementById("nav-contact");

/// regular links ///
const linkToHome = e => {
  e.preventDefault();
  home.classList.add("slide-out");
  setTimeout(() => {
    window.location.href = navHome.href;
  }, 1000);
};

const linkToMeet = e => {
  e.preventDefault();
  home.classList.add("slide-out");
  setTimeout(() => {
    window.location.href = navMeet.href;
  }, 1000);
};

const linkToContact = e => {
  e.preventDefault();
  home.classList.add("slide-out");
  setTimeout(() => {
    window.location.href = navContact.href;
  }, 1000);
};

navHome.addEventListener("click", linkToHome);

navMeet.addEventListener("click", linkToMeet);
meetButton.addEventListener("click", linkToMeet);

navContact.addEventListener("click", linkToContact);
findOutBuy.addEventListener("click", linkToContact);

//// mobile navigation ////
const mobNavHome = document.querySelector("#mob-nav-home");
const mobNavMeet = document.querySelector("#mob-nav-meet");
const mobNavContact = document.querySelector("#mob-nav-contact");

const mobileToggle = document.querySelector(".mobile-nav-burger");
const mobileNav = document.querySelector(".mobile-nav");
const closeNav = document.querySelector(".close-nav");
const mobileNavLinks = document.querySelectorAll(".mob-nav");

mobileNavLinks.forEach(mobNav => {
  mobNav.addEventListener("click", e => {
    e.preventDefault();
    mobileNav.classList.toggle("open-nav");
    setTimeout(() => {
      if (mobNav.id === "mob-nav-meet") {
        window.location.href = "hens.html";
      } else if (mobNav.id === "mob-nav-home") {
        window.location.href = "index.html";
      } else if (mobNav.id === "mob-nav-contact") {
        window.location.href = "contact.html";
      }
    }, 500);
  });
});

closeNav.addEventListener("click", () => {
  mobileNav.classList.toggle("open-nav");
});

mobileToggle.addEventListener("click", () => {
  mobileNav.classList.toggle("open-nav");
});

/// gallery lightbox ///
const galleryImages = document.querySelectorAll(".gallery-image");
const lightboxContainer = document.querySelector(".lightbox-container");
const lightboxImage = document.querySelector(".lightbox-image");
const lightboxText = document.querySelector(".lightbox-text");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const lightbox = document.querySelector(".lightbox");
const closeButton = document.querySelector(".close-button");
let currentIndex;
let openLightbox = false;

galleryImages.forEach(image => {
  image.addEventListener("click", () => {
    lightboxImage.src = image.dataset.src;
    lightboxText.innerHTML = image.dataset.desc;
    currentIndex = parseInt(image.dataset.index);
    openLightbox = true;
    lightboxContainer.classList.add("open");
    const img = new Image();
    img.src = image.dataset.srchi;
    img.onload = () => {
     lightboxImage.src = image.dataset.srchi;
    };
  });
});

const galleryRight = () => { 
  let nextIndex = currentIndex + 1;
  galleryImages.forEach(image => {
    if (parseInt(image.dataset.index) === nextIndex) {
      lightboxImage.src = image.dataset.src;
      lightboxText.innerHTML = image.dataset.desc;
      currentIndex = parseInt(image.dataset.index);
      const img = new Image();
      img.src = image.dataset.srchi;
      img.onload = () => {
        lightboxImage.src = image.dataset.srchi;
      };
    };
  });
};

const galleryLeft = () => { 
  let lastIndex = currentIndex - 1;
  galleryImages.forEach(image => {
    if (parseInt(image.dataset.index) === lastIndex) {
      lightboxImage.src = image.dataset.src;
      lightboxText.innerHTML = image.dataset.desc;
      currentIndex = parseInt(image.dataset.index);
      const img = new Image();
      img.src = image.dataset.srchi;
      img.onload = () => {
        lightboxImage.src = image.dataset.srchi;
      };
    };
  });
};

const closeLightbox = () => {
  lightboxContainer.classList.remove("open");
  openLightbox = false;
};

document.addEventListener("keydown", (e) => {
  if (openLightbox) {
    if (e.key === "ArrowLeft") {
      galleryLeft();
    } else if (e.key === "ArrowRight") {
      galleryRight();
    } else if (e.key === "Escape") {
      lightboxContainer.classList.remove("open");
      openLightbox = false;
    };
  };
});

rightArrow.addEventListener("click", galleryRight);
leftArrow.addEventListener("click", galleryLeft);
lightbox.addEventListener("click", closeLightbox);
closeButton.addEventListener("click", closeLightbox);

//// lazy load gallery images ////

var lazyImagesOld = document.querySelectorAll("img.gallery-image.lazy");
var lazyImages = [].slice.call(
  document.querySelectorAll("img.lazy")
);

if ("IntersectionObserver" in window) {
  let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        let lazyImage = entry.target;
        lazyImage.src = lazyImage.dataset.src;
        lazyImage.classList.remove("lazy");
        lazyImageObserver.unobserve(lazyImage);
      }
    });
  });

  lazyImages.forEach(function(lazyImage) {
    lazyImageObserver.observe(lazyImage);
  });
} else {
  setTimeout(() => {
    lazyImages.forEach(image => {
      image.src = image.dataset.src;
      image.classList.remove("lazy");
    });
  }, 3000);
};
