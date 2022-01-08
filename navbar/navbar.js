const hamburgerBtn = document.querySelector('.navbar__hamburgerMenu');
const navMenu = document.querySelector('.navbar__menu');
const socialIcons = document.querySelector('.navbar__icons');

hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    socialIcons.classList.toggle('active');
});