// --------------------- Mobile-Menu------------------

const mobileMenu = document.querySelector('.main-menu');
const closeBtn = document.getElementById('close');
const hamburger = document.getElementById('menu-bar');

hamburger.onclick = function showMenu() {
  mobileMenu.style.display = 'block';
};
closeBtn.onclick = function closeMenu() {
  mobileMenu.style.display = none = 'none';
};
