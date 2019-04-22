const buttonToMeet = document.getElementById('meet');
const navToMeet = document.getElementById('nav-meet')
const home = document.getElementById('home');

const clickedMeet = (e) => {
  e.preventDefault();
  home.classList.add('slide-out');
  setTimeout(() => {
    window.location.href = buttonToMeet.href;
  }, 1000)
};

navToMeet.addEventListener('click', clickedMeet)
buttonToMeet.addEventListener('click', clickedMeet);
