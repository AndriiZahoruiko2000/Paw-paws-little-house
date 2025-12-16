const mobileMenu = document.querySelector('.mobile-menu');
const menuList = document.querySelector('.menu-items-list');
const closeBtn = document.querySelector('.close-btn');
const burgerBtn = document.querySelector('.burger-btn');

burgerBtn.addEventListener('click', () => {
  mobileMenu.classList.add('is-visible');
  burgerBtn.classList.add('is-hidden');
  closeBtn.classList.add('is-visible');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('is-visible');
  burgerBtn.classList.remove('is-hidden');
  closeBtn.classList.remove('is-visible');
});

menuList.addEventListener('click', (target) => {
  if (target.target.nodeName === 'A') {
    mobileMenu.classList.remove('is-visible');
    burgerBtn.classList.remove('is-hidden');
    closeBtn.classList.remove('is-visible');
  }
});
