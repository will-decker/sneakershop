const menuBtn = document.querySelector('.menu-toggle');
const slideMenu = document.querySelector('.nav-wrapper');
const closeBtn = document.querySelector('.close');

menuBtn.addEventListener('click', sideMenu);
closeBtn.addEventListener('click', sideMenu);

function sideMenu() {
  slideMenu.classList.toggle('slide-in');
}