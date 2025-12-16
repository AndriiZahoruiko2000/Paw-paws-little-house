const mobileMenu = document.querySelector('.mobile-menu');
const menuList = document.querySelector('.menu-items-list');
const closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('is-visible');
});
menuList.addEventListener('click', (target) => {
  if (target.target.nodeName === 'A') {
    console.log(target.target);
    mobileMenu.classList.remove('is-visible');
}})